import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RpcModuleModule } from './rpc_module/rpc_module.module';

@Module({
  imports: [RpcModuleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
