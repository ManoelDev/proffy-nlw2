<img width="auto" src="https://github.com/tgmarinho/tgmarinho/blob/master/banner.png">

<p align="center">
  <img src="https://github.com/progamo/proffy-nlw2/blob/master/web/src/assets/images/landing.svg" alt="Proffy" /> 
  <br/>
</p>
<h1 align="center">Proffy</h1>


<p align="center">
  <a href="https://nodejs.org/en/">
    <img src="https://img.shields.io/static/v1?label=Node&message=JS&color=blue?style=plastic&logo=Node.js" alt="NodeJS" />
  </a>
  <a href="https://reactjs.org/">
    <img src="https://img.shields.io/static/v1?label=React&message=JS&color=blue?style=plastic&logo=React" alt="ReactJS" />
  </a>
  <a href="https://reactnative.dev/">
    <img src="https://img.shields.io/static/v1?label=React&message=Native&color=blue?style=plastic&logo=React" alt="React-Native" />
  </a>
</p>













# Sobre
Proffy é um projeto desenvolvido durante o evento Next Level Week #02, disponibilizado pela [Rocketseat](https://rocketseat.com.br/), ocorreu durante a primeira semana de agosto de 2020.

# Tecnologias usadas
Durante toda a aplicação foi usado o [React](https://github.com/facebook/react).
* No back-end usamos o [NodeJS](https://nodejs.org/en/)
* Na web foi usado o [ReactJS](https://reactjs.org/)
* No mobile usamos o [React-Native](https://reactnative.dev/)
Na aplicação mobile o projeto doficial foi feito com expo eu preferir usar a cli do react native

# Como utilizar?

Para utilizar é simples, vamos lá:

Clone o repósitorio na sua maquina usando:
```
$ git@github.com:progamo/proffy-nlw2.git
```

- Como as aplicações estão rodando em localhost temos que configurar todas as variaveis que usa o endereço de IPv4, para o endereço IPv4 do seu computador, podendo ser localizadas nos seguintes arquivos:

```
mobile ═ src ═ services ═ api.ts
```

Para localizar o endereço IPv4, digite no terminal ``$ ipconfig`` caso use Windows, ``$ hostname -I`` caso use linux e no MacOS basta entrar em “Abrir as Preferências Rede…”.

### Rodando o back-end
Agora vamos dar inicio ao back-end. 
Entre na pasta ``server`` pelo terminal e teremos que instalar as dependências dela, para isso digite:
```
$ yarn install
```
Agora temos que iniciar todas as migrates com o seguinte comando:
```
$ yarn knex:migrate
```
Feito? Ok.
Agora sim vamos dar o start. Digite:
```
$ yarn start
```


### Rodando a aplicação Web
Agora vamos dar inicio a aplicação web.
Entre na pasta ``web`` pelo terminal e temos que instalar as dependências dela, para isso digite:
```
$ yarn install
```
Agora basta rodar a aplicação, digite:
```
$ yarn start
```


### Rodando a aplicação Mobile

Agora vamos dar inicio a aplicação mobile.
Entre na pasta ``mobile`` pelo terminal e também teremos que instalar as dependências dela, para isso digite:
```
$ yarn install
```
Agora para iniciar o app apenas digite:

``$ yarn android``


