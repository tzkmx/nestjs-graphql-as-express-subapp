import { NestFactory } from '@nestjs/core'
import { SubAppModule } from './module'

export default async function bootstrap () {
  const app = await NestFactory.create(SubAppModule)

  return app
}

