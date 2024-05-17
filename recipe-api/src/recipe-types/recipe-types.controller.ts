import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { RecipeTypesService } from './recipe-types.service';
import { CreateRecipeTypeDto } from './dto/create-recipe-type.dto';
import { UpdateRecipeTypeDto } from './dto/update-recipe-type.dto';

@Controller('recipe-types')
export class RecipeTypesController {
  constructor(private readonly recipeTypesService: RecipeTypesService) {}

  @Post()
  create(@Body() createRecipeTypeDto: CreateRecipeTypeDto) {
    return this.recipeTypesService.create(createRecipeTypeDto);
  }

  @Get()
  findAll() {
    return this.recipeTypesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.recipeTypesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateRecipeTypeDto: UpdateRecipeTypeDto,
  ) {
    return this.recipeTypesService.update(+id, updateRecipeTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.recipeTypesService.remove(+id);
  }
}
