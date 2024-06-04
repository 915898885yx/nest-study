import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction } from "express";

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        console.log('request logger middleware')
        req.body['xxx'] = '123456'
        next()
    }
}