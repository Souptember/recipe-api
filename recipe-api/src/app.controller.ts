import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Delete,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
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

  //Tag
  @Get('tag')
  getAllTag(): any {
    return this.tagService.getAllTag();
  }

  @Get('tag/:id')
  getTag(@Param('id') id: string): any {
    return this.tagService.getTag({ tagId: Number(id) });
  }

  @Post('tag')
  async createTag(
    @Body() tagData: { tagId: number; tagName: string },
  ): Promise<any> {
    try {
      if (tagData.tagId == 0 || tagData.tagId == null) {
        return await this.tagService.createTag(tagData.tagName);
      } else {
        return await this.tagService.editTag(tagData.tagId, tagData.tagName);
      }
    } catch (e) {
      this.handleError(e);
    }
  }

  @Delete('tag/:id')
  async deleteTag(@Param('id') id: string): Promise<any> {
    try {
      return await this.tagService.deleteTag(Number(id));
    } catch (e) {
      this.handleError(e);
    }
  }

  //Soup Type
  @Get('soupType')
  getAllSoupType(): any {
    return this.soupTypeService.getAllSoupType();
  }

  @Get('soupType/:id')
  getSoupType(@Param('id') id: string): any {
    return this.soupTypeService.getSoupType({ typeId: Number(id) });
  }

  @Post('soupType')
  async createSoupType(
    @Body() soupTypeData: { typeId: number; typeName: string },
  ): Promise<any> {
    try {
      if (soupTypeData.typeId == 0 || soupTypeData.typeId == null) {
        return await this.soupTypeService.createSoupType(soupTypeData.typeName);
      } else {
        return await this.soupTypeService.editSoupType(
          soupTypeData.typeId,
          soupTypeData.typeName,
        );
      }
    } catch (e) {
      this.handleError(e);
    }
  }

  @Delete('soupType/:id')
  async deleteSoupType(@Param('id') id: string): Promise<any> {
    try {
      return await this.soupTypeService.deleteSoupType(Number(id));
    } catch (e) {
      this.handleError(e);
    }
  }

  //Test????
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
  //Error handling
  handleError(error: Error) {
    console.log(error);
    throw new HttpException(
      { status: HttpStatus.BAD_REQUEST, error: error.toString() },
      HttpStatus.BAD_REQUEST,
      {
        cause: error.toString(),
      },
    );
  }
}
