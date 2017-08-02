process.stdin.setEncoding('utf8');

// process.stdin.pipe(process.stdout);

process.stdin.on('readable', () => {
  const chunk = process.stdin.read();
  if (chunk) {
    process.stdout.write(`---data--- \n: ${chunk}`);
  }
});

process.stdin.on('end', () => {
  process.stdout.write('\n --- end ---\n');
});
