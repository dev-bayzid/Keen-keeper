"use client";

import { TimelineContext } from "@/context/TimelineProvider";
import { useContext } from "react";
import { Cell, Legend, Pie, PieChart, Tooltip } from "recharts";

const StatsPage = () => {
  const { timeline } = useContext(TimelineContext);

  const chartData = Object.values(
    timeline.reduce((acc, item) => {
      acc[item.type] = acc[item.type] || { name: item.type, value: 0 };

      acc[item.type].value += 1;

      return acc;
    }, {}),
  );

  const COLOR_MAP = {
    Call: "#7E35E1",

    Text: "#244D3F",

    Video: "#37A163",
  };

  if (!timeline || timeline.length === 0) {
    return (
      <div className="min-h-screen bg-base-300 flex items-center justify-center px-4">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold text-gray-700">No Data Found</h2>
          <p className="text-gray-500">
            Start adding interactions to see your analytics.
          </p>
        </div>
      </div>
    );
  }

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
                  data={chartData}
                  innerRadius={70}
                  outerRadius={120}
                  cornerRadius={10}
                  // padding angle is the gap between each pie slice
                  paddingAngle={5}
                  dataKey="value"
                  isAnimationActive={true}
                >
                  {chartData.map((entry) => (
                    <Cell key={entry.name} fill={COLOR_MAP[entry.name]} />
                  ))}
                </Pie>

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
