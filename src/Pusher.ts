import {Context, Service} from "koishi";
import {Context as KCtx} from 'koa';

function defaultHandler(ctx:KCtx,next:any){

}

type HttpMethods='get'|'post'|'put'|'delete'|'all';

export class Pusher extends Service{
    public constructor(ctx:Context) {
        super(ctx,'webhook-pusher',true);
    }
    public register(path:string,method:HttpMethods = 'post',handler:(ctx:KCtx,next:any)=>void = defaultHandler){
        this.ctx.router[method](path, handler);
    }
}