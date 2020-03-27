import { expect } from 'chai';
import { Collection } from 'discord.js';
import { commands } from './commands';

const collection: Collection<unknown, unknown> = new Collection();

describe('Discord bot commands tests', (): void => {

    beforeEach((): void => {
        Object.keys(commands)
            .map((key: any): Collection<any, any> => {
                return collection.set(commands[key].name, commands[key]);
            });
    });

    it('should be true if it has the commands', (): void => {

        expect(collection.has('!ping')).to.equal(true);
        expect(collection.has('!avatar')).to.equal(true);
        expect(collection.has('!rip')).to.equal(true);
        expect(collection.has('!embed')).to.equal(true);
        expect(collection.has('!image')).to.equal(true);

    });

});