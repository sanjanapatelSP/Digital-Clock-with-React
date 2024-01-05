import { useState } from "react";

const Time = () => {

let newTime = new Date().toLocaleTimeString();
const [ctime, setCtime]=useState(newTime)

 const upTime=()=>{
  newTime = new Date().toLocaleTimeString();
  setCtime(newTime)
}

setInterval(upTime,1000)
    return (
      <div className="App">
    <h1> {ctime}</h1>
      </div>
    );
}
export default Time;


