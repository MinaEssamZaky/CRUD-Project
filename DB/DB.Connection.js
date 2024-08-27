import mysql from 'mysql2'

export const query= mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'first_project'
})