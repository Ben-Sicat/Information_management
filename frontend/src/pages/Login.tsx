import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const Login = () => {
    const[username, setUsername] = useState('')
    const[password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        axios.post('/Login', {username, password})// change endpoint to the endpoint of the REST API
            .then(response=>{
                const token = response.data.token
                localStorage.setItem('token', token)
                window.location.href = '/Dashboard'
            })
            .catch(err=>{
                setError(err.response.data.msg)
                setTimeout(() => {
                    setError('')
                }, 5000)
            })
    }

  
  return (
    <div className="login"/>
  )
}

export default Login