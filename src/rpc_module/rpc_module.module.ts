import { JsonRpcModule } from '@jashkasoft/nestjs-json-rpc';
import { Module } from '@nestjs/common';
import { RpcModuleController } from './rpc_module.controller';
import { RpcModuleService } from './rpc_module.service';

@Module({
  imports: [
    JsonRpcModule.forRoot({
      path: '/rpc', // path to RPC
    }),
  ],
  controllers: [RpcModuleController],
  providers: [RpcModuleService],
})
export class RpcModuleModule {}
