// https://github.com/manuel-di-iorio/sse-node
const SSE = require("sse-node"),
    app = require("express")();

app.get("/sse", (req, res) => {
    const client = SSE(req, res);
    client.send("Hello world!");
    client.onClose(() => console.log("Bye client!"));
});

app.listen(80);
