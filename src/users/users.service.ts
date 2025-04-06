import { Body, Injectable } from '@nestjs/common';
import { prisma } from 'libs/prisma';
import { createUserDto } from './dto/create-user.dto';
import { updateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  async getUsers() {
    const data = await prisma.user.findMany();
    return data;
  }

  async createUsers(data: createUserDto) {
    const query = await prisma.user.create({
      data: data,
    });

    return query;
  }

  async getUserById(id: number) {
    const data = await prisma.user.findUnique({
      where: {
        id: id,
      },
    });

    return data;
  }

  async deleteUser(id: number) {
    const data = await prisma.user.delete({
      where: {
        id: id,
      },
    });

    if (!data) {
      return new Error('User not found');
    }

    return data;
  }

  async updateUser(id: number, data: updateUserDto) {
    const query = await prisma.user.update({
      where: {
        id: id,
      },
      data: data,
    });
    return query;
  }
}
