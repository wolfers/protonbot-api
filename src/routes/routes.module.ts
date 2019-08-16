import { Module, MiddlewareConsumer } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { TransformResponse } from '../middleware/response.interceptor';

import { ShopModule } from './shop/shop.module';

import { ShopController } from './shop/shop.controller';
@Module({
    imports: [ShopModule,],
    providers: [
        {
            provide: APP_INTERCEPTOR,
            useClass: TransformResponse,
        },
    ],
})
export class RoutesModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(
            //middleware here
        ).forRoutes(ShopController);
    }
}