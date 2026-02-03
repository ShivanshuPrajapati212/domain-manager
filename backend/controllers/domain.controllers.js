const Domain = require("../models/Domain.js")

const addDomain = async (req, res) => {
    try {
        const {email, domain, subdomains, expiryDate, status, provider} = req.body

        if (!email || !domain || !expiryDate) {
            return res.status(400).json({error: "Email, Domain, Expiry Data not provieded"})
        }
        
        const exitingDomain = await Domain.findOne({domain})
        if (exitingDomain) {
            return res.status(400).json({error: "Domain already exists"})
        }

        const newDomain = await Domain.create({domain, email, subdomains, expiryDate, status, provider})


       return res.status(200).json({domainObj: newDomain}) 
    } catch (error) {
        console.log(error);
    }
};

const getAllDomains = async (req, res) => {
    try {
        const domains = await Domain.find({})
        if (!domains) {
            return res.status(400).json({error: "Domains not found"})
        }
        return res.status(200).json({domains})
    } catch (error) {
       console.log(error) 
    }
}

module.exports = {addDomain, getAllDomains}
