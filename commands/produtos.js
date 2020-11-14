const Discord = require("discord.js");

exports.run = (client, message, args) => {
  let autor = message.author;
  
  let embed = new Discord.RichEmbed()
  .setTitle("Produtos - Slay Shop")
  .setDescription(` ( NOME DA CATEGORIA <  ) 
- PRODUTO  AQUI ( DESC DO PRODUTO ) | R$ 0,00
- PRODUTO  AQUI ( DESC DO PRODUTO ) | R$ 00,00
- Servidor de Minecraft ( Até 5 Minigames. ) | R$ 00,00

 ( NOME DA CATEGORIA     ) 

- PRODUTO  AQUI ( DESC DO PRODUTO ) | R$0,00.

 ( NOME DA CATEGORIA :pen_ballpoint:    ) 

- PRODUTO  AQUI ( DESC DO PRODUTO ) |  R$ 0,00
- PRODUTO  AQUI ( DESC DO PRODUTO ) | R$ 0,00

 ( Outros :regedit:   ) 

- PRODUTO  AQUI ( DESC DO PRODUTO ) | R$ 0,00
- PRODUTO  AQUI ( DESC DO PRODUTO ) | R$ 0,00
- PRODUTO  AQUI ( DESC DO PRODUTO ) | R$ 0,00
- PRODUTO  AQUI ( DESC DO PRODUTO ) | R$ 0,00
- PRODUTO  AQUI ( DESC DO PRODUTO ) | R$ 0,00
- PRODUTO  AQUI ( DESC DO PRODUTO ) | R$ 0,00

:white_small_square: Metodo de pagamento 1 | [[MercadoPago]](LINK DO MERCADO PAGO)
:white_small_square: Metodo de pagamento 2 | [[PayPal]](LINK DO PAYPAL)
`)
  .setColor("AQUA")
  .setFooter(`Solicitado por: ${message.author.tag}`, message.author.displayAvatarURL)
  autor.send(embed)
  
}