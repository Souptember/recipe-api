import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { TagService } from './tag/tag.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly tagService: TagService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("tag/:id")
  getTag(@Param('id') id: string): any {
    return this.tagService.getTag({ tagId: Number(id) });
  }

  @Post('tag')
  async createTag(
    @Body() tagData: { tagName: string},
  ): Promise<any> {
    return this.tagService.createTag(tagData);
  }

  @Get("/recipes")
  getRecipes(): string {
    return JSON.stringify({
      "recipes":
      {
        "first recipe":
        {
          "ingredients": [
            "tomato", "onion", "leaf"]
        }
      }
    });
    // return this.appService.getRecipes(); //from db
  }


  
}
