const Circle = ({ 
    x, 
    y, 
    bgColor 
}) => {
  return <div
   className="circle" 
   style={{ 
    backgroundColor: bgColor,
    top: `${y}px`,
    left: `${x}px`
}}
   >

   </div>;
};

const Circles = ({ circle }) => {
  return circle.map((circle) => {
    return <Circle key={circle.id} {...circle}></Circle>;
  });
};

export default Circles;
