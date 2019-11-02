const { Router } = require('express');
const router = Router();
//const mssql = require('mssql/msnodesqlv8');
//const config = require('../database/sqlconfig');

const _clientRepository = require('../repository/ClientRepository');
const clientRepository = _clientRepository();

router.get('/', clientRepository.getAll);/* (req, res) => {
    res.send(clientRepository.getAll);
    /*var connection = new mssql.ConnectionPool(config);
    connection.connect(function(err, ress){
        if(err) {
            console.log(err);
        } else {
            var request = new mssql.Request(connection); 
            request.execute('[dbo].[spClienteConsultar]', function(error, recordset){
                if(error){
                    console.log("Error while connecting database :- " + error);
                    res.send(err);
                }
                else{
                    console.log("Success data");
                    res.send(recordset);
                }
                connection.close();
            })
            console.log('connection success');
        }
    });
});*/

router.get('/:id', clientRepository.get);/* (req, res) => {
    const { id } = req.params;
    res.send('clients id ' + id);
});*/

router.post('/', (req, res) => {
    console.log(req.body);
    const { id } = req.body;
    const newClient = {...req.body};
})

module.exports = router;