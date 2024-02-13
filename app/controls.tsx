import { useState } from "react";
import Select from "react-select";

const Controls = ({sortFunction}) => {
  const fieldOptions = [
    { label: "Name", value: "name" },
    { label: "Company", value: "company" },
    { label: "Email", value: "email" },
  ];
  const directionOptions = [
    { label: "Ascending", value: "ascending" },
    { label: "Descending", value: "descending" },
  ];

  const [field, setField] = useState("name")
  const [direction, setDirection] = useState("ascending")
  

  return (
    <div className="gallery-controls controls">
      <div className="form-group group">
        <label htmlFor="sort-field" className="label">
          Sort Field
        </label>
        <Select options={fieldOptions} inputId="sort-field" className="input" onChange={(value)=>{
          setField(value!.value);
          sortFunction(value!.value, direction)
        }}/>
      </div>
      <div className="form-group group">
        <label htmlFor="sort-direction" className="label">
          Sort Direction
        </label>
        <Select
          options={directionOptions}
          inputId="sort-direction"
          className="input"
          onChange={(value)=>{ 
            setDirection(value!.value);
            sortFunction(field, value!.value)
          }}
        />
      </div>
    </div>
  );
};

export default Controls;
