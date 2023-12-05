console.time('Time');

const fs = require('fs');
const readline = require('readline');

void (async () => {
  const rl = readline.createInterface({
    input: fs.createReadStream('input.txt'),
    crlfDelay: Infinity,
  });

  rl.on('line', (line) => {
    console.log('line: ', line);
  });

  await new Promise((res) => rl.once('close', res));

  console.log(`Used ${process.memoryUsage().heapUsed / 1024 / 1024} MB`);
  console.timeEnd('Time');
})();