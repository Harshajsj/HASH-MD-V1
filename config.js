const fs = require("fs");
require("dotenv").config();

module.exports = {
  //==========================================- MAIN - CONFIGS -==================================================================
  SESSION_ID: process.env.SESSION_ID || "coQzmZYB#qntWaeFXb0NyYXxXE_EX9bUNR3__O377F2sZ2Fzc3s4",
  MONGODB: process.env.MONGODB || "mongodb+srv://kulathungaasitha319:yjHB0DvFfStNfwPS@cluster0.3oijd.mongodb.net/",
  PREFIX: process.env.PREFIX || ".",
  mode: process.env.mode || "public",
  OWNER_NUMBER: process.env.OWNER_NUMBER || "94727786760",
  START_MSG: process.env.START_MSG || `HASH-MD Conected` ,
  ALIVE_IMG: process.env.ALIVE_IMG || "https://telegra.ph/file/d8279f4ca5da23bda7da4.jpg",
  MENU_IMG: process.env.MENU_IMG || "https://i.ibb.co/hRw1XK4/image.png",
  MENU_MSG: process.env.MENU_MSG || `Menumsg`,
  MENU_MS: process.env.MENU_MS || `menu 2`,

};
