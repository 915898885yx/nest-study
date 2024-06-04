import { Injectable, OnModuleInit } from '@nestjs/common';

@Injectable()
export class GlobalService implements OnModuleInit {
    globalService () {
        return {
            a: '123456'
        }
    }

    onModuleInit () {
        console.log('module init')
    }
}
