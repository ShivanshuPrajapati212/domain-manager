import { useDomain } from "../context/domainContext";

const Dashboard = () => {
    const {domains} = useDomain()

    console.log(domains)
   return (
        <div className="flex flex-col py-10">
            <div className="flex items-center justify-around gap-10">
                <h2 className="text-2xl text-primary font-bold">Your Domains</h2>
                <button className="btn btn-primary">Add Domain</button>
            </div>
            <div className="grid grid-cols-2 gap-4 justify-around container mx-auto px-20 py-10">
                {domains && domains.map((e)=> {
                    return(
                        <div className="card h-full bg-base-300">
                            <div className="card-body flex gap-2 relative">
                                <div className="flex flex-col">
                                <div className="text-2xl font-bold">{e.domain}</div> 
                                <div className="text-md text-neutral-content font-medium">{e.email}</div>
                                </div>
                                {e.subdomains.length !=  0 && <div className="flex gap-2 items-center">Subdomains: {e.subdomains.map(e => {return <span className="btn btn-sm btn-secondary">{e}</span>})}</div>}
                                <div className="text-md font-medium">Status: {e.status == true
                                        ? <span className="text-success font-bold">Active</span>
                                        : <span className="text-red font-bold">Expired</span>
                                }</div>

                                <div className="text-sm text-neutral-content absolute bottom-3 right-3">Expiry: {e.expiryData.slice(0, 10)}</div>
                            </div>
                        </div>
                    )
                })}

            </div>
        </div>
   ) 
}

export default Dashboard
