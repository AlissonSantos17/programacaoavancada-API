1. Criar uma REST API com 3 endpoints. Cada endpoint deve ter uma das seguintes configurações:

a) Rota: /estudante
Verbo: POST
Resposta: Se o nome enviado pelo consumidor da API for “Marcio”. A API deve retornar um objeto
cujo status é ACCEPTED, com a seguinte mensagem de retorno “estudante é Marcio”. Se o nome
enviado, não for “Marcio”, enviar o status de Bad Request e um dado booleano false.


b) Rota: /home
Verbo: GET
Resposta: A API deve retornar um objeto cujo status é “CREATED” e cuja mensagem de retorno
seja “Home da API”.


c) Rota: /estudante
Verbo: PUT
Resposta: Se o id do estudante enviado pelo consumidor da API for “nulo”. A API deve retornar um
objeto cujo status é 406 (Not Acceptable), com um retorno booleano false. Se o id enviado, não for
nulo, enviar o status OK e um dado booleano true.
