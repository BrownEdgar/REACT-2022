function ShowArr(props){
    return (
        <div>
            {props.data.map((elem,index)=>{
                return <p key={index}>{elem}</p>
                
            })}
            <button onClick = {()=>props.addHandeler(2)}>add</button>
        </div>
    );
}
export default ShowArr;