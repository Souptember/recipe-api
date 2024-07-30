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

  async getAllTag(): Promise<Tag[] | null> {
    return this.prisma.tag.findMany({
      orderBy: [{ tagName: 'asc' }],
    });
  }

  async createTag(tagName: string): Promise<Tag> {
    if (await this.checkNameExists(tagName)) {
      throw new Error('createTag: tag with that name already exists!');
    } else {
      return this.prisma.tag.create({
        data: { tagName: tagName },
      });
    }
  }

  async editTag(tagId: number, tagName: string): Promise<Tag> {
    if (await this.checkNameExists(tagName)) {
      throw new Error('editTag: tag with that name already exists!');
    } else if (await !this.checkIdExists(tagId)) {
      throw new Error('editTag: tag id does not exist!');
    } else {
      return this.prisma.tag.update({
        where: { tagId: tagId },
        data: { tagName: tagName },
      });
    }
  }

  async deleteTag(tagId: number): Promise<Tag> {
    if (await !this.checkIdExists(tagId)) {
      throw new Error('deleteTag: tag id does not exist!');
    } else {
      return this.prisma.tag.delete({
        where: { tagId: tagId },
      });
    }
  }

  async checkNameExists(tagName: string): Promise<boolean> {
    const tag: Tag | null = await this.prisma.tag.findUnique({
      where: { tagName },
    });
    return !!tag;
  }

  async checkIdExists(tagId: number): Promise<boolean> {
    const tag: Tag | null = await this.prisma.tag.findUnique({
      where: { tagId },
    });
    return !!tag;
  }
}
