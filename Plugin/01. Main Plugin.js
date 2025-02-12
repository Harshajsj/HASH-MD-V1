const { cmd, commands } = require('../command');
const config = require('../config');
const os = require('os');
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, fetchJson , runtime ,sleep } = require('../DATABASE/functions')
const { checkAccess, isPremiumUser, blacklistedJIDs, premiumJIDs, dataLoaded } = require('../DATABASE/accessControl');
const mono = "```"

    function detectPlatform() {
      if (process.env.REPL_ID) return 'Replit';
      if (process.env.HEROKU_APP_NAME) return 'Heroku';
      if (process.env.KOYEB_PROJECT_ID) return 'Koyeb';
      if (process.env.AWS_LAMBDA_FUNCTION_NAME) return 'AWS Lambda';
      if (process.env.VERCEL) return 'Vercel';
      if (process.env.RENDER) return 'Render';
      if (process.env.NETLIFY) return 'Netlify';
      if (process.env.WORKFLOW) return 'Workflow';
      if (process.env.FLYIO_APP_NAME) return 'Fly.io';
      return 'Unknown Platform';
    }
    const platformName = detectPlatform();

    

cmd({
      pattern: "runtime",
      desc: "Chek Bot Runtime",
      category: "main",
      react: "⏰",
      filename: __filename
    }, async (conn, mek, m, { from, reply }) => {
      try {
          const senderNumber = m.sender;
          const isGroup = m.isGroup || false;

          // Check access permissions
          if (!checkAccess(senderNumber, isGroup)) {
              if (blacklistedJIDs.includes(senderNumber)) {
                  return reply("*🚫 You are blacklisted. Access denied.*");
              } else {
                  return reply("*😢 Access denied. You don't have permission to use this command.🎁 Change Bot Mode!*");
              }
          }

          // System and memory information
          const uptime = runtime(process.uptime());
          const memoryUsage = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2);
          const totalMemory = Math.round(os.totalmem() / 1024 / 1024);
          const cpuArch = os.arch();
          const cpuCores = os.cpus().length;
          const systemType = os.type();
          const freeMemory = (os.freemem() / 1024 / 1024).toFixed(2);

          // Custom message for Render platform
          let platformMessage = '';
          if (platformName === 'Render') {
              platformMessage = '\n🌟 You are currently hosting on Render! Enjoy seamless deployments.';
          }

          // Status message to be sent


          let desc = `*🚀 𝖱𝗎𝗇𝗍𝗂𝗆𝖾 : ${uptime}*`





          // Sending the image with caption
          const sentMsg = await conn.sendMessage(from, {


          text: desc,
          contextInfo: {

          forwardingScore: 999,
          isForwarded: true,
          forwardedNewsletterMessageInfo: {
          newsletterName: '👾 ＳＡＨＡＳ  |   𝚃𝙴𝙲𝙷 ジ',
          newsletterJid: "120363296605464049@newsletter",
          },
          externalAdReply: {
              title: `Runtime ⏰`,
              body: `Can't Find The Information. You Can Try Another Way. Error Code 4043`,
              thumbnailUrl: `https://pomf2.lain.la/f/5fz9fk69.jpg`,
              sourceUrl: ``,
              mediaType: 1,
              renderLargerThumbnail: true
              }
                  }
              }, { quoted: mek });

      } catch (e) {
          console.error(e);
          reply(`*Error:* ${e.message}`);
      }
    });


        




