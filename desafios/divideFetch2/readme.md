Escrever um programa que consome a api, recebe os valores e calcula x/y e retorna o resultado :)

GET http://localhost:6000/numbers


escrever o mesmo programa, porem x e y vem de duas apis distintas.

GET http://localhost:6000/getx
GET http://localhost:6000/gety

## Para começar...

- Digite o seguinte comando para baixar as dependências tando na pasta de **api** como na pasta de **consumer**

```
yarn
```

- Para levantar os servidores tanto de **api** como de **consumer**, abra cada servidor em um terminal e digite
```
yarn start
```