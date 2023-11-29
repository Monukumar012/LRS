import { Prop,SchemaFactory,Schema } from "@nestjs/mongoose"
import { HydratedDocument } from "mongoose"

export type BlogDocument = HydratedDocument<Product>;



@Schema()
export class Product{
    @Prop({required:true,type:String})
    title:string


    @Prop({required:true,type:String})
    description:string

    @Prop()
    code?:string


    @Prop({required:true,type:String})
    image:string
}


export const ProductSchema = SchemaFactory.createForClass(Product);