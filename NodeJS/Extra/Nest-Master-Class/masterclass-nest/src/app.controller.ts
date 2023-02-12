import { Body, Controller, Post } from '@nestjs/common';
import { PrismaService } from './database/prisma.service';
import { randomUUID } from 'node:crypto';
import { CreateMember } from './DTOS/create-member-body';
import { MembersRepository } from './repositories/members-repository';

@Controller()
export class AppController {
  constructor(private membersRepository: MembersRepository) {}

  @Post()
  async getHello(@Body() body: CreateMember) {
    const { name, function: menberFunction } = body;

    await this.membersRepository.create(name, menberFunction);
  }
}
