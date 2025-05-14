// pages/dashboard.tsx

import { useState, useEffect } from "react";
import DashboardLayout from "../components/dashboardLayout";

const Dashboard = () => {
  const [alerts, setAlerts] = useState([]);
  const [seriousAlerts, setSeriousAlerts] = useState([]);

  useEffect(() => {
    // Mock alert data
    const mockAlerts = [
      { id: 1, type: "Info", message: "Normal activity detected", level: "low" },
      { id: 2, type: "Warning", message: "Suspicious behavior detected", level: "medium" },
      { id: 3, type: "Critical", message: "Attempted robbery detected", level: "high" },
    ];

    setAlerts(mockAlerts);

    // Filter serious alerts
    setSeriousAlerts(mockAlerts.filter(alert => alert.level === "high"));
  }, []);

  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold mb-6">Monitoring Dashboard</h1>
      
      <div className="mb-6">
        <h2 className="text-xl font-semibold">Recent Alerts</h2>
        <ul className="space-y-4 mt-4">
          {alerts.map((alert) => (
            <li
              key={alert.id}
              className={`p-4 rounded-md ${
                alert.level === "high" ? "bg-red-600" : alert.level === "medium" ? "bg-yellow-500" : "bg-green-500"
              }`}
            >
              <h3 className="text-lg font-medium">{alert.type}</h3>
              <p>{alert.message}</p>
            </li>
          ))}
        </ul>
      </div>
      
      <div>
        <h2 className="text-xl font-semibold mb-4">Serious Alerts (To Notify LEA)</h2>
        <ul className="space-y-4">
          {seriousAlerts.length > 0 ? (
            seriousAlerts.map((alert) => (
              <li key={alert.id} className="p-4 bg-red-600 text-white rounded-md">
                <h3 className="text-lg font-medium">{alert.type}</h3>
                <p>{alert.message}</p>
              </li>
            ))
          ) : (
            <p>No serious alerts at the moment.</p>
          )}
        </ul>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
