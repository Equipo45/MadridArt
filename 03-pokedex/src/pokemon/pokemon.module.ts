import { Module } from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import { PokemonController } from './pokemon.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Pokemon, PokemonSchema } from './entities/pokemon.entity';

//For working with mongoose we have to import the Schema we just created
@Module({
  controllers: [PokemonController],
  providers: [PokemonService],
  imports: [//This creates the database in the mongoose docker system
    MongooseModule.forFeature([
      {
        name:Pokemon.name,
        schema:PokemonSchema
      }
    ])
  ]
})
export class PokemonModule {}
