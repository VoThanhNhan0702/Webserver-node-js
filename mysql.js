var mysql = require('mysql');
var fs = require('fs');

var connection = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'nhan070299',
        database: 'iot',
    }
);
//
connection.connect(function(err) {
    if (err) throw err;
    else console.log ("Connected Successfully!!!");
 });

 var sql = "SELECT PH, EC, WaterTemp, TEMP, HUD, CO2, LIGHT from data ORDER BY id desc limit 15";
 connection.query(sql, function(err, result){
     if (err) throw err;
     fs.writeFile('./public/table.json', JSON.stringify(result), function (err) {
        if (err) throw err;
        console.log('Saved!');

      });
        connection.end();
 });
 module.exports = connection;
  



