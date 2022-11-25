

  //primeiro nome
const firstname = document.querySelector("#firstname")
firstname.addEventListener("input", () => {
  const ccName = document.querySelector(".cc-name .value")
  ccName.innerText = firstname.value.length === 0 ? "Fulano" : firstname.value

     //redimenciona o tamnhano da font do card
      ccName.style.fontSize = (ccName.innerText.length > 9) ? (ccName).style.fontSize="10px" : (ccName).style.fontSize = "15px";
      
})



  //sobrenome
  const lastname = document.querySelector("#lastname")
  lastname.addEventListener("input", () => {
    const cclLastName = document.querySelector(".cc-lastName .value")
    cclLastName.innerText =  lastname.value.length === 0 ? "Silva" : lastname.value

      //redimenciona o tamnhano da font do card
       cclLastName.style.fontSize = (cclLastName.innerText.length > 9) ? (cclLastName).style.fontSize="10px" : (cclLastName).style.fontSize = "15px";
  })

    //email
    const email = document.querySelector("#email")
    email.addEventListener("input", () => {
      const ccEmail = document.querySelector(".cc-email .value")
      ccEmail.innerText =  email.value.length === 0 ? "email@email.com" : email.value

       //redimenciona o tamnhano da font do card
       ccEmail.style.fontSize = (ccEmail.innerText.length > 19) ? (ccEmail).style.fontSize="13px" : (ccEmail).style.fontSize = "15px";
    })

      //tel
      const number = document.querySelector("#number")
      number.addEventListener("input", () => {
        const ccTel = document.querySelector(".cc-tel .value")
        ccTel.innerText =  number.value.length === 0 ? "(xx) xxxxxxxx" : number.value
      })

     //mascara num
$("#number").mask("(00) 00000-0000")

//validaçao checkBox

//fem
const $checkBox = document.querySelector("#female");
$checkBox.addEventListener("change", function(){
  if($checkBox.checked == true){
    document.getElementById("imgPerfil").src="img/woman.gif";
  }
})


//mascu
const $checkBox1 = document.querySelector("#male");
$checkBox1.addEventListener("change", function(){
  if($checkBox1.checked == true){
    document.getElementById("imgPerfil").src="img/man.gif";
  }
})

//other
const $checkBox3 = document.querySelector("#none");
$checkBox3.addEventListener("change", function(){
  if($checkBox3.checked == true){
    document.getElementById("imgPerfil").src="img/other.png";
  }
})



//CADASTRO PET

//validaçao checkBoxPet


//validação nome pet
const namePet = document.querySelector("#namePet")
namePet.addEventListener("input", () => {
  const ccNameP = document.querySelector(".cc-nameP .value")
  ccNameP.innerText = namePet.value.length === 0 ? "Paçoca" : namePet.value

     //redimenciona o tamnhano da font do card
     ccNameP.style.fontSize = (ccNameP.innerText.length > 9) ? (ccNameP).style.fontSize="10px" : (ccNameP).style.fontSize = "15px";   
})

//validação cor pet
const CorPet = document.querySelector("#CorPet")
CorPet.addEventListener("input", () => {
  const ccCor = document.querySelector(".cc-cor .value")
  ccCor.innerText = CorPet.value.length === 0 ? "Amarelo" : CorPet.value

     //redimenciona o tamnhano da font do card
     ccCor.style.fontSize = (ccCor.innerText.length > 9) ? (ccCor).style.fontSize="10px" : (ccCor).style.fontSize = "15px";   
})


//cat
const $checkBoxPet = document.querySelector("#Cat");
$checkBoxPet.addEventListener("change", function(){
  if($checkBoxPet.checked == true){
    document.getElementById("imgP").src="img/catCard.gif";
    
    var ccRaca = document.querySelector(".cc-raca .value")
    ccRaca.innerText = "Gato"
 
  }
})


//dog
const $checkBoxPet2 = document.querySelector("#dog");
$checkBoxPet2.addEventListener("change", function(){
  if($checkBoxPet2.checked == true){
    document.getElementById("imgP").src="img/dogCard.gif";

    var ccRaca = document.querySelector(".cc-raca .value")
    ccRaca.innerText = "Cachorro"
  }
})

//other
const $checkBoxPet3 = document.querySelector("#otherPet");
$checkBoxPet3.addEventListener("change", function(){
  if($checkBoxPet3.checked == true){
    document.getElementById("imgP").src="img/bunnyCard.gif";
    var ccRaca = document.querySelector(".cc-raca .value")
    ccRaca.innerText = "Outros"
  }
})



var radios = document.body.querySelectorAll("input[name='raca']");

radios.addEventListener("input", () => {
  const ccRaca = document.querySelector(".cc-raca .value")
  ccRaca.innerText = radios.value.length === false ? "Amarelo" : radio.value
})