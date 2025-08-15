// express.js application setup
const express = require('express');
const app = express();

// registrar a visualização d engenharia
app.set('view engine', 'ejs');
//ouvindo na porta 3001
app.listen(3001);
// Definindo as rotas
app.get('/', (req, res) => {
  // passando parametros para o body
  const blogs = [
    { titulo: 'Máximo Brasil:', conteudo: '  Engenharia, Manutenção Predial, Segurança do trabalho ' },
    { titulo: 'Diretor:', conteudo: '  Engenheiro Civil Marcelo Barudi' },
    { titulo: 'Serviços:', conteudo: '  Engenharia, Manutenção Predial, Segurança do trabalho ' },
    { titulo: 'Missão :', conteudo: ' Proporcionar soluções de manutenção e tecnologia ' },
    { titulo: 'Visão :', conteudo: ' Ser a principal referência em serviços de manutenção e tecnologia  ' },
    { titulo: 'Valores :', conteudo: '  Busca contínua por qualidade superior em tudo que fazemos ' }
  ];

  res.render('index', { titulo: 'Home' , blogs });
});
app.get('/sobre', (req, res) => {
  res.render('sobre', { titulo: 'Sobre' });
});
app.get('/sobrenos', (req, res) => {
  res.redirect('/sobre');
});

app.get('/blog/criar', (req, res) => {
  res.render('criar', { titulo: 'Criar Blog' });
});

app.use((req, res) => {
  res.status(404).render('404', { titulo: '404' });
});