cmd({
      pattern: "alive",
      alias: ["online"],
      desc: "Chek Bot Alive",
      category: "main",
      react: "🧚🏻‍♀️",
      filename: __filename
    },
    
    async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
    try{
          const senderNumber = m.sender;
          const isGroup = m.isGroup || false;

          // Check access permissions
          if (!checkAccess(senderNumber, isGroup)) {
              if (blacklistedJIDs.includes(senderNumber)) {
                  return reply("*🚫 You are blacklisted. Access denied.*");
              } else {
                  return reply("*😢 Access denied. You don't have permission to use this command.🎁 Change Bot Mode!*");
              }
          }

          // System and memory information
          const uptime = runtime(process.uptime());
          const memoryUsage = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2);
          const totalMemory = Math.round(os.totalmem() / 1024 / 1024);
          const cpuArch = os.arch();
          const cpuCores = os.cpus().length;
          const systemType = os.type();
          const freeMemory = (os.freemem() / 1024 / 1024).toFixed(2);

          // Custom message for Render platform
          let platformMessage = '';
          if (platformName === 'Render') {
              platformMessage = '\n🌟 You are currently hosting on Render! Enjoy seamless deployments.';
          }

          // Status message to be sent


          let desc = `*👋 Hello ${pushname}*

*👨‍💻🇱🇰 I'm 𝖲𝖠𝖧𝖠𝖲 𝖬𝖣 Whatsapp Bot*

> *Platform :*  *${os.hostname()}*
> *Ram Usage :* *${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB*
> *Runtime :* *${runtime(process.uptime())}* 
> *Version :* *1.0.0*
                                                                                                  
*🐼 Have A Nice Day 🐼*

> *©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ꜱᴀʜᴀꜱ ᴛᴇᴄʜ*`





          // Sending the image with caption
          const sentMsg = await conn.sendMessage(from, {


          text: desc,
          contextInfo: {

          forwardingScore: 999,
          isForwarded: true,
          forwardedNewsletterMessageInfo: {
          newsletterName: '👾 ＳＡＨＡＳ  |   𝚃𝙴𝙲𝙷 ジ',
          newsletterJid: "120363296605464049@newsletter",
          },
          externalAdReply: {
              title: `I'm Alive Now 👨‍💻`,
              body: `Can't Find The Information. You Can Try Another Way. Error Code 4043`,
              thumbnailUrl: `https://pomf2.lain.la/f/5fz9fk69.jpg`,
              sourceUrl: ``,
              mediaType: 1,
              renderLargerThumbnail: true
              }
                  }
              }, { quoted: mek });

      } catch (e) {
          console.error(e);
          reply(`*Error:* ${e.message}`);
      }
    });

















