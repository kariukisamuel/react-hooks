import React, {useState,createContext} from 'react'
import Search from './Search'
import Results from './Results'

export const SearchContext = createContext(null)

const ContextHook = () => {
    const [searchTerm, setResult] = useState()
    return (
        <SearchContext.Provider className="card" value={{searchTerm ,setResult}}>
            <h3>Use ContextHook Example</h3>
            <Search/>
            <Results/>            
        </SearchContext.Provider>
    )
}

export default ContextHook
