const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA61V646yShZ9l/qrfUQuBZh0MshFBS+gaKMnk0kJBZQi10Iav/hU8wbzZBPa7nRn5jvf6ZMcflWgWHvtvdfa+wdIM1JhC7dg9APkJbkiirsjbXMMRmBchyEuQR8EiCIwAoU6QLKzbzPjWszmp+HCmeoLeyq/TG1Blibr4zZeQJEIyi57Bvc+yOtjQvxfAF4iAUdJYgWpcbaTWRO7M2jO1ttlGxoJf8lObDWmhrhTOf0Z3DtEREqSRnoe4wsuUWLh1kak/B59PL5Sd75fzXi4m+X+rXS2TetuVKlyonjJr46JPNH23rWeRN+jL/UcV8ErhtBGmNu38Go5WZFPtqV+qqY7O2mH8LYXOFS3zoN+RaIUB7MAp5TQ9tt172m3tWOH216rhMUuFXoHhj+fVpYcqj1rkuzm28RbJdJ1cPkm8Xxtq4x8OF9aY8tG6dIK9rKIHGqtoiRf19ds6QZL+Lo6tNVX4nb5oZXzX6l7s5xos8146UpaoQ3DYRNXBtm1upoc0giLmVjlkOZewVyq79G/HS/NCQfsCSKvOUg7AXkvi5va5pYIXz2VDxtIDh5LDq/6J31E6/JXLPmNsY56riLe5nqceyXO6XBRemp8lNeMm5ZXPumpKdmU2kxZOoa1hNEun75CstpayvFYv1S1T2ALT2rPPBxUlstu00h5fsvojNtZAEbDex+UOCIVLRElWfr2jpX6AAXXDfZLTN/KC2blPpbGx3LZuDda6QXazY/ecZG8KGq0wc3O1ef28rTSk0nzDPogLzMfVxUOpqSiWdkucFWhCFdg9Ptbp7qkS3zJKDZJAEaAFUWJEySOgdI/qt+aGNEK5flvKaagD8IyuywwGNGyxn3wdn/IG5KhQ0aSIZR0g9clCWqsyOuCJGnjsdRleHnEdMkFVxRdcjAairwgsLIssvf+30JDZiRVZDhZhDIjsYLKGSInGJwh6ayqadqf0eD+Jhocx/EQGkNNZXRBUTRF1IeKrgo6Y0BB5pRf05DZ+z/7IMWv9GGmTgLcsA9CUlZ0m9Z5kqHgw2kfH5HvZ3VKN23qq90Bl2D05TWmlKRR1SVWp6j0Y3LFapcHGIUoqfC9DwJ8JT7u8MC/Upk5Xjzb3bNRbC+SqF7CF6eTUZyljysB7/NhyPBPEkb8E8+L6ElGLH4KOEY6+iHvS0wIunI85lj3zx/aShuce/U50YYvg2vCrWRFzixLaTcTqLxZ4+EHXOLgo8pH5J/r3M3OOP0FLtecp4NgOuMsPTBTc7WtxB0TRw438L/gPnwGRj8+d4eaBR2e6MLDBno70HWri/O/YhgN/18OKeruAg09GSVKz//5dxfpvQ0dRoApIkkFRkBdQT1DW11fDvZFpUwmih4paqSAz7Z9zKSH5xmusgczeW0ht1Ww0SvsxeJMsRw7Xk9QxbBwTA/ze481lOefgIARMJreiYNxWcZFk7E3jS50PNNu69NmLko6JeaeG9hEEdR8Ffnb83wQ2eKkp8g783YYsk1sF1bFIFcPKCxM2TU8t1loznMX7SGfr8GEbAVdxpzbiul4c3xYYKzGp3Z+YJqc+Ae8hRZ7KdQxzxsmNHdpOB+uyuhomn7hyGkhTa+zVJku255J4hnJEx5trdh5TMu3aZ28b0nyPsceYgsJfls67434k3Z9qp65978gvC+xP1DWOFiK2qC1t5vLWYqmcVicbpo59677rTGonZqDZ3XH1RNDjh1w7+ycJ4iGWXkBI4DSoMxIAPogQRVVPo37k1kA+T64tEqebyiiH34HSvfYggru/wXwb+WXnwkAAA==',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "Ibrahim Adams",
    NUMERO_OWNER : process.env.NUMERO_OWNER || " 27783583068",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

