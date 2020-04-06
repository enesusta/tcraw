const exec = require("child_process").exec;
const sed = require('./src/sed');
const writer = require('./src/writer');
const args = process.argv.slice(2);

exec(`py tureng.py ${args[0]}`, (err, stdout, stderr) => {
  if (!err) {
    const output = stdout.split("\n");
    const resources = sed(output);
    console.log(args[0]);

    writer(args[0], resources);
  }
});

