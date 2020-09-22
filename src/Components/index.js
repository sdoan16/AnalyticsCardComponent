import React, { useState } from "react";
import AnalyticsCard from "./AnalyticsCard";
import SearchBar from "./SearchBar";
import "./index.css";

const initialData = [
  {
    title: "Monday Bar Chart",
    values: [100, 5, 45, 3, 70, 28, 54, 32, 50, 13, 23, 24, 25],
    type: "bar",
  },
  { title: "Bar Chart 2", values: [1, 6, 3, 13], type: "bar" },
  { title: "Wednesday Line Chart ", values: [25, 36, 19, 31], type: "line" },
  { title: "Line Chart 2", values: [30, 56, 12, 4, 23], type: "line" },
  { title: "Friday", values: [2, 27, 32, 98, 23], type: "bar" },
];

const CardContainer = () => {
  const [charts, setCharts] = useState(initialData);
  return (
    <div className="cardContainer">
      <SearchBar data={initialData} setData={setCharts} />

      {charts.length > 0 ? (
        <div className="cardLayout">
          {charts.map((d) => (
            <AnalyticsCard name={d.title} data={d.values} type={d.type} />
          ))}
        </div>
      ) : (
        <div className="noResults">No Matching Charts</div>
      )}
    </div>
  );
};
export default CardContainer;
