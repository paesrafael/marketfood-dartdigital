<h1 align="center">
  <a href="#">
    <img src="https://assets.pointec.dev/image/marketfood-banner.png" alt="MarketFood banner" />
  </a>
</h1>

# MarketFood

Projeto desenvolvido para a DartDigital.

No projeto você pode visualizar uma lista de produtos, adicionar os produtos na sua lista e em seu carrinho.

# Tabela de conteúdo

- [Feature](#Features)
- [Aplicação web](#Aplicação-web)
- [Tecnologia](#Tecnologia)
- [Arquitetura](#Arquitetura)
- [Dependências](#Dependências)
- [Dependências de desenvolvimento](#Dependências-de-desenvolvimento)
- [Clonando o projeto](#Clonando-o-projeto)
- [Iniciando a aplicação](#Iniciando-a-aplicação)
- [Autor](#Autor)

# Features

- Lista dos produtos
- Produtos na sua lista
- Produtos no seu carrinho
- Busca por produto
- Adiciona produto por nome na lista

# Aplicação web

Inicialmente o projeto possui uma lista de produtos, adicionar produtos na lista e no carrinho.

Você pode ver o projeto funcionando [aqui](https://demo.pointec.dev/dartdigital/marketfood/).

<p align="center">
  <a href="#" target="_blank">
    <img src="https://assets.pointec.dev/image/marketfood-tela.png" alt="Tela do projeto" />
  </a>
</p>

# Tecnologia

O projeto foi desenvolvido com o ReactJS.

# Arquitetura

```bash
marketfood
├── public/
│   ├── index.html
├── src/
│   ├── assets/
│   │   └── styles
│   │       └── GlobalStyles.js
│   ├── components/
│   │   └── AddProduct/
│   │       └── index.js
│   │       └── styles.js
│   │   └── CategoryProduct/
│   │       └── index.js
│   │       └── styles.js
│   │   └── ListingOfProduct/
│   │       └── index.js
│   │       └── styles.js
│   │   └── SearchProduct/
│   │       └── index.js
│   │       └── styles.js
│   ├── contexts/
│   │   └── index.js
│   ├── pages/
│   │   └── ProductList/
│   │       └── index.js
│   │       └── styles.js
│   ├── services/
│   │   └── api.js
│   ├── App.js
│   ├── index.js
│   └── routes.js
├── .editorconfig
├── .env
├── .env-example
├── .eslintrc.json
├── .gitignore
├── .prettierrc.js
├── babel.config.js
├── config-overrides.js
├── jsconfig.json
├── package.json
├── README.md
└── yarn.lock
```

# Dependências

- [React](https://reactjs.org)
- [Axios](https://www.npmjs.com/package/axios)
- [React-icons](https://react-icons.github.io/react-icons/)
- [React-modal]()
- [React-router-dom](https://www.npmjs.com/package/react-router-dom)
- [React-tabs]()
- [Styled Components](https://github.com/styled-components/styled-components)

# Dependências de desenvolvimento

- [Babel Eslint](https://github.com/babel/babel-eslint)
  - [Babel-plugin-root-import](https://github.com/entwicklerstube/babel-plugin-root-import)
  - [Babel-plugin-transform-remove-console](https://github.com/babel/minify/tree/master/packages/babel-plugin-transform-remove-console)
- [ESLint](https://eslint.org/)
  - [Eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb)
  - [Eslint-import-resolver-babel-plugin-root-import](https://github.com/olalonde/eslint-import-resolver-babel-root-import)
  - [Eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import)
  - [Eslint-plugin-import-helpers](https://github.com/Tibfib/eslint-plugin-import-helpers)
  - [Eslint-plugin-jsx-a11y](https://github.com/evcohen/eslint-plugin-jsx-a11y)
  - [Eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react)
  - [Eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)
- [Customize-cra](https://www.npmjs.com/package/customize-cra)
- [React-app-rewired](https://www.npmjs.com/package/react-app-rewired)

# Clonando o projeto

Baixe o projeto diretamente do GitHub ou use o terminal:

```bash
# Clone o repositório
$ git clone git@github.com:paesrafael/marketfood-dartdigital.git

# Ou use a CLI do GitHub
$ gh repo clone paesrafael/marketfood-dartdigital

# Acesse a pasta do projeto
$ cd marketfood-dartdigital

# Instale as dependências
# Na raiz do projeto, use NPM ou YARN para instalar

# Usando YARN
$ yarn install

# Usando NPM
$ npm install
```

# Iniciando a aplicação

Para começar use o comando:

```bash
# Usando YARN
yarn start

# Usando NPM
npm start

# Acesse a aplicação em http://localhost:3000
```

# Autor

MarketFood desenvolvido por [Rafael Paes](https://github.com/paesrafael/)
