const { Client } = require("pg")
const dotenv = require("dotenv")
dotenv.config()
 
const connectDb = async () => {
    try {
        const client = new Client({
            user: process.env.PGUSER,
            host: process.env.PGHOST,
            database: process.env.PGDATABASE,
            password: process.env.PGPASSWORD,
            port: process.env.PGPORT
        })
 
        await client.connect()
        console.log(process.env.PGHOST);
        const res = await client.query('SELECT NOW()')
        console.log(res)
        await client.end()
    } catch (error) {
        console.log(error)
        console.log("error in cache")
    
    }
}
 
connectDb()
console.log("connected to the database");
