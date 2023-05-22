import { TypeOrmModule } from "@nestjs/typeorm";

export const config: TypeOrmModule = {
    name: 'LocalServer',
    type: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    username: 'root',
    password: '',
    database: 'brgy',
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    synchronize: true,
}
