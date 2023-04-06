const http = require('http');

http.createServer( (request, response) => {

    // response.setHeader('Content-Disposition', 'attachment; filename=list.csv');
    // response.writeHead(200, { 'Content-Type': 'application/csv'});

    // response.write( 'id, name');
    // response.write('1, Luis\n');
    // response.write('2, Maria\n');
    // response.write('3, Pedro\n');
    // response.write('4, Luz\n');

    //response.write( JSON.stringify(person) );
    response.write('Hola Mundo');
    response.end();
})
.listen(8080);


console.log('Listening port 8080...');