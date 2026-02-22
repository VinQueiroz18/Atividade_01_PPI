import express from 'express';

const host = '0.0.0.0'; 
const porta = 3000;

const server = express();

server.listen(porta, host, () => {
    console.log(`Servidor escutando em http://${host}:${porta}`);
});

server.get('/', (req, res) => { 
    res.send(` 
        <!DOCTYPE html>
        <html lang="pt-br">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Atividade I - Programação para Internet</title>
        </head>
        <body>
            <h1>UNOESTE - ÁREA DO FUNCIONÁRIO</h1>
            <h2>Olá, bem-vindo a página de Reajuste Salarial!</h2>
            <p>Para calcular o reajuste do seu salário, siga as instruções abaixo de como preencher a URL:</p>
            <ul>
                <li>Informe a idade;</li>
                <li>Informe o sexo (M ou F);</li>
                <li>Informe o salario base;</li>
                <li>Informe o ano de contratação;</li>
                <li>Informe a matricula;</li>
                <li>Em cada etapa deve-se separar os parâmetros por &.</li>
            </ul>
            <h3>Exemplo: http://localhost:3000/reajuste?idade=18&sexo=F&salario_Base=1700&ano_Contratacao=2014&matricula=12345</h3>
        </body>
        </html>
    `);
});

