var Connection = require('tedious').Connection;
var config = {
    server: 'DESKTOP-6UH2UC3',
    authentication: {
        type: 'default',
        options: {
            userName: '',
            password: ''
        }
    },
    options: {
        // If you are on Microsoft Azure, you need encryption:
        //encrypt: true,
        //instanceName: 'Sqlexpress',
        //rowCollectionOnDone: true,
        //useColumnNames: false
        database: 'MatrixApp',
    }
}

var connection = new Connection(config);

connection.on('MatrixApp', function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('Connected');
    }
});

module.exports = connection;