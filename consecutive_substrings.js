function consecutiveSubstrings(string) {
  // Initialize an empty array to store all consecutive substrings
  const result = [];
  
  // Outer loop: iterate through each possible starting index
  // 'i' represents where each substring begins (0 to string.length - 1)
  for (let i = 0; i < string.length; i++) {
    
    // Inner loop: iterate through each possible ending index
    // 'j' starts at 'i' (same position) and goes to the end of the string
    // This ensures we get all substrings starting at position 'i'
    for (let j = i; j < string.length; j++) {
      
      // Extract substring from index 'i' to 'j' (inclusive)
      // substring(i, j+1) extracts from i up to (but not including) j+1
      // This gives us the characters from position i to j
      const substring = string.substring(i, j + 1);
      
      // Add the extracted substring to our result array
      result.push(substring);
    }
  }
  
  // Return the complete array of consecutive substrings
  return result;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: ['a', 'ab', 'abc', 'b', 'bc', 'c']");
  console.log("=>", consecutiveSubstrings('abc'));

  console.log("");

  console.log("Expecting: ['a']");
  console.log("=>", consecutiveSubstrings('a'));
  
  console.log("");
  
  // Additional test case: empty string
  console.log("Expecting: []");
  console.log("=>", consecutiveSubstrings(''));
  
  console.log("");
  
  // Additional test case: two characters
  console.log("Expecting: ['a', 'ab', 'b']");
  console.log("=>", consecutiveSubstrings('ab'));
  
  console.log("");
  
  // Additional test case: longer string (from the e-commerce scenario)
  console.log("Expecting: ['p', 'ph', 'pho', 'phon', 'phone', 'h', 'ho', 'hon', 'hone', 'o', 'on', 'one', 'n', 'ne', 'e']");
  console.log("=>", consecutiveSubstrings('phone'));
}

module.exports = consecutiveSubstrings;