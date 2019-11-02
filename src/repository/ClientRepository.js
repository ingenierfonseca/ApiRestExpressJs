const mssql = require('mssql/msnodesqlv8');
const config = require('../database/sqlconfig');

function clientRepository() {
    function getClients(req, res) {
        var connection = new mssql.ConnectionPool(config);
        connection.connect(function(err, ress){
            if(err) {
                return 'connection error';
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
    }

    function getClient(req, res) {
        var connection = new mssql.ConnectionPool(config);
        connection.connect(function(err, ress){
            if(err) {
                return 'connection error';
            } else {
                //var parameters = [];
                //parameters.push({ id: 'id', type: TYPES.Int, val: req.query.id});
                const { id } = req.params;
                console.log('param id='+id);
                var request = new mssql.Request(connection); 
                request.input('id', mssql.Int, id)
                request.execute('[dbo].[spClienteConsultarPorId]', function(error, recordset){
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
    }

    return {
        getAll: getClients,
        get: getClient,
        /*post: postEmployees,
        put: putEmployee,
        getMulti: getEmployeesWothDepartment,
        find: SearchEmployee,
        intercept: findEmployee,
        delete: deleteEmployee*/
    }
}

module.exports = clientRepository;