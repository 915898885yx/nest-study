import { CanActivate, ExecutionContext } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
export class TestGuard implements CanActivate {
    constructor (private reflector: Reflector) {}

    canActivate (context: ExecutionContext): boolean {
        console.log(context.getHandler(), 'role')
        // const roles = this.reflector.get<string[]>('roles', context.getHandler())
        const request = context.switchToHttp().getRequest();
        debugger
        return request
    }
}