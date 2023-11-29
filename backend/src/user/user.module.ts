import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { UserSerivce } from "./user.service";


@Module({
    imports:[],
    controllers:[UserController],
    providers:[UserSerivce]
})

export class UserModule{

}