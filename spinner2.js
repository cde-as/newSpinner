let sentence = "\r| , \r/ , \r- , \r\\ , \r| , \r-/ ";
let eachWord = sentence.split(" ,");

for (let i = 0; i < eachWord.length; i++) {
  setTimeout(() => {
    process.stdout.write(eachWord[i]);
  }, i * 200);
}