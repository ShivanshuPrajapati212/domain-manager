import { useState } from "react";


const Modal = () => {
    const [domain, setDomain] = useState(null)
    const [email, setEmail] = useState(null)
    const [subdomains, setSubdomains] = useState(null)
    const [provider, setProvider] = useState(null)
    const [expiryDate, setExpiryDate] = useState(null)
    const [status, setStatus] = useState(null)
    const [error, setError] = useState(null)


    const domainHandler = () => {}

    return (
        <dialog id="my_modal_2" className="modal">
          <div className="modal-box flex flex-col gap-4 items-center justify-center">
            <h3 className="font-bold text-2xl">Add Domain</h3>
            <form className="flex flex-col gap-4 items-center justify-center" onSubmit={domainHandler} >
                <label className="input">
                    <span className="label">Domain</span>
                    <input type="text" name="domain" value={domain} onChange={(e)=> setDomain(e.target.value) } required/> 
                </label>
                <label className="input">
                    <span className="label">Email</span>
                    <input type="email" name="email" value={email} onChange={(e)=> setEmail(e.target.value) } required/> 
                </label>
                <label className="input">
                    <span className="label">Provider</span>
                    <input type="text" name="provider" value={provider} onChange={(e)=> setProvider(e.target.value) } required/> 
                </label>
                <label className="input">
                    <span className="label">Expiry Date</span>
                    <input type="date" name="expiryDate" value={expiryDate} onChange={(e)=> setExpiryDate(e.target.value) } required/> 
                </label>
                <label className="input">
                    <span className="label">Status</span>
                    <input type="text" name="status" value={status} placeholder="Active, Expired" onChange={(e)=> setStatus(e.target.value) } required/> 
                </label>
                <label className="input">
                    <span className="label">Subdomains</span>
                    <input type="text" name="subdomains" value={subdomains} placeholder="sub1, sub2, sub3" onChange={(e)=> setSubdomains(e.target.value) } required/> 
                </label>
                <button className="btn btn-primary w-full" type="submit" >Submit</button>
                {error && 
                    <div className="bg-error p-3 rounded w-full">Error: {error}</div>
                }
            </form>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
    )
}

export default Modal
