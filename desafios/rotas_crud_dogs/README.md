Passo a passo do desenvolvimento do projeto:

- Iniciar um projeto com o Yarn
    ''' yarn init -y'''

- Intalando express
    ''' yarn add express'''

- No package.json adicionei
    '''
    "scripts": {
    "start": "node index.js"
    }
    '''

- Adicioinei código no index.js

- Para rodar o código
    '''yarn start'''

## 🚀 Fazendo requisições no Postman

### /adiconarDog
- Opção Post
- Selecione Body > raw > Json
- Depois em formato json insira o nome do cachoro
'''
{
    "nome" : "Totó"
}
'''
- Depois envia clicando no botão "Send"

### /listarDog
- Opção Get
- Clique no botão "Send" e ele vai listar os cachorros cadastrados

### /atualizarDog
- Opção Post
- Selecione Body > raw > Json
- Depois em formato json insira o nome antigo do cachoro e depois o novo nome, no seguinte formato:
'''
{
    "nomeAntigo" : "Totó",
    "nomeNovo": "Lulu"
}
'''
- Depois envia clicando no botão "Send"
- Para ver se realmente ele fez essa alteração de nome é só voltar para a rota "/listarDog"

### deletarDog
- Opção Post
- Selecione Body > raw > Json
- Depois em formato json insira o nome do cachoro
'''
{
    "nome" : "Lulu"
}
'''
- Depois envia clicando no botão "Send"
- Para ver se realmente ele fez essa alteração de nome é só voltar para a rota "/listarDog"