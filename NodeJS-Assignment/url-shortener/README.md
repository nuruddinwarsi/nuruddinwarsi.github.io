# NodeJS - URL Shortener

## Project setup

```
npm init
```

### Compiles and hot-reloads for development

```
npm run start
```

### Postman - Shorten URL

```
URL : http://localhost:3000/shorten
Request Type : POST
Request Body :
{
    "url": "https://www.npmjs.com"
}

Response Body
{
    "id": "dhGEx",
    "original": "https://www.reddit.com/",
    "short": "http://localhost:3000/dhGEx"
}
```

### Postman - get original URL

```
URL : http://localhost:3000/dhGEx
Request Type : GET
```
