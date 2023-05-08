// import必要的套件
import { AppModule } from "./app.module";
import { NestFactory } from "@nestjs/core";

// 建立非同步的bootstrap function來啟動NestJS server
async function bootstrap() {
    // 透過AppModule建立新的NestJS application
    const app = await NestFactory.create(AppModule);
    // 啟動NestJS server並監聽port3000
    await app.listen(3000);
}

// 執行bootstrap function來啟動NestJS server
bootstrap();