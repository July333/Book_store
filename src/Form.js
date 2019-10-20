import React, { useState } from 'react';

function Form(props) {
    //props.changeNum(1);
    const [numnew, setNumnew] = useState(props.num);

    const onNumChange = () => props.changeNum(numnew);

    return (
        <div>
            <input onChange={(e) => { setNumnew(e.target.value) }} value={numnew}></input>
            <button onClick={onNumChange}>Set num</button>
        </div>
    )
  }
  
  export default Form;