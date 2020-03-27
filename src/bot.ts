import { Client, Collection, Message } from 'discord.js';
import auth from './auth.json';
import { commands } from './commands';

interface Bootstrap {
    run(): Promise<string>;
}

class Bot {

    private readonly client: Client = new Client();
    private readonly collection: Collection<any, any> = new Collection();

    private setCommands = (): void => {
        Object.keys(commands)
            .map((key: any): Collection<any, any> => {
                return this.collection.set(commands[key].name, commands[key]);
            });
    }

    private command = async (msg: Message): Promise<void> => {

        const args: string[] = msg.content.split(/ +/);
        const command: string | undefined = args.shift()?.toLocaleLowerCase();

        console.info(`Called command: ${command}`);

        if (!this.collection.has(command)) return;

        try {
            await this.collection.get(command).execute(msg);
        } catch (err) {
            console.error(err);
            await msg.reply('there was an error trying to execute that command!');
        }

    }

    public run = async (): Promise<string> => {
        this.setCommands();
        this.client.on('ready', () =>  console.log('I am ready'));
        this.client.on('message', this.command);
        return await this.client.login(auth.token);
    }

}

const boostrap: Bootstrap = new class extends Bot implements Bootstrap {}

boostrap.run();