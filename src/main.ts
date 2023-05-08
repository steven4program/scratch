// import必要的套件
import { Controller, Module, Get } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";

// 建立Controller處理HTTP request
@Controller()
class AppController {
    // 處理GET / 的request
    @Get()
    getRootRoute() {
        // 回傳字串 'Hi there!'
        return 'Hi there!';
    }
}

// 建立Module包含定義好的AppController
@Module({
    controllers: [AppController]
})
class AppModule {}

// 建立非同步的bootstrap function來啟動NestJS server
async function bootstrap() {
    // 透過AppModule建立新的NestJS application
    const app = await NestFactory.create(AppModule);
    // 啟動NestJS server並監聽port3000
    await app.listen(3000);
}

// 執行bootstrap function來啟動NestJS server
bootstrap();