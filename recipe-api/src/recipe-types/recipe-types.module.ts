import { Module } from '@nestjs/common';
import { RecipeTypesService } from './recipe-types.service';
import { RecipeTypesController } from './recipe-types.controller';

@Module({
  controllers: [RecipeTypesController],
  providers: [RecipeTypesService],
})
export class RecipeTypesModule {}
