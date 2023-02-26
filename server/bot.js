const { Bot } = require("grammy");
const USERID = process.env.USERID;
// Create an instance of the `Bot` class and pass your authentication token to it.
const bot = new Bot(process.env.TB_TOKEN); // <-- put your authentication token between the ""

// You can now register listeners on your bot object `bot`.
// grammY will call the listeners when users send messages to your bot.
bot.command("start", async (ctx) => {
    await ctx.reply("Hi! I can only read messages that explicitly reply to me!", {
      // Make Telegram clients automatically show a reply interface to the user.
      reply_markup: { force_reply: true },
    });
  });
// Handle the /start command.
bot.command("start", (ctx) => ctx.reply("Welcome! Up and running."));
// Handle other messages.

bot.on("message", async (ctx) => {
    // Get the chat identifier.
    const msg = ctx.message.text
    const chatId = ctx.msg.chat.id;
    console.log(chatId)
    // The text to reply with
    const text = msg;
    // Send the reply.
    await bot.api.sendMessage(chatId, text);
  });

bot.start().then(() => { console.log(`telegram bot running...`) });

const send2bot = (msg) => { 
  bot.api.sendMessage(USERID, msg)
  return;
}


module.exports = send2bot;