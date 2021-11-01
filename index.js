function reloadPage(){
	location.reload();
}
var audio;
var volumeup = document.getElementById("audio");
function wordSearch(word){
	var word = document.getElementById('word').value;
	var definition = document.getElementById('definition');
	var example = document.getElementById('example');
	var spell = document.getElementById('spell');
	
	
	



	function data (result, word){
		if(result.title){
			var error1 = document.getElementById("error").innerHTML=`We can not find the word "${word}"please try another word `;

			
		}
		else{
			document.getElementById('searchResult').style.visibility ="visible";
			var error1 = document.getElementById("error").innerHTML=`Searching for ${word}`;
			console.log(result);
			if(result[0].meanings[0].definitions[0].synonyms[0]== undefined){
				synonyms.style.display = "none";
			} else{
				
					let synonyms = document.getElementById("synonyms").innerHTML = result[0].meanings[0].definitions[0].synonyms[0];
					let synonyms1 = document.getElementById("synonyms1").innerHTML = result[0].meanings[0].definitions[0].synonyms[1];
			}

			var deff = document.getElementById("deff").innerHTML= result[0].word;
			document.getElementById("definition").innerHTML=  result[0].meanings[0].definitions[0].definition;
			document.getElementById("partofspeech").innerHTML= result[0].meanings[0].partOfSpeech ; 
			 document.getElementById("example").innerHTML= result[0].meanings[0].definitions[0].example;
			  document.getElementById("phonetics").innerHTML="/"+result[0].phonetics[0].text+"/"; 
			  audio = new Audio ("https:" + result[0].phonetics[0].audio);
			  //audio = new Audio = ("https:" + result[0].phonetics[0].audio);
			  
			
		}
	}

fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
.then(res => res.json())
.then(result => data (result, word))};


function btn(){
	audio.play();
};


