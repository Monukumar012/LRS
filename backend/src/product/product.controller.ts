import { Body, Controller, Delete, Get, Inject, Param, Patch, Post } from "@nestjs/common";
import { ProductService } from "./product.service";
import { ProductDto } from "./product.dto";


@Controller('product')
export class ProductController{
    constructor(@Inject(ProductService) private productService:ProductService){}

    // Get All Product
    @Get()
    getAllProduct(){
        return this.productService.getAllProduct();
    }

    // Get Single Product By Id
    @Get(':id')
    getProductById(@Param() id){
        return this.productService.getProductById(id);
    }

    // Add Product
    @Post(':id')
    addProduct(@Body() product:ProductDto){
        return this.productService.addProduct(product);        
    }

    // Delete Product
    @Delete(':id')
    deleteProductById(@Param() id){
        return this.productService.deleteProductById(id);        
    }

    // Update Product
    @Patch(':id')
    updateProduct(@Param('id') id:string, @Body() product:ProductDto){
        return this.productService.updateProduct(id,product);        
    }
}