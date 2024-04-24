import { useState } from "react";
function Count()
{
   const [count,setCount]=useState(0)
   return(<div style={{border:"1px solid ",margin:"200px",padding:"100px",backgroundColor:"teal", borderRadius:"50px"}}>
      <h1>Counter</h1>
      <h2>{count}</h2>
      <button style={{margin:"20px",backgroundColor:"green",padding:"10px 20px",borderRadius:"10px",color:"whitesmoke"}} onClick={()=>setCount(count+1)}>Increment</button>
      <button style={{margin:"20px",backgroundColor:"red",padding:"10px 20px",borderRadius:"10px",color:"whitesmoke"}} disabled={count===0}  onClick={()=>setCount(count-1)}>Decrement</button>
      <button style={{margin:"20px",backgroundColor:"yellow",padding:"10px 20px",borderRadius:"10px"}} onClick={()=>setCount(0)}>Reset</button>

 
   </div>)
}
export default Count;