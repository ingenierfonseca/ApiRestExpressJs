'use strict';
const ADODB = require('node-adodb');
const connection = ADODB.open('Provider=Microsoft.Jet.OLEDB.4.0;data source=DESKTOP-6UH2UC3;Integrated Security=SSPI;initial catalog=MatrixApp;');

async function query() {
    try {
      const users = await connection.query('SELECT * FROM Users');
   
      console.log(JSON.stringify(users, null, 2));
    } catch (error) {
      console.error(error);
    }
}

module.exports = connection;