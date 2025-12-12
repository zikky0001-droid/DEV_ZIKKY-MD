const settings = require("../settings");

async function aliveCommand(sock, chatId, message) {
    try {
        const message1 = 
            `*╭─────────────────────────╮*\n` +
            `*🤖 DEV•ZIKKY Bot is Alive🥳*\n\n` +
            `*🎖️ Bot Version:* ${settings.version}\n` +
            `*🚀 Status:* Online\n` +
            `*🌟 Some Features:*\n` +
            `• 😁 Group Management\n` +
            `• Antilink Protection\n` +
            `• 😈 Fun Commands\n` +
            `• And more!\n\n` +
            `Type *.menu* for full bot-command list\n` +
            `*╰─────────────────────────╯*`;

        await sock.sendMessage(chatId, {
            text: message1,
            contextInfo: {
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363400099172810@newsletter',
                    newsletterName: 'DEV•ZIKKY MD',
                    serverMessageId: -1
                }
            }
        }, { quoted: message });
    } catch (error) {
        console.error('Error in alive command:', error);
        await sock.sendMessage(
            chatId,
            { text: 'Error encountered but; Bot is alive ✅ and running🚀🚀!' },
            { quoted: message }
        );
    }
}

module.exports = aliveCommand;
