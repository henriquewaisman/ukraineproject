# JavaSript
  
## Script.js

<pre>function wanthelp() {
  location.replace("https://henriquewaisman.github.io/foreignhtml/want.html")
}
function wantohelp() {
  location.replace("https://henriquewaisman.github.io/foreignhtml/wanto.html")
}</pre>

>Nesta parte do código, são vinculados a dois botões, links de outras duas páginas HTML para o usuário identificar a opção que ele se melhor enquadra e ser direcionado a uma página de cadastro.

## Foreignjs/want.js
<pre>function salvar(){
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

  location.replace("https://henriquewaisman.github.io/foreignhtml/lastscreen.html")
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
  document.getElementById('personaimg').src = '/perfil.jpg'
}</pre>

>Após clicar no botão de "Preciso de Ajuda", o usuário é redirecionado para uma página onde há campos para o preenchimento de dados cadastrais. Após o preenchimento, o botão "SALVAR" vinculado a função "salvar()" armazena os dados no armazenamento local e leva o usuário para uma página de confirmação do recebimento dos dados. O link "Redefinir" vinculado a função "redefinir()" exclui os campos preenchidos voltando para o estado inicial dando a possibilidade dos campos serem preenchidos novamente com mais rapidez.

##foreingjs/wanto.js
<pre>
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
</pre>

>Se o usuário optar por clicar no botão "Quero Ajudar", ele vai ter as mesmas funcionalidades da página de "Preciso de Ajuda", apenas sendo ajustados os dados cadastrais para suprir as diferenças de cadastro.