server.get('/reajuste', (req, res) => {
    const idade = Number(req.query.idade);
    const sexo = req.query.sexo;
    const salario_Base = Number(req.query.salario_Base);
    const ano_Contratacao = Number(req.query.ano_Contratacao);
    const matricula = Number(req.query.matricula);

    if (idade <= 16 || isNaN(salario_Base) || ano_Contratacao <= 1960 || matricula <= 0 || (sexo !== 'M' && sexo !== 'F')) {
    res.send(`
                <!DOCTYPE html>
                <html lang="pt-br">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Atividade I - Programação para Internet</title>
                </head>
                <body>
                    <h1>UNOESTE - ÁREA DO FUNCIONÁRIO</h1>
                    <h2>DADOS INVÁLIDOS!</h2>
                </body>
                </html>
            `);
} else {
        let reajuste = 0;
        let perc = 0;
        let salario_Novo = 0;
        const ano_Atual = new Date().getFullYear();
        const tempo_Empresa = ano_Atual - ano_Contratacao;
        
        if (idade >= 18 && idade <= 39) {
            if (sexo == 'M') {
                if (tempo_Empresa <= 10) {
                    perc = 0.10;
                    reajuste = salario_Base * perc;
                    salario_Novo = salario_Base + reajuste - 10;
                    res.send(`
                        <!DOCTYPE html>
                        <html lang="pt-br">
                        <head>
                            <meta charset="UTF-8">
                            <meta name="viewport" content="width=device-width, initial-scale=1.0">
                            <title>Atividade I - Programação para Internet</title>
                        </head>
                        <body>
                            <h1>UNOESTE - ÁREA DO FUNCIONÁRIO</h1>
                            <h2>Reajuste Salarial - Ano: ${ano_Atual}</h2>
                            <p>Matricula: ${matricula}</p>
                            <p>Idade: ${idade}</p>
                            <p>Sexo: ${sexo}</p>
                            <p>Salário Base: ${salario_Base}</p>
                            <p>Tempo na Empresa: ${tempo_Empresa}</p>
                            <p>Percentual de Reajuste: ${perc}</p>
                            <h3>Salário Novo: ${salario_Novo}</h3>
                        </body>
                        </html>
                    `);
                } else {
                    perc = 0.10;
                    reajuste = salario_Base * perc;
                    salario_Novo = salario_Base + reajuste + 17;
                    res.send(`
                        <!DOCTYPE html>
                        <html lang="pt-br">
                        <head>
                            <meta charset="UTF-8">
                            <meta name="viewport" content="width=device-width, initial-scale=1.0">
                            <title>Atividade I - Programação para Internet</title>
                        </head>
                        <body>
                            <h1>UNOESTE - ÁREA DO FUNCIONÁRIO</h1>
                            <h2>Reajuste Salarial - Ano: ${ano_Atual}</h2>
                            <p>Matricula: ${matricula}</p>
                            <p>Idade: ${idade}</p>
                            <p>Sexo: ${sexo}</p>
                            <p>Salário Base: ${salario_Base}</p>
                            <p>Tempo na Empresa: ${tempo_Empresa}</p>
                            <p>Percentual de Reajuste: ${perc}</p>
                            <h3>Salário Novo: ${salario_Novo}</h3>
                        </body>
                        </html>
                    `);
                    }
            } else if (sexo == 'F') {
                if (tempo_Empresa <= 10) {
                    perc = 0.08;
                    reajuste = salario_Base * perc;
                    salario_Novo = salario_Base + reajuste - 11;
                    res.send(`
                        <!DOCTYPE html>
                        <html lang="pt-br">
                        <head>
                            <meta charset="UTF-8">
                            <meta name="viewport" content="width=device-width, initial-scale=1.0">
                            <title>Atividade I - Programação para Internet</title>
                        </head>
                        <body>
                            <h1>UNOESTE - ÁREA DO FUNCIONÁRIO</h1>
                            <h2>Reajuste Salarial - Ano: ${ano_Atual}</h2>
                            <p>Matricula: ${matricula}</p>
                            <p>Idade: ${idade}</p>
                            <p>Sexo: ${sexo}</p>
                            <p>Salário Base: ${salario_Base}</p>
                            <p>Tempo na Empresa: ${tempo_Empresa}</p>
                            <p>Percentual de Reajuste: ${perc}</p>
                            <h3>Salário Novo: ${salario_Novo}</h3>
                        </body>
                        </html>
                    `);
                } else {
                    perc = 0.08;
                    reajuste = salario_Base * perc;
                    salario_Novo = salario_Base + reajuste + 16;
                    res.send(`
                        <!DOCTYPE html>
                        <html lang="pt-br">
                        <head>
                            <meta charset="UTF-8">
                            <meta name="viewport" content="width=device-width, initial-scale=1.0">
                            <title>Atividade I - Programação para Internet</title>
                        </head>
                        <body>
                            <h1>UNOESTE - ÁREA DO FUNCIONÁRIO</h1>
                            <h2>Reajuste Salarial - Ano: ${ano_Atual}</h2>
                            <p>Matricula: ${matricula}</p>
                            <p>Idade: ${idade}</p>
                            <p>Sexo: ${sexo}</p>
                            <p>Salário Base: ${salario_Base}</p>
                            <p>Tempo na Empresa: ${tempo_Empresa}</p>
                            <p>Percentual de Reajuste: ${perc}</p>
                            <h3>Salário Novo: ${salario_Novo}</h3>
                        </body>
                        </html>
                    `);
                }
            }
        } else if (idade >= 40 && idade <= 69) {
            if (sexo == 'M') {
                if (tempo_Empresa <= 10) {
                    perc = 0.08;
                    reajuste = salario_Base * perc;
                    salario_Novo = salario_Base + reajuste - 5;
                    res.send(`
                        <!DOCTYPE html>
                        <html lang="pt-br">
                        <head>
                            <meta charset="UTF-8">
                            <meta name="viewport" content="width=device-width, initial-scale=1.0">
                            <title>Atividade I - Programação para Internet</title>
                        </head>
                        <body>
                            <h1>UNOESTE - ÁREA DO FUNCIONÁRIO</h1>
                            <h2>Reajuste Salarial - Ano: ${ano_Atual}</h2>
                            <p>Matricula: ${matricula}</p>
                            <p>Idade: ${idade}</p>
                            <p>Sexo: ${sexo}</p>
                            <p>Salário Base: ${salario_Base}</p>
                            <p>Tempo na Empresa: ${tempo_Empresa}</p>
                            <p>Percentual de Reajuste: ${perc}</p>
                            <h3>Salário Novo: ${salario_Novo}</h3>
                        </body>
                        </html>
                    `);
                } else {
                    perc = 0.08;
                    reajuste = salario_Base * perc;
                    salario_Novo = salario_Base + reajuste + 15;
                    res.send(`
                        <!DOCTYPE html>
                        <html lang="pt-br">
                        <head>
                            <meta charset="UTF-8">
                            <meta name="viewport" content="width=device-width, initial-scale=1.0">
                            <title>Atividade I - Programação para Internet</title>
                        </head>
                        <body>
                            <h1>UNOESTE - ÁREA DO FUNCIONÁRIO</h1>
                            <h2>Reajuste Salarial - Ano: ${ano_Atual}</h2>
                            <p>Matricula: ${matricula}</p>
                            <p>Idade: ${idade}</p>
                            <p>Sexo: ${sexo}</p>
                            <p>Salário Base: ${salario_Base}</p>
                            <p>Tempo na Empresa: ${tempo_Empresa}</p>
                            <p>Percentual de Reajuste: ${perc}</p>
                            <h3>Salário Novo: ${salario_Novo}</h3>
                        </body>
                        </html>
                    `);
                }
            } else if (sexo == 'F') {
                if (tempo_Empresa <= 10) {
                    perc = 0.10;
                    reajuste = salario_Base * perc;
                    salario_Novo = salario_Base + reajuste - 7;
                    res.send(`
                        <!DOCTYPE html>
                        <html lang="pt-br">
                        <head>
                            <meta charset="UTF-8">
                            <meta name="viewport" content="width=device-width, initial-scale=1.0">
                            <title>Atividade I - Programação para Internet</title>
                        </head>
                        <body>
                            <h1>UNOESTE - ÁREA DO FUNCIONÁRIO</h1>
                            <h2>Reajuste Salarial - Ano: ${ano_Atual}</h2>
                            <p>Matricula: ${matricula}</p>
                            <p>Idade: ${idade}</p>
                            <p>Sexo: ${sexo}</p>
                            <p>Salário Base: ${salario_Base}</p>
                            <p>Tempo na Empresa: ${tempo_Empresa}</p>
                            <p>Percentual de Reajuste: ${perc}</p>
                            <h3>Salário Novo: ${salario_Novo}</h3>
                        </body>
                        </html>
                    `);
                } else {
                    perc = 0.10;
                    reajuste = salario_Base * perc;
                    salario_Novo = salario_Base + reajuste + 14;
                    res.send(`
                        <!DOCTYPE html>
                        <html lang="pt-br">
                        <head>
                            <meta charset="UTF-8">
                            <meta name="viewport" content="width=device-width, initial-scale=1.0">
                            <title>Atividade I - Programação para Internet</title>
                        </head>
                        <body>
                            <h1>UNOESTE - ÁREA DO FUNCIONÁRIO</h1>
                            <h2>Reajuste Salarial - Ano: ${ano_Atual}</h2>
                            <p>Matricula: ${matricula}</p>
                            <p>Idade: ${idade}</p>
                            <p>Sexo: ${sexo}</p>
                            <p>Salário Base: ${salario_Base}</p>
                            <p>Tempo na Empresa: ${tempo_Empresa}</p>
                            <p>Percentual de Reajuste: ${perc}</p>
                            <h3>Salário Novo: ${salario_Novo}</h3>
                        </body>
                        </html>
                    `);
                }
            }
        } else if (idade >= 70 && idade <= 99) {
            if (sexo == 'M') {
                if (tempo_Empresa <= 10) {
                    perc = 0.15;
                    reajuste = salario_Base * perc;
                    salario_Novo = salario_Base + reajuste - 15;
                    res.send(`
                        <!DOCTYPE html>
                        <html lang="pt-br">
                        <head>
                            <meta charset="UTF-8">
                            <meta name="viewport" content="width=device-width, initial-scale=1.0">
                            <title>Atividade I - Programação para Internet</title>
                        </head>
                        <body>
                            <h1>UNOESTE - ÁREA DO FUNCIONÁRIO</h1>
                            <h2>Reajuste Salarial - Ano: ${ano_Atual}</h2>
                            <p>Matricula: ${matricula}</p>
                            <p>Idade: ${idade}</p>
                            <p>Sexo: ${sexo}</p>
                            <p>Salário Base: ${salario_Base}</p>
                            <p>Tempo na Empresa: ${tempo_Empresa}</p>
                            <p>Percentual de Reajuste: ${perc}</p>
                            <h3>Salário Novo: ${salario_Novo}</h3>
                        </body>
                        </html>
                    `);
                } else {
                    perc = 0.15;
                    reajuste = salario_Base * perc;
                    salario_Novo = salario_Base + reajuste + 13;
                    res.send(`
                        <!DOCTYPE html>
                        <html lang="pt-br">
                        <head>
                            <meta charset="UTF-8">
                            <meta name="viewport" content="width=device-width, initial-scale=1.0">
                            <title>Atividade I - Programação para Internet</title>
                        </head>
                        <body>
                            <h1>UNOESTE - ÁREA DO FUNCIONÁRIO</h1>
                            <h2>Reajuste Salarial - Ano: ${ano_Atual}</h2>
                            <p>Matricula: ${matricula}</p>
                            <p>Idade: ${idade}</p>
                            <p>Sexo: ${sexo}</p>
                            <p>Salário Base: ${salario_Base}</p>
                            <p>Tempo na Empresa: ${tempo_Empresa}</p>
                            <p>Percentual de Reajuste: ${perc}</p>
                            <h3>Salário Novo: ${salario_Novo}</h3>
                        </body>
                        </html>
                    `);
                }
            } else if (sexo == 'F') {
                if (tempo_Empresa <= 10) {
                    perc = 0.17;
                    reajuste = salario_Base * perc;
                    salario_Novo = salario_Base + reajuste - 17;
                    res.send(`
                        <!DOCTYPE html>
                        <html lang="pt-br">
                        <head>
                            <meta charset="UTF-8">
                            <meta name="viewport" content="width=device-width, initial-scale=1.0">
                            <title>Atividade I - Programação para Internet</title>
                        </head>
                        <body>
                            <h1>UNOESTE - ÁREA DO FUNCIONÁRIO</h1>
                            <h2>Reajuste Salarial - Ano: ${ano_Atual}</h2>
                            <p>Matricula: ${matricula}</p>
                            <p>Idade: ${idade}</p>
                            <p>Sexo: ${sexo}</p>
                            <p>Salário Base: ${salario_Base}</p>
                            <p>Tempo na Empresa: ${tempo_Empresa}</p>
                            <p>Percentual de Reajuste: ${perc}</p>
                            <h3>Salário Novo: ${salario_Novo}</h3>
                        </body>
                        </html>
                    `);
                } else {
                    perc = 0.17;
                    reajuste = salario_Base * perc;
                    salario_Novo = salario_Base + reajuste + 12;
                    res.send(`
                        <!DOCTYPE html>
                        <html lang="pt-br">
                        <head>
                            <meta charset="UTF-8">
                            <meta name="viewport" content="width=device-width, initial-scale=1.0">
                            <title>Atividade I - Programação para Internet</title>
                        </head>
                        <body>
                            <h1>UNOESTE - ÁREA DO FUNCIONÁRIO</h1>
                            <h2>Reajuste Salarial - Ano: ${ano_Atual}</h2>
                            <p>Matricula: ${matricula}</p>
                            <p>Idade: ${idade}</p>
                            <p>Sexo: ${sexo}</p>
                            <p>Salário Base: ${salario_Base}</p>
                            <p>Tempo na Empresa: ${tempo_Empresa}</p>
                            <p>Percentual de Reajuste: ${perc}</p>
                            <h3>Salário Novo: ${salario_Novo}</h3>
                        </body>
                        </html>
                    `);
                }
            }
        } else {
            res.send(`
                <!DOCTYPE html>
                <html lang="pt-br">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Atividade I - Programação para Internet</title>
                </head>
                <body>
                    <h1>UNOESTE - ÁREA DO FUNCIONÁRIO</h1>
                    <h2>NÃO EXISTE REGRA DE REAJUSTE PARA FUNCIONÁRIOS DE 17 ANOS!</h2>
                </body>
                </html>
            `);
        }
    }
});