import { Controller, Dependencies, Get } from '@nestjs/common'
import { SubAppService } from './service'

 @Controller('')
 @Dependencies(SubAppService)
 export class SubAppController {
   constructor (appService) {
     this.appService = appService
   }

   @Get()
   getHello () {
     return this.appService.getHello()
   }
 }
 
