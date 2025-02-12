const fs = require("fs");
require("dotenv").config();

module.exports = {
  //==========================================- MAIN - CONFIGS -==================================================================
  SESSION_ID: process.env.SESSION_ID || "NzNg2DhC#npTlh-C0G7J4XJC7cKiX4Utl7KdKPqCK4IT3N9Mvk7s",
  MONGODB: process.env.MONGODB || "mongodb+srv://kulathungaasitha319:yjHB0DvFfStNfwPS@cluster0.3oijd.mongodb.net/",
  PREFIX: process.env.PREFIX || ".",
  mode: process.env.mode || "public",
  OWNER_NUMBER: process.env.OWNER_NUMBER || "94727786760",
  //========================================- OTHER - CONFIGS -=====================================================================
  AUTO_VOICE: process.env.AUTO_VOICE || "true",
  ANTI_BAD_WORDS_ENABLED: process.env.ANTI_BAD_WORDS_ENABLED || "true",
  AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
  ANTI_BAD_WORDS: (process.env.ANTI_BAD_WORDS || "pakayo,huththo").split(','),
  ANTI_LINK: process.env.ANTILINK || "true",
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
  AUTO_READ_CMD: process.env.AUTO_READ_CMD || "true",
  ALWAYS_TYPING: process.env.ALWAYS_TYPING || "true",
  ALWAYS_RECORDING: process.env.ALWAYS_RECORDING || "true",
  ANTI_BOT: process.env.ANTI_BOT || "true",
  ANTI_DELETE: process.env.ANTI_DELETE || "true",
  packname: process.env.packname || "SAHAS TECH",
  author: process.env.author || "SAHAS TECH",
  
  START_MSG: process.env.START_MSG || `HASH-MD Conected` ,

  ALIVE_IMG: process.env.ALIVE_IMG || "https://telegra.ph/file/d8279f4ca5da23bda7da4.jpg",
  ALIVE_MSG: process.env.ALIVE_MSG || "Alive ban📍",
  MENU_IMG: process.env.MENU_IMG || "https://i.ibb.co/hRw1XK4/image.png",
  MENU_MSG: process.env.MENU_MSG || `Menumsg`,
MENU_MS: process.env.MENU_MS || `menu 2`,

};
