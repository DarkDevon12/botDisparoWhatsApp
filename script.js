function enviarMensagensGrupo(grupoNome, texto, quantidadePorMensagem) {
    // Procura o grupo pelo nome
    const grupo = [...document.querySelectorAll("span[title]")].find(element => element.title === grupoNome);

    if (grupo) {
        grupo.click(); // Clica no grupo para abrir o chat

        // Aguarda 1 segundo para garantir que o chat foi aberto
        setTimeout(() => {
            // Localiza o campo de entrada de texto
            const input = document.querySelector("div[contenteditable='true'][data-tab='10']");

            if (input) {
                console.log("Campo de mensagem encontrado!");

                // Divide o texto em palavras
                const palavras = texto.split(' ');
                const mensagens = [];

                // Agrupa as palavras em mensagens de três palavras
                for (let i = 0; i < palavras.length; i += quantidadePorMensagem) {
                    mensagens.push(palavras.slice(i, i + quantidadePorMensagem).join(' '));
                }

                let i = 0;
                const enviar = () => {
                    if (i < mensagens.length) {
                        // Usando o execCommand para simular a digitação de forma mais natural
                        input.focus();
                        document.execCommand('insertText', false, mensagens[i]); // Insere o texto

                        // Aguarda para verificar o botão de enviar
                        setTimeout(() => {
                            const botaoEnviar = document.querySelector("span[data-icon='send']");
                            if (botaoEnviar) {
                                console.log("Botão de enviar encontrado!");
                                botaoEnviar.click(); // Clica no botão de enviar
                                i++;

                                // Atraso de 1 segundo entre os envios
                                setTimeout(enviar, 1000);
                            } else {
                                console.log("Botão de enviar não encontrado, tentando novamente...");
                                setTimeout(enviar, 1000); // Tenta novamente após 1 segundo
                            }
                        }, 500); // Atraso para garantir que o botão de enviar apareça
                    }
                };

                enviar(); // Inicia o envio das mensagens
            } else {
                console.log("Campo de mensagem não encontrado!");
            }
        }, 2000); // Aguarda 1 segundo para garantir que o grupo foi carregado corretamente
    } else {
        console.log("Grupo não encontrado!");
    }
}

// Configurações: Nome do grupo e o texto longo que deseja enviar
const grupoNome = "NOME EXATO DO CONTATO OU GRUPO"; // Substitua pelo nome exato do grupo
const texto = "Marcelo pro Cristiano Olha ihh ihh Olha o Cristiano Buffon desesperado Rolou pra trás Lucas Vázquez Buffooooooooooooon Cristiano de bicicleta Minha nossa, minha nossa Goooooooooooooooooool Receba Os aplausos Do torcedor rival Esta de pé O torcedor em Turim para aplaudir Para reverenciar essa máquina Esse monstro Esse jogador inexplicável Chamado Cristiano Ronaldo";
const quantidadePorMensagem = 6; // Número de palavras por mensagem

enviarMensagensGrupo(grupoNome, texto, quantidadePorMensagem);
