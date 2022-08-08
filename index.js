// CREDIT: https://github.com/Senither/hypixel-skyblock-facade (Modified)
// CREDIT: https://github.com/Altpapier/SkyHelperAPI 
//
// THIS IS MODIFIED VERSION OF OFFICIAL SKYHELPER API
// THIS VERSION USES FUNCTIONS TO GET DATA INSTEAD OF WEB API
//
// 
const { getFetchur } = require('./functions/fetchur')
const { getProfile } = require('./functions/profile')
const { getProfiles } = require('./functions/profiles')
const refreshCollections = require('./data/refreshCollections')
const refreshPrices = require('./data/refreshPrices')

process.on('uncaughtException', (error) => console.log(error))
process.on('unhandledRejection', (error) => console.log(error))

refreshCollections()
refreshPrices()

// Examples

console.log(getFetchur())

getProfile('Refraction', 'Apple').then(response => {
    console.log(response)
})

getProfiles('Refraction').then(response => {
    console.log(response)
})



