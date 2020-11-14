const Discord = require('discord.js')

exports.run = (client, message, args) => {
  
 
      let embedfechar = new Discord.RichEmbed()
      .setTitle(`Olá, **${message.author.username}**`)
      .setDescription("Você tem certeza de que deseja fechar o ticket? Reaja abaixo em um prazo de 20 segundos.")
      .setColor("AQUA")
    message.channel.send(embedfechar).then (msg => {
      msg.react("ID DO EMOJI AQUI / SIM");
      msg.react("ID DO EMOJI AQUI / NAO");
      
      const sim = (reaction, user) => reaction.emoji.name === "certo" && user.id === message.author.id;
      const não = (reaction, user) => reaction.emoji.name === "errado1" && user.id === message.author.id;
      const simCollect = msg.createReactionCollector(sim, {
        time: 60000
      });
      const naoCollect = msg.createReactionCollector(não, {
        time: 60000
      });
      
      simCollect.on("collect", sim => {
        let user = message.author;
        message.channel.delete();
        message.delete()
        user.send("Seu atendimento foi fechado! Esperamos que tenhamos sanado todas as suas dúvidas.")
        let log = new Discord.RichEmbed()
        .setTitle("Finalização de atendimentos")
        .setDescription(`Um atendimento foi finalizado!

Atendimento de: ${user}

Fechado por: ${user}`)
        .setColor("AQUA")
        //message.guild.channels.get("635448398916616192").send(log)
      })
         naoCollect.on("collect", não => {
           message.channel.send("Operação cancelada.")
          
         })
    })
    
      
        
      
        
        
    }

