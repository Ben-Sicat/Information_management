import { TypeOrmModule } from "@nestjs/typeorm";

export const config: TypeOrmModule = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'burat',
    password: 'burat',
    database: 'burat',
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    synchronize: true,
}
