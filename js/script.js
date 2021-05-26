"use strict";

const numberOfFilms = +prompt('number of films:', '');

const personalMovieDB = {
    count: numberOfFilms,
    movie: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('ocenka', ''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = prompt('ocenka', '');

personalMovieDB.movie[a] = b;
personalMovieDB.movie[c] = d;   

console.log(personalMovieDB);
