const readline = require("readline-sync");

let tarefas = [];
let marcadas = [];
let retorno, op = 0;

function criarTarefa(){

    let tarefa = 0;

    tarefa = readline.question("Qual tarefa voce deseja criar? \n");
    
    tarefas.push(tarefa);
    marcadas.push(0);

}

function listarTarefas(){
    
    for(let i = 0; i < tarefas.length; i++){
            
        if(marcadas[i] != 0){

            console.log(`[X] ${tarefas[i]}`);

        }

        else{
            
            console.log(`[ ] ${tarefas[i]}`);

        }
        
    }

}

function marcarTarefas(){
    
    
    let marcar = readline.question("\nDigite o numero da tarefa que deseja marcar: \n");
    marcar = Number(marcar);

    //NOTA DE UPDATE: Colocar um try catch aqui, para se caso o usuario escrever um numero de tarefa que não existe
    
    marcadas[marcar-1] = 1;
    
    
}

function excluirTarefa(){

    let indice = 0;

    indice = readline.question("\nDigite o numero da tarefa que você deseja excluir: \n");

    indice = Number(indice);
    //NOTA DE UPDATE: Colocar um try catch aqui, para se caso o usuario escrever um numero de tarefa que não existe
    for(let i = 0; i < tarefas.length; i++){
        if(i === indice - 1){
            tarefas.splice(i, 1);
            marcadas.splice(i, 1);
        }
        
    }

}

while(op != 5){
    
     console.clear();
    retorno = 0;
    
    op = readline.question("\n ------ GERENCIADOR DE TAREFAS ------\n\nO que deseja fazer: \n1-Criar uma tarefa \n2-Listar todas as tarefas \n3-Marcar uma tarefa como concluida \n4-Excluir uma tarefa \n5-Sair \nDigite a opcao desejada: ");
    
    op = Number(op);
    
    switch(op){
        
        case 1:
            console.clear();
            console.log("\n ------ CRIAR TAREFA ------ \n");
            
            criarTarefa();
            
            console.log("Tarefa criada com sucesso!");
            retorno = readline.keyInPause(`\nPressione qualquer tecla para continuar ....`, { guide: false});
        break;
            
        case 2:

            console.clear();
            
            if(tarefas.length === 0){
                console.log("Tudo Vazio por aqui ;-;");
            }
            else{
            console.log("\n ------ TODAS AS TAREFAS ------ \n");

            listarTarefas();
            
            }
            retorno = readline.keyInPause(`\nPressione qualquer tecla para continuar ....`, { guide: false});
            
        break;

        case 3:
            
            console.clear();

            if(tarefas.length === 0){
                console.log("Não existem tarefas criadas para serem marcadas ainda");
            }
            else{
            console.log("\n ------ MARCAR TAREFAS ------ \n");

            listarTarefas();
            marcarTarefas();
            
            console.log("Tarefa marcada com sucesso!");
            }
            retorno = readline.keyInPause(`\nPressione qualquer tecla para continuar ....`, { guide: false});
            
            
        break;

        case 4:

            console.clear();

            if(tarefas.length === 0){
            console.log("Não existem tarefas para serem excluidas");
            }
            else{
            console.log("\n ------ ExCLUIR TAREFA ------ \n");

            listarTarefas();
            excluirTarefa();
            
            console.log("Tarefa excluida com sucesso!");
            }
            retorno = readline.keyInPause(`\nPressione qualquer tecla para continuar ....`, { guide: false});

        break;

        case 5:
            console.log("FIM DO PROGRAMA");
        break;


        default:
            console.log("Opção Invalida!!!");
        break;

    }

}