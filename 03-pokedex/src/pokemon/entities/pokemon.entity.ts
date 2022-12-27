import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { Document } from "mongoose"

@Schema()
export class Pokemon extends Document{

    //The if is given by mongo
    @Prop({
        unique:true,
        index:true,
    })
    name:string

    @Prop({
        unique:true,
        index:true,
    })
    no:number
}

//De esta manera se crean los scemas automaticamente en mongo
export const PokemonSchema = SchemaFactory.createForClass( Pokemon );