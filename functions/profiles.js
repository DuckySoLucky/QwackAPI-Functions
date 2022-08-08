//CREDIT: https://github.com/Senither/hypixel-skyblock-facade (Modified)
const { isUuid } = require('../utils/uuid');
const { parseHypixel, parseProfiles } = require('../utils/hypixel');
const config = require('../config.json');
const axios = require('axios');

async function getProfiles(uuid) {
    if (!isUuid(uuid)) {
        try {
        const mojang_response = await axios.get(`https://api.ashcon.app/mojang/v2/user/${uuid}`)//.catch(error => {console.log(error)})
            if (mojang_response?.data?.uuid) {
                uuid = mojang_response.data.uuid.replace(/-/g, '');
            }
        } catch (error) {
            return error.response.data
        }
    }

    const playerRes = await axios.get(`https://api.hypixel.net/player?key=${config.apiKey}&uuid=${uuid}`);
    const player = parseHypixel(playerRes, uuid);

    const profileRes = await axios.get(`https://api.hypixel.net/skyblock/profiles?key=${config.apiKey}&uuid=${uuid}`);
    const profile = await parseProfiles(player, profileRes, uuid);

    return profile
}

module.exports = { getProfiles }
