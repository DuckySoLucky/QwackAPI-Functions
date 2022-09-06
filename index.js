// ! ORIGINAL SRC: https://github.com/Altpapier/SkyHelperAPI 
//
// ! MODIFIED SRC: https://github.com/DuckySoLucky/QwackAPI
//
// ? THIS IS MODIFIED VERSION OF OFFICIAL SKYHELPER API
// * THIS VERSION USES FUNCTIONS TO GET DATA INSTEAD OF HAVING TO HOST AN API
//

const { getFetchur } = require('./API/functions/getFetchur');
const { getBingo } = require('./API/functions/getBingoProfile')
const { getProfileParsed } = require('./API/functions/getProfileParsed');

const refreshAuctions = require('./API/data/refreshAuctions')
const refreshCollections = require('./API/data/refreshCollections')
const refreshPrices = require('./API/data/refreshPrices')

process.on('uncaughtException', (error) => console.log(error))
process.on('unhandledRejection', (error) => console.log(error))

refreshAuctions();
refreshCollections()
refreshPrices()

// ? Examples

console.log(getFetchur())

getProfileParsed('Refraction', 'Apple').then(console.log)

getBingo('Refraction').then(console.log)




