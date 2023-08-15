import React,{createContext,useState} from "react";
import OtherCompone from "./OtherCompone";

export const appContext=createContext()

function App() {
 const [data,setData] = useState(0)
  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center" }}>
      <appContext.Provider value={{data,setData}}>

      {data}

      <OtherCompone/>

      </appContext.Provider>
    </div>
  );
}

export default App;
