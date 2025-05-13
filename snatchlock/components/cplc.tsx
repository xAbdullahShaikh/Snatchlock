import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function CplcRegistrationForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    fatherOrHusbandName: "",
    contactNo: "",
    email: "",
    residentialNo: "",
    nic: "",
    province: "",
    city: "",
    dob: "",
    gender: "",
    address: "",
    complaintType: "",
    incidentDetails: "",
    complaintDetails: "",
    affirm: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.affirm) {
      alert("Please affirm that all the information is correct.");
      return;
    }
    console.log("Form submitted with:", formData);
    alert("Complaint registered successfully!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 via-zinc-900 to-zinc-950 flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="w-full max-w-3xl bg-zinc-800 text-white shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center text-cyan-400">
              CPLC Complaint Registration Form
            </CardTitle>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* First Name */}
                <div>
                  <Label htmlFor="firstName" className="text-zinc-400">
                    First Name
                  </Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    type="text"
                    placeholder="Enter your first name"
                    required
                    className="bg-zinc-700 border-zinc-600 text-white"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </div>

                {/* Last Name */}
                <div>
                  <Label htmlFor="lastName" className="text-zinc-400">
                    Last Name
                  </Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    type="text"
                    placeholder="Enter your last name"
                    required
                    className="bg-zinc-700 border-zinc-600 text-white"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Father/Husband's Name */}
              <div>
                <Label htmlFor="fatherOrHusbandName" className="text-zinc-400">
                  Father/Husband's Name
                </Label>
                <Input
                  id="fatherOrHusbandName"
                  name="fatherOrHusbandName"
                  type="text"
                  placeholder="Enter name"
                  required
                  className="bg-zinc-700 border-zinc-600 text-white"
                  value={formData.fatherOrHusbandName}
                  onChange={handleChange}
                />
              </div>

              {/* Contact and Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="contactNo" className="text-zinc-400">
                    Contact No
                  </Label>
                  <Input
                    id="contactNo"
                    name="contactNo"
                    type="tel"
                    placeholder="Enter your contact number"
                    required
                    className="bg-zinc-700 border-zinc-600 text-white"
                    value={formData.contactNo}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-zinc-400">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    required
                    className="bg-zinc-700 border-zinc-600 text-white"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Residential Number */}
              <div>
                <Label htmlFor="residentialNo" className="text-zinc-400">
                  Residential Number
                </Label>
                <Input
                  id="residentialNo"
                  name="residentialNo"
                  type="text"
                  placeholder="Enter your residential number"
                  className="bg-zinc-700 border-zinc-600 text-white"
                  value={formData.residentialNo}
                  onChange={handleChange}
                />
              </div>

              {/* NIC, Province, City */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="nic" className="text-zinc-400">
                    NIC
                  </Label>
                  <Input
                    id="nic"
                    name="nic"
                    type="text"
                    placeholder="Enter your NIC"
                    required
                    className="bg-zinc-700 border-zinc-600 text-white"
                    value={formData.nic}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <Label htmlFor="province" className="text-zinc-400">
                    Province
                  </Label>
                  <Input
                    id="province"
                    name="province"
                    type="text"
                    placeholder="Enter your province"
                    className="bg-zinc-700 border-zinc-600 text-white"
                    value={formData.province}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <Label htmlFor="city" className="text-zinc-400">
                    City
                  </Label>
                  <Input
                    id="city"
                    name="city"
                    type="text"
                    placeholder="Enter your city"
                    className="bg-zinc-700 border-zinc-600 text-white"
                    value={formData.city}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Date of Birth and Gender */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="dob" className="text-zinc-400">
                    Date of Birth
                  </Label>
                  <Input
                    id="dob"
                    name="dob"
                    type="date"
                    required
                    className="bg-zinc-700 border-zinc-600 text-white"
                    value={formData.dob}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <Label className="text-zinc-400">Gender</Label>
                  <div className="flex items-center space-x-4">
                    <label>
                      <input
                        type="radio"
                        name="gender"
                        value="Male"
                        checked={formData.gender === "Male"}
                        onChange={handleChange}
                      />{" "}
                      Male
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="gender"
                        value="Female"
                        checked={formData.gender === "Female"}
                        onChange={handleChange}
                      />{" "}
                      Female
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="gender"
                        value="Other"
                        checked={formData.gender === "Other"}
                        onChange={handleChange}
                      />{" "}
                      Other
                    </label>
                  </div>
                </div>
              </div>

              {/* Address */}
              <div>
                <Label htmlFor="address" className="text-zinc-400">
                  Address
                </Label>
                <Textarea
                  id="address"
                  name="address"
                  placeholder="Enter your full address"
                  required
                  className="bg-zinc-700 border-zinc-600 text-white"
                  value={formData.address}
                  onChange={handleChange}
                />
              </div>

              {/* Complaint Type */}
              <div>
                <Label htmlFor="complaintType" className="text-zinc-400">
                  Type of Complaint
                </Label>
                <Input
                  id="complaintType"
                  name="complaintType"
                  type="text"
                  placeholder="Enter complaint type"
                  className="bg-zinc-700 border-zinc-600 text-white"
                  value={formData.complaintType}
                  onChange={handleChange}
                />
              </div>

              {/* Incident Details */}
              <div>
                <Label htmlFor="incidentDetails" className="text-zinc-400">
                  Incident Details
                </Label>
                <Textarea
                  id="incidentDetails"
                  name="incidentDetails"
                  placeholder="Provide details of the incident"
                  required
                  className="bg-zinc-700 border-zinc-600 text-white"
                  value={formData.incidentDetails}
                  onChange={handleChange}
                />
              </div>

              {/* Complaint Details */}
              <div>
                <Label htmlFor="complaintDetails" className="text-zinc-400">
                  Complaint Details
                </Label>
                <Textarea
                  id="complaintDetails"
                  name="complaintDetails"
                  placeholder="Provide your complaint in detail"
                  required
                  className="bg-zinc-700 border-zinc-600 text-white"
                  value={formData.complaintDetails}
                  onChange={handleChange}
                />
              </div>

              {/* Affirmation */}
              <div>
                <label className="flex items-center text-zinc-400 space-x-2">
                  <input
                    type="checkbox"
                    name="affirm"
                    checked={formData.affirm}
                    onChange={handleChange}
                    required
                  />
                  <span>I affirm that all the information provided is correct.</span>
                </label>
              </div>

              <CardFooter>
                <Button type="submit" className="bg-cyan-500 text-white hover:bg-cyan-600">
                  Submit Complaint
                </Button>
              </CardFooter>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
