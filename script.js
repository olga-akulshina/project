'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovie = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один их последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один их последних просмотренных фильмов?', ''),
      d = prompt('На сколько оцените его?', '');

personalMovie.movies[a] = b;
personalMovie.movies[c] = d;

console.log(personalMovie);