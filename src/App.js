import { useState, useEffect } from 'react'
import './App.css'
import { db } from './firebase'
import { collection, getDocs } from 'firebase/firestore'

function App() {
  const [newUser, setNewUser] = useState("");
  const [newAge  , setNewUser] = useState("");

  const [users, setUsers] = useState([])
  const userCollectionRef = collection(db, 'user')

  const createUser = async () => {
    

  }

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(userCollectionRef)
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }
    getUsers()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="App">
      
      <input type="text" placeholder='name' onChange={(e)=>{e.target.value}}/>
      <input type="number" placeholder='age' />
      <button onClick={createUser}>Create User</button>
      {users.map((user) => (
        <div key={user.id}>
          <h1>{user.name}</h1>
          <h1>{user.age}</h1>
        </div>
      ))}
    </div>
  )
}

export default App
