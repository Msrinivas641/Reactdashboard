import React, { useState } from "react";
import { FiBarChart2 } from "react-icons/fi"; // Chart icon

const Dashboard = () => {
  // Initial widget state
  const [widgets, setWidgets] = useState([
    {
      id: 1,
      title: "Top 5 Namespace Specific Alerts",
      type: "empty",
    },
    {
      id: 2,
      title: "Workload Alerts",
      type: "empty",
    },
  ]);

  // Function to add new widget dynamically
  const addWidget = () => {
    const newId = widgets.length + 1;
    const newWidget = {
      id: newId,
      title: `New Widget ${newId}`,
      type: "empty",
    };
    setWidgets([...widgets, newWidget]);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Alerts Dashboard</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        {widgets.map((widget) => (
          <div
            key={widget.id}
            style={{
              background: "#fff",
              borderRadius: "12px",
              padding: "16px",
              boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
              textAlign: "center",
              minHeight: "200px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h3 style={{ marginBottom: "20px" }}>{widget.title}</h3>

            {/* Empty widget placeholder */}
            <div style={{ textAlign: "center", color: "#999" }}>
              <FiBarChart2 size={40} />
              <p>No Graph data available!</p>
            </div>
          </div>
        ))}

        {/* Add Widget Card */}
        <div
          onClick={addWidget}
          style={{
            background: "#f8f9fa",
            border: "2px dashed #ccc",
            borderRadius: "12px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            minHeight: "200px",
          }}
        >
          <span style={{ color: "#666", fontWeight: "bold" }}>+ Add Widget</span>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
