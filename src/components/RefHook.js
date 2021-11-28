import {useRef,useState} from 'react'

const RefHook = () => {
  const [selected,changeSelect] = useState(null)  
  const selectRef = useRef(null)
  const displaySelection = (e) => {
      changeSelect(e.target.value) 
  }     

  return (
    <div className="card p-5">
      <h3>UseRef Example</h3>  
      <div className="input-group ">
        <select className="form-control" ref={selectRef} onChange={displaySelection}>
          <option >Choose...</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>

        <div className="input-group-append">
          <button className="btn btn-outline-secondary" type="button">Button</button>
        </div>
      </div>
      <p className="py-3">Cuurent Selected Value is:{selected}</p>
    </div>
  )
}

export default RefHook
