function salvar(){
  var nome = document.getElementById("nome").value
  var age = document.getElementById("age").value
  var lang = document.getElementById("lang").value
  var time = document.getElementById("time").value
  var cpf = document.getElementById("cpf").value
  var adress = document.getElementById("adress").value
  var morador = document.getElementById("morador").value
  var about = document.getElementById("about").value
  var personaimg = document.getElementById("personaimg").value

  localStorage.setItem("user", nome)
  localStorage.setItem("firstage", age)
  localStorage.setItem("languages", lang)
  localStorage.setItem("timestaying", time)
  localStorage.setItem("cpf", cpf)
  localStorage.setItem("adress", adress)
  localStorage.setItem("morador", morador)
  localStorage.setItem("aboutext", about)
  localStorage.setItem("perfil", personaimg)

  location.replace("https://henriquewaisman.github.io/foreignhtml/lastscreen.html")
}

function redefinir(){
  document.getElementById('nome').value = ''
  document.getElementById('age').value = ''
  document.getElementById('lang').value = ''
  document.getElementById('time').value = ''
  document.getElementById('cpf').value = ''
  document.getElementById('adress').value = ''
  document.getElementById('morador').value = ''
  document.getElementById('about').value = ''
  document.getElementById('personaimg').src = '/perfil.jpg'
}
