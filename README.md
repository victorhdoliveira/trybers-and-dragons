## Projeto Trybe And Dragons
Nesse projeto, foi desenvolvida uma simulação de jogo de RPG com base nos princípios de Programação Orientada a Objetos e SOLID. Para tal, foram criadas interfaces e classes para representar diferentes partes do jogo, bem como classes para simular as batalhas entre os personagens.

## Tecnologias
* TypeScript
* POO
* docker-compose
* SQL

## Instalando Dependências
Clone o repositório do GitHub

```javascript
 git clone git@github.com:victorhdoliveira/trybers-and-dragons.git
```

### Com Docker
> Backend

1. Rode os serviços node e db com o seguinte comando: 
```bash
docker-compose up -d
``` 

2. Abra o terminal interativo do container: 
```bash
docker exec -it trybers_and_dragons bash
``` 

3. Instale as dependências dentro do container: 
```bash
npm install
``` 
> Testes

4. Dentro do terminal do container:
```bash
npm test
``` 

:warning: Atenção: O git dentro do container não vem configurado com suas credenciais;

### Sem Docker

Instale as dependências
```bash
npm install
``` 
