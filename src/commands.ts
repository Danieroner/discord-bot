import { Attachment, RichEmbed, Message } from 'discord.js';

interface Commands {
    name: string;
    description: string;
    execute(msg: Message): Promise<Message>;
}

export const commands: Commands[] = [
    {
        name: '!ping',
        description: 'Ping message',
        async execute(msg: Message): Promise<Message> {

            return await msg.channel.send('pong');

        }
    },
    {
        name: '!avatar',
        description: 'Avatar name!',
        async execute(msg: Message): Promise<Message> {

            return await msg.reply(msg.author.avatarURL);

        }
    },
    {
        name: '!rip',
        description: 'Rip message!',
        async execute(msg: Message): Promise<Message> {

            const attachment: Attachment = new Attachment('https://i.imgur.com/w3duR07.png'); 

            return await msg.channel.send(attachment);

        }
    },
    {
        name: '!embed',
        description: 'Embed message test!',
        async execute(msg: Message): Promise<Message> {

            const embed: RichEmbed = new RichEmbed()
                .setTitle('A slick little embed')
                .setColor(0xFF0000)
                .setDescription('Hello, this is a slick embed!');

            return await msg.channel.send(embed);

        }
    },
    {
        name: '!image',
        description: 'Image description',
        async execute(msg: Message): Promise<Message> {

            const image: RichEmbed = new RichEmbed({ color: 0xFF0000 })
            .setImage('https://i1.wp.com/www.sopitas.com/wp-content/uploads/2019/03/meme-changuito-sorprendido-1120x581.jpg');

            return await msg.channel.send(image);

        }
    }
]