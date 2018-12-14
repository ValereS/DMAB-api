import { Get, Controller } from '@nestjs/common';
import { AppService } from 'app.service';
import { ROUTE_PREFIX } from 'config/routes';

@Controller(ROUTE_PREFIX)
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  root(): string {
    return this.appService.root();
  }
}
