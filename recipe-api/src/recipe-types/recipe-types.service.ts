import { Injectable } from '@nestjs/common';
import { CreateRecipeTypeDto } from './dto/create-recipe-type.dto';
import { UpdateRecipeTypeDto } from './dto/update-recipe-type.dto';

@Injectable()
export class RecipeTypesService {
  create(createRecipeTypeDto: CreateRecipeTypeDto) {
    return 'This action adds a new recipeType';
  }

  findAll() {
    return `This action returns all recipeTypes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} recipeType`;
  }

  update(id: number, updateRecipeTypeDto: UpdateRecipeTypeDto) {
    return `This action updates a #${id} recipeType`;
  }

  remove(id: number) {
    return `This action removes a #${id} recipeType`;
  }
}
