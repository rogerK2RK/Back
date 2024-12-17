import express from 'express'
import 'dotenv/config'
import { films } from './data/filmsData.js';



const app = express();
const PORT = process.env.PORT;
// const PORT = 3002;

app.use(express.json());
app.use(express.urlencoded({extended : false}));

app.get('/', (req, res) => {
    res.send(`Welcom to my API`)
})

app.get('/films', (req, res) => {
    res.json(films);
})

//EndPoint Pour obtenir les détails d'un films spécifique par ID
app.get('/films/:id', (req, res) => {
    const {id} = req.params;
    try{
        const filmById = films.find(film => film.id === parseInt(id))
        if(!filmById){
            return res.status(400).json({message : 'Movie not found'});
        }
        return res.json(filmById);
    }
    catch(err){
        return res.status(500).json({message : 'Internal server error 🔴'});
    }
    
})

//EndPoint pour ajouter un nouveau film
app.post('/films', (req, res) => {
    let {title, genre, image} = req.body
    const newFilm = {
        id: films.length + 1,
        title,
        genre,
        image,
    };
    films.push(newFilm);
    return res.json(films);
});

//Démarrage du serveur
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})