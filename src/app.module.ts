import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { config } from 'dotenv';
import { ClimateModule } from './domain/climate/climate.module';
import { PaginateModule } from 'nestjs-sequelize-paginate'

config();
@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      autoLoadModels: true,
      synchronize: true,
    }),
    PaginateModule.forRoot({
      url: 'http://localhost:3000',
    }),
    ClimateModule,
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
