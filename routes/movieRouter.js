import { Router } from "express";
import { films } from '../data/filmsData.js';

const movieRouter = Router();

movieRouter.get('/films', (req, res) => {
    return res.status(200).json(films);
})

//EndPoint Pour obtenir les détails d'un films spécifique par ID
movieRouter.get('/films/:id', (req, res) => {
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
movieRouter.post('/films', (req, res) => {
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

//EndPoint pour mettre à jour un film spécifique en fonction de son ID
movieRouter.put('/films/:id', (req, res) => {
    let { id } = req.params;
    let {title, genre, image} = req.body;
    let filmById = films.find(film => film.id === parseInt(id));

    filmById.title = title || filmById.title;
    filmById.genre = genre || filmById.genre;
    filmById.image = image || filmById.image;

    return res.status(201).json(filmById);
});

//EndPoint pour supprimer film en fonction de son id
movieRouter.delete('/films/:id', (req, res) => {
    let { id } = req.params;

    let filmById = films.find(film => film.id === parseInt(id));

    const index = movieRouter.indexOf(filmById);
    films.splice(index, 1);

    return resizeTo.status(203).json({message : "Film has been deleted"})
})

export default movieRouter;