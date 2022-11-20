const { isUuid } = require('../utils/uuid');
const config = require('../../config.json');
const { parseHypixel } = require('../utils/hypixel');
const axios = require('axios')

async function getLatestProfile(uuid) {
    try {
        if (!isUuid(uuid)) {
            const mojang_response = await axios.get(`https://api.ashcon.app/mojang/v2/user/${uuid}`)
            if (mojang_response?.data?.uuid) uuid = mojang_response.data.uuid.replace(/-/g, '');
        }


        const [playerRes, profileRes] = await Promise.all([
            await axios.get(`https://api.hypixel.net/player?key=${config.hypixelAPIkey}&uuid=${uuid}`),
            await axios.get(`https://api.hypixel.net/skyblock/profiles?key=${config.hypixelAPIkey}&uuid=${uuid}`)
        ]);

        const player = parseHypixel(playerRes, uuid);
        
        if (!profileRes.data.profiles) {
          return {
            status: 404,
            reason: `Found no SkyBlock profiles for a user with a UUID of '${uuid}'.`,
          };
        }

        const profileData = profileRes.data.profiles.find((a) => a.selected);
        const profile = profileData.members[uuid];

        return {
          status: 200,
          profile: profile,
          profileData: profileData,
          playerRes: playerRes.data,
          player: player,
          uuid: uuid,
        };
    } catch (error) {
        return ({ status: 404, reason: error });
    }
}

function isValidProfile(profileMembers, uuid) {
    return profileMembers.hasOwnProperty(uuid) && profileMembers[uuid].last_save != undefined;
}

module.exports = { getLatestProfile }
