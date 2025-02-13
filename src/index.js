function generatePoem(even) {
    even.preventDefault();
    
    new Typewriter("#poem",{
        string: "La tombe dit a' la rose",
        autoStart: true,
        delay: 1,
        corsor "",
    });
}



let poemFormElement =document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatorPoem);