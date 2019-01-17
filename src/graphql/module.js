import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { HelloMessageResolver } from './resolver'
import types from './types/hello'
import { join } from 'path'

@Module({
  imports: [
    GraphQLModule.forRoot({
      typeDefs: types,
      path: '/graphql',
      definitions: {
        path: join(process.cwd(), 'graphql.schema.ts')
      }
    })
  ],
  providers: [
    HelloMessageResolver
  ]
})
export class AppGraphQLModule {}
