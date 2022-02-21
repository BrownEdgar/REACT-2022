import React from 'react';

 function ShowArray(props) {
  return <div>
        {props.data.map((elem,index)=> {
            return <h1 key={index}>{elem}</h1>
        })}
  </div>;
}
export default ShowArray
