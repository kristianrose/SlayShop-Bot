const Discord = require('discord.js')

exports.run = async (client, message, args) => {
  
  let autor = message.author;
  
  const inicio = new Discord.RichEmbed()
  .setTitle("Bem-vindo à loja do SlayShop.")
  .setDescription("O que você deseja fazer? \n\n 🛍 - Comprar")
  .setColor("AQUA")
  .setFooter(`Solicitado por: ${message.author.tag}`, message.author.displayAvatarURL)
  autor.send(inicio).then (msg => {
    msg.react("🛍");
    
    const Comprar = (reaction, user) => reaction.emoji.name === "🛍" && user.id === message.author.id;
    
    const ComprarCollect = msg.createReactionCollector(Comprar, {
        time: 60000
      });
    
    ComprarCollect.on("collect", comprar => { //Categoria: Comprar
      msg.delete() 
      //embed de escolher o produto
      let escolhaproduto = new Discord.RichEmbed() // Escola o produto
      .setTitle("Bem-vindo à categoria **COMPRAR**. Selecione sua categoria")
      .setDescription(`:white_small_square: NOME DA CATEGORIA 1 -
:white_small_square: NOME DA CATEGORIA 2 - 👑
:white_small_square: NOME DA CATEGORIA 3- 👑
:white_small_square: NOME DA CATEGORIA 4 - <:Pessoas:625825610773692416>
:white_small_square: NOME DA CATEGORIA 5 - 🖊
:white_small_square: NOME DA CATEGORIA 6 - <👑`)
      .setColor("AQUA")
      .setFooter(`Solicitado por: ${message.author.tag}`, message.author.displayAvatarURL)
      autor.send(escolhaproduto).then (msg => {
        msg.react("👑");
        msg.react("👑");
        msg.react("👑");
        msg.react("👑");
        msg.react("👑");
        msg.react("👑")
        
        
        const categoria1 = (reaction, user) => reaction.emoji.name === "👑" && user.id === message.author.id;
        const categoria2 = (reaction, user) => reaction.emoji.name === "👑" && user.id === message.author.id;
        const categoria3 = (reaction, user) => reaction.emoji.name === "👑" && user.id === message.author.id;
        const categoria4 = (reaction, user) => reaction.emoji.name === "👑" && user.id === message.author.id;
        const categoria5 = (reaction, user) => reaction.emoji.name === "👑" && user.id === message.author.id;
        const categoria6 = (reaction, user) => reaction.emoji.name === "👑" && user.id === message.author.id;
        
        const categoria1Collect = msg.createReactionCollector(categoria1, {
        time: 60000
      });
        const categoria2Collect = msg.createReactionCollector(categoria2, {
        time: 60000
      });
        const categoria3Collect = msg.createReactionCollector(categoria3, {
        time: 60000
      });
        const categoria4Colletor = msg.createReactionCollector(categoria4, {
        time: 60000
      });
        const categoria5rCollect = msg.createReactionCollector(categoria5, {
        time: 60000
      });
      const categoria6Collector = msg.createReactionCollector(categoria6, {
        time: 60000
      });
        
      categoria1Collect.on("collect", collect => {
          msg.delete()
          //embed
          let categoria1 = new Discord.RichEmbed()
          .setTitle("Categoria escolhida: **NOME AQUI**")
          .setDescription(`Clique no produto que deseja comprar.

\- **CATEGORIA NOME**

- PRODUTO  AQUI ( DESC DO PRODUTO ) | R$ 0,00 [[MercadoPago]](https://github.com/kristianrose)   [[PayPal]](https://github.com/kristianrose)
- PRODUTO  AQUI ( DESC DO PRODUTO ) | R$ 0,00 [[MercadoPago]](https://github.com/kristianrose)   [[PayPal]](https://github.com/kristianrose)
- PRODUTO  AQUI ( DESC DO PRODUTO ) | R$ 0,00 [[MercadoPago]](https://github.com/kristianrose)   [[PayPal]](https://github.com/kristianrose)
- PRODUTO  AQUI ( DESC DO PRODUTO ) | R$ 0,00 [[MercadoPago]](https://github.com/kristianrose)   [[PayPal]](https://github.com/kristianrose)
- PRODUTO  AQUI ( DESC DO PRODUTO ) | R$ 0,00 [[MercadoPago]](https://github.com/kristianrose)   [[PayPal]](https://github.com/kristianrose)
- PRODUTO  AQUI ( DESC DO PRODUTO ) | R$ 0,00 [[MercadoPago]](https://github.com/kristianrose)   [[PayPal]](https://github.com/kristianrose)

\ - **CATEGORIA**

- PRODUTO  AQUI ( DESC DO PRODUTO ) | R$ 0,00 [[MercadoPago]](https://github.com/kristianrose)   [[PayPal]](https://github.com/kristianrose)
- PRODUTO  AQUI ( DESC DO PRODUTO ) | R$ 0,00 [[MercadoPago]](https://github.com/kristianrose)   [[PayPal]](https://github.com/kristianrose)
- PRODUTO  AQUI ( DESC DO PRODUTO ) | R$ 0,00 [[MercadoPago]](https://github.com/kristianrose)   [[PayPal]](https://github.com/kristianrose)
- PRODUTO  AQUI ( DESC DO PRODUTO ) | R$ 0,00 [[MercadoPago]](https://github.com/kristianrose)   [[PayPal]](https://github.com/kristianrose)
- PRODUTO  AQUI ( DESC DO PRODUTO ) | R$ 0,00 [[MercadoPago]](https://github.com/kristianrose)   [[PayPal]](https://github.com/kristianrose)
- PRODUTO  AQUI ( DESC DO PRODUTO ) | R$ 0,00 [[MercadoPago]](https://github.com/kristianrose)   [[PayPal]](https://github.com/kristianrose)`)
          .setColor("AQUA")
          autor.send(categoria1)
        })// Fim da categoria categoria1
        categoria2Collect.on("collect", categoria2 => { // Categoria categoria2
          msg.delete()
          //Embed
          const categoria2embed = new Discord.RichEmbed()
          .setTitle("Categoria escolhida: **NOME AQUI**")
          .setDescription(`Clique no produto que deseja comprar.

 **CATEGORIA**
- PRODUTO  AQUI ( DESC DO PRODUTO ) | R$ 0,00 [[MercadoPago]](https://github.com/kristianrose)   [[PayPal]](https://github.com/kristianrose)
- PRODUTO  AQUI ( DESC DO PRODUTO ) | R$ 0,00 [[MercadoPago]](https://github.com/kristianrose)   [[PayPal]](https://github.com/kristianrose)
- PRODUTO  AQUI ( DESC DO PRODUTO ) | R$ 0,00 [[MercadoPago]](https://github.com/kristianrose)   [[PayPal]](https://github.com/kristianrose)
- PRODUTO  AQUI ( DESC DO PRODUTO ) | R$ 0,00 [[MercadoPago]](https://github.com/kristianrose)   [[PayPal]](https://github.com/kristianrose)
- PRODUTO  AQUI ( DESC DO PRODUTO ) | R$ 0,00 [[MercadoPago]](https://github.com/kristianrose)   [[PayPal]](https://github.com/kristianrose)
- PRODUTO  AQUI ( DESC DO PRODUTO ) | R$ 0,00 [[MercadoPago]](https://github.com/kristianrose)   [[PayPal]](https://github.com/kristianrose)`)
          .setColor("AQUA")
          autor.send(categoria2embed)
        })//FIm da categoria categoria2
        categoria3Colletor.on("collect", categoria3 => {
          msg.delete()
          //embed
          let categoria3embed = new Discord.RichEmbed()
          .setTitle("Categoria escolhida: **NOME AQUI**")
          .setDescription(`Clique no produto que deseja comprar.

 **CATEGORIA**
- PRODUTO  AQUI ( DESC DO PRODUTO ) | R$ 0,00 [[MercadoPago]](https://github.com/kristianrose)   [[PayPal]](https://github.com/kristianrose)
- PRODUTO  AQUI ( DESC DO PRODUTO ) | R$ 0,00 [[MercadoPago]](https://github.com/kristianrose)   [[PayPal]](https://github.com/kristianrose)
- PRODUTO  AQUI ( DESC DO PRODUTO ) | R$ 0,00 [[MercadoPago]](https://github.com/kristianrose)   [[PayPal]](https://github.com/kristianrose)
- PRODUTO  AQUI ( DESC DO PRODUTO ) | R$ 0,00 [[MercadoPago]](https://github.com/kristianrose)   [[PayPal]](https://github.com/kristianrose)
- PRODUTO  AQUI ( DESC DO PRODUTO ) | R$ 0,00 [[MercadoPago]](https://github.com/kristianrose)   [[PayPal]](https://github.com/kristianrose)
- PRODUTO  AQUI ( DESC DO PRODUTO ) | R$ 0,00 [[MercadoPago]](https://github.com/kristianrose)   [[PayPal]](https://github.com/kristianrose)`)
          .setColor("AQUA")
          autor.send(categoria3embed)
        })
        
        categori4Collect.on("collect", categoria4 => {
          msg.delete()
          //embed
          let categoria4embed = new Discord.RichEmbed()
          .setTitle("Categoria escolhida: **NOME AQUI**.")
          .setDescription(`Clique no produto que deseja comprar.

 **CATEGORIA**
- PRODUTO  AQUI ( DESC DO PRODUTO ) | R$ 0,00 [[MercadoPago]](https://github.com/kristianrose)   [[PayPal]](https://github.com/kristianrose)
- PRODUTO  AQUI ( DESC DO PRODUTO ) | R$ 0,00 [[MercadoPago]](https://github.com/kristianrose)   [[PayPal]](https://github.com/kristianrose)
- PRODUTO  AQUI ( DESC DO PRODUTO ) | R$ 0,00 [[MercadoPago]](https://github.com/kristianrose)   [[PayPal]](https://github.com/kristianrose)
- PRODUTO  AQUI ( DESC DO PRODUTO ) | R$ 0,00 [[MercadoPago]](https://github.com/kristianrose)   [[PayPal]](https://github.com/kristianrose)
- PRODUTO  AQUI ( DESC DO PRODUTO ) | R$ 0,00 [[MercadoPago]](https://github.com/kristianrose)   [[PayPal]](https://github.com/kristianrose)
- PRODUTO  AQUI ( DESC DO PRODUTO ) | R$ 0,00 [[MercadoPago]](https://github.com/kristianrose)   [[PayPal]](https://github.com/kristianrose)`)
          .setColor("AQUA")
          autor.send(categoria4embed)
        })
        categoria5Collector.on("collect", categoria5 => {
          msg.delete()
          //embed
          let categoria5Embed = new Discord.RichEmbed()
          .setTitle("Categoria escolhida: **NOME AQUI**")
          .setDescription(`Clique no produto que deseja comprar.

 **CATEGORIA**
- PRODUTO  AQUI ( DESC DO PRODUTO ) | R$ 0,00 [[MercadoPago]](https://github.com/kristianrose)   [[PayPal]](https://github.com/kristianrose)
- PRODUTO  AQUI ( DESC DO PRODUTO ) | R$ 0,00 [[MercadoPago]](https://github.com/kristianrose)   [[PayPal]](https://github.com/kristianrose)
- PRODUTO  AQUI ( DESC DO PRODUTO ) | R$ 0,00 [[MercadoPago]](https://github.com/kristianrose)   [[PayPal]](https://github.com/kristianrose)
- PRODUTO  AQUI ( DESC DO PRODUTO ) | R$ 0,00 [[MercadoPago]](https://github.com/kristianrose)   [[PayPal]](https://github.com/kristianrose)
- PRODUTO  AQUI ( DESC DO PRODUTO ) | R$ 0,00 [[MercadoPago]](https://github.com/kristianrose)   [[PayPal]](https://github.com/kristianrose)
- PRODUTO  AQUI ( DESC DO PRODUTO ) | R$ 0,00 [[MercadoPago]](https://github.com/kristianrose)   [[PayPal]](https://github.com/kristianrose)`)
          .setColor("AQUA")
          autor.send(categoria5Embed)
        })

        categoria6Collect.on("collect", categoria6 => {
          msg.delete()
          
          let categoria6embed = new Discord.RichEmbed()
          .setTitle("Categoria escolhida: **NOME AQUI**.")
          .setDescription(`Clique no produto que deseja comprar.

**CATEGORIA**
- PRODUTO  AQUI ( DESC DO PRODUTO ) | R$ 0,00 [[MercadoPago]](https://github.com/kristianrose)   [[PayPal]](https://github.com/kristianrose)
- PRODUTO  AQUI ( DESC DO PRODUTO ) | R$ 0,00 [[MercadoPago]](https://github.com/kristianrose)   [[PayPal]](https://github.com/kristianrose)
- PRODUTO  AQUI ( DESC DO PRODUTO ) | R$ 0,00 [[MercadoPago]](https://github.com/kristianrose)   [[PayPal]](https://github.com/kristianrose)
- PRODUTO  AQUI ( DESC DO PRODUTO ) | R$ 0,00 [[MercadoPago]](https://github.com/kristianrose)   [[PayPal]](https://github.com/kristianrose)
- PRODUTO  AQUI ( DESC DO PRODUTO ) | R$ 0,00 [[MercadoPago]](https://github.com/kristianrose)   [[PayPal]](https://github.com/kristianrose)
- PRODUTO  AQUI ( DESC DO PRODUTO ) | R$ 0,00 [[MercadoPago]](https://github.com/kristianrose)   [[PayPal]](https://github.com/kristianrose)
`)
          .setColor("AQUA")
          
          autor.send(categoria6embed)

        })
      })
      
    })// fim do coletor de compra
      message.delete()
    })
}
