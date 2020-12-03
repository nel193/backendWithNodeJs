const http = require ("http");
const moment = require("moment");
const server = http.createServer();

// server.on("request", (req, res)=>{
//     if(req.method === "POST" && req.url == "/echo"){
//         let body = [];

//         req.on("data", (chunk) => {
//             body.push(chunk)
//         })
//         .on("end", ()=>{
//             res.writeHead(200, {"Content-Type": "text/plain"})
//             body = Buffer.concat(body).toString();
//             res.end(body);
//         })
//     } else {
//         res.statusCode = 404;
//         res.end();
//     }

// })

server.on("request", (req, res)=>{
    if(req.method === "POST" && req.url == "/birth"){
        let body = [];

        req.on("data", (chunk)=>{
            body.push(chunk)
        })
        .on("end", ()=>{
            res.writeHead(200, {"Content-Type" : "text/plain"})
            // body = Buffer.concat(body).toString().split("-");

            //FORMA DE CONSEGUIR EL DÍA DE NACIMIENTO CON Date de JS
            // const year = body[2];
            // const month = body[1] - 1;
            // const day = body[0];

            // const birthday = new Date(year, month, day);
            // res.end(birthday.toString().split(" ")[0])

            //FORMA DE CONSEGUIR EL DÍA DE NACIMIENTO CON MomentJS
            body = Buffer.concat(body).toString();
            let fecha = moment(body, "DD/MM/YYYY");
            let dia = fecha.format("dddd");
            res.end(dia)


        })
    } else {
        res.statusCode = 404;
        res.end();
    }
})

server.listen(3002);
console.log("Servidor en la url http://localhost:3002")