import React,{useContext} from 'react'
import { SearchContext } from './ContextHook'


const Search = () => {
    const {setResult} = useContext(SearchContext)

    return (
        <div className='input-group mb-3'>
            <input type="text" placeholder="Search Terms" className="form-control" 
            onChange={(e)=>{
               setResult(e.target.value)
            }}/>
        </div>
    )
}  



export default Search
