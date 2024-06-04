import { Controller, Get, Inject } from "@nestjs/common";
import { CustomServerice } from "./customProvider.service";
import { Test1 } from "./test";

@Controller('customProvider')
export class CustomController {
    constructor (private customService: CustomServerice) {}

    @Get()
    getData () {
        return this.customService.getCustomData()
    }
    
    @Get('gettest')
    getData1 () {
        return this.customService.getCustomData1()
    }

    // @Get('a')
    // getTest () {
    //     this.getTest()
    // }
}