import React, { useState } from "react";
function NameForm() {
    const initialName = { 
        name : ""
    };
    const [nameList, setNameList] = useState(initialName);
  
    const handleChange = (event) => {
      
    };
  
    const handleSubmit = (event) => {
      const target = event.target;
      const value = target.value;
      const name = target.name;
      setNameList({ ...nameList, [name]: value });
    }
  
    return (
      <div>
        <form onChange={handleChange} onSubmit={handleSubmit}>
          <label> Tilføj person: </label>{" "}
          <input
            name="name"
            value={initialName}
            placeholder="name"
          />
          <button>Submit</button>
        </form>{" "}
      </div>
    );
  }
  export default NameForm;

  