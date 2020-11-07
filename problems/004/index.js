const isAnAnagram = (s1, s2) => {
  // check if strings are same length
  if ( s1.length !== s2.length ) return false;

  // convert strings to arrays and sort alphabetically
  s1 = s1.split('').sort((a,b)=>a.localeCompare(b));
  s2 = s2.split('').sort((a,b)=>a.localeCompare(b));

  // loop through array values to check if the same;
  for( let i = 0; i < s1.length;i++){
    if ( s1[i] !== s2[i]) return false;
  }

  // if all string values match, return true
  return true;
};

module.exports = isAnAnagram;