import { Client, Message } from "whatsapp-web.js";

export const credit = (client: Client, message: Message): void => {
  const creditMessage = `
🤖 *Bot Info*:
- Dibuat oleh: Rio Kentuahmi
- NPM : 210401001
- GitHub: https://github.com/Rio-Git-D/BotWa-WWEBJS-Grub-Mahasiswa 
- Teknologi: wweb.js
    `;
  client.sendMessage(message.from, creditMessage);
};
