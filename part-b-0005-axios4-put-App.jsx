import { useEffect } from 'react'
import './App.css'
import axios from 'axios'

const MAIN_URL = "http://localhost:3000"

function App() {

  // update user => put

  const updateUser = async (id, updatedData) => {

    await axios.put(`${MAIN_URL}/fake_data/${id}`, updatedData)
  }


  // add user => post

  const postUser = async (newUser) => {

    const response = await axios.post(`${MAIN_URL}/fake_data`, newUser)

    console.log(response.data)
  }

  const getUserData = async () => {

    const response = await axios.get(`${MAIN_URL}/fake_data`)

    console.log(response.data)
  }


  const getUserDataByID = async (id) => {

    const response = await axios.get(`${MAIN_URL}/fake_data/${id}`)

    console.log(response.data)
  }


  useEffect(() => {

    updateUser("4296", {"name": "Aydın Uçamaz"}) // now we want to update name

  }, [])


  return (
    <>
      
    </>
  )
}

export default App
