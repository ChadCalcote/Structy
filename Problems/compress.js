// O(n)

const compress = (s) => {
  // two pointers
  // counter variable 
  // while loop
  // str[j] === str[i] => check length of sliced string or check difference of j and i
  // string to start
  // string to return
  let i = 0;
  let j = 1;
  let compressed = ""
  
  while (j <= s.length) {
    if (s[i] === s[j]) {
      j++;
      continue;
    }
    // change number into string
    // if dif is one don't print 1
    let dif = j - i === 1 ? "" : j - i;
    compressed += `${dif}${s[i]}`;
    i = j;
  }
  
  return compressed;
};