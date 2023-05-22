import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { join } from 'path';

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'burat',
    password: 'burat',
    database: 'burat',
    entities: [join(__dirname, '../**/*.entity.{js,ts}')],
    synchronize: true,
};

