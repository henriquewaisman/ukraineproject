init()

function init(){
 document.getElementById("nome").addEventListener("keyup", salvar)
 document.getElementById("age").addEventListener("keyup", salvar)
 document.getElementById("lang").addEventListener("keyup", salvar)
 document.getElementById("time").addEventListener("keyup", salvar)
 document.getElementById("son").addEventListener("keyup", salvar)
 document.getElementById("sex").addEventListener("keyup", salvar)
 document.getElementById("sonage").addEventListener("keyup", salvar)
}

function salvar(){
  var nome = document.getElementById("nome").value
  var age = document.getElementById("age").value
  var lang = document.getElementById("lang").value
  var time = document.getElementById("time").value
  var son = document.getElementById("son").value
  var sex = document.getElementById("sex").value
  var sonage = document.getElementById("sonage").value

  localStorage.setItem("user", nome)
  localStorage.setItem("firstage", age)
  localStorage.setItem("languages", lang)
  localStorage.setItem("timestaying", time)
  localStorage.setItem("son", son)
  localStorage.setItem("sex", sex)
  localStorage.setItem("secondage", sonage)
}
