import { Controller } from '@nestjs/common';
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
@Controller('rpc-module')
export class RpcModuleController implements IRpcHandler<Payload> {
  public async invoke(
    @RpcPayload() payload: Payload,
    @RpcVersion() version: string,
    @RpcId() id: number | string,
    @RpcMethod() method: string,
  ) {
    return payload;
  }
}
