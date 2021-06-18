function VerificarEntrada(){
    NomeConvidado = document.getElementById('nome').value;
    NomeAnfitriao = document.getElementById('convidadoPor').value;
    ConvidadosMatt = ['Ana', 'Carla', 'Daniel', 'Bruna', 'Dani', 'Luiza', 'Paula'];
    ConvidadosJon = ['Paulo', 'Jonas', 'Henrique', 'Saulo', 'Rodolfo', 'Thais', 'Julia'];

    if (NomeAnfitriao == 'Matt'){
        if (ConvidadosMatt.includes(NomeConvidado)){
            document.getElementById('permissaoDeEntrada').innerText = 'Você pode entrar!';
        }else{
            document.getElementById('permissaoDeEntrada').innerText = 'Você não pode entrar, infelizmente';
        }

    }else if(NomeAnfitriao == 'Jon'){
        if (ConvidadosJon.includes(NomeConvidado)){
            document.getElementById('permissaoDeEntrada').innerText = 'Você pode entrar!'
        }else{
            document.getElementById('permissaoDeEntrada').innerText = 'Você não pode entrar, infelizmente';
        }

    }else{
        document.getElementById('permissaoDeEntrada').innerText = 'Você não pode entrar, infelizmente';
    }
}