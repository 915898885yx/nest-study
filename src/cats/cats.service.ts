import { Injectable } from '@nestjs/common';

@Injectable()
export class CatsService {
    catHandler () {
        return 'cat handler'
    }
}
