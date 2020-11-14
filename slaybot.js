const Discord = require('discord.js');
const config = require('./config.json');

const client = new Discord.Client()
const invites = {};
const wait = require('util').promisify(setTimeout);
client.prefix = config.prefix;

//entrada

client.on("message", async message => {
    if(message.author.bot) return;
    if(message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)){
        return message.reply("> Olá, meu prefixo é `!` Caso queira saber meus comandos, utilize !ajuda em #comandos.")}
    if(!message.content.startsWith(config.prefix)) return;

let args = message.content.split(" ").slice(1);
let command = message.content.split(" ")[0];
command = command.slice(config.prefix.length);
  try {
      let commandFile = require(`./commands/${command}.js`);
      delete require.cache[require.resolve(`./commands/${command}.js`)];
      return commandFile.run(client, message, args);
  } catch (err) {
        console.error("Erro:" + err)
  }
})

client.on('guildMemberAdd', member => {
  // Para comparar os convites, precisamos carregar a lista de convites no servido
  member.guild.fetchInvites().then(guildInvites => {
    // Aqui estão os convites existentes no servidor
    const ei = invites[member.guild.id];
    // Atualize a cache dos invites no servidor
    invites[member.guild.id] = guildInvites;
    // Verificar os convites, diretamente para aqueles que subiram +1
    const invite = guildInvites.find(i => ei.get(i.code).uses < i.uses);
    const inviter = client.users.get(invite.inviter.id);
    // Pegar o canal, para registrar os convites
    const logChannel = member.guild.channels.find(channel => channel.name === "AQUI O CANAL exemplo: FSJNFJS");
    // Mensagem
    logChannel.send(`${member.user.tag} entrou usando o código ${invite.code}. Foi convidado por ${inviter.tag}. Código de convite foi usado por ${invite.uses} pessoas.`);
  });
});




client.on("ready", () => {
  console.log("_  .   .   .")
  console.log(".' '; '-' '-'|-.")
  console.log("(     '------.'  )")
  console.log(";            \ /")
  console.log(":     '   ' |/")
  console.log("'._._       \    .;")
  console.log(".-'   ;--.    '--' /")
  console.log("/      \-'---.___.'")
  console.log("|     / 7 \(>o<) /\ ")
  console.log("|     | \ |  . \   \ ")
  console.log("|=====|   |  .  \ |-)")
  console.log("|-'-'   ./_.-._.\|")
  console.log("'-.----'        |")
  console.log("|       |     |")
  console.log(" |     | |   | |")
  console.log(" |_____|_|___|_|")
  console.log("Criado por Kristian")
  console.log(" '-'-----'-----'")
  console.log(`Slay Shop bot ~ Iniciado com, ${client.users.size} usuários e ${client.channels.size} canais.`)

    let messages = [`Assistindo ${client.users.size} pessoas`,
                    `Slay Shop`]

    setInterval(() => {
        let randomMessages = Math.floor(Math.random() * (messages.length - 1) + 1)
        client.user.setActivity(messages[randomMessages])
    }, 10000)

  client.guilds.forEach(g => {
    g.fetchInvites().then(guildInvites => {
      invites[g.id] = guildInvites;
    });
  });
    //0 = Jogando
    //1 = Transmitindo
    //2 = Ouvindo
    //3 = Assistindo
  
})


client.login("NzEyNDUyODEwMTY3NDE4OTAx.XsRxYg.D8SAxJR0LZ-JXg1nCZ6iV12G-ps");