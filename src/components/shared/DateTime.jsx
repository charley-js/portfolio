import React, { useState, useEffect } from "react";

const DateTime = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);
  }, []);

  return (
    <div className="absolute top-2 right-2 p-2">
      <p>{currentDateTime.toLocaleString()}</p>
    </div>
  );
};

export default DateTime;
