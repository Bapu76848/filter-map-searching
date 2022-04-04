import "./styles.css";
import Data from "./Data";
import { useState } from "react";

export default function App() {
  const [value, setValue] = useState("");

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Country Name..."
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      {Data.filter((item) => {
        if (value === "") {
          return (item = "");
        } else if (item.name.toLowerCase().includes(value.toLowerCase())) {
          return item;
        }
      }).map((item, index) => {
        return <h5 key={index}>{item.name}</h5>;
      })}
    </div>
  );
}
