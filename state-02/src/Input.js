import { useState } from "react";

export const Input = () => {
  const [name, setName] = useState("Abcd");

  const onChangeName = (event) => {
    const newValue = event.target.value;
    setName(newValue);
  };

  return (
    <div>
      <input placeholder="Name" value={name} onChange={onChangeName} />
      {/* <button onClick={() => setName("Aravind")}>Change Name</button> */}
    </div>
  );
};

// React controlled inputs
