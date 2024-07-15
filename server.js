const express = require("express");
const app = express();
const port = 3000;
const blog = require('./router/blog')


app.use(express.static('public'))
app.use('/blog', blog)


app.get("/", (req, res) => {
  res.send("Hello World!");
}).post('/', (req,res)=>{
  console.log("post request")
  res.send("hello post")
})
app.get("/index", (req, res) => {
  res.sendFile("public/index.html", { root: __dirname });
});

app.get("/api", (req, res) => {
  console.log("return json file");
  res.json({ a: 1, b: 2 });
});
app.get("/about/:slug", (req, res) => {
  // console.log(req);
  // console.log(req.params);
  // console.log(req.query);
  res.send(`hello ${req.params.slug}`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
