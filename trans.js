var etmjs = require('etm-js');
var http = require("http")
var axios = require('axios')
var querystring = require("querystring")
const XAS = 100000000
let amount = 1000000 * XAS //转账金额
let recipentId = 'A3w7Rx5bCerJFbfG5BKdQ77bPqfWeyrmgJ' //接收地址
let args = [amount, recipentId]
let message = "批量转账"
let mySecret = 'someone manual strong movie roof episode eight spatial brown soldier soup motor'

//构造params对象
let params = {
  type: 1, //转账的合约编号是1  
  fee: 0.1 * XAS, //转账的手续费是0.1XAS
  args: args, //合约所需要参数
  message, //做一些备注（非必需）
  secret: mySecret, //我的密码（发送这笔交易的人的secret）
  secondSecret: ''
} //二级密码（没设置可以填null，但有些交易必需使用）
//使用asch-js生成交易信息
console.dir(etmjs.transaction)
//let trs = etmjs.transaction.createTransaction(params)
let trs = etmjs.transaction.createTransaction(recipentId, amount, message, mySecret, '');
console.log(trs)
/*
var url = "http://129.28.69.70:4096/peer/transactions";
axios.post(url, {transaction:trs}).then(function (response) {
    //console.log(response);
  })
  .catch(function (error) {
    console.log(error);
}); */


const postData = querystring.stringify({
  'transaction': trs
});

const options = {
  hostname: '129.28.69.70',
  port: 4096,
  path: '/peer/transactions',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'version': '',
    'magic': '594fe0f3'
  }
};

const req = http.request(options, (res) => {
  console.log(`状态码: ${res.statusCode}`);
  console.log(`响应头: ${JSON.stringify(res.headers)}`);
  res.setEncoding('utf8');
  res.on('data', (chunk) => {
    console.log(`响应主体: ${chunk}`);
  });
  res.on('end', () => {
    console.log('响应中已无数据。');
  });
});

req.on('error', (e) => {
  console.error(`请求遇到问题: ${e.message}`);
});

console.log(postData)
// 写入数据到请求主体
trs = {
  'transaction': trs
}
req.write(JSON.stringify(trs));
req.end();




// http.POST(trs)