import React, { useState } from "react";
import Card from './Card';
import Cwpp from './Cwpp';
import Registry from './Registry';

const DashboardHeader = () => {
  const [timeRange, setTimeRange] = useState("Last 2 days");
  const [widgets, setWidgets] = useState([]);

  const addWidget = () => {
    const newId = widgets.length + 1;
    setWidgets([...widgets, { id: newId, title: `Widget ${newId}` }]);
  };

  return (
    <div style={{ background: "#f5f7fa", padding: "10px 20px" }}>
      {/* Breadcrumb */}
      
      {/* Header Row */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Title */}
        <p style={{ margin: 0 ,font:20 }}>CNAPP Dashboard</p>

        {/* Search + Actions */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          {/* Search */}
          

          {/* Add Widget */}
          <button
            onClick={addWidget}
            style={{
              padding: "6px 12px",
              background: "#fff",
              border: "1px solid #ccc",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            + Add Widget
          </button>

          {/* Time Range Dropdown */}
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            style={{
              padding: "6px 12px",
              border: "1px solid #ccc",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            <option>Last 1 day</option>
            <option>Last 2 days</option>
            <option>Last 7 days</option>
            <option>Last 30 days</option>
          </select>
        </div>
      </div>

      {/* Render Dynamic Widgets Below */}
      <div style={{ marginTop: "20px", display: "grid", gap: "20px" }}>
        {widgets.map((widget) => (
          <div
            key={widget.id}
            style={{
              background: "#fff",
              borderRadius: "12px",
              padding: "16px",
              boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
            }}
          >
            <h3>{widget.title}</h3>
            <p>Dynamic widget content...</p>
          </div>
        ))}
      </div>

      <Card/>
      <Cwpp/>
      <Registry/>
      
      
    </div>
  );
};


export default DashboardHeader;
