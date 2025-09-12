import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Dashboard = () => {
  // Initial Widgets
  const [widgets, setWidgets] = useState([
    {
      id: 1,
      title: "Image Risk Assessment",
      type: "bar",
      total: 1470,
      subtitle: "Total Vulnerabilities",
      data: [
        { name: "Critical", value: 0, color: "#b71c1c" },
        { name: "High", value: 950, color: "#e53935" },
        { name: "Medium", value: 400, color: "#fbc02d" },
        { name: "Low", value: 120, color: "#ffeb3b" },
      ],
    },
    {
      id: 2,
      title: "Image Security Issues",
      type: "bar",
      total: 2,
      subtitle: "Total Images",
      data: [
        { name: "Critical", value: 2, color: "#b71c1c" },
        { name: "High", value: 4, color: "#e53935" },
        { name: "Medium", value: 6, color: "#fbc02d" },
        { name: "Low", value: 8, color: "#9e9e9e" },
      ],
    },
  ]);

  // Add Widget dynamically
  const addWidget = () => {
    const newId = widgets.length + 1;
    const newWidget = {
      id: newId,
      title: `New Widget ${newId}`,
      type: "bar",
      total: 0,
      subtitle: "Custom Data",
      data: [
        { name: "Critical", value: 0, color: "#b71c1c" },
        { name: "High", value: 0, color: "#e53935" },
        { name: "Medium", value: 0, color: "#fbc02d" },
        { name: "Low", value: 0, color: "#9e9e9e" },
      ],
    };
    setWidgets([...widgets, newWidget]);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Registry Scan</h2>
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
            }}
          >
            <h3>{widget.title}</h3>
            <p style={{ fontWeight: "bold" }}>
              {widget.total} <span style={{ fontWeight: "normal" }}>{widget.subtitle}</span>
            </p>

            {/* Horizontal stacked bar chart */}
            <div style={{ width: "100%", height: 100 }}>
              <ResponsiveContainer>
                <BarChart
                  layout="vertical"
                  data={widget.data}
                  margin={{ top: 10, right: 20, left: 20, bottom: 10 }}
                >
                  <XAxis type="number" hide />
                  <YAxis type="category" dataKey="name" hide />
                  <Tooltip />
                  <Legend />
                  {widget.data.map((entry, i) => (
                    <Bar
                      key={i}
                      dataKey="value"
                      stackId="a"
                      fill={entry.color}
                      isAnimationActive={false}
                    />
                  ))}
                </BarChart>
              </ResponsiveContainer>
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
