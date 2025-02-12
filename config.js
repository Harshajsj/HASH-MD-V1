const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "coQzmZYB#qntWaeFXb0NyYXxXE_EX9bUNR3__O377F2sZ2Fzc3s4",
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/F6Q8Yyb/d3a638c95755a63d.jpg",
ALIVE_MSG: process.env.ALIVE_MSG || "> *`ʜᴇʟʟᴏ, ɪ ᴀᴍ ʜᴀꜱʜ ᴍᴅ ᴠ1 ɪ ᴀᴍ ᴀʟɪᴠᴇ ɴᴏᴡ😼👋`",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
};
