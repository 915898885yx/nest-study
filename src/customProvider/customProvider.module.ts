import { DynamicModule, Module } from '@nestjs/common';
import { CustomController } from './customProvider.controller';
import { CustomServerice } from './customProvider.service';
import { Test1 } from './test';
const mockService = { // 实现和CustomServerice一样的方法
    getCustomData () {
        return '123456'
    }
}
// 动态模块
@Module({
  // controllers: [CustomController],
  // providers: [
  //   // {
  //   //     provide: CustomServerice,
  //   //     useValue: mockService
  //   // },
  //   CustomServerice,
  //   {
  //     provide: 'TEST',
  //     useValue: Test1
  //   }
  // ]
})
export class CustomProviderModule {
  static register(options): DynamicModule {
    return {
      module: CustomProviderModule,
      providers: [
        {
          provide: 'CONFIG_OPTIONS',
          useValue: options
        },
        CustomServerice
      ],
      exports: [CustomServerice]
    }
  }
}