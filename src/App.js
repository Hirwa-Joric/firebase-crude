import { useState, useEffect } from 'react'
import './App.css'
import { db } from './firebase'
import { collection, getDocs } from 'firebase/firestore'

function App() {
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
      
      <input type="text" placeholder='name' />
      <input type="number" placeholder='age' />
      <button>Create User</button>
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
