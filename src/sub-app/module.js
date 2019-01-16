import { Module } from '@nestjs/common'
import { SubAppController } from './controller'
import { SubAppService } from './service'

@Module({
  imports: [],
  controllers: [SubAppController],
  providers: [SubAppService]
})
export class SubAppModule {}