cmd({
      pattern: "menu",
      alias: ["panel"],
      desc: "Get Bot Menu",
      category: "main",
      react: "📁",
      filename: __filename
},
    
    async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    
let menu = {
main: '',
download: '',
movie: '',
group: '',
owner: '',
convert: '',
news: '',
ai: '',
tools: '',
search: '',
fun: '',
voice: '',
other: ''
};

for (let i = 0; i < commands.length; i++) {
if (commands[i].pattern && !commands[i].dontAddCommandList) {
menu[commands[i].category] += `.${commands[i].pattern}\n`;
 }
}
   
          const senderNumber = m.sender;
          const isGroup = m.isGroup || false;

          // Check access permissions
          if (!checkAccess(senderNumber, isGroup)) {
              if (blacklistedJIDs.includes(senderNumber)) {
                  return reply("*🚫 You are blacklisted. Access denied.*");
              } else {
                  return reply("*😢 Access denied. You don't have permission to use this command.🎁 Change Bot Mode!*");
              }
          }

          // System and memory information
          const uptime = runtime(process.uptime());
          const memoryUsage = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2);
          const totalMemory = Math.round(os.totalmem() / 1024 / 1024);
          const cpuArch = os.arch();
          const cpuCores = os.cpus().length;
          const systemType = os.type();
          const freeMemory = (os.freemem() / 1024 / 1024).toFixed(2);

          // Custom message for Render platform
          let platformMessage = '';
          if (platformName === 'Render') {
              platformMessage = '\n🌟 You are currently hosting on Render! Enjoy seamless deployments.';
          }

          // Status message to be sent


          let desc = `*👋 Hello ${pushname}*
          
*╭─「 ᴄᴏᴍᴍᴀɴᴅ ᴘᴀɴᴇʟ 」*
*│◈ ʀᴜɴᴛɪᴍᴇ : ${runtime(process.uptime())}*
*│◈ ʀᴀᴍ ᴜꜱᴀɢᴇ : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB*
*│◈ ᴘʟᴀᴛꜰᴏʀᴍ : ${os.hostname()}*
*│◈ ᴠᴇʀꜱɪᴏɴ : 1.0.0*
*╰──────────●●►*

╭──────────●●►
 📥 *𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐝 𝐌𝐞𝐧𝐮*
  ───────
 ${menu.download}
╰───────────●●►
╭──────────●●►
 🎬 *𝐌𝐨𝐯𝐢𝐞 𝐌𝐞𝐧𝐮*
  ───────
 ${menu.movie}
╰───────────●●►
╭──────────●●►
 👾 *𝐀𝐢 𝐌𝐞𝐧𝐮*
  ───────
 ${menu.ai}
╰───────────●●►
╭──────────●●►
 🔧 *𝐌𝐚𝐢𝐧 𝐌𝐞𝐧𝐮*
  ───────
 ${menu.main}
╰───────────●●►
╭──────────●●►
 🎉 *𝐅𝐮𝐧 𝐌𝐞𝐧𝐮*
  ───────
 ${menu.fun}
╰───────────●●►
╭──────────●●►
 🔄 *𝐂𝐨𝐧𝐯𝐞𝐫𝐭 𝐌𝐞𝐧𝐮*
  ───────
 ${menu.convert}
╰───────────●●►
╭──────────●●►
 🔍 *𝐒𝐞𝐚𝐫𝐜𝐡 𝐌𝐞𝐧𝐮*
  ───────
 ${menu.search}
╰───────────●●►
╭──────────●●►
 👥 *𝐆𝐫𝐨𝐮𝐩 𝐌𝐞𝐧𝐮*
  ───────
 ${menu.group}
╰───────────●●►
╭──────────●●►
 🔒 *𝐎𝐰𝐧𝐞𝐫 𝐌𝐞𝐧𝐮*
  ───────
 ${menu.owner}
╰───────────●●►
╭──────────●●►
 ⚙️ *𝐎𝐭𝐡𝐞𝐫 𝐌𝐞𝐧𝐮*
  ───────
 ${menu.other}
╰───────────●●►
╭──────────●●►
 🛠️ *𝐓𝐨𝐨𝐥𝐬 𝐌𝐞𝐧𝐮*
  ───────
 ${menu.tools}
╰───────────●●►
╭──────────●●►
 📰 *𝐍𝐞𝐰𝐬 𝐌𝐞𝐧𝐮*
  ───────
 ${menu.news}
╰───────────●●►

> *©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ꜱᴀʜᴀꜱ ᴛᴇᴄʜ*`





          // Sending the image with caption
          const sentMsg = await conn.sendMessage(from, {


          text: desc,
          contextInfo: {

          forwardingScore: 999,
          isForwarded: true,
          forwardedNewsletterMessageInfo: {
          newsletterName: '👾 ＳＡＨＡＳ  |   𝚃𝙴𝙲𝙷 ジ',
          newsletterJid: "120363296605464049@newsletter",
          },
          externalAdReply: {
              title: `SAHAS-MD Menu List`,
              body: `Can't Find The Information. You Can Try Another Way. Error Code 4043`,
              thumbnailUrl: `https://pomf2.lain.la/f/5fz9fk69.jpg`,
              sourceUrl: ``,
              mediaType: 1,
              renderLargerThumbnail: true
              }
                  }
              }, { quoted: mek });

      } catch (e) {
          console.error(e);
          reply(`*Error:* ${e.message}`);
      }
    });


cmd({
      pattern: "owner",
      desc: "Chek Bot Owner",
      category: "main",
      react: "👨‍💻",
      filename: __filename
    },
    
    async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
    try{
          const senderNumber = m.sender;
          const isGroup = m.isGroup || false;

          // Check access permissions
          if (!checkAccess(senderNumber, isGroup)) {
              if (blacklistedJIDs.includes(senderNumber)) {
                  return reply("*🚫 You are blacklisted. Access denied.*");
              } else {
                  return reply("*😢 Access denied. You don't have permission to use this command.🎁 Change Bot Mode!*");
              }
          }

          // System and memory information
          const uptime = runtime(process.uptime());
          const memoryUsage = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2);
          const totalMemory = Math.round(os.totalmem() / 1024 / 1024);
          const cpuArch = os.arch();
          const cpuCores = os.cpus().length;
          const systemType = os.type();
          const freeMemory = (os.freemem() / 1024 / 1024).toFixed(2);

          // Custom message for Render platform
          let platformMessage = '';
          if (platformName === 'Render') {
              platformMessage = '\n🌟 You are currently hosting on Render! Enjoy seamless deployments.';
          }

          // Status message to be sent


          let desc = `*👋 Hello ${pushname}*

*👾 ＳＡＨＡＳ-ＭＤ 👨‍💻💗*

> *𝗢𝗪𝗡𝗘𝗥 𝗜𝗡𝗙𝗢* 

*⚡ᴏᴡɴᴇʀ ɴᴀᴍᴇ -: ꜱᴀʜᴀꜱ ɴᴇᴛʜꜱᴀʀᴀ (ꜱᴀʜᴀꜱ ᴛᴇᴄʜ)*
*⚡ɴᴜᴍʙᴇʀ* -: 94718913389
*⚡ʏᴏᴜᴛᴜʙᴇ -:* https://www.youtube.com/@Sahas_Tech
*⚡ᴡʜᴀᴛꜱᴀᴘᴘ ᴄʜᴀɴɴᴇʟ-:* https://whatsapp.com/channel/0029VaiTjMlK5cDLek3bB533

> *©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ꜱᴀʜᴀꜱ ᴛᴇᴄʜ*`





          // Sending the image with caption
          const sentMsg = await conn.sendMessage(from, {


          text: desc,
          contextInfo: {

          forwardingScore: 999,
          isForwarded: true,
          forwardedNewsletterMessageInfo: {
          newsletterName: '👾 ＳＡＨＡＳ  |   𝚃𝙴𝙲𝙷 ジ',
          newsletterJid: "120363296605464049@newsletter",
          },
          externalAdReply: {
              title: `SAHAS-MD Owner Information`,
              body: `Can't Find The Information. You Can Try Another Way. Error Code 4043`,
              thumbnailUrl: `https://pomf2.lain.la/f/5fz9fk69.jpg`,
              sourceUrl: ``,
              mediaType: 1,
              renderLargerThumbnail: true
              }
                  }
              }, { quoted: mek });

      } catch (e) {
          console.error(e);
          reply(`*Error:* ${e.message}`);
      }
    });


cmd({
      pattern: "support",
      desc: "To get the bot informations.",
      category: "main",
      react: "⛓",
      filename: __filename
    },
    
    async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
    try{
          const senderNumber = m.sender;
          const isGroup = m.isGroup || false;

          // Check access permissions
          if (!checkAccess(senderNumber, isGroup)) {
              if (blacklistedJIDs.includes(senderNumber)) {
                  return reply("*🚫 You are blacklisted. Access denied.*");
              } else {
                  return reply("*😢 Access denied. You don't have permission to use this command.🎁 Change Bot Mode!*");
              }
          }

          // System and memory information
          const uptime = runtime(process.uptime());
          const memoryUsage = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2);
          const totalMemory = Math.round(os.totalmem() / 1024 / 1024);
          const cpuArch = os.arch();
          const cpuCores = os.cpus().length;
          const systemType = os.type();
          const freeMemory = (os.freemem() / 1024 / 1024).toFixed(2);

          // Custom message for Render platform
          let platformMessage = '';
          if (platformName === 'Render') {
              platformMessage = '\n🌟 You are currently hosting on Render! Enjoy seamless deployments.';
          }

          // Status message to be sent


          let desc = `*👋 Hello ${pushname}*

*👨‍💻SAHAS-MD Support Channels💗*

*Youtube Channel Link:* https://www.youtube.com/@Sahas_Tech

*Whatsapp Channel Link:* https://whatsapp.com/channel/0029VaiTjMlK5cDLek3bB533

> *©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ꜱᴀʜᴀꜱ ᴛᴇᴄʜ*`





          // Sending the image with caption
          const sentMsg = await conn.sendMessage(from, {


          text: desc,
          contextInfo: {

          forwardingScore: 999,
          isForwarded: true,
          forwardedNewsletterMessageInfo: {
          newsletterName: '👾 ＳＡＨＡＳ  |   𝚃𝙴𝙲𝙷 ジ',
          newsletterJid: "120363296605464049@newsletter",
          },
          externalAdReply: {
              title: `SAHAS-MD Support Channels`,
              body: `Can't Find The Information. You Can Try Another Way. Error Code 4043`,
              thumbnailUrl: `https://pomf2.lain.la/f/5fz9fk69.jpg`,
              sourceUrl: ``,
              mediaType: 1,
              renderLargerThumbnail: true
              }
                  }
              }, { quoted: mek });

      } catch (e) {
          console.error(e);
          reply(`*Error:* ${e.message}`);
      }
    });


cmd({
      pattern: "repo",
      desc: "To get the repo informations.",
      category: "main",
      react: "📡",
      filename: __filename
    },
    
    async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
    try{
          const senderNumber = m.sender;
          const isGroup = m.isGroup || false;

          // Check access permissions
          if (!checkAccess(senderNumber, isGroup)) {
              if (blacklistedJIDs.includes(senderNumber)) {
                  return reply("*🚫 You are blacklisted. Access denied.*");
              } else {
                  return reply("*😢 Access denied. You don't have permission to use this command.🎁 Change Bot Mode!*");
              }
          }

          // System and memory information
          const uptime = runtime(process.uptime());
          const memoryUsage = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2);
          const totalMemory = Math.round(os.totalmem() / 1024 / 1024);
          const cpuArch = os.arch();
          const cpuCores = os.cpus().length;
          const systemType = os.type();
          const freeMemory = (os.freemem() / 1024 / 1024).toFixed(2);

          // Custom message for Render platform
          let platformMessage = '';
          if (platformName === 'Render') {
              platformMessage = '\n🌟 You are currently hosting on Render! Enjoy seamless deployments.';
          }

          // Status message to be sent


          let desc = `*👋 Hello ${pushname}*
          
📍𝖱𝖾𝗉𝗈 𝖫𝗂𝗇𝗄 ❤️‍🔥👇

👨‍💻◦https://github.com/QUEEN-KYLIE-MD-01/QUEEN-KYLIE-MD/tree/main

📍𝖯𝗅𝖾𝖺𝗌𝖾 𝖲𝗎𝖻𝗌𝖼𝗋𝗂𝖻𝖾 𝖬𝗒 𝖸𝗈𝗎𝗍𝗎𝖻𝖾 𝖢𝗁𝖺𝗇𝗇𝖾𝗅 👇

👨‍💻◦ https://www.youtube.com/@Sahas_Tech

📍𝖯𝗅𝖾𝖺𝗌𝖾 𝖥𝗈𝗅𝗅𝗈𝗐 𝖬𝗒 𝖶𝗁𝖺𝗍𝗌𝖺𝗉𝗉 𝖢𝗁𝖺𝗇𝗇𝖾𝗅 👇

👨‍💻◦ https://whatsapp.com/channel/0029VaiTjMlK5cDLek3bB533

> ©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ꜱᴀʜᴀꜱ ᴛᴇᴄʜ`





          // Sending the image with caption
          const sentMsg = await conn.sendMessage(from, {


          text: desc,
          contextInfo: {

          forwardingScore: 999,
          isForwarded: true,
          forwardedNewsletterMessageInfo: {
          newsletterName: '👾 ＳＡＨＡＳ  |   𝚃𝙴𝙲𝙷 ジ',
          newsletterJid: "120363296605464049@newsletter",
          },
          externalAdReply: {
              title: `SAHAS-MD Repo Informations`,
              body: `Can't Find The Information. You Can Try Another Way. Error Code 4043`,
              thumbnailUrl: `https://pomf2.lain.la/f/5fz9fk69.jpg`,
              sourceUrl: ``,
              mediaType: 1,
              renderLargerThumbnail: true
              }
                  }
              }, { quoted: mek });

      } catch (e) {
          console.error(e);
          reply(`*Error:* ${e.message}`);
      }
    });


cmd({
      pattern: "about",
      desc: "To get the bot informations.",
      category: "main",
      react: "ℹ️",
      filename: __filename
    },
    
    async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
    try{
          const senderNumber = m.sender;
          const isGroup = m.isGroup || false;

          // Check access permissions
          if (!checkAccess(senderNumber, isGroup)) {
              if (blacklistedJIDs.includes(senderNumber)) {
                  return reply("*🚫 You are blacklisted. Access denied.*");
              } else {
                  return reply("*😢 Access denied. You don't have permission to use this command.🎁 Change Bot Mode!*");
              }
          }

          // System and memory information
          const uptime = runtime(process.uptime());
          const memoryUsage = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2);
          const totalMemory = Math.round(os.totalmem() / 1024 / 1024);
          const cpuArch = os.arch();
          const cpuCores = os.cpus().length;
          const systemType = os.type();
          const freeMemory = (os.freemem() / 1024 / 1024).toFixed(2);

          // Custom message for Render platform
          let platformMessage = '';
          if (platformName === 'Render') {
              platformMessage = '\n🌟 You are currently hosting on Render! Enjoy seamless deployments.';
          }

          // Status message to be sent


          let desc = `👋 𝐇𝐄𝐋𝐋𝐎𝐖 𝐓𝐇𝐄𝐈𝐑 ${senderNumber}

𝐈 𝐀𝐌 𝐒𝐀𝐇𝐀𝐒-𝐌𝐃 𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏 𝐁𝐎𝐓

𝐂𝐑𝐄𝐀𝐓𝐄𝐃 𝐁𝐘 𝐒𝐀𝐇𝐀𝐒 𝐓𝐄𝐂𝐇 (𝐒𝐀𝐇𝐀𝐒 𝐍𝐄𝐓𝐇𝐒𝐀𝐑𝐀)..
           
ɢɪᴛʜᴜʙ :    
             
ʏᴏᴜᴛᴜʙᴇ : https://www.youtube.com/@Sahas_Tech
      
ᴡʜᴀᴛꜱᴀᴘᴘ ᴄʜᴀɴɴᴇʟ : https://whatsapp.com/channel/0029VaiTjMlK5cDLek3bB533

тнαηкѕ ƒσя υѕιηg ʂαԋαʂ-м∂ ωнαтѕαρρ вσт м∂`





          // Sending the image with caption
          const sentMsg = await conn.sendMessage(from, {


          text: desc,
          contextInfo: {

          forwardingScore: 999,
          isForwarded: true,
          forwardedNewsletterMessageInfo: {
          newsletterName: '👾 ＳＡＨＡＳ  |   𝚃𝙴𝙲𝙷 ジ',
          newsletterJid: "120363296605464049@newsletter",
          },
          externalAdReply: {
              title: `SAHAS-MD About`,
              body: `Can't Find The Information. You Can Try Another Way. Error Code 4043`,
              thumbnailUrl: `https://pomf2.lain.la/f/5fz9fk69.jpg`,
              sourceUrl: ``,
              mediaType: 1,
              renderLargerThumbnail: true
              }
                  }
              }, { quoted: mek });

      } catch (e) {
          console.error(e);
          reply(`*Error:* ${e.message}`);
      }
    });


cmd({
      pattern: "system",
      alias: ["status", "botinfo"],
      desc: "Check uptime, RAM usage, CPU info, and more",
      category: "main",
      react: "🧬",
      filename: __filename
    }, async (conn, mek, m, { from, reply }) => {
      try {
          const senderNumber = m.sender;
          const isGroup = m.isGroup || false;

          // Check access permissions
          if (!checkAccess(senderNumber, isGroup)) {
              if (blacklistedJIDs.includes(senderNumber)) {
                  return reply("*🚫 You are blacklisted. Access denied.*");
              } else {
                  return reply("*😢 Access denied. You don't have permission to use this command.🎁 Change Bot Mode!*");
              }
          }

          // System and memory information
          const uptime = runtime(process.uptime());
          const memoryUsage = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2);
          const totalMemory = Math.round(os.totalmem() / 1024 / 1024);
          const cpuArch = os.arch();
          const cpuCores = os.cpus().length;
          const systemType = os.type();
          const freeMemory = (os.freemem() / 1024 / 1024).toFixed(2);

          // Custom message for Render platform
          let platformMessage = '';
          if (platformName === 'Render') {
              platformMessage = '\n🌟 You are currently hosting on Render! Enjoy seamless deployments.';
          }

          // Status message to be sent
        
          
          let desc = `*乂 SAHAS-MD SYSTEM INFORMATION*

*⏰𝖱𝗎𝗇𝗍𝗂𝗆𝖾:-  ${runtime(process.uptime())}*    
*📟𝖱𝖺𝗆 𝖴𝗌𝖺𝗀𝖾:- ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB*
*⚙️𝖯𝗅𝖺𝗍𝖿𝗈𝗋𝗆:- ${os.hostname()}*
*👨‍💻𝖮𝗐𝗇𝖾𝗋:- 𝖲𝖺𝗁𝖺𝗌 𝖭𝖾𝗍𝗁𝗌𝖺𝗋𝖺*   
*👾𝖵𝖾𝗋𝗌𝗂𝗈𝗇:- 1.0.0*
‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎
> *©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ꜱᴀʜᴀꜱ ᴛᴇᴄʜ*`

       

          

          // Sending the image with caption
          const sentMsg = await conn.sendMessage(from, {


          text: desc,
          contextInfo: {

          forwardingScore: 999,
          isForwarded: true,
          forwardedNewsletterMessageInfo: {
          newsletterName: '👾 ＳＡＨＡＳ  |   𝚃𝙴𝙲𝙷 ジ',
          newsletterJid: "120363296605464049@newsletter",
          },
          externalAdReply: {
              title: `SAHAS-MD System Information`,
              body: `Can't Find The Information. You Can Try Another Way. Error Code 4043`,
              thumbnailUrl: `https://pomf2.lain.la/f/5fz9fk69.jpg`,
              sourceUrl: ``,
              mediaType: 1,
              renderLargerThumbnail: true
              }
                  }
              }, { quoted: mek });

      } catch (e) {
          console.error(e);
          reply(`*Error:* ${e.message}`);
      }
    });


cmd({
    pattern: "ping",
    desc: "Check bot's response time.",
    category: "main",
    react: "🪄",
    filename: __filename
}, async (conn, mek, m, { from, quoted, reply }) => {
    try {
         const senderNumber = m.sender;
        const isGroup = m.isGroup || false;

        // Check access permissions
        if (!checkAccess(senderNumber, isGroup)) {
            if (blacklistedJIDs.includes(senderNumber)) {
                return reply("*🚫 You are blacklisted. Access denied.*");
            } else {
                return reply("*😢 Access denied. You don't have permission to use this command.🎁 Change Bot Mode!*");
            }
        }
        const startTime = Date.now();
        const message = await conn.sendMessage(from, { text: '```Pinging To index.js!!!```' });
        const endTime = Date.now();
        const ping = endTime - startTime;

        // Send the ping response without buttons
        await conn.sendMessage(from, { text: `*📍 Pong : ${ping}ms*` }, { quoted: message })
    } catch (e) {
        console.error(e);
        reply(`${e}`);
  }
});
