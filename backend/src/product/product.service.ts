import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Product } from "./product.schema";
import { Model } from "mongoose";
import { ProductDto } from "./product.dto";



@Injectable()
export class ProductService{

    constructor(@InjectModel(Product.name) private productModel: Model<Product>) {}

    
    // Get All Product
    async getAllProduct(){
        try {
            const products=await this.productModel.find();
            return{
              success:true,
              message:"Products Founded Successfully!",
              products,
            }
        } 
        catch (error) {
            return{
              success:false,
              message:"Error in Products Finding All!",
              error
            }
        }
    }



    // Get Single Product By Id
    async getProductById(id:string){
        try {
            const product=await this.productModel.findOne({_id:id});
            return{
              success:true,
              message:"Product Founded Successfully!",
              product,
            }
        } 
        catch (error) {
            return{
              success:false,
              message:"Error in Product Finding Single!",
              error
            }
        }
    }



    // Add Product
    async addProduct(productDto : ProductDto){
        try {
            const product=new this.productModel(productDto);
            await product.save();
            return{
              success:true,
              message:"Product Added Successfully!",
              product,
            }
        } 
        catch (error) {
            return{
              success:false,
              message:"Error in Product Adding!",
              error
            }
        }
    }



    // Delete Product
    async deleteProductById(id : string){
        try {
            const product=await this.productModel.deleteOne({_id:id});
            return{
              success:true,
              message:"Product Deleted Successfully!",
              product,
            }
        } 
        catch (error) {
            return{
              success:false,
              message:"Error in Product Deleting!",
            }
        }
    }



    // Update Product
    async updateProduct(id:string,productDto : ProductDto){
        try {
            const product=await this.productModel.updateOne({_id:id},productDto);
            return{
              success:true,
              message:"Product Updated Successfully!",
              product,
            }
        } 
        catch (error) {
            return{
              success:false,
              message:"Error in Product Updating!",
              error
            }
        }
    }
}