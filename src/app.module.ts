import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { CatsModule } from 'src/cats/cats.module';
import { DogModule } from './dog/dog.module';
import { GlobalModule } from './global/global.module';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { OtherMiddleWare } from './common/middleware/other.middleware';
import { CustomProviderModule } from './customProvider/customProvider.module';

@Module({
  imports: [CatsModule, DogModule, GlobalModule, CustomProviderModule.register({option: './folder'})],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware, OtherMiddleWare)
      .forRoutes({ path: '*', method: RequestMethod.ALL })
  }
}
