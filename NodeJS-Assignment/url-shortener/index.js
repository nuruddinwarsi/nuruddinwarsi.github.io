const http = require('http');
let { nanoid } = require('nanoid');
const server = http.createServer();
let URLStore = [];

const checkIfIdExists = (id) => {
  return URLStore.find((value) => {
    return value.id === id;
  });
};

const getUniqueId = () => {
  let id = nanoid(5);
  if (checkIfIdExists(id) === undefined) {
    return id;
  } else {
    return getUniqueId();
  }
};

server.on('request', (req, res) => {
  if (req.url === '/shorten' && req.method === 'POST') {
    let body = '';
    req.on('data', (chunk) => {
      body += chunk.toString('utf-8');
    });
    res.setHeader('Content-Type', 'application/json');
    req.on('end', () => {
      let originalUrl;
      try {
        const requestJson = JSON.parse(body);

        if (requestJson.url) {
          originalUrl = new URL(requestJson.url);
          let UrlIfExists = URLStore.find((value) => {
            return value.OriginalUrl === originalUrl.toString();
          });

          if (UrlIfExists === undefined) {
            serverUrl = new URL('http://localhost:3000');
            const id = getUniqueId();
            serverUrl.pathname = id;

            UrlJson = {
              id: id,
              original: originalUrl.toString(),
              short: serverUrl.toString(),
            };

            URLStore.push(UrlJson);
            res.end(JSON.stringify(UrlJson));
          } else {
            res.end(JSON.stringify(UrlIfExists));
          }
        }
      } catch (err) {
        res.statusCode = 404;
        res.end(JSON.stringify({ error: err }));
      }
    });
  } else if (req.url.slice(0, 1) === '/' && req.method === 'GET') {
    const id = req.url.slice(1);
    const URLStoreObject = checkIfIdExists(id);

    if (URLStoreObject === undefined) {
      res.statusCode = 404;
      res.end(JSON.stringify({ Success: 'URL doesnt exist' }));
    } else {
      res.end(
        JSON.stringify({
          OriginalURL: URLStoreObject.OriginalUrl,
        })
      );
    }
  }
});

server.on('error', (error) => {
  console.error(error.message);
});

server.listen(3000);
