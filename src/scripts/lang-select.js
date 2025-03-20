document.getElementById("lang-select").addEventListener("change", function(event){
    console.log(event);
    console.log(event.target);
    console.log(event.target.value);
    console.log(document.documentElement);

    document.documentElement.lang = event.target.value;
})