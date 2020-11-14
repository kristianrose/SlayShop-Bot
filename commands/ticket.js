const Discord = require('discord.js')

exports.run = (client, message, args) => {
  
  let confirme = new Discord.RichEmbed()
  .setTitle(`Olá, ${message.author.username}`)
  .setDescription("Você tem certeza de que deseja abrir um TICKET?")
  .setColor("AQUA")
  
  message.channel.send(confirme).then (msg => {
    msg.react("ID DO EMOJI AQUI / SIM");
    msg.react("ID DO EMOJI AQUI / NAO");
    if(msg.react.id === client.user.id) return
    
    const sim = (reaction, user) => reaction.emoji.name === "certo" && user.id === message.author.id;
    const nao = (reaction, user) => reaction.emoji.name === "erradosim" && user.id === message.author.id;
    
    const simcollect = msg.createReactionCollector(sim, {
        time: 60000,
        max: 2
      });
    const naocollect = msg.createReactionCollector(nao, {
        time: 60000,
        max: 2
      });
    
    simcollect.on("collect", coletado => {
  let autor = message.author;
    if (!message.guild.roles.exists("name", "STAFF")) return message.channel.send(`Tem que ter a role que tu definiu seu burro mds`);
    if (message.guild.channels.exists("ticket", "ticket-" + message.author.username)) return message.channel.send(`Desculpe, mas você já possui um ticket aberto.`);
    message.guild.createChannel(`ticket-de-${autor.username}`, "TICKET").then(c => {
        let staff = message.guild.roles.find("name", "Equipe Slay");
        let todomundo = message.guild.roles.find("name", "@everyone");
      c.setParent('CANAL ID ')
        c.overwritePermissions(staff, {
            SEND_MESSAGES: true,
            READ_MESSAGES: true
        });
        c.overwritePermissions(todomundo, {
            SEND_MESSAGES: false,
            READ_MESSAGES: false
        });
        c.overwritePermissions(autor, {
            SEND_MESSAGES: true,
            READ_MESSAGES: true
        });
        autor.send(` Seu ticket de revisão foi aberto! Acesso o chat <#${c.id}> para visualizá-lo.`);
        const embed = new Discord.RichEmbed()
        .setColor(0xCF40FA)
        .setDescription(`Olá, ${message.author}!  Bem-vindo ao Slay Shop - Atendimentos. A partir de agora, você está em um chat exclusivo com nossa equipe de suporte. Fique à vontade para sanar todas as suas dúvidas!`)
        .setTimestamp();
        c.send({ embed: embed });
    }).catch(console.error);
      })
    
    naocollect.on("collect", coletadoo => {
      message.delete()
      
      let embednao = new Discord.RichEmbed()
      .setTitle("Operação cancelada.")
      .setDescription("O ticket não foi aberto")
      .setColor("AQUA")
      
      msg.channel.send(embednao)
      
    })
    })
    
}
                                      