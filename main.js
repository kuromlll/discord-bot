const { ActivityType } = require("discord.js")
const Discord = require("discord.js")

const bot = new Discord.Client({intents: 3276799})
bot.on("ready",() => {

   bot.user.setPresence({activities: [{ name: "kuromlll",type: ActivityType.Watching}], status: "online" })
    console.log(`"\n"  + bot.user.tag +  "est enfin connecté !")`)
})


bot.login(process.env.token);
