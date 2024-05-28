import React, { useState, useEffect } from "react";

function Useeffect() {
  const [name, setName] = useState("");
  useEffect(() => {
    if (name === "") {
      const newData = window.prompt("WHat is your name? ");
      setName(newData);
    }
  }, [name]);

  return (
    <>
      <button>Click to Update</button>
      <span>Hello {name}</span>
    </>
  );
}

export default Useeffect;
