import axios from "axios";
import { useState } from "react";
import { BACKEND_URL } from "../helper/backendUrl";
import { useNavigate } from "react-router-dom";

const Landing = () => {

    const [username, setUsername] = useState(null)
    const [password, setPassword] = useState(null)
    const [error, setError] = useState(null)

    const navigate = useNavigate()

    const loginHandler = async (e) => {
        e.preventDefault()
       try {
           const res = await axios.post(BACKEND_URL.concat("auth/getToken"), {username, password})
           localStorage.setItem("token", res.data.token)
           setError(null)
           navigate("/dashboard")
        } catch (error) {
            console.log(error)
           setError(error.response.data.error)
        } 
    }
    
    return (
        <div className="flex flex-col min-h-screen items-center justify-center gap-20">
            <div className="flex flex-col gap-3 items-center justify-center">
            <h1 className="text-5xl text-primary font-bold">Welcome to Domain Manager</h1> 
            
            <p className="text-xl text-semibold">The only site you need to track all your domains</p>
        </div>
            
            <form className="flex flex-col gap-8 items-center justify-center" onSubmit={loginHandler} >
               <p className="text-2xl font-semibold text-center">Login to access Dashboard</p> 
                
                <label className="input">
                    <span className="label">Username</span>
                    <input type="text" name="username" value={username} onChange={(e)=> setUsername(e.target.value) } required/> 
                </label>
                <label className="input">
                    <span className="label">Password</span>
                    <input type="password" name="password" value={password} onChange={(e)=> setPassword(e.target.value) } required/> 
                </label>
                <button className="btn btn-primary w-full" type="submit" >Login</button>
                {error && 
                    <div className="bg-error p-3 rounded w-full">Error: {error}</div>
                }
            </form>
        </div>
    )
} 

export default Landing
