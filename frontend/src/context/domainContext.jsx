import axios from "axios";
import { createContext, useContext, useState } from "react"
import { BACKEND_URL } from "../helper/backendUrl";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const DomainContext = createContext() 

export const DomainProvider = ({children}) => {
    const [domains, setDomains] = useState(null)
    const [error, setError] = useState(null)
    const navigate = useNavigate()

    useEffect(()=> {
        const token = localStorage.getItem("token")
        if (!token) {
           navigate("/") 
        }
        
        const setup = async () => { await getAllDomains(token)}

        setup()
    }, [])

    const getAllDomains = async (token) => {
       try {
           const res = await axios.get(BACKEND_URL.concat("domain/getAllDomains"), {
            headers: {
                'Authorization': `Bearer ${token}`
            }}) 
            setDomains(res.data.domains) 
           setError(null)
        } catch (error) {
           setError(error.response.data.error) 
        } 
    }

    const addDomain = async (token, domain, email, provider, status, expiryDate, subdomains) => {
        try {
            const res = await axios.post(BACKEND_URL.concat("domain/addDomain"), {
                domain,
                email, 
                provider,
                status: status==="Expired"?false:true,
                expiryDate: expiryDate,
                subdomains: subdomains.split(",")
            }, {
                headers: {
                    'Authorization': `Bearer ${token}`
                },
            })   
            await getAllDomains(token)
        } catch (error) {
           setError(error.response.data.error) 
        }
    }

    return <DomainContext.Provider value={{domains, error, setError, getAllDomains, addDomain}}>{children}</DomainContext.Provider>
}

export const useDomain = () => useContext(DomainContext)
