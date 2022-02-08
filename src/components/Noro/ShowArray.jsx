import React from 'react';

 function ShowArray(props) {
  return <div>
        {props.data.map((elem,index)=> {
            return <p key={index}>{elem}>add</p>
        })}
  </div>;
}
export default ShowArray
