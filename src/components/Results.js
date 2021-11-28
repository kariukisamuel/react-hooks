import React,{useContext} from 'react'
import {SearchContext } from './ContextHook'

const Results = () => {
    const {searchTerm} = useContext(SearchContext)
    return (
        <div>
            <ul className="list-group">
                <li className="list-group-item">Result is: {searchTerm}</li>
            </ul>
        </div>
    )
}



export default Results
