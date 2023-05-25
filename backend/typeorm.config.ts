import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const config: TypeOrmModuleOptions = {
  name: 'LocalServer',
  type: 'mysql',
  host: '127.0.0.1',
  port: 3306,
  username: 'dbname',
  password: 'DBpassword!',
  database: 'aslbrgy',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,
};
