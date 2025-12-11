const http = require("http");

const app = require("./app");

const{port} = require("./config/keys")

http.createServer(app);

app.listen(port , ()=>{
    console.log(`Server is running now on port ${port}`);
})