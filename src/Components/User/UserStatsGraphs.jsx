import { useEffect, useState } from "react";
import style from "./UserStatsGraphs.module.css";
import { VictoryPie, VictoryChart, VictoryBar } from "victory";
 

const UserStatsGraphs = ({ data }) => {
  const [graph, setGraph] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const graphData = data.map((item) => {
      return {
        x: item.title,
        y: Number(item.acessos),
      };
    });
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTotal(
      data.map(({ acessos }) => Number(acessos)).reduce((a, b) => a + b, 0),
    );
    setGraph(graphData);
  }, [data]);

  return (
    <section className={`${style.graph} animeLeft`}>
      <div className={`${style.total} ${style.graphItem}`}>
        <p>Acessos: {total}</p>
      </div>
      <div className={`${style.graphItem}`}>
        <VictoryPie
          innerRadius={50}
          padding={{ top: 20, bottom: 20, left: 80, right: 80 }}
          style={{
            data: {
              fillOpacity: 0.9,
              stroke: "#fff",
              strokeWidth: 2,
            },
            labels: {
              fontSize: 14,
              fill: "#333",
            },
          }}
          data={graph}
        />
      </div>
      <div className={`${style.graphItem}`}>
        <VictoryChart>
          <VictoryBar alignment="start" data={data}></VictoryBar>
        </VictoryChart>
      </div>
    </section>
  );
};

export default UserStatsGraphs;
