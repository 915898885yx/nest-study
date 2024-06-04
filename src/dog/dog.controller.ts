import { Body, Controller, Get, HttpException, HttpStatus, UseGuards, UseInterceptors } from '@nestjs/common';
import { TestGuard } from 'src/common/guard/test.guard';
import { LoggingInterceptor } from 'src/common/intercept/logging.intercept';
import { GlobalService } from 'src/global/global.service';

@Controller('dog')
@UseInterceptors(LoggingInterceptor)
export class DogController {
    constructor (private readonly globalService: GlobalService) {}
    @Get('global')
    @UseGuards(TestGuard)
    testGlobal (@Body('id') body) {
        console.log(body, 'body')
        return this.globalService.globalService()
    }

    @Get('testIntercept')
    testIntercept () {
        console.log('test intercept fn')
        return 'testIntercept'
    }

    @Get('error')
    dogError (@Body() body) {
        console.log(body, 'body')
        throw new HttpException({
            status: HttpStatus.FORBIDDEN,
            error: 'This is a custom message',
        }, HttpStatus.FORBIDDEN);
    }
}
