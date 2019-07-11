import React, { useContext } from "react";
import { Graph } from "@qlue-ui/react-component/dist/Graph";
import { SwapiContext } from "../Context";

export default function LineGraph() {
  const { state } = useContext(SwapiContext);

  const lineChart = {
    LINE: [{ dataKey: "height", strokeDasharray: "5 5" }, { dataKey: "mass" }]
  };

  return (
    <div>
      {state.data.results && (          
        <>
          <Graph
            className="default-font"
            width={"100%"}
            height={500}
            margin={{ top: 80, right: 10, bottom: 10, left: 10 }}
            data={state.data.results}
            chart={lineChart}
          />
          
        </>
      )}
    </div>
  );
}
