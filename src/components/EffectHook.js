import {useState, useEffect} from 'react'

const EffectHook = () => {
  const [users,setUsers] = useState([])
  useEffect(() => {

    const fetchUsers = async() => {
      let requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      const res = await fetch("https://jsonplaceholder.typicode.com/users", requestOptions)
      const users = await res.json()
      setUsers(users)
    }
    fetchUsers()
  }, [])

  return (
    <div className="card p-5 m-2">
      <h3 className="py-2">UseEffect Hook Example</h3>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
            {
            users.map((user,index) =>(  
                 index < 5 &&      
                    <tr key={index}>
                        <th scope="row">{user.id}</th>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                    </tr>
            ))
            }

        </tbody>
      </table>
    </div>
  )
}

export default EffectHook
