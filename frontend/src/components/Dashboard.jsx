import Modal from "../components/Modal";
import { useDomain } from "../context/domainContext";

const Dashboard = () => {
    const {domains, error, setError} = useDomain()

    console.log(domains)
   return (
        <div className="flex flex-col py-10">
            <div className="flex items-center justify-around gap-10">
                <h2 className="text-3xl text-primary font-bold">Your Domains</h2>
                <button className="btn btn-primary" onClick={()=>document.getElementById('my_modal_2').showModal()}>Add Domain</button>
            </div>
            {error && <div role="alert" id="error" className="flex alert alert-error justify-between container mx-auto  alert-vertical sm:alert-horizontal">
              <span>{error}</span>
                <button className="btn btn-sm btn-secondary" onClick={()=> {setError(null)}}>Close</button>
            </div>}
            <div className="grid grid-cols-2 gap-4 justify-around container mx-auto px-20 py-10">
                {domains && domains.map((e)=> {
                    return(
                        <div className="card card-border h-full bg-base-300" key={e._id}>
                            <div className="card-body flex gap-2 relative">
                                <div className="flex flex-col">
                                <div className="text-2xl font-bold">{e.domain}</div> 
                                <div className="text-md text-neutral-content font-medium">{e.email}</div>
                                </div>
                                {e.subdomains.length !=  0 && <div className="flex gap-2 items-center">Subdomains: {e.subdomains.map((e, i) => {return <span key={i} className="btn btn-sm btn-secondary">{e}</span>})}</div>}
                                <div className="text-md font-medium">Status: {e.status == true
                                        ? <span className="text-success font-black">Active</span>
                                        : <span className="text-red font-black">Expired</span>
                                }</div>
                                <div className="text-md text-neutral-content font-medium">Provider: <span className="font-black">{e.provider}</span></div>

                                <div className="text-xs text-neutral-content absolute bottom-3 right-3">Expiry: {e.expiryDate.slice(0, 10)}</div>
                            </div>
                        </div>
                    )
                })}
                {domains === null || domains.length == 0 ? <div className="text-lg">No Domains found, Add one.</div>: ''}
            </div>
            <Modal/>
        </div>
   ) 
}

export default Dashboard
