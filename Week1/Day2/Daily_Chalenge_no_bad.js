
var sentence = "The movie is not bad, I like it";
var wordNot = sentence.indexOf("not");
var wordBad = sentence.indexOf("bad");

if (wordNot !==-1 && wordBad!==-1 && wordBad>wordNot ){
    let avant= sentence.slice(0,wordNot);
    let apres= sentence.slice(wordBad+3);
    console.log(avant+"good"+apres);
}
else{
    console.log(sentence);
}
