let num = 15;
console.log(`${num} é divisível por: `);
for (let i = 1; i <= num; i++) {
  if (num % i == 0) {
    console.log(`${i}`);
  }
}
