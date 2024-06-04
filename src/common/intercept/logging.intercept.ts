import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { Observable, catchError, tap } from "rxjs";

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        console.log('inercept before...')
        const now = Date.now()
        return next
            .handle()
            .pipe(
                tap((data) => data['b'] = "123465"),
                catchError((err) => {
                    console.log(err)
                    return err
                })
            )
    }
}