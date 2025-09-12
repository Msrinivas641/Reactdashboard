import React, { useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Dashboard = () => {
  // Initial widgets
  const [widgets, setWidgets] = useState([
    {
      id: 1,
      title: "Cloud Accounts",
      type: "chart",
      data: [
        { name: "Connected", value: 2, color: "#1e86e2" },
        { name: "Not Connected", value: 2, color: "#e6f0fc" },
      ],
      total: 2,
    },
    {
      id: 2,
      title: "Cloud Account Risk Assessment",
      type: "chart",
      data: [
        { name: "Failed", value: 1389, color: "#d9534f" },
        { name: "Warning", value: 68, color: "#f0ad4e" },
        { name: "Not available", value: 36, color: "#999999" },
        { name: "Passed", value: 7253, color: "#5cb85c" },
      ],
      total: 9659,
    },
  ]);

  // Function to add a new widget
  const addWidget = () => {
    const newId = widgets.length + 1;
    const newWidget = {
      id: newId,
      title: `New Widget ${newId}`,
      type: "text",
      content: "This is a custom widget",
    };
    setWidgets([...widgets, newWidget]);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>CSPM Executive Dashboard</h2>
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
            }}
          >
            <h3>{widget.title}</h3>

            {widget.type === "chart" && (
              <div style={{ width: "100%", height: 250 }}>
                <ResponsiveContainer>
                  <PieChart>
                    <Pie
                      data={widget.data}
                      dataKey="value"
                      nameKey="name"
                      innerRadius={70}
                      outerRadius={100}
                      paddingAngle={2}
                    >
                      {widget.data.map((entry, i) => (
                        <Cell key={`cell-${i}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend verticalAlign="bottom" height={36} />
                  </PieChart>
                </ResponsiveContainer>
                <div
                  style={{
                    textAlign: "center",
                    marginTop: "-140px",
                    fontSize: "18px",
                  }}
                >
                  <strong>{widget.total}</strong>
                  <div>Total</div>
                </div>
              </div>
            )}

            {widget.type === "text" && (
              <p style={{ marginTop: "20px" }}>{widget.content}</p>
            )}
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
