# Repoprovas API

## front em desenvolvimento: 
https://repoprovas-front-kappa.vercel.app/
## Deploy:
Link de consulta do Heroku: 
https://repoprovas-projeto-20.herokuapp.com/

## Sobre:
Projeto back end em typescript de um sistema de compartilhamento de provas entre estudantes.<br/>
20º projeto do curso de desenvolvimento web full stack da DRIVEN
#
## Ferramentas:
<p float="left">
 <img style='height: 40px' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />
<img style='height: 40px' alt="Node-JS" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
<img style='height: 40px' alt="postgresql" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain-wordmark.svg"/>
 <img style='height: 40px' alt="Heroku" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original.svg"/>
  <img style='height: 40px;' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" />
   <img style='height: 40px' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" />
  <img style='height: 40px' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" />
</p>

#
## Instalação:
~~~
git clone https://github.com/Vmatos98/repoprovas-api.git 
~~~
~~~
cd repoprovas-api
~~~
~~~
npm i
~~~
para teste em desenvolvimento:
~~~
npm run test
~~~
para execução em produção:
~~~
npm start
~~~
#

## Funções:
### testes em localhost, para uso da versão web usar link do Heroku
> Algumas rotas necessitam de autenticação via token no formato Bearer token<br/>
> O token é obtido na response do login
<br/>

## POST:
### Cadastrar novo usuario: 
 ~~~
 localhost:5000/sigin
 ~~~ 
#### Exemplo de body:
~~~ 
{
    "email":"mail@teste.com",
    "password":"senhaforte",
    "confirmPassword":"senhaforte"
}
~~~
---
### Realizar login: 
 ~~~
 localhost:5000/login
 ~~~ 
#### Exemplo de body:
~~~ 
{
    "email":"mail@teste.com",
    "password":"senhaforte",
}
~~~
#### Exemplo de retorno:
~~~ 
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY1ODc2ODg5NSwiZXhwIjoxNjU4ODEyMDk1fQ.bUC3kCN7GvXJG08xFaPs7fkkG-DVPqc0MrO4KEBooUc"
}
~~~
---
### Enviar prova:
> - São necessários alguns dados antes de enviar uma prova, a forma de se obter esses dados será explicada na seção de GET<br/>
> - Substitua os < > pelo valor correspondente  
 ~~~
 localhost:5000/tests
 ~~~ 
#### Exemplo de body:
~~~ 
{
    "name":"prova 1",
    "pdfUrl":"<Url do pdf da prova>",
    "categoryId":<ID da categoria>,
    "teacherId":<ID do professor>,
    "disciplineId":<ID da disciplina>
}
~~~

---
## GET:

### Obter categorias registradas no banco: 
 ~~~
 localhost:5000/categories
 ~~~
 #### Retorno:
 
~~~
{
  "categories": [
    {
      "id": 1,
      "createdAt": "2022-07-24T13:08:36.256Z",
      "name": "Projeto"
    },
    {
      "id": 2,
      "createdAt": "2022-07-24T13:08:36.256Z",
      "name": "Prática"
    },
    {
      "id": 3,
      "createdAt": "2022-07-24T13:08:36.256Z",
      "name": "Recuperação"
    },
    {
      "id": 4,
      "createdAt": "2022-07-24T23:09:56.485Z",
      "name": "Projeto"
    },
    {
      "id": 5,
      "createdAt": "2022-07-24T23:09:56.485Z",
      "name": "Prática"
    },
    {
      "id": 6,
      "createdAt": "2022-07-24T23:09:56.485Z",
      "name": "Recuperação"
    },
    {
      "id": 7,
      "createdAt": "2022-07-25T03:41:10.130Z",
      "name": "Projeto"
    },
    {
      "id": 8,
      "createdAt": "2022-07-25T03:41:10.130Z",
      "name": "Prática"
    },
    {
      "id": 9,
      "createdAt": "2022-07-25T03:41:10.130Z",
      "name": "Recuperação"
    }
  ]
}
~~~

#

