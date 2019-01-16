import { Injectable } from '@nestjs/common'

@Injectable()
export class SubAppService {
  getHello () {
    return 'Hello from the Nest\n'
  }
}

