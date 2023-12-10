/* setTimeout(() => {
  process.stdout.write('\r|   ');
}, 100);

setTimeout(() => {
  process.stdout.write('\r/   ');
}, 300);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, 500);

setTimeout(() => {
  process.stdout.write('\r\\   ');
}, 700);

setTimeout(() => {
  process.stdout.write('\r|   ');
}, 900);

setTimeout(() => {
  process.stdout.write('\r-/   ');
}, 1100); */

let sentence = "\r| , \r/ , \r- , \r\\ , \r| , \r-/ ";
let eachWord = sentence.split(" ,");

for (let i = 0; i < eachWord.length; i++) {
  setTimeout(() => {
    process.stdout.write(eachWord[i]);
  }, i * 200);
}