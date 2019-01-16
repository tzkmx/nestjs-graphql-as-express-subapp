import { Test } from '@nestjs/testing'
import { SubAppController } from './controller'
import { SubAppService } from './service'

describe('SubAppController', () => {
  let controller
  let service

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      controllers: [SubAppController],
      providers: [SubAppService]
    }).compile()

    controller = module.get(SubAppController)
    service = module.get(SubAppService)
  })

  describe('hello', () => {
    it('should say hello', async () => {
      const expected = 'Hello from the Nest\n'

      const spy = jest.spyOn(service, 'getHello')

      expect(await controller.getHello()).toBe(expected)

      expect(spy).toBeCalled()
    })
  })
})
