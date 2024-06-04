import { Global, Module } from '@nestjs/common';
import { GlobalService } from './global.service';
import { GlobalController } from './global.controller';

@Global()
@Module({
  providers: [GlobalService],
  controllers: [],
  exports: [GlobalService]
})
export class GlobalModule {}
