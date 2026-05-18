"use client";

import { TimelineContext } from "@/context/TimelineProvider";
import { useContext } from "react";
import { Legend, Pie, PieChart, Tooltip } from "recharts";

const StatsPage = () => {
  const data = [
    { name: "Call", value: 200, fill: "#7E35E1" },
    { name: "Text", value: 300, fill: "#244D3F" },
    { name: "Video", value: 300, fill: "#37A163" },
  ];

  return (
    <div className="min-h-screen bg-base-300">
      <div className="container mx-auto py-20 space-y-4">
        <h1 className="text-5xl font-bold">Friendship Analytics</h1>
        <div className="card container mx-auto lg:card-side bg-base-100 shadow-sm">
          <div className="card-body">
            <h2 className="font-bold text-green-900 text-xlj">
              By Interaction Type
            </h2>
            <div className="flex justify-center items-center">
              <PieChart
                style={{
                  width: "100%",
                  maxWidth: "500px",
                  maxHeight: "80vh",
                  aspectRatio: 1,
                }}
                responsive
              >
                <Pie
                  data={data}
                  innerRadius="80%"
                  outerRadius="100%"
                  // Corner radius is the rounded edge of each pie slice
                  cornerRadius="80%"
                  // padding angle is the gap between each pie slice
                  paddingAngle={5}
                  dataKey="value"
                  isAnimationActive={true}
                ></Pie>

                <Legend></Legend>
                <Tooltip></Tooltip>
              </PieChart>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsPage;
