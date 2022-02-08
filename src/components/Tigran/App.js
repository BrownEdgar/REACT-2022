import React, {useState} from 'react';
import ShowArr from "./ShowArr";

export default function App() {
    const [value,setValue] = useState(["React.js", "props", "state"])

    const addHandeler = (index) => {
        let copy = [...value];
        copy.splice(index,1)
        setValue(copy)

    }
  return <div>
      <ShowArr data = {value} addHandeler={addHandeler}/>
  </div>;
}

