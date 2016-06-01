var koa = require('koa');
var json = require('koa-json');
var app = koa();

app.use(json());

app.use(function *(next){
  var start = new Date;
  yield next;
  var ms = new Date - start;
  this.body = {'Response-Time': ms + 'ms'};
});

console.log("listen by port 3000");
app.listen(3000);
