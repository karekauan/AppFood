# App Food

 - Utilizamos docker run --rm -d -p 27017:27017 mongo para levantar o servidor do banco mongo
 - npm install ou npm i para instalar as dependencias que estão descritas no package.json
 - e depois npm run dev para iniciar a aplicação
 - após isso tudo deve estar funcionando normalmente.

para inserir dados na aplicação:
- só pegarmos a rota de POST, olharmos como é esperado o JSON nela
-  logo após abrir o Insomia ou Postman, adicionar a rota de inserção juntamente com o metodo de POST, 
- preparar o JSON no formato que ele deve ser enviado e enviar
- então deve estar adicionado já no banco 
- para podermos listar e ver oque foi inserido, basta pegar a rota de GET
- juntamente com URL e inserir no Insomia e clicar para fazer busca
- então ele retornara um JSON com o formato e os dados de arquivos que foram adicionados
