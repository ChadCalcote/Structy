// O(n)
const uncompress = str => {
  // Two pointers that both start at the start of the string
  let i = 0;
  let j = 0;
  let uncompressed = "";
  const numbers = "0123456789";
  
  // we want i to track the start of the number
  // we want j to track the end of the number (the letter)
  // once we find the letter
  // we can add it to the uncompressed string based on the number
  // we will do this unitl j finishes the end of the string
  while (j < str.length) {
    // check if string at j is a number
    // if it is
    // increment j because we want it to point at a letter
    // and restart the loop
    // if it is isn't
    // then we can slice the string i,j to get our number
    // and we can add the letter to our final string n many times
    // then we need to move j up one to point at the start of the next number
    // set i to j so they're both pointing at the next number
    if (numbers.includes(str[j])) {
      j++;
      continue;
    }
    uncompressed += str[j].repeat(str.slice(i,j));
    j++;
    i = j;
  }
  
  return uncompressed;
}