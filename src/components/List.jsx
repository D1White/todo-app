import React from "react";

function List({ name, color }) {

  const colorArr = ['red', 'orange', 'green', 'yellow'];
  const [activeColor, setActiveColor] = React.useState('red')
  const [colorIndex, setColorIndex] = React.useState(0);

  React.useEffect(() => {
    if (color) {
      switch (color) {
        case 'red':
          setColorIndex(0);
          break;
        case 'orange':
          setColorIndex(1);
          break;
        case 'green':
          setColorIndex(2);
          break;
        case 'yellow':
          setColorIndex(3);
          break;
        default:
          setColorIndex(0);
          break;
      }
    }
  }, [])
  

  const changeCircleCol = () => {
    if (colorIndex !== 3) {
      setColorIndex(colorIndex + 1);
    }else{
      setColorIndex(0);
    }
    // setActiveColor(colorArr[colorIndex]);
  }

  React.useEffect(() => {
    setActiveColor(colorArr[colorIndex]);
  }, [colorIndex]);


  return (
    <li className="custom-list">
      <div className={`custom-list__circle ${activeColor}`} onClick={changeCircleCol} ></div>
      <span className="custom-list__name">{name}</span>
      <span className="custom-list__success">50%</span>
    </li>
  );
}

export default List;
