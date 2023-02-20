import { Prisma } from "@prisma/client";
import prisma from "../libs/prisma";

const createUser = async (user: Prisma.UserCreateInput) => {
    return await prisma.user.create({
        data: user
    })
}

export {
    createUser
}