import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RecipeTypesModule } from './recipe-types/recipe-types.module';

@Module({
  imports: [RecipeTypesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
