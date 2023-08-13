import React from "react";
import { PieChart, Pie, Tooltip } from "recharts";
const myData = [
  { name: "Income", value: 900 },
  { name: "Expense", value: 400 },
];
const Dashboard = () => {
  return (
    <>
      <PieChart width={600} height={600}>
        <Pie
          dataKey="value"
          isAnimationActive={true}
          data={myData}
          outerRadius={200}
          fill="orangered"
          label
        />

        {/* Display the tooltips */}
        <Tooltip />
      </PieChart>
    </>
  );
};

export default Dashboard;
