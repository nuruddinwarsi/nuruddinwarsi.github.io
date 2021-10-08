// import http from 'http';
const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');

const server = http.createServer();

server.on('request', (req, res) => {
  if (req.url === '/') {
    const rs = fs.createReadStream(path.join(__dirname, 'index.html'));
    rs.on('error', (error) => {
      alert(error.message);
      return;
    });
    rs.pipe(res);
  } else if (req.url === '/contact') {
    const rs = fs.createReadStream(path.join(__dirname, 'contact.html'));
    rs.on('error', (error) => {
      alert(error.message);
      return;
    });
    rs.pipe(res);
  } else if (req.url === '/message') {
    let messageBody = '';
    req.on('data', (chunk) => {
      messageBody += chunk.toString();
    });
    let json = {};

    req.on('end', () => {
      let messageArray = messageBody.split('&');

      messageArray.map((value) => {
        const newArray = value.split('=');
        json[newArray[0]] = newArray[1];
      });

      const ws = fs.createWriteStream(path.join(__dirname, 'message.json'), {
        flags: 'a',
      });

      ws.on('error', (error) => {
        console.log(error.message);
      });

      ws.write(JSON.stringify(json, undefined, 2));
      ws.end();

      res.writeHead(301, { Location: '/' });
      res.end();
    });
  }
});

server.on('error', (error) => {
  console.error(error.message);
});

server.listen(3000);
