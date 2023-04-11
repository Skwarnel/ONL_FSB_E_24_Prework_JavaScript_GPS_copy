const elements = document.querySelectorAll(".box");

elements.forEach(function(element) {
    element.addEventListener("click", function() {
        this.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);;
        console.log("You have clicked me")
    })
});