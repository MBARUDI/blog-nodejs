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
    { titulo: 'Chamander', conteudo: 'A ponta de seu rabo está constantemente em chamas e se for apagada pode resultar em sua morte' },
    { titulo: 'Squirtle', conteudo: 'Seu casco reduz a resistência contra a água fazendo com que ele nade mais rápido' },
    { titulo: 'Bulbasaur', conteudo: 'Ao evoluir o bulbo começa a desabrochar até se tornar uma grane flor ' }
  ];

  res.render('index', { titulo: 'Home' , blogs });
});
app.get('/sobre', (req, res) => {
  res.render('sobre', { titulo: 'Sobre' });
});
app.get('/sobrenos', (req, res) => {
  res.redirect('/sobre', { titulo: 'Sobre Nós' });
});

app.get('/blog/criar', (req, res) => {
  res.render('criar', { titulo: 'Criar Blog' });
});

app.use((req, res) => {
  res.status(404).render('404', { titulo: '404' });
});