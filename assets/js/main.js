/* taskın 1-ci versiyası
let a = "quru";

console.log(a.replace("r", "t"));
*/

//taskın 2-ci versiyası
let word1 = "qələm ";
let word2 = "";

for (let i = 0; i < word1.length; i++) {
  if (word1[i] == "ə") {
    let newword = word1[i];
    newword = "a";
    word2 += newword;
  } else {
    word2 += word1[i];
  }
}
console.log(word2);
