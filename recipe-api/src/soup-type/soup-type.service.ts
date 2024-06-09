import { Injectable } from '@nestjs/common';
import { Prisma, SoupType } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SoupTypeService {
    constructor(private prisma: PrismaService) { }

    async getSoupType(
        soupTypeWhereUniqueInput: Prisma.SoupTypeWhereUniqueInput,
    ): Promise<SoupType | null> {
        return this.prisma.soupType.findUnique({
            where: soupTypeWhereUniqueInput,
        });
    }

    async createSoupType(data: Prisma.SoupTypeCreateInput): Promise<SoupType> {
        return this.prisma.soupType.create({
            data,
        });
    }
}
