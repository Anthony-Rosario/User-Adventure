import { makeUser } from '../utils.js';

const test = QUnit.test;

test('time to test a function', (expect) => {
    const form = new FormData();
    form.append('race', 'elf');
    form.append('name', 'anthony');
    

    const expected = {
        name: 'anthony',
        race: 'elf',
        hp: 100,
        gold: 0,
        completed: {},
    };

    const actual = makeUser(form);

    expect.deepEqual(actual, expected);
});