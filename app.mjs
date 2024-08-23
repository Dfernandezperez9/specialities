import usersData from './data.mjs';
import express from 'express';
const app = express();


const datos = usersData
const marketing = datos.filter((user) => user.specialty === 'marketing');
const developers = datos.filter((user) => user.specialty === 'developers');
const QAs = datos.filter((user) => user.specialty === 'QAs');
const ventas = datos.filter((user) => user.specialty === 'ventas');

app.get('/', (req, res) => {
  res.send(`<h1>Página Principal</h1>
            <a href="/marketing">Marketing</a> <a href="/developers">developers</a> <a href="/QAs">QAs</a> <a href="/ventas">Ventas</a> 
            <p>Haz click en el link deseado para ver la informacion relacionada</p>`);
});

app.get('/marketing', (req, res) => {
  res.send(`<h1>Marketing</h1> 
            <a href="/">Home</a> <a href="/developers">developers</a> <a href="/QAs">QAs</a> <a href="/ventas">Ventas</a>
            <p>A continuacion se muestra el personal de marketing</p>
            <div style="width: 500px; border: 2px solid black; border-radius: 15px; background-color: lightgray; display: flex; flex-direction: column; align-items: center; justify-content: center"><div style="display: flex; flex-direction: column; align-items: center; justify-content: center">
  ${(() => {
    let html = '';
    for (let i = 0; i < marketing.length; i++) {
      html += `<p>Nombre: ${marketing[i].name}, Edad: ${marketing[i].age}, Id: ${marketing[i].id}</p>`;
    }
    return html;
  })()}
</div></div>`);
});

app.get('/developers', (req, res) => {
  res.send(`<h1>Developers</h1>
            <a href="marketing">Marketing</a> <a href="/">Home</a> <a href="/QAs">QAs</a> <a href="/ventas">Ventas</a>
            <p>A continuacion se muestra el personal de development</p>
            <div style="width: 500px; border: 2px solid black; border-radius: 15px; background-color: lightgray; display: flex; flex-direction: column; align-items: center; justify-content: center"><div style="display: flex; flex-direction: column; align-items: center; justify-content: center">
  ${(() => {
    let html = '';
    for (let i = 0; i < developers.length; i++) {
      html += `<p>Nombre: ${developers[i].name}, Edad: ${developers[i].age}, Id: ${developers[i].id}</p>`;
    }
    return html;
  })()}
</div></div>`);
});

app.get('/QAs', (req, res) => {
  res.send(`<h1>QAs</h1>
            <a href="/marketing">Marketing</a> <a href="/developers">developers</a> <a href="/">Home</a> <a href="/ventas">Ventas</a>
            <p>A continuacion se muestra el personal de QA</p>
            <div style="width: 500px; border: 2px solid black; border-radius: 15px; background-color: lightgray; display: flex; flex-direction: column; align-items: center; justify-content: center"><div style="display: flex; flex-direction: column; align-items: center; justify-content: center">
  ${(() => {
    let html = '';
    for (let i = 0; i < QAs.length; i++) {
      html += `<p>Nombre: ${QAs[i].name}, Edad: ${QAs[i].age}, Id: ${QAs[i].id}</p>`;
    }
    return html;
  })()}
</div></div>`);
});

app.get('/ventas', (req, res) => {
  res.send(`<h1>Ventas</h1>
            <a href="/marketing">Marketing</a> <a href="/developers">developers</a> <a href="/QAs">QAs</a> <a href="/">Home</a>
            <p>A continuacion se muestra el personal de ventas</p>
            <div style="width: 500px; border: 2px solid black; border-radius: 15px; background-color: lightgray; display: flex; flex-direction: column; align-items: center; justify-content: center"><div style="display: flex; flex-direction: column; align-items: center; justify-content: center">
  ${(() => {
    let html = '';
    for (let i = 0; i < ventas.length; i++) {
      html += `<p>Nombre: ${ventas[i].name}, Edad: ${ventas[i].age}, Id: ${ventas[i].id}</p>`;
    }
    return html;
  })()}
</div></div>`);
});

app.use((req, res) => {
  res.status(404).send('<h1>Pagina no encontrada</h1> <a href="/">Home</a>');
});

app.listen(3000, () => {
  console.log('El servidor te esta vigilando');
});