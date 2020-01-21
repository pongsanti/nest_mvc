import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  @Render('index')
  root() {
    return {
      pageTitle: 'Hello world',
      youAreUsingPug: true,
      numbers: [
        { id: 1, name: 'A' },
        { id: 2, name: 'B' },
        { id: 3, name: 'C' },
      ],
    };
  }

  @Get('hello')
  getHello(): string {
    return this.appService.getHello();
  }
}
