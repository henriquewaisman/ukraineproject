function salvar(){
  var nome = document.getElementById("nome").value
  var age = document.getElementById("age").value
  var lang = document.getElementById("lang").value
  var time = document.getElementById("time").value
  var son = document.getElementById("son").value
  var sex = document.getElementById("sex").value
  var sonage = document.getElementById("sonage").value
  var about = document.getElementById("about").value
  var personaimg = document.getElementById("personaimg").value

  localStorage.setItem("user", nome)
  localStorage.setItem("firstage", age)
  localStorage.setItem("languages", lang)
  localStorage.setItem("timestaying", time)
  localStorage.setItem("son", son)
  localStorage.setItem("sex", sex)
  localStorage.setItem("secondage", sonage)
  localStorage.setItem("aboutext", about)
  localStorage.setItem("perfil", personaimg)
  

  location.replace("https://henriquewaisman.github.io/ukraineproject/foreignhtml/lastscreen.html")
}

function redefinir(){
  document.getElementById('nome').value = ''
  document.getElementById('age').value = ''
  document.getElementById('lang').value = ''
  document.getElementById('time').value = ''
  document.getElementById('son').value = ''
  document.getElementById('sex').value = ''
  document.getElementById('sonage').value = ''
  document.getElementById('about').value = ''
  document.getElementById('personaimg').src = 'https://henriquewaisman.github.io/ukraineproject/perfil.jpg'
}
