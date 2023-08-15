import React, { useContext } from 'react'; 
import { appContext } from './App';

function OtherCompone() {
  const { data, setData } = useContext(appContext);

  return (
    <div>
      <button onClick={()=>setData(data +1)}>
        Increment
      </button>

      <button onClick={()=>setData(data-1)}>
        Decrement
      </button>
      
    </div>
  );
}

export default OtherCompone 

