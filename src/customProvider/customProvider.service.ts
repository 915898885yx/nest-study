import { Inject, Injectable } from "@nestjs/common";
import { Test1 } from "./test";

@Injectable()
export class CustomServerice {
    constructor (@Inject('CONFIG_OPTIONS') private test: Test1) {
        console.log(test, 'test')
    }
    getCustomData () {
        return {
            code: 0,
            message: 'getCustomData'
        }
    }
    getCustomData1 () {
        console.log(test, 'test1')
        return 'test'
    }
}