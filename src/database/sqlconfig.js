const sqlConfig = {
    //user: '***',
    //password: '***',
    server: '..',
    database: '..',
    driver: 'msnodesqlv8',
    port: 1433,
    options: {
        encrypt: false,
        trustedConnection: true
    }
}

module.exports = sqlConfig;