const express = require('express');
const app = express();
const SerialPort = require('serialport');
const Readline = require('@serialport/parser-readline');

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

app.post('/post', (req, res) => {
  console.log('Connected to React');
  res.redirect('/');
});

const port = new SerialPort('/dev/cu.usbserial-0001', {
  baudRate: 115200,
});

async function run() {
  port.on('error', function (err) {
    console.log('Error: ', err.message);
  });

  port.write('0\n', function (err) {
    if (err) {
      return console.log('Error on write: ', err.message);
    }
    console.log('blank');
  });
  while (true) {
    for (let i = 1; i < 25; i++) {
      let amount = `${i}\n`;
      port.write(amount, function (err) {
        if (err) {
          return console.log('Error on write: ', err.message);
        }
        console.log(amount);
      });
      await sleep(100);
    }
  }
}

const PORT = process.env.PORT || 8080;
app.listen(PORT, console.log(`Server started on port ${PORT}`));
run();
