Sistema de Controle de Estoque – Óticas Carol

Este projeto é um sistema simples para controle de produtos em estoque da Óticas Carol.
O objetivo é permitir o cadastro, listagem e remoção de produtos, utilizando tecnologias web modernas.
O sistema foi desenvolvido como parte de um projeto acadêmico/extensão.

Funcionalidades

Cadastro de novos produtos

Listagem completa dos produtos cadastrados

Remoção de produtos

Integração total com banco de dados MySQL/MariaDB

Interface simples e personalizada com a identidade da Óticas Carol


Tecnologias Utilizadas

Frontend

React

Vite

CSS

Backend

Node.js

Express

MySQL2

CORS

Dotenv

Banco de Dados

MariaDB / MySQL






Estrutura do Projeto

O projeto é dividido em duas partes:

oticas-projeto/
 - backend/    → servidor Node.js e rotas da API
 - frontend/   → interface React do sistema



Como Executar o Projeto
1. Iniciar o Backend

Na pasta backend:

npm install
node server.js
2. Iniciar o Frontend

Na pasta frontend:

npm install
npm run dev


Banco de Dados Utilizado

Crie o banco:

CREATE DATABASE oticas_db;

Crie a tabela:

CREATE TABLE produtos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  quantidade INT NOT NULL,
  preco DECIMAL(10,2) NOT NULL
);


Sobre o Projeto

Este sistema foi criado para fins educacionais, aplicando conceitos de:

Desenvolvimento web

Modelagem de banco de dados

API REST

Versionamento com Git e GitHub

Autora: Gabriela Bispo Nogueira
