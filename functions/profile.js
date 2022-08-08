//CREDIT: https://github.com/Senither/hypixel-skyblock-facade (Modified)
const { isUuid } = require('../utils/uuid');
const { parseHypixel, parseProfile } = require('../utils/hypixel');
const config = require('../config.json');
const axios = require('axios');

async function getProfile(uuid, profileid) {
    if (!isUuid(uuid)) {
        const mojang_response = await axios.get(`https://api.ashcon.app/mojang/v2/user/${uuid}`);
        if (mojang_response?.data?.uuid) {
            uuid = mojang_response.data.uuid.replace(/-/g, '');
        }
    }

    const playerRes = await axios.get(`https://api.hypixel.net/player?key=${config.apiKey}&uuid=${uuid}`);
    const player = parseHypixel(playerRes, uuid);

    const profileRes = await axios.get(`https://api.hypixel.net/skyblock/profiles?key=${config.apiKey}&uuid=${uuid}`);
    const profile = await parseProfile(player, profileRes, uuid, profileid);

    return profile
}

module.exports = { getProfile }