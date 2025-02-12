const fs = require("fs");
require("dotenv").config();

module.exports = {
  //==========================================- MAIN - CONFIGS -==================================================================
  SESSION_ID: process.env.SESSION_ID || "coQzmZYB#qntWaeFXb0NyYXxXE_EX9bUNR3__O377F2sZ2Fzc3s4",
  MONGODB: process.env.MONGODB || "mongodb+srv://kulathungaasitha319:yjHB0DvFfStNfwPS@cluster0.3oijd.mongodb.net/",
  PREFIX: process.env.PREFIX || ".",
  mode: process.env.mode || "public",
  ALIVE_IMG: process.env.ALIVE_IMG || "https://telegra.ph/file/d8279f4ca5da23bda7da4.jpg",
  MENU_IMG: process.env.MENU_IMG || "https://i.ibb.co/hRw1XK4/image.png",
  ALIVE_MSG: process.env.ALIVE_MSG || "i a alive now👀📍",

};
