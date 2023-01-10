// import { Controller, Get } from '@nestjs/common';
// import { AppService } from './app.service';

// @Controller()
// export class AppController {
//   constructor(private readonly appService: AppService) {}

//   @Get()
//   getHello(): string {
//     return this.appService.getHello();
//   }
// }

import {
  RpcId,
  RpcPayload,
  RpcVersion,
  RpcMethod,
  IRpcHandler,
  RpcHandler,
} from '@jashkasoft/nestjs-json-rpc';

@RpcHandler({
  method: 'test',
})
class Payload {
  city: string;
}
export class TestHandler implements IRpcHandler<Payload> {
  public async invoke(
    @RpcPayload() payload: Payload,
    @RpcVersion() version: string,
    @RpcId() id: number | string,
    @RpcMethod() method: string,
  ) {
    return payload;
  }
}
