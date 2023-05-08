// import必要的套件
import { Controller, Get } from '@nestjs/common';

// 建立Controller處理/app下的HTTP request
@Controller('/app')
export class AppController {
    // 處理GET '/hi' 的request
    @Get('/hi')
    getHiThere() {
        // 回傳字串 'Hi there!'
        return 'Hi there!';
    }

    // 處理GET '/bye' 的request
    @Get('/bye')
    getByThere() {
        // 回傳字串 'Bye there!'
        return 'Bye there!';
    }
}