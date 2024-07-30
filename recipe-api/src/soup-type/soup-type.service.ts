import { Injectable } from '@nestjs/common';
import { Prisma, SoupType } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SoupTypeService {
  constructor(private prisma: PrismaService) {}

  async getSoupType(
    soupTypeWhereUniqueInput: Prisma.SoupTypeWhereUniqueInput,
  ): Promise<SoupType | null> {
    return this.prisma.soupType.findUnique({
      where: soupTypeWhereUniqueInput,
    });
  }

  async getAllSoupType(): Promise<SoupType[] | null> {
    return this.prisma.soupType.findMany({
      orderBy: [{ typeName: 'asc' }],
    });
  }

  async createSoupType(typeName: string): Promise<SoupType> {
    if (await this.checkNameExists(typeName)) {
      throw new Error(
        'createSoupType: soup type with that name already exists!',
      );
    } else {
      return this.prisma.soupType.create({
        data: { typeName: typeName },
      });
    }
  }

  async editSoupType(typeId: number, typeName: string): Promise<SoupType> {
    if (await this.checkNameExists(typeName)) {
      throw new Error('editSoupType: soup type with that name already exists!');
    } else if (await !this.checkIdExists(typeId)) {
      throw new Error('editSoupType: soup type id does not exist!');
    } else {
      return this.prisma.soupType.update({
        where: { typeId: typeId },
        data: { typeName: typeName },
      });
    }
  }

  async deleteSoupType(typeId: number): Promise<SoupType> {
    if (await !this.checkIdExists(typeId)) {
      throw new Error('deleteSoupType: soup type id does not exist!');
    } else {
      return this.prisma.soupType.delete({
        where: { typeId: typeId },
      });
    }
  }

  async checkNameExists(typeName: string): Promise<boolean> {
    const soupType: SoupType | null = await this.prisma.soupType.findUnique({
      where: { typeName },
    });
    return !!soupType;
  }

  async checkIdExists(typeId: number): Promise<boolean> {
    const soupType: SoupType | null = await this.prisma.soupType.findUnique({
      where: { typeId },
    });
    return !!soupType;
  }
}
