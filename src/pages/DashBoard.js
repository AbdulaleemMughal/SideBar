import Circles from "../components/Circles";
import Controls from "../components/Controls";
import { COLOR } from "../utils/constraint";
import { useState } from "react";

const Dashboard = () => {
  const [circle, setCircle] = useState([]);
  const [history, setHistory] = useState([]);

  const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * COLOR.length);
    return COLOR[randomIndex];
  };

  const handleClick = (e) => {
    setCircle((prev) => {
      return [
        ...prev,
        {
          x: e.clientX,
          y: e.clientY,
          id: +new Date(),
          bgColor: getRandomColor(),
        },
      ];
    });
  };

  const handleUndo = () => {
    const copy = [...circle];
    const lastCircle = copy.pop();

    setHistory((prev) => [...prev, lastCircle]);
    setCircle(copy);
  };

  const handleRedo = () => {
    const copy = [...history];
    const lastCircle = copy.pop();

    setCircle((prev) => [...prev, lastCircle]);
    setHistory(copy);
  };

  const handleReset = () => {
    setCircle([]);
    setHistory([]);
  };

  return (
    <div className="board" onClick={handleClick}>
      <Circles circle={circle} />
      <Controls
        onUndo={handleUndo}
        onRedo={handleRedo}
        onReset={handleReset}
        hasCircle={circle.length > 0}
        hasHistory={history.length > 0}
      />
    </div>
  );
};

export default Dashboard;
