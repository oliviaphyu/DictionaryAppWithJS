const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const resultEl = document.getElementById("result-el");
const sound = document.getElementById("sound");
const btnSearch = document.getElementById("btn-search");

btnSearch.addEventListener("click", function(){
    let inputWord = document.getElementById("input-el").value;
    fetch(`${url}${inputWord}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            resultEl.innerHTML = ``
        })
        .catch(() =>{
            resultEl.innerHTML = `<h3 class="error">Cannot find it.</h3>`;
        });
});


function playSound(){
    sound.play();
}