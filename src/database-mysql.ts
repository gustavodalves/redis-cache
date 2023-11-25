import db from 'mysql2'

export class MySQLConnection {
    connection: db.Connection
    connect() {
        const connection = db.createConnection({
            host: 'localhost',
            port: 3307,
            password: 'admin',
            user: 'root',
            database: 'test'
        })
        this.connection = connection
        return connection
    }

    async query(
        query: string,
        values?: any[]
    ): Promise<any> {
        return new Promise((resolve, reject) => {
            this.connection.query(query, values, (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        });
    }
}