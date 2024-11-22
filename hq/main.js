const { Client } = require('discord.js-selfbot-v13');
const client = new Client();

client.login('ODQ0NjQxMDQ3MTQ5MjgxMjkw.GxyxaY.aznwknI2_6eySAUh0f2O6JttFVH8ZA-YY2LVPs');

client.on('ready', async () => {
  console.log(`${client.user.username} hazır loga cikabilirsin aslan cirak`);
});

const allowedChannelId = '1307390301488287769';

client.on('messageCreate', async (message) => {
  if (message.channel.id !== allowedChannelId || message.author.id !== client.user.id) return;

  if (message.content.startsWith('!early')) {
    const args = message.content.split(' ');
    const guildId = args[1];

    if (!guildId) {
      return message.channel.send('Lütfen geçerli bir sunucu ID\'si girin.');
    }

    try {
      const guild = await client.guilds.fetch(guildId);
      const members = await guild.members.fetch();

      const earlySupporters = members.filter((member) =>
        member.user.flags && member.user.flags.has('EARLY_SUPPORTER')
      );

      if (earlySupporters.size === 0) {
        message.channel.send('Bu sunucuda **Early Supporter** rozetine sahip kimse yok.');
      } else {
        const names = earlySupporters.map((member) => ` ${member.user.tag}`).join('\n');
        message.channel.send(`\`\`\`md\n**Early Supporter** rozetine sahip kullanıcılar:\n${names}\n\`\`\``);
      }
    } catch (error) {
      console.error(error);
      message.channel.send('Sunucuya erişirken bir hata oluştu. Lütfen sunucu ID\'sinin doğru olduğundan emin olun.');
    }
  }

  if (message.content.startsWith('!botdev')) {
    const args = message.content.split(' ');
    const guildId = args[1];

    if (!guildId) {
      return message.channel.send('Lütfen geçerli bir sunucu ID\'si girin.');
    }

    try {
      const guild = await client.guilds.fetch(guildId);
      const members = await guild.members.fetch();

      const botDevelopers = members.filter((member) =>
        member.user.flags && member.user.flags.has('EARLY_VERIFIED_BOT_DEVELOPER')
      );

      if (botDevelopers.size === 0) {
        message.channel.send('Bu sunucuda **Verified Bot Developer** rozetine sahip kimse yok.');
      } else {
        const names = botDevelopers.map((member) => ` ${member.user.tag}`).join('\n');
        message.channel.send(`\`\`\`md\n**Verified Bot Developer** rozetine sahip kullanıcılar:\n${names}\n\`\`\``);
      }
    } catch (error) {
      console.error(error);
      message.channel.send('Sunucuya erişirken bir hata oluştu. Lütfen sunucu ID\'sinin doğru olduğundan emin olun.');
    }
  }

  if (message.content.startsWith('!hypesquad')) {
    const args = message.content.split(' ');
    const guildId = args[1];

    if (!guildId) {
      return message.channel.send('Lütfen geçerli bir sunucu ID\'si girin.');
    }

    try {
      const guild = await client.guilds.fetch(guildId);
      const members = await guild.members.fetch();

      const hypesquadMembers = members.filter((member) =>
        member.user.flags && member.user.flags.has('HYPESQUAD_EVENTS')
      );

      if (hypesquadMembers.size === 0) {
        message.channel.send('Bu sunucuda **HypeSquad** rozetine sahip kimse yok.');
      } else {
        const names = hypesquadMembers.map((member) => ` ${member.user.tag}`).join('\n');
        message.channel.send(`\`\`\`md\n**HypeSquad** rozetine sahip kullanıcılar:\n${names}\n\`\`\``);
      }
    } catch (error) {
      console.error(error);
      message.channel.send('Sunucuya erişirken bir hata oluştu. Lütfen sunucu ID\'sinin doğru olduğundan emin olun.');
    }
  }

  if (message.content.startsWith('!modmezunu')) {
    const args = message.content.split(' ');
    const guildId = args[1];

    if (!guildId) {
      return message.channel.send('Lütfen geçerli bir sunucu ID\'si girin.');
    }

    try {
      const guild = await client.guilds.fetch(guildId);
      const members = await guild.members.fetch();

      const modAlumni = members.filter((member) =>
        member.user.flags && member.user.flags.has('DISCORD_CERTIFIED_MODERATOR')
      );

      if (modAlumni.size === 0) {
        message.channel.send('Bu sunucuda **Moderator Programs Alumni** rozetine sahip kimse yok.');
      } else {
        const names = modAlumni.map((member) => ` ${member.user.tag}`).join('\n');
        message.channel.send(`\`\`\`md\n**Moderator Programs Alumni** rozetine sahip kullanıcılar:\n${names}\n\`\`\``);
      }
    } catch (error) {
      console.error(error);
      message.channel.send('Sunucuya erişirken bir hata oluştu. Lütfen sunucu ID\'sinin doğru olduğundan emin olun.');
    }
  }



   if (message.content.startsWith('!mod')) {
    const args = message.content.split(' ');
    const guildId = args[1];

    if (!guildId) {
      return message.channel.send('Lütfen geçerli bir sunucu ID\'si girin.');
    }

    try {
      const guild = await client.guilds.fetch(guildId);
      const members = await guild.members.fetch();

      const modAlumni = members.filter((member) =>
        member.user.flags && member.user.flags.has('DISCORD_EMPLOYEE')
      );

      if (modAlumni.size === 0) {
        message.channel.send('Bu sunucuda **Moderator rozetine sahip kimse yok.');
      } else {
        const names = modAlumni.map((member) => ` ${member.user.tag}`).join('\n');
        message.channel.send(`\`\`\`md\n**Moderator rozetine sahip kullanıcılar:\n${names}\n\`\`\``);
      }
    } catch (error) {
      console.error(error);
      message.channel.send('Sunucuya erişirken bir hata oluştu. Lütfen sunucu ID\'sinin doğru olduğundan emin olun.');
    }
  }



  if (message.content.startsWith('!partner')) {
    const args = message.content.split(' ');
    const guildId = args[1];

    if (!guildId) {
      return message.channel.send('Lütfen geçerli bir sunucu ID\'si girin.');
    }

    try {
      const guild = await client.guilds.fetch(guildId);
      const members = await guild.members.fetch();

      const modAlumni = members.filter((member) =>
        member.user.flags && member.user.flags.has('PARTNERED_SERVER_OWNER')
      );

      if (modAlumni.size === 0) {
        message.channel.send('Bu sunucuda **Partner rozetine sahip kimse yok.');
      } else {
        const names = modAlumni.map((member) => ` ${member.user.tag}`).join('\n');
        message.channel.send(`\`\`\`md\n**Partnerlik rozetine sahip kullanıcılar:\n${names}\n\`\`\``);
      }
    } catch (error) {
      console.error(error);
      message.channel.send('Sunucuya erişirken bir hata oluştu. Lütfen sunucu ID\'sinin doğru olduğundan emin olun.');
    }
  }



if (message.content === '!komutlar') {
  const komutlar = `
\`\`\`md
**Komutlar Listesi:**
- **!early <sunucuID>**    : Belirtilen sunucudaki Early Supporter rozetine sahip kullanıcıları listeler.
- **!botdev <sunucuID>**   : Belirtilen sunucudaki Verified Bot Developer rozetine sahip kullanıcıları listeler.
- **!hypesquad <sunucuID>**: Belirtilen sunucudaki HypeSquad rozetine sahip kullanıcıları listeler.
- **!modmezunu <sunucuID>**: Belirtilen sunucudaki Moderator Programs Alumni rozetine sahip kullanıcıları listeler.
- **!partner <sunucuID>**  : Belirtilen sunucudaki Partner rozetine sahip kullanıcıları listeler.
- **!mod <sunucuID>**      : Belirtilen sunucudaki Staff rozetine sahip kullanıcıları listeler.
- **!komutlar**            : Tüm kullanılabilir komutları listeler.
\`\`\`
`;
  message.channel.send(komutlar);
}


});
