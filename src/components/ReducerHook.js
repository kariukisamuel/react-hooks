import {useReducer} from 'react'

const reducer = (state,action) =>{
    // console.log(state)
    console.log(typeof state.count)
    
    switch(action.type){
        case 'increment':
           return {count: state.count + 1}
        case 'decrement':
           return {count: state.count - 1}
        default:
           return state
    }       
}

const ReducerHook = () => {
    let count = { count : 1}
    const [state, dispatch] = useReducer(reducer, count);   
    return (
        <div className="card p-5">
             <h3 className="py-2 text-center">UseReducer Hook Example</h3>
            <h1 className="text-center">{state.count}</h1>
            <button className="btn btn-primary my-2" onClick={()=> dispatch({type:'increment'})}>Increment</button>
            <button className="btn btn-secondary my-2" onClick={()=> dispatch({type:'decrement'})}>Decrement</button>
        </div>
    )
}

export default ReducerHook
