function ispalindrome(input) {
  let word = input.toString();
  let left = 0;
  let right = word.length - 1;
  while (left < right) {
    if (word[left] !== word[right]) return false;
    left++;
    right--;
  }
  return true;
}
console.log(ispalindrome("awoke"));
console.log(ispalindrome("neuquen"));
console.log(ispalindrome(121));
console.log(ispalindrome(200));
