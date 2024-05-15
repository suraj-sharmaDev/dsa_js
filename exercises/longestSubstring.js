const longestStringCount_bruteForce = (s) => {
   /**
    * We will have nested loops which will count substrings
    * length 
    * */ 
   if (s.length <= 1) return s.length;
   let maxLen = 0, finalStr = "";
   for(let i = 0; i < s.length; i++) {
    let tempStr = s[i];
    for(let j = i + 1; j< s.length; j++) {
        const cur = s[j];
        if (tempStr.includes(cur)) {
            maxLen = Math.max(tempStr.length, maxLen);
            finalStr = tempStr.length > finalStr.length ? tempStr : finalStr;
            break;
        } else {
            tempStr += cur;
            maxLen = Math.max(tempStr.length, maxLen);
            finalStr = tempStr.length > finalStr.length ? tempStr : finalStr;
        }
    }
   }
   return maxLen;
}


const longestStringCount_slidingWindow = (s) => {
    /**
     * We use sliding window technique
     */
    if (s.length <= 1) return s.length;
    let p1 = 0, p2 = 1, maxLen = 0;
    let tempStr = s[p1];
    while(p1 < s.length && p2 > p1 && p2 < s.length) {
        if (tempStr.includes(s[p2])) {
            console.log({tempStr, p1, p2});
            maxLen = Math.max(maxLen, tempStr.length);
            tempStr = "";
            p1 = p2;
        } else {
            tempStr += s[p2];
            maxLen = Math.max(maxLen, tempStr.length);
        }
        console.log(tempStr);
        p2++;
    }
    return maxLen;
}

const input = "abcbcdae";


// console.log(longestStringCount_bruteForce(input));
console.log(longestStringCount_slidingWindow(input));