const inputs = document.querySelectorAll(".input-field ");
const toggle_btn = document.querySelectorAll(".sing-btn");
const main = document.querySelector("main");
const card = document.querySelector(".cardOne");
 

inputs.forEach((inp) => {
    inp.addEventListener("focus", () => {
        inp.classList.add("active");
    });

    inp.addEventListener("blur", () =>{
        if (inp.value != "") return;
        inp.classList.remove("active");
    });
});

toggle_btn.forEach((btn) =>{
    btn.addEventListener("click", () =>{
        main.classList.toggle("sing-up-mode");
    })
});


toggle_btn.forEach((btn) =>{
    btn.addEventListener("click", () =>{
        if(card.classList.contains('Show')){
             card.classList.add('Remove');
             card.classList.remove('Show');
        }else{
            card.classList.remove('Remove');
            card.classList.add('Show');
        }
    })
});









