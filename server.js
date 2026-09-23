const http=require("http"),fs=require("fs"),path=require("path");
const port=process.env.PORT||3000;
http.createServer((req,res)=>{
 const file=req.url==="/health" ? null : path.join(__dirname,"public","index.html");
 if(req.url==="/health"){res.writeHead(200,{"content-type":"application/json"});return res.end(JSON.stringify({ok:true,app:"Aynı Hamurdan"}));}
 fs.readFile(file,(e,d)=>{if(e){res.writeHead(500);return res.end("Server error");}res.writeHead(200,{"content-type":"text/html; charset=utf-8","cache-control":"public, max-age=300"});res.end(d);});
}).listen(port,"0.0.0.0",()=>console.log("Aynı Hamurdan live on",port));