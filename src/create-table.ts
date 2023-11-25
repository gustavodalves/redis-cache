import { Connection } from 'mysql2'
import { MySQLConnection } from './database-mysql'

export class TableCustomersCreator {
    constructor(
        private readonly connection: MySQLConnection,
    ) {}

    async create() {
        await this.connection.query(`CREATE TABLE customers (
            id int NOT NULL AUTO_INCREMENT,
            name varchar(150) DEFAULT NULL,
            PRIMARY KEY (id)
          )`)
          
          for(let i = 1; i < 10000; i++) {
            await this.connection.query(
                'insert into customers (name) values(?)', ['name' + i]
            )
          }
    }

}
