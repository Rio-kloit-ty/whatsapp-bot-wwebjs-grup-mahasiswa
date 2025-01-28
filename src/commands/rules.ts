import { Client, Message } from "whatsapp-web.js";

export const rules = (client: Client, message: Message): void => {
  const rulesMessage = `
📜 *Group Rules*:
1. Tidak spam.
2. Hormati anggota lainnya.
3. Tidak mengirim konten SARA.
4. Gunakan grup dengan bijak.
    `;
  client.sendMessage(message.from, rulesMessage);
};
