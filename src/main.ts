import { RedisDatabase } from "./cache";
import { TableCustomersCreator } from "./create-table";
import { MySQLConnection } from "./database-mysql";


async function main() {
    const connection = new MySQLConnection()
    
    connection.connect()

    // create data to test
    // new TableCustomersCreator(connection).create()

    const redis = new RedisDatabase()

    const idCached = 999
    const idCachedInStr = String(idCached)

    const cache = (await redis.get(String(idCachedInStr)))

    if(!cache) {
        const [customer] = await connection.query(
            'select * from customers where id = ? limit 1', [idCached]
        )
        await redis.set(idCachedInStr, JSON.stringify(customer))
    }
}

main()
