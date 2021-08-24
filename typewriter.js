const sentence = "hello there from lighthouse labs";

let delay = 0

for (const char of sentence) {
  setTimeout( () => {
    setTimeout( () => {process.stdout.write(char);
    }, delay +=50)}, 1000);
  setTimeout( () => {
    process.stdout.write('\n')}, 3000)
}