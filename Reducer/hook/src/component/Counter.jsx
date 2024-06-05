import React, { useReducer } from 'react'

const inistialstate={
   counter :0
}
function reducer(state, action)
{
   switch(action.type){
      case "Add" :{
         return{counter:state.counter +action.payload}
      }
      case "Sub" :{
         return{counter:state.counter +action.payload}
      }
   }

}
const Counter = () => {
  const[state,dispatch]=useReducer(reducer,inistialstate)
   return (
   <div>
   <h1>{state.counter}</h1>
   <button onClick={()=>dispatch({type:"Add",payload:1})}>Add</button>
   <button disabled={state.counter==0} onClick={()=>dispatch({type:"Sub",payload:-1})}>Sub</button>
   </div>
  )
}

export default Counter