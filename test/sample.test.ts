import { expect, test, vi } from 'vitest';
import { createUser } from '../src/script';

/*
    Mock the module found at ../libs/prisma
    it will not be able to automatically mock the "deep" or "nested" prosperties
    of the prisma object. E.G, prisma.user.create() will not be mocked properly
    as it is deeply nested to the Prisma Client Instance.
    This causes the test to fail as the function will still be run as it 
    normally aginst the real database.
*/

/*
    To solve the problem above, we need to let Vitest know how exactly we
    want that module to b mocked and provide it the value that should be returned
    when the mcoked module is imported, which should include mocked versions of
    the deeply nested properties
*/


vi.mock('../libs/prisma');

test('1 === 1', () => {
    expect(1).toBe(1)
});

test('createUser should return the generated user', async () => {
    const newUser = { email: "user2@prisma.io", name: 'Prisma Fan', password: 'chike'}
    const user = await createUser(newUser);
    expect(user).toStrictEqual({ ...newUser, id: 2 })
})