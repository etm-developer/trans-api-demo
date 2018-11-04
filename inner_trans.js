var etmJS = require('etm-js');
var axios = require('axios')
var dappid = "ca962bcae9adee9c41f880404e5058451d0b67af6a526b06922b85aceb243788";
var currency = "XAS";
var amount = 100000 * 100000000;
var secret = "dismiss advance feel increase aunt radar seminar stick coast marriage room hour";
var secondSecret = "";
for (idx = 0; idx < 100; idx++) {
  amount = (idx + 1) * 100000000;
  var transaction = etmJS.transfer.createInTransfer(dappid, currency, amount, secret, secondSecret || undefined);

  // console.log(JSON.stringify(transaction));   
  var url = "http://129.28.69.70:4096/peer/transactions";
  axios.post(url, {
      transaction: transaction
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
}