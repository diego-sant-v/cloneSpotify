function limpa_formulário_cep() {
            //Limpa valores do formulário de cep.
            document.getElementById('rua').value=("");
            document.getElementById('bairro').value=("");
            document.getElementById('cidade').value=("");
            document.getElementById('uf').value=("");
            document.getElementById('ibge').value=("");
    }

    function meu_callback(conteudo) {
        if (!("erro" in conteudo)) {
            //Atualiza os campos com os valores.
            document.getElementById('rua').value=(conteudo.logradouro);
            document.getElementById('bairro').value=(conteudo.bairro);
            document.getElementById('cidade').value=(conteudo.localidade);
            document.getElementById('uf').value=(conteudo.uf);
            document.getElementById('ibge').value=(conteudo.ibge);
        } //end if.
        else {
            //CEP não Encontrado.
            limpa_formulário_cep();
            alert("CEP não encontrado.");
        }
    }
        
    function pesquisacep(valor) {

        //Nova variável "cep" somente com dígitos.
        var cep = valor.replace(/\D/g, '');

        //Verifica se campo cep possui valor informado.
        if (cep != "") {

            //Expressão regular para validar o CEP.
            var validacep = /^[0-9]{8}$/;

            //Valida o formato do CEP.
            if(validacep.test(cep)) {

                //Preenche os campos com "..." enquanto consulta webservice.
                document.getElementById('rua').value="...";
                document.getElementById('bairro').value="...";
                document.getElementById('cidade').value="...";
                document.getElementById('uf').value="...";
                document.getElementById('ibge').value="...";

                //Cria um elemento javascript.
                var script = document.createElement('script');

                //Sincroniza com o callback.
                script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=meu_callback';

                //Insere script no documento e carrega o conteúdo.
                document.body.appendChild(script);

            } //end if.
            else {
                //cep é inválido.
                limpa_formulário_cep();
                alert("Formato de CEP inválido.");
            }
        } //end if.
        else {
            //cep sem valor, limpa formulário.
            limpa_formulário_cep();
        }
    };

    //funcoes para o preview da foto
    
//fim das funções de preview da foto

   
    function resgataDadosForm() {
        /*essa função pega dados digitados na parte de cadastro 
        e joga no modal de login e no nome de usuário*/
       var email = document.getElementById('inputEmail4').value
       console.log(email)
       var resgata = email
       document.getElementById('email-login').value = resgata

    }

    function arrumaForm() {
        var nome_usuario = document.getElementById('nome-usuario').value
        var senha = document.getElementById('inputPassword4').value
        var senha1 = document.getElementById('confere_senha').value
        var email = document.getElementById('inputEmail4').value
        //armazenei os dados em um array
        var dados = Array()
        dados[0] = nome_usuario
        dados[1] = senha
        dados[2] = senha1
        dados[3] = email
       document.cookie = dados
        
        if(nome_usuario === '' || senha === '') {
            alert('Por favor, digite um nome de usuário e/ou senha')

        }
         /*else {
             var user_name = nome_usuario
             document.getElementById('usuario_nome').value = user_name

        }*/
        if (email === '') {
            alert('Por favor, digite um endereço de e-mail')
        }
        if(senha !== senha1){
            alert('As senhas devem coincidirem')
        } if(nome_usuario && senha && email != '' && senha === senha1) {
            alert('cadastrado com sucesso')
            document.getElementById('formulario_resgata').hidden = true
            document.getElementById('btn_form_cad').hidden = true
            document.getElementById('img_div_esconde').hidden = false



        }
        //console.log(user_name)
        console.log(dados)
    }

    function mostraNome() {
        var email = document.getElementById('inputEmail4').value
        var senha = document.getElementById('inputPassword4').value
        var email_modal = document.getElementById('email-login').value
        var senha_modal = document.getElementById('senha1').value
        var login_modal = document.getElementById('nome-usuario').value
        var login_usuario = document.getElementById('nome-usuario').value
        login_usuario = login_usuario.trim()
        //abaixo eu sobrescrevi o elemento com o id a1 pelo valor da variavel login_usuario
        document.getElementById("a1").innerHTML = '<i class="fas fa-sign-out-alt">'+login_usuario+'<i/>'
        if(email === email_modal && senha === senha_modal && email_modal != '' && senha_modal != '') {
            alert('seja bem-vindo ' + login_modal)
           document.getElementById('usuario_nome').value = login_modal
           document.getElementById('email-login').hidden = true
           document.getElementById('senha1').hidden = true
           document.getElementById('entrar').hidden = true
           document.getElementById('usuario_menu_login').hidden = false

        }else {
            alert('e-mail e/ou senha inválidos')
        }


        console.log(email_modal)
        console.log(login_usuario)
        
    }


   function divPlanos() {
    //tentar usar a variavel de login como validação 
        if(document.getElementById('usuario_menu_login').hidden = true) {
            alert('Entre para escolher um plano')
        }
    }