### Obter disciplinas registradas no banco: 
 ~~~
 localhost:5000/discipline
 ~~~
 #### Retorno:

 ~~~
 [
  {
    "id": 1,
    "createdAt": "2022-07-24T13:10:10.787Z",
    "name": "HTML e CSS",
    "termId": 1
  },
  {
    "id": 2,
    "createdAt": "2022-07-24T13:10:10.787Z",
    "name": "JavaScript",
    "termId": 2
  },
  {
    "id": 3,
    "createdAt": "2022-07-24T13:10:10.787Z",
    "name": "React",
    "termId": 3
  },
{...}
]
 ~~~
 #
 ### Obter professor de uma disciplina: 
 ~~~
 localhost:5000/discipline/teacher/<ID da disciplina>
 ~~~
 #### Retorno:
 (exemplo com o id = 1)

 ~~~
 [
  {
    "teacher": {
      "id": 1,
      "name": "Diego Pinho"
    }
  }
]
 ~~~
#
 ### Obter provas agrupado por disciplina: 
 ~~~
 localhost:5000/tests?groupBy=disciplines
 ~~~
 #### Retorno:
 ~~~
 {
  "tests": [
    {
      "id": 1,
      "createdAt": "2022-07-24T13:05:13.399Z",
      "number": 1,
      "disciplines": [
        {
          "id": 1,
          "createdAt": "2022-07-24T13:10:10.787Z",
          "name": "HTML e CSS",
          "termId": 1,
          "teachers": [
            {
              "id": 1,
              "createdAt": "2022-07-24T13:12:06.201Z",
              "teacherId": 1,
              "disciplineId": 1,
              "teacher": {
                "id": 1,
                "createdAt": "2022-07-24T13:09:15.978Z",
                "name": "Diego Pinho"
              },
              "tests": [
                {
                  "id": 1,
                  "createdAt": "2022-07-24T16:16:18.497Z",
                  "name": "prova 1",
                  "pdfUrl": "https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&ved=2ahUKEwi-iIaEpZD5AhWYsJUCHQ78AysQFnoECBAQAQ&url=https%3A%2F%2Fdhg1h5j42swfq.cloudfront.net%2F2020%2F04%2F18094640%2Fuerr-prova-pmrr-2018.pdf&usg=AOvVaw15uvmel_XUOWib05Au1AYW",
                  "categoryId": 1,
                  "teacherId": 1,
                  "disciplineId": 1,
                  "category": {
                    "id": 1,
                    "createdAt": "2022-07-24T13:08:36.256Z",
                    "name": "Projeto"
                  }
                },
                {
                  "id": 2,
                  "createdAt": "2022-07-24T16:48:52.751Z",
                  "name": "prova 1",
                  "pdfUrl": "https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&ved=2ahUKEwi-iIaEpZD5AhWYsJUCHQ78AysQFnoECBAQAQ&url=https%3A%2F%2Fdhg1h5j42swfq.cloudfront.net%2F2020%2F04%2F18094640%2Fuerr-prova-pmrr-2018.pdf&usg=AOvVaw15uvmel_XUOWib05Au1AYW",
                  "categoryId": 1,
                  "teacherId": 1,
                  "disciplineId": 1,
                  "category": {
                    "id": 1,
                    "createdAt": "2022-07-24T13:08:36.256Z",
                    "name": "Projeto"
                  }
                },
                {
                  "id": 3,
                  "createdAt": "2022-07-25T03:12:14.743Z",
                  "name": "prova 1",
                  "pdfUrl": "https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&ved=2ahUKEwi-iIaEpZD5AhWYsJUCHQ78AysQFnoECBAQAQ&url=https%3A%2F%2Fdhg1h5j42swfq.cloudfront.net%2F2020%2F04%2F18094640%2Fuerr-prova-pmrr-2018.pdf&usg=AOvVaw15uvmel_XUOWib05Au1AYW",
                  "categoryId": 1,
                  "teacherId": 1,
                  "disciplineId": 1,
                  "category": {
                    "id": 1,
                    "createdAt": "2022-07-24T13:08:36.256Z",
                    "name": "Projeto"
                  }
                },
{...}
  ]
}
 ~~~
#
### Obter provas agrupado por professor: 
 ~~~
 localhost:5000/tests?groupBy=teachers
 ~~~
 #### Retorno:

 ~~~
{
  "tests": [
    {
      "id": 1,
      "createdAt": "2022-07-24T13:12:06.201Z",
      "teacherId": 1,
      "disciplineId": 1,
      "teacher": {
        "name": "Diego Pinho",
        "id": 1
      },
      "discipline": {
        "id": 1,
        "createdAt": "2022-07-24T13:10:10.787Z",
        "name": "HTML e CSS",
        "termId": 1,
        "term": {
          "id": 1,
          "createdAt": "2022-07-24T13:05:13.399Z",
          "number": 1
        }
      },
      "tests": [
        {
          "id": 1,
          "createdAt": "2022-07-24T16:16:18.497Z",
          "name": "prova 1",
          "pdfUrl": "https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&ved=2ahUKEwi-iIaEpZD5AhWYsJUCHQ78AysQFnoECBAQAQ&url=https%3A%2F%2Fdhg1h5j42swfq.cloudfront.net%2F2020%2F04%2F18094640%2Fuerr-prova-pmrr-2018.pdf&usg=AOvVaw15uvmel_XUOWib05Au1AYW",
          "categoryId": 1,
          "teacherId": 1,
          "disciplineId": 1,
          "category": {
            "id": 1,
            "createdAt": "2022-07-24T13:08:36.256Z",
            "name": "Projeto"
          }
        },
        {
          "id": 2,
          "createdAt": "2022-07-24T16:48:52.751Z",
          "name": "prova 1",
          "pdfUrl": "https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&ved=2ahUKEwi-iIaEpZD5AhWYsJUCHQ78AysQFnoECBAQAQ&url=https%3A%2F%2Fdhg1h5j42swfq.cloudfront.net%2F2020%2F04%2F18094640%2Fuerr-prova-pmrr-2018.pdf&usg=AOvVaw15uvmel_XUOWib05Au1AYW",
          "categoryId": 1,
          "teacherId": 1,
          "disciplineId": 1,
          "category": {
            "id": 1,
            "createdAt": "2022-07-24T13:08:36.256Z",
            "name": "Projeto"
          }
        },
        {
          "id": 3,
          "createdAt": "2022-07-25T03:12:14.743Z",
          "name": "prova 1",
          "pdfUrl": "https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&ved=2ahUKEwi-iIaEpZD5AhWYsJUCHQ78AysQFnoECBAQAQ&url=https%3A%2F%2Fdhg1h5j42swfq.cloudfront.net%2F2020%2F04%2F18094640%2Fuerr-prova-pmrr-2018.pdf&usg=AOvVaw15uvmel_XUOWib05Au1AYW",
          "categoryId": 1,
          "teacherId": 1,
          "disciplineId": 1,
          "category": {
            "id": 1,
            "createdAt": "2022-07-24T13:08:36.256Z",
            "name": "Projeto"
          }
        },
        {
          "id": 4,
          "createdAt": "2022-07-25T03:14:51.527Z",
          "name": "prova 1",
          "pdfUrl": "https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&ved=2ahUKEwi-iIaEpZD5AhWYsJUCHQ78AysQFnoECBAQAQ&url=https%3A%2F%2Fdhg1h5j42swfq.cloudfront.net%2F2020%2F04%2F18094640%2Fuerr-prova-pmrr-2018.pdf&usg=AOvVaw15uvmel_XUOWib05Au1AYW",
          "categoryId": 1,
          "teacherId": 1,
          "disciplineId": 1,
          "category": {
            "id": 1,
            "createdAt": "2022-07-24T13:08:36.256Z",
            "name": "Projeto"
          }
        },
        {
          "id": 5,
          "createdAt": "2022-07-25T03:16:22.797Z",
          "name": "prova 1",
          "pdfUrl": "https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&ved=2ahUKEwi-iIaEpZD5AhWYsJUCHQ78AysQFnoECBAQAQ&url=https%3A%2F%2Fdhg1h5j42swfq.cloudfront.net%2F2020%2F04%2F18094640%2Fuerr-prova-pmrr-2018.pdf&usg=AOvVaw15uvmel_XUOWib05Au1AYW",
          "categoryId": 1,
          "teacherId": 1,
          "disciplineId": 1,
          "category": {
            "id": 1,
            "createdAt": "2022-07-24T13:08:36.256Z",
            "name": "Projeto"
          }
        }
      ]
    },
    {
      "id": 2,
      "createdAt": "2022-07-24T13:12:06.201Z",
      "teacherId": 1,
      "disciplineId": 2,
      "teacher": {
        "name": "Diego Pinho",
        "id": 1
      },
      "discipline": {
        "id": 2,
        "createdAt": "2022-07-24T13:10:10.787Z",
        "name": "JavaScript",
        "termId": 2,
        "term": {
          "id": 2,
          "createdAt": "2022-07-24T13:05:13.399Z",
          "number": 2
        }
      },
      "tests": []
    },
    {
      "id": 3,
      "createdAt": "2022-07-24T13:12:06.201Z",
      "teacherId": 1,
      "disciplineId": 3,
      "teacher": {
        "name": "Diego Pinho",
        "id": 1
      },
      "discipline": {
        "id": 3,
        "createdAt": "2022-07-24T13:10:10.787Z",
        "name": "React",
        "termId": 3,
        "term": {
          "id": 3,
          "createdAt": "2022-07-24T13:05:13.399Z",
          "number": 3
        }
      },
      "tests": []
    },
    {
      "id": 4,
      "createdAt": "2022-07-24T13:12:06.201Z",
      "teacherId": 2,
      "disciplineId": 4,
      "teacher": {
        "name": "Bruna Hamori",
        "id": 2
      },
      "discipline": {
        "id": 4,
        "createdAt": "2022-07-24T13:10:10.787Z",
        "name": "Humildade",
        "termId": 1,
        "term": {
          "id": 1,
          "createdAt": "2022-07-24T13:05:13.399Z",
          "number": 1
        }
      },
      "tests": []
    },
    {
      "id": 5,
      "createdAt": "2022-07-24T13:12:06.201Z",
      "teacherId": 2,
      "disciplineId": 5,
      "teacher": {
        "name": "Bruna Hamori",
        "id": 2
      },
      "discipline": {
        "id": 5,
        "createdAt": "2022-07-24T13:10:10.787Z",
        "name": "Planejamento",
        "termId": 2,
        "term": {
          "id": 2,
          "createdAt": "2022-07-24T13:05:13.399Z",
          "number": 2
        }
      },
      "tests": []
    },
    {
      "id": 6,
      "createdAt": "2022-07-24T13:12:06.201Z",
      "teacherId": 2,
      "disciplineId": 6,
      "teacher": {
        "name": "Bruna Hamori",
        "id": 2
      },
      "discipline": {
        "id": 6,
        "createdAt": "2022-07-24T13:10:10.787Z",
        "name": "Autoconfiança",
        "termId": 3,
        "term": {
          "id": 3,
          "createdAt": "2022-07-24T13:05:13.399Z",
          "number": 3
        }
      },
      "tests": []
    }
  ]
}
 ~~~
#
## testes 

### testes manuais com Thunde Client:

> Na pasta ThunderClient há um arquivo json para ser importado pelo thunderClient<br/>
> Já está configurado com o body das requisições<br/>
> É nescessário atualizar o token em headers<br/>

### testes automaticos com com Jest e Supertest:
~~~
npm test
~~~

### Realizar testes em ambiente windows:

instale o cross-env
~~~
npm i cross-env
~~~
em package. json altere a parte de testes de:<br/>
<code>"test": "dotenv -e .env.test prisma migrate dev && NODE_OPTIONS=--experimental-vm-modules dotenv -e .env.test jest -- -i",</code>

para:<br/>
<code>"test": "dotenv -e .env.test prisma migrate dev && cross-env NODE_OPTIONS=--experimental-vm-modules dotenv -e .env.test jest -- -i",</code>
#