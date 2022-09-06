const { isUuid } = require('../utils/uuid');
const config = require('../../config.json');
const axios = require('axios');

async function getProfile(uuid, profileid) {
    try {
        if (!isUuid(uuid)) {
            const mojang_response = await axios.get(`https://api.ashcon.app/mojang/v2/user/${uuid}`)
            if (mojang_response?.data?.uuid) uuid = mojang_response.data.uuid.replace(/-/g, '');
        }

        const profileRes = await axios.get(`https://api.hypixel.net/skyblock/profiles?key=${config.hypixelAPIkey}&uuid=${uuid}`);

        if (profileRes.data.hasOwnProperty('profiles') && profileRes.data.profiles == null) return ({ status: 404, reason: `Found no SkyBlock profiles for a user with a UUID of '${uuid}' and profile of '${profileid}'` });
        
        if (!isUuid(profileid)) {
            for (const profile of profileRes.data?.profiles || []) {
                if (profile.cute_name.toLowerCase() === profileid.toLowerCase()) profileid = profile.profile_id;
            }
        }

        const profileData = profileRes.data.profiles.find((a) => a.profile_id === profileid);
        
        if (!profileData) return ({ status: 404, reason: `Found no SkyBlock profiles for a user with a UUID of '${uuid}' and profile of '${profileid}'` });
        if (!isValidProfile(profileData.members, uuid)) return ({ status: 404, reason: `Found no SkyBlock profiles for a user with a UUID of '${uuid}'` });

        const profile = profileData.members[uuid];
        
        return { profile: profile, profileData: profileData}
    } catch (error) {
        return ({ status: 404, reason: error });
    }
}

function isValidProfile(profileMembers, uuid) {
    return profileMembers.hasOwnProperty(uuid) && profileMembers[uuid].last_save != undefined;
}

module.exports = { getProfile }