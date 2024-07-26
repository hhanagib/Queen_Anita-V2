//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://DARKSHAN:3000@cluster0.t1wsjlv.mongodb.net/";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "94766054852";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUJHT1NuVFp0Zkp3bEZZSDdyQzdYRXhpZlZkVGtrVkNORytzVytvZ3ZGUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiKzhWV0tldkRmc1VIT1VsVWVFcDEzMXlJUHdrVktvVkRPUmpuZmYvYnpnYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjRVpPWjY2bFY0TnhnWTI0ZVlkcFZ5SFc0SmZRMkR0akVRN0RacEUvZjNnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJicFpVTER6ZDJVYmxQb0RIWFVyR1h6U1o3U2hFUVhRYmN1ZndENGNYK1JBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVNbWRaQk5ZZHVtdStNN0JXMWo1ZkZmQ045d0RnZ0x3bUc4emY0ajN5bjQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1zRjhNeC9reHp0ZWlOdTBGd0xNUGtvWHZVYTFZN21EWTBzd1FGVmx3SHM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYU40bWJsRlNwb21QNnV4VU5mRmE2RVFwYVhmc3FJQkVDOE1LWlhFNmsxaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNEJYdEFQR0RWQnBqNUVJVnhNTll1eEszOGVOdzZFSUN0eEc2cENMZDFBaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVQcWNJbk9vOHlwY0dhNXhjbVpkalRLVnJwK1kxME96TzBUY3E3T1BSaTBrT1Z6TGZMR1ljNlFqbFh1YXErTDRWYnYzRzN2STFPR1BSdVV0M09wVmlBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTM3LCJhZHZTZWNyZXRLZXkiOiJzcDVITUlidVR5TmNJQ25xRVlvUnN1cy9KNGZkUnZncHgvYTByRlFLUGU4PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzY2MDU0ODUyQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkRFQ0Q1MTQ0QzUyQ0E1RTMwMUJFN0VFNzhENUI3Q0Y0In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjE5ODMxOTd9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzY2MDU0ODUyQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkYwNDBFNzY1NkE3MjJBQzZDQjcyMEY0QjM4NDYzQUQxIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjE5ODMxOTd9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjJyWWtvc2FOUTVtM0VYbTQ2Umx3V0EiLCJwaG9uZUlkIjoiMWRjNTEzNTEtODYwMC00OTYxLTkzZDQtYWY5ODlhMDY2YmFjIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InIxVjNjOEhqQVpsdDFCQW40dHA5Q2FzQUhOWT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRYTZVV3Y0cThTRy9FRm5OTStZQjROazRXWGs9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiU0dKSzkzU0oiLCJtZSI6eyJpZCI6Ijk0NzY2MDU0ODUyOjIzQHMud2hhdHNhcHAubmV0IiwibmFtZSI6ImthdmVlc2hhcmFzaG1pa2FyYXNobWlrYTUifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ05icHk3d0ZFTTdCamJVR0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InBJbEVLSGoweWdWZCsxaTJpbm1sdjlNejRhR0tjTUp4bWw2UnVzcXRkQk09IiwiYWNjb3VudFNpZ25hdHVyZSI6IjlsQ0NiY0llVVZHUWpVRGRxVUhsaHJHS1ZLNjR6TTV3R05Dam51MWNWZjdkMEw4ZXFDTkhiK25xUUNBVWc3Q2xoVklRVWdoTUx5a1l3alVOMGJ2bkFBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJkTWRCTVhsS3J4MGk2TVRQR2Z5RElDVXc1cTNmNjJPUTFlaFVwWm93OTZYZVZjbTdaSHNwOVc1S29Qek4wSkhqOTZUOCtVMmc2RVdaMUNib2s0UTRoUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzY2MDU0ODUyOjIzQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmFTSlJDaDQ5TW9GWGZ0WXRvcDVwYi9UTStHaGluRENjWnBla2JyS3JYUVQifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjE5ODMxOTUsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRFRjIn0="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "David Cyril",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
