// comment
const input = process.argv.slice(2);


const reverse = function(original) {
  const reversed = original.map(word => word = word.split('').reverse().join(''));
  return reversed.join(' ');
};

console.log(reverse(input));