import { Body, Controller, Get, Inject, Post } from "@nestjs/common";
import { UserSerivce } from "./user.service";
import { loginDto, registerDto } from "./user.dto";


@Controller('user/')
export class UserController{

    constructor(@Inject(UserSerivce) private userService:UserSerivce ){}

    @Post()
    async registerUser(@Body() registerData:registerDto){
        return this.userService.registerUser(registerData);
    }

    @Get()
    async loginUser(@Body() loginData:loginDto){
        return this.userService.loginUser(loginData);
    }
}