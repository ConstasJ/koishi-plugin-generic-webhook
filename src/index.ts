import {Context, Schema} from 'koishi';
import {Pusher} from "./Pusher";

declare module 'koishi' {
    namespace Context {
        interface Services {
            'webhook-pusher': Pusher,
        }
    }
}
Context.service('webhook-pusher');

const name='generic-webhook';

async function apply(ctx:Context){
    ctx.plugin(Pusher);
}

export {name,apply};