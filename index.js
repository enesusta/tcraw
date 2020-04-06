const exec = require("child_process").exec;
const fs = require("fs");
const request = require("request");

exec(`py tureng.py test`, (err, stdout, stderr) => {
  if (!err) {
    const output = stdout.split("\n");

    let count = 0;
    output.forEach((e) => {
      e = e.trim();
      e = e.replace('<source src="', "");
      e = e.replace(' type="audio/mpeg"/>', " ");
      e = e.substring(1, e.length - 2);
      e = 'https://tureng.com' + e;

      exec(`curl ${e} --output ${count}.mp3`, (e, st, se) => {
        if (!e) {
          console.log('successfull!');
        }
      })
      count++;
    });
  }
});
