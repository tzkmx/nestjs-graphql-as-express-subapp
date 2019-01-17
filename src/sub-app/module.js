import { Module } from '@nestjs/common'
import { SubAppController } from './controller'
import { SubAppService } from './service'
import { AppGraphQLModule } from '../graphql/module'

@Module({
  imports: [
    AppGraphQLModule
  ],
  controllers: [SubAppController],
  providers: [SubAppService]
})
export class SubAppModule {}
