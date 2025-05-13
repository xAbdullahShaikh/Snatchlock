// components/Sidebar.tsx

import Link from "next/link";
import { FaHome, FaUser, FaBell, FaChartBar } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="w-64 h-full bg-gray-800 text-white p-6">
      <h2 className="text-2xl font-bold mb-6">SnatchLock</h2>
      <nav>
        <ul>
          <li className="mb-4">
            <Link href="/dashboard" className="flex items-center space-x-3 hover:text-cyan-400">
              <FaHome />
              <span>Dashboard</span>
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/alerts" className="flex items-center space-x-3 hover:text-cyan-400">
              <FaBell />
              <span>Alerts</span>
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/user" className="flex items-center space-x-3 hover:text-cyan-400">
              <FaUser />
              <span>User Management</span>
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/analytics" className="flex items-center space-x-3 hover:text-cyan-400">
              <FaChartBar />
              <span>Analytics</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
