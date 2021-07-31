const main_page = document.createElement("div");
  main_page.className="page"
main_page.innerHTML=`English Dictionary <br>
  `;

document.body.append(main_page);
var x = document.createElement("INPUT");
x.setAttribute("type", "text");
x.setAttribute("placeholder", "Search...");
x.setAttribute("name","word");
var a = document.createElement("INPUT");
a.setAttribute("name","word");
a.setAttribute("type","button");
a.setAttribute("value","Submit");
main_page.append(x,a);
getMeaning("welcome");
a.onclick=function(){
  var c = x.value;
  getMeaning(c);
  document.querySelector(".bod").remove();
  
}
async function getMeaning(word1){
  const data1 = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en_US/${word1}`);
  
  const bod=document.createElement("div");
  const words = await data1.json();
  bod.className="bod"
  bod.innerHTML = `Word searched: ${words[0].word}<br>
  Pronunciation: ${words[0].phonetics[0].text}<br>
  Audio : <audio controls>

  <source src="${words[0].phonetics[0].audio}" type="audio/mpeg">
Your browser does not support the audio element.
</audio>
  `;
  for(meaning of words[0].meanings){
    const mean=document.createElement("div");
    mean.className="meaning";
    mean.innerHTML=`Part of Speech: ${meaning.partOfSpeech}<br>
    Definition: ${meaning.definitions[0].definition}`;
    bod.append(mean);
  }
  document.body.append(bod)
}
