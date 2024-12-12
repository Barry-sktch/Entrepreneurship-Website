document.querySelectorAll(".picture").forEach((picture) =>{
    picture.addEventListener("mouseover", ()=>{
        picture.style.translation="transform 0.5s ease-in-out";
    });
    picture.addEventListener("mouseover", ()=>{
        picture.style.translation="transform 0.3s ease";
    });
});