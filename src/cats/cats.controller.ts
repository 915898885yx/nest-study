import { Controller, Get } from '@nestjs/common';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
    constructor(private readonly catsService: CatsService) {}

    @Get('a')
    getCatsData (): string {
        return 'get data'
    }
}
