import { Controller } from '@nestjs/common';
import { DashboardService } from './dashboard.service';

@Controller()
export class DashboardController {
    constructor(private readonly shopService: DashboardService) {}

    //routes here call functions from the service
}