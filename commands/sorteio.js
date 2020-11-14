const Discord = require('discord.js')
module.exports.run = async (client, message, args) => {
  

var item = "";
  var time;
  var winnerCount;
    var winnersMessage = "";
    let messageArray = message.content.split(" ");
  
  for (let i = 3; i < messageArray.length; i++) {
    item+= (messageArray[i] + " ");
  }0
    var ganhadores = [];
    
    winnerCount = Number(messageArray[1]);
    time = Number(messageArray[2]);
  message.delete()
    var embed = new Discord.RichEmbed()
    .setTitle('Sorteio')
    .setDescription(`Item a ser sorteado: **${item}**

Quantidade de ganhadores: **${winnerCount}**

Duração do sorteio: **${time} segundos**

**Reaja com EMOJI AQUI para participar!**`)
    .setColor(`BLUE`)
    let embeda = await message.guild.channels.get('627320463231680518').send(embed)//627320463231680518
    embeda.react("634760840410693653");
    setTimeout(function() {
      var peopleReacted = embeda.reactions.get("sorteio:634760840410693653").users.array();
      var ganhadores = [];
      var index = Math.floor(Math.random() * peopleReacted.length);
      for (var i = 0; i < winnerCount; i++) {
        ganhadores.push(peopleReacted[index]);
        index = Math.floor(Math.random() * peopleReacted.length);
      }
      message.delete()

      for (var i = 0; i < ganhadores.length; i++){
               if(ganhadores[i].id == client.user.id) {
          continue;
        }
        ganhadoresMessage += (ganhadores[i].toString() + " ");
      }
      
      var haveHas = "has"
      if(winneganhadoresrs.length == 1){
        haveHas = "ganhou o";
      }
      else {
        haveHas = "ganharam o";
      }
      var msgsorteio = new Discord.RichEmbed()
      .setTitle('Sorteio')
      .setDescription(`Item a ser sorteado: **${item}**

Ganhador(es) do sorteio: **${ganhadoresMessage}**`)
      .setColor(`BLUE`)
     message.guild.channels.get('EMOJI AQUI (ID)').send(msgsorteio)// exemplo: 627320463231680518
      
      
      
      
      
    }, time * 1000);
    
    
    
  }
  
  
  
  
  

