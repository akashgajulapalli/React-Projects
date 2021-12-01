import React, { useEffect, useState } from "react";
import rgbToHex from "./rgbToHex";

const SingleColor = (props) => {
  const { color, index } = props;
  const { rgb, weight } = color;
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(",");
  const hex = rgbToHex(...rgb);

  const handleClick =() => {
      setAlert(true);
      navigator.clipboard.writeText(hex);
  }

  useEffect(() => {
      const timeOut = setTimeout(() => {
          setAlert(false);
      },3000)
      return () => clearTimeout(timeOut)
  },[alert]) 

  return (
    <article
      className={`color ${index > 10 && "color-light"}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
      onClick = {handleClick}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hex}</p>
      {alert ? <p className="alert">Copied to clipboard</p> : null}
    </article>
  );
};

export default SingleColor;
