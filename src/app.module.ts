import { ConfigModule, ConfigService } from 'nestjs-config';
import { Module } from '@nestjs/common';
import * as path from 'path';
import { RoutesModule } from './routes/routes.module';

@Module({
  imports: [
    RoutesModule,
    ConfigModule.load(path.resolve(__dirname, 'config', '**/!(*.d).{ts,js}')),
  ],
})
export class AppModule {
  static host: string;
  static httpsOn: 'http' | 'https';
  static port: number;

  constructor(private readonly config: ConfigService) {
    AppModule.port = config.get('app.port');
    AppModule.httpsOn = config.get('app.httpsOn');
    AppModule.host = config.get('app.host');
  }
}
