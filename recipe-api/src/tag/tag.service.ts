import { Injectable } from '@nestjs/common';
import { Prisma, Tag } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TagService {
  constructor(private prisma: PrismaService) {}

  async getTag(
    tagWhereUniqueInput: Prisma.TagWhereUniqueInput,
  ): Promise<Tag | null> {
    return this.prisma.tag.findUnique({
      where: tagWhereUniqueInput,
    });
  }

  async createTag(data: Prisma.TagCreateInput): Promise<Tag> {
    return this.prisma.tag.create({
      data,
    });
  }
}
