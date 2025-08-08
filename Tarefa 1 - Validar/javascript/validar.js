var Nome, Email, Senha, Nascimento, Idade, Telefone, Genero, GeneroOutro, Interesses, Preferencia, Horario;

function criterios(){
    document.getElementById("nome").addEventListener("input",function(){
        this.value = this.value.replace(/[^a-zA-ZÀ-ÿ\s]/g,"");
    })
    document.getElementById("idade").addEventListener("input",function(){
        this.value = this.value.replace(/[a-zA-ZÀ-ÿ\s]/g,"");
    })
    document.getElementById("email").addEventListener("input", function() {
        this.value = this.value.replace(/[^a-zA-Z0-9@._\-+]/g, "");
    });
    document.getElementById("mensagem").style.resize = "none";
}

function validacao(){
    Nome = document.getElementById("nome").value;
    if(Nome == ""){
            alert("Campo Nome é obrigatório!");
            document.getElementById("nome").style.borderColor = "red";
            return false;}

    Email = document.getElementById("email").value;
    if(Email == ""){
            alert("Campo E-mail é obrigatório!");
            document.getElementById("email").style.borderColor = "red";
            return false;}

    Senha = document.getElementById("senha").value;
    if(Senha == ""){
            alert("Campo Senha é obrigatório!");
            document.getElementById("senha").style.borderColor = "red";
            return false;}

    Nascimento = document.getElementById("data").value;
    if(Nascimento == ""){
            alert("Campo Nascimento é obrigatório!");
            document.getElementById("data").style.borderColor = "red";
            return false;}

    Idade = document.getElementById("idade").value;
    if(Idade == ""){
            alert("Campo Idade é obrigatório!");
            document.getElementById("idade").style.borderColor = "red";
            return false;}

    Telefone = document.getElementById("telefone").value;
    if(Telefone == ""){
            alert("Campo Telefone é obrigatório!");
            document.getElementById("telefone").style.borderColor = "red";
            return false}

    Genero = document.getElementById("genero").value;
    if (Genero == "") {
            alert("Selecione uma opção de Gênero!");
            document.getElementById("genero").style.borderColor = "red";
            return false;}

    Interesses = [...document.querySelectorAll('input[name="interesses"]:checked')].map(elementos => elementos.value);
            if(Interesses.length == 0){
            alert("Campo Interesses é obrigatório!");
            return false;}
    
    Preferencia = document.querySelector('input[name="contato"]:checked');
            if(!Preferencia){
            alert("Campo Preferências é obrigatório!");
            return false;}

    Horario = document.getElementById("hora").value;
            if (Horario == "") {
            alert("Informe o horário preferido.");
            return false;}
alert("Formulário enviado com sucesso!");
return true;            
}