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
    return this.prisma.soupType.findMany();
  }

  async createSoupType(typeName: string): Promise<SoupType> {
    return this.prisma.soupType.create({
      data: { typeName: typeName },
    });
  }

  async editSoupType(typeId: number, typeName: string): Promise<SoupType> {
    return this.prisma.soupType.update({
      where: { typeId: typeId },
      data: { typeName: typeName },
    });
  }

  async deleteSoupType(typeId: number): Promise<SoupType> {
    return this.prisma.soupType.delete({
      where: { typeId: typeId },
    });
  }
}
