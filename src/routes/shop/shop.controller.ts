import { Controller } from '@nestjs/common';
import { ShopService } from './shop.service';

@Controller()
export class ShopController {
    constructor(private readonly shopService: ShopService) {}

    //routes here call functions from the service
}