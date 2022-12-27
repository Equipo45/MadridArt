import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { PokemonModule } from './pokemon/pokemon.module';


@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),//In case the page has visuals
    }),
    MongooseModule.forRoot("mongodb://localhost:27017/nest-pokemon"),//Here we connect to the database that is active in docker
    PokemonModule,
  ],
})
export class AppModule {}
