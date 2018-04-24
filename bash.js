process.stdout.write('propmt > ');
console.log(process.cwd());
process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();

  process.stdout.write('You typed: ' + cmd);
  process.stdout.write('\npropmpt > ');
})
