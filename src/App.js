import "./styles.css";
import React, { useState } from "react";

const InputRadio = () => {
  const [checkedValue, setCheckedValue] = useState("赤");

  const handleChange = (e) => setCheckedValue(e.target.value);

  return (
    <div className="App">
      <p>
        現在選択されている値: <b>{checkedValue}</b>
      </p>
      <label>
        <input
          type="radio"
          value="赤"
          onChange={handleChange}
          checked={checkedValue === "赤"}
        />
      </label>
      <label>
        <input
          type="radio"
          value="青"
          onChange={handleChange}
          checked={checkedValue === "青"}
        />
      </label>
      <label>
        <input
          type="radio"
          value="黃"
          onChange={handleChange}
          checked={checkedValue === "黃"}
        />
      </label>
    </div>
  );
};

export default function App() {
  return <InputRadio />;
}
