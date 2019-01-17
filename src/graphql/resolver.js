import { Resolver, Query } from '@nestjs/graphql'

@Resolver('HelloMessage')
export class HelloMessageResolver {
  @Query()
  hello (_, { name }) {
    return ({ hello: `Hello ${name}`, date: Date.now() })
  }
}
