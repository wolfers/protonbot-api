import { Module, MiddlewareConsumer } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { TransformResponse } from '../middleware/response.interceptor';

import { DiscordModule } from './discord/discord.module';

import { DiscordController } from './discord/discord.controller';
@Module({
    imports: [DiscordModule,],
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
        ).forRoutes(DiscordController);
    }
}