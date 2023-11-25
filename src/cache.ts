import * as redis from 'redis'

export interface ObjectKeyDatabase {
    get(key: string): Promise<string | null>
    set(key: string, value: string): Promise<void>
}

export class RedisDatabase implements ObjectKeyDatabase {
    client = redis.createClient()
    constructor() {
        this.connect()
    }
    connect() {
        this.client.connect()
        this.client.on('error', err => {
            console.error(err)
        })
    }

    async get(key: string) {
        return await this.client.get(key)
    }

    async set(key: string, value: string): Promise<void> {
        await this.client.set(key, value)
    }
}