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
    <div className="min-h-screen bg-base-300 py-10 md:py-20 px-4">
      <div className="container mx-auto py-20 space-y-4">
        <h1 className="text-3xl md:text-5xl font-bold">Friendship Analytics</h1>
        <div className="bg-base-100 rounded-2xl shadow-sm p-6">
          <div className="card-body">
            <h2 className="font-bold text-xl md:text-2xl text-green-900 mb-6">
              By Interaction Type
            </h2>
            <div className="w-full max-w-xl mx-auto aspect-square">
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
                  innerRadius={70}
                  outerRadius={120}
                  cornerRadius={10}
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
