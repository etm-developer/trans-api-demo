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

let trs = etmjs.transaction.createTransaction(recipentId, amount, message, mySecret, '');
console.log(JSON.stringify({
  transaction: trs
}))