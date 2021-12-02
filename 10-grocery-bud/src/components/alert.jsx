import React, { useEffect } from "react";

const Alert = (props) => {
  const { obj, removeAlert ,list } = props;
  const { msg, type } = obj;
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 3000);
    const tempTimeOut = () => clearTimeout(timeout);
    return tempTimeOut 
  }, [list]);

  return <p className={`alert alert-${type}`}>{msg}</p>;
};

export default Alert;
