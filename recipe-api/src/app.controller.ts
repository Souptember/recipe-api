import { Controller, Get, Post, Param, Body, Delete } from '@nestjs/common';
import { AppService } from './app.service';
import { TagService } from './tag/tag.service';
import { SoupTypeService } from './soup-type/soup-type.service';

@Controller()
export class AppController {
  [x: string]: any;
  constructor(
    private readonly appService: AppService,
    private readonly tagService: TagService,
    private readonly soupTypeService: SoupTypeService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('tag/:id')
  getTag(@Param('id') id: string): any {
    return this.tagService.getTag({ tagId: Number(id) });
  }

  @Post('tag')
  async createTag(@Body() tagData: { tagName: string }): Promise<any> {
    return this.tagService.createTag(tagData);
  }

  //get all in an array
  @Get('soupType')
  getAllSoupType(): any {
    return this.soupTypeService.getAllSoupType();
  }

  @Get('soupType/:id')
  getSoupType(@Param('id') id: string): any {
    return this.soupTypeService.getSoupType({ typeId: Number(id) });
  }

  @Post('soupType')
  createSoupType(
    @Body() soupTypeData: { typeId: number; typeName: string },
  ): Promise<any> {
    if (soupTypeData.typeId == 0 || soupTypeData.typeId == null) {
      return this.soupTypeService.createSoupType(soupTypeData.typeName);
    } else {
      return this.soupTypeService.editSoupType(
        soupTypeData.typeId,
        soupTypeData.typeName,
      );
    }
  }

  @Delete('soupType/:id')
  deleteSoupType(@Param('id') id: string): Promise<any> {
    return this.soupTypeService.deleteSoupType(Number(id));
  }

  @Get('/recipes')
  getRecipes(): string {
    return JSON.stringify({
      recipes: {
        'first recipe': {
          ingredients: ['tomato', 'onion', 'leaf'],
        },
      },
    });
    // return this.appService.getRecipes(); //from db
  }
}
