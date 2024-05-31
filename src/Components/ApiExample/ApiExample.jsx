import React, { useState } from "react";

function ApiExample() {
  const [data, setData] = useState({
    name: "Sulav",
    age: 21,
    address: "Rambazar",
  });

  const [arrayData, setArrayData] = useState([
    { id: 1, fname: "acer", price: 10000 },
    { id: 2, fname: "lenovo", price: 20000 },

    { id: 3, fname: "hp", price: 30000 },

    { id: 4, fname: "dell", price: 40000 },

    { id: 5, fname: "predator", price: 60000 },
  ]);

  const [laptopName, setLaptopName] = useState("");
  const [laptopPrice, setLaptopPrice] = useState("");
  const [editFlag, setEditFlag] = useState(null);
  const [editValue, setEditValue] = useState("");

  const handleSubmissionLaptopData = () => {
    setArrayData((prevState) => [
      ...prevState,
      {
        id: arrayData.length + 1,
        fname: laptopName,
        price: laptopPrice,
      },
    ]);
    setLaptopName("");
    setLaptopPrice("");
  };

  const handleUpdation = (id) => {
    setArrayData((prevState) =>
      prevState.map((item) => (
         item.id === id ? { ...item, price: Number(editValue) } : item
      ))
    );
    setEditValue('');
  };
  
  return (
    <>
      <span>{data.name}</span>
      <span>{data.age}</span>
      <span>{data.address}</span>

      <div className="input-box">
        <input
          type="text"
          onChange={(event) => setData({ ...data, name: event.target.value })}
        />
        <input
          type="number"
          onChange={(event) => setData({ ...data, age: event.target.value })}
        />
        <input
          type="text"
          onChange={(event) =>
            setData({ ...data, address: event.target.value })
          }
        />
      </div>

      <div className="laptop-name">
      {arrayData?.map((item) => (
  <div key={item.id} className="single-laptop">
    <span>{item.fname}</span>
    <span>{item.price}</span>
    {item.id === editFlag ? (
      <>
        <input
          type="text"
          value={editValue}
          onChange={(event) => setEditValue(event.target.value)}
          placeholder="Enter your updated data"
        />
        {editValue.length > 1 ? (
          <button onClick={() => handleUpdation(item.id)}>Submit</button>
        ) : (
          <button disabled>Submit</button>
        )}
      </>
    ) : (
      <>
        <button onClick={() => setEditFlag(item.id)}>Edit shit</button>
      </>
    )}
  </div>
))}

      </div>
      <div className="laptop-data-change">
        <input
          type="text"
          value={laptopName}
          onChange={(event) => setLaptopName(event.target.value)}
        />
        <input
          type="text"
          value={laptopPrice}
          onChange={(event) => setLaptopPrice(event.target.value)}
        />
        <button onClick={handleSubmissionLaptopData}>Upload Data</button>
      </div>
    </>
  );
}

export default ApiExample;
