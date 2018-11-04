var etmjs = require('etm-js');
var http = require("http")
var axios = require('axios')
var querystring = require("querystring")
const XAS = 100000000
let amount = 1000000 * XAS //转账金额
let recipentId = 'A7sm7exoBX6JiEQNeGbVY4PApLMqhztry5' //接收地址
let args = [amount, recipentId]
let message = "批量转账"
let mySecret = 'someone manual strong movie roof episode eight spatial brown soldier soup motor'


let trs = etmjs.transaction.createTransaction(recipentId, amount, message, mySecret, '');

var url = "http://129.28.69.70:4096/peer/transactions";
axios.post(url, {
    transaction: trs
  }, {
    headers: {
      version: '',
      magic: '594fe0f3'
    }

  }).then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    //console.log(error);
  });