import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Menu from "./components/Menu";
import User from "./components/User";
import List from "../Course/List";
import "./Dashboard.css";

const Dashboard = () => {
  const [user, setUser] = useState("Null");
  const [panel, setPanel] = useState("user");
  const fetchUserData = async () => {
    try {
      const accessToken = localStorage.getItem("accessToken");
      if (!accessToken) {
        // Handle case where the user is not authenticated
        console.error("User is not authenticated");
        return;
      }

      const response = await fetch("http://127.0.0.1:8000/api/v1/student/", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (response.ok) {
        const result = await response.json();
        setUser(result);
        console.log("user fetched", user);
      } else {
        console.error("Failed to fetch user data:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };
  useEffect(() => {
    fetchUserData();
  }, []);

  const handlePanelChange = (opt) => {
    setPanel(opt);
  };
  return (
    <>
      <Header userName={user.student_name} />
      <Menu changePanel={handlePanelChange} />
      <div className="panel-container">
        {/* {panel === "user" && <User />} */}
        {panel === "courses" && <List />}
      </div>
    </>
  );
};

export default Dashboard;
