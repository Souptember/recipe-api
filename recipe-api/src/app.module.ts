import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RecipeTypesModule } from './recipe-types/recipe-types.module';
import { TagService } from './tag/tag.service';
import { PrismaService } from './prisma/prisma.service';
import { SoupTypeService } from './soup-type/soup-type.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'soup',
      entities: [],
      synchronize: true, //do not set synchronize: true in production
    }),
    RecipeTypesModule,
  ],
  controllers: [AppController],
  providers: [AppService, TagService, PrismaService, SoupTypeService],
})
export class AppModule {}
