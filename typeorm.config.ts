import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const config: TypeOrmModuleOptions = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'burat',
    password: 'burat',
    database: 'burat',
    entities: ['dist/**/*.entity{.ts,.js}'],
    synchronize: true,
};
export default config
