import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';

import { ParserModule } from './parser/parser.module';
import { TelegramModule } from './telegram/telegram.module';
import { VacancyModule } from './vacancy/vacancy.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            envFilePath: '.env',
        }),

        ScheduleModule.forRoot(),

        ParserModule,
        TelegramModule,
        VacancyModule,
    ],

    providers: []
})

export class AppModule {}