import { Client, Message } from "whatsapp-web.js";
import { rules } from "../commands/rules";
import { namadosen } from "../commands/namadosen";
import { help } from "../commands/help";
import { credit } from "../commands/credit";
import { mkhariini } from "../commands/mkhariini";

const commandMap: Record<string, (client: Client, message: Message) => void> = {
  "!rules": rules,
  "!namadosen": namadosen,
  "!help": help,
  "!credit": credit,
  "!mkhariini": mkhariini,
};

export const handleCommand = (client: Client, message: Message): void => {
  const command = message.body.toLowerCase();

  if (commandMap[command]) {
    commandMap[command](client, message);
  } else if (command.startsWith("!")) {
    client.sendMessage(
      message.from,
      `⚠️ Perintah *${command}* tidak dikenali. Ketik *!help* untuk melihat daftar perintah.`
    );
  }
};
