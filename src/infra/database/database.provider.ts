import { Sequelize } from 'sequelize-typescript';
import ClimateModel from '../repositories/climate/climate-model';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: 'localhost',
        port: 5128,
        username: 'root',
        password: 'password',
        database: 'nest',
      });
      sequelize.addModels([ClimateModel]);
      await sequelize.sync();
      return sequelize;
    },
  },
];