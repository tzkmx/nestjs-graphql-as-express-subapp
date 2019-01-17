import { NestFactory } from '@nestjs/core'
import { SubAppModule } from './module'

export default async function bootstrap () {
  const app = await NestFactory.create(SubAppModule)
  app.listen(5000)

  return app
}
