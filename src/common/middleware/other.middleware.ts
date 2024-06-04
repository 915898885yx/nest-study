import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction } from "express";

@Injectable()
export class OtherMiddleWare implements NestMiddleware {
    async use (req: Request, res: Response, next: NextFunction) {
        
        console.log(req.body,' req other')
        next()
    }
}