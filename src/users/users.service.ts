import { Body, Injectable } from '@nestjs/common';
import { prisma } from 'libs/prisma';

@Injectable()
export class UsersService {
  async getUsers() {
    const data = await prisma.user.findMany();
    return data;
  }

  async createUsers(data: any) {
    const query = await prisma.user.create({
      data: data,
    });

    return query;
  }
}
