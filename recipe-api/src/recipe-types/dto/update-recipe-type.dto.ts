import { PartialType } from '@nestjs/mapped-types';
import { CreateRecipeTypeDto } from './create-recipe-type.dto';

export class UpdateRecipeTypeDto extends PartialType(CreateRecipeTypeDto) {}
