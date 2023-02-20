/*
    We are creating a mock file directly adjacent to the initial prisma export as
     a rule of thumb. By following this convention, Vitest will know when it mocks the 
    module via vi.mock that it should use that file to find the mocked version
    of the client.
*/

//import all tools needed to create the mocked client
import { PrismaClient } from "@prisma/client";
import { beforeEach } from "vitest";
import { mockDeep, mockReset } from 'vitest-mock-extended';

//let vitest know that between each indivdual test the mock shoult be reset
//to it's orignal state

beforeEach(() => {
    mockReset(prisma)
})

/*
  create and export a deep mock of prisma client using the vitest-mock-extended
  library's mockdeep function which ensures all properties of the object, even
  deeply nested onces are mocked
*/

const prisma = mockDeep<PrismaClient>()

export default prisma;