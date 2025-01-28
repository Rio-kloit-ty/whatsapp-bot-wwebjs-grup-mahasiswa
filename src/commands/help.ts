import { Client, Message } from "whatsapp-web.js";

export const help = (client: Client, message: Message): void => {
  const helpMessage = `
ℹ️ *Daftar Perintah*:
1. !rules - Menampilkan aturan grup.
2. !namadosen - Menampilkan daftar dosen.
3. !mkhariini - Menampilkan mata kuliah hari ini.
4. !credit - Menampilkan informasi pembuat bot.
    `;
  client.sendMessage(message.from, helpMessage);
};
