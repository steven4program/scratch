// import必要的套件
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';

// 建立Module包含定義好的AppController
@Module({
    controllers: [AppController]
})
export class AppModule {}