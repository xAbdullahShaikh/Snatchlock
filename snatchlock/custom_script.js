

// Load environment variables from .env file
require('dotenv').config();

// Import required modules
const twilio = require('twilio');

// Load Twilio credentials from environment variables
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER;


// Initialize the Twilio client
const client = twilio(accountSid, authToken);

// Function to get the current time in a readable format
function getCurrentTime() {
  const now = new Date();
  return now.toLocaleString(); // Format: "2/23/2025, 12:34:56 PM"
}

// Function to get location details (City, Latitude, Longitude) using ip-api.com
async function getLocation() {
  try {
    const fetch = (await import('node-fetch')).default; // Dynamic import
    const response = await fetch('http://ip-api.com/json/');
    const data = await response.json();

    const city = data.city || 'Unknown City';
    const lat = data.lat || 'Unknown Latitude';
    const lon = data.lon || 'Unknown Longitude';

    return { city, lat, lon }; // Return the location data
  } catch (error) {
    console.error('Error fetching location:', error);
    return { city: 'Karachi', lat: 'Unknown', lon: 'Unknown' }; // Fallback values
  }
}

// Function to send SMS
async function sendSMS(to, message) {
  try {
    const sms = await client.messages.create({
      body: message, // The SMS message body
      from: twilioPhoneNumber, // Your Twilio phone number
      to: to, // Recipient's phone number (with country code, e.g., +1234567890)
    });

    console.log('Alert Sent!');
    console.log('Message SID:', sms.sid);
  } catch (error) {
    console.error('Error sending SMS:', error);
  }
}

// Main function to send the alert
async function sendAlert() {
  const recipientPhoneNumber = '+92 329 2252559'; // Replace with the recipient's phone number (no spaces)

  // Get real-time data
  const time = getCurrentTime();
  const { city, lat, lon } = await getLocation();

  // Generate Google Maps Link
  const googleMapsLink = `https://www.google.com/maps?q=${lat},${lon}`;

  // Construct the message
  const message = `🚨 Alert! Crime detected in location: ${city}.
📍 Coordinates: Lat: ${lat}, Lon: ${lon}
⏰ Time: ${time}.
📌 Location on Map: ${googleMapsLink}
⚠️ Urgent Action Required.`;

  // Send the SMS
  sendSMS(recipientPhoneNumber, message);
}

// Run the alert function
sendAlert();

