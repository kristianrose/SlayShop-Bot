const Discord = require('discord.js')

exports.run = (client, message, args) => {
  message.delete()
  
  let msg = args.slice(0).join(" ")
  
  message.channel.send(`**${msg}**`)
}