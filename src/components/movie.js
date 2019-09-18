import React from 'react';
import darkKnight from '../assets/dark-knight.jpg';
import matrix from '../assets/matrix.jpg';
import fightClub from "../assets/fight-club.jpg";
import lordOfTheRings from "../assets/lord-of-the-rings.jpg";
import needforspeed from "../assets/Need-for-Speed-poster.jpg";
import youdontmesswiththezohan from "../assets/iphone360_280826.jpg";
import godzilla2 from "../assets/1551868008_godzilla-2-korol-monstrov.jpeg";
import floridagirls from "../assets/florida-girls-1.jpg";
import theperfection from "../assets/iphone360_1129042.jpg";
import gameofthronesthelastwatch from "../assets/got-the-last-watch.jpg";
import starfish from "../assets/MV5BYzY5YzEwYzMtNmRjMy00MzE1LWI5YzUtMzBmMTJlZDc4NTk5XkEyXkFqcGdeQXVyNDk0NjA5MTU@._V1_UX182_CR0,0,182,268_AL_.jpg";
import interstellar from "../assets/6371f0f8943405747ca37ae8f93d012d.jpg";
import backdraft2 from "../assets/MV5BOGU0MjA0ODMtY2MyZS00OWZlLThhNzctNzhlMTM4MWFmMzMxXkEyXkFqcGdeQXVyNzI1NzMxNzM@._V1_UY268_CR4,0,182,268_AL_.jpg";
import littlewoods from "../assets/iphone360_1036045.jpg";
import travisscottlookmomicanfly from "../assets/2096375_500x800x250.jpg";
import themartian from "../assets/The_Martian_film_poster.jpg";
import hustlers from "../assets/MV5BNjM5ZTNiNGMtMDA2OC00MDYyLWEyNzAtOWZmMzFlY2VmOWM4XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg";
import nachoLibre from "../assets/nacho-libre.jpg";
import godfather from "../assets/godfather.jpg";
import pulpFiction from "../assets/pulp-fiction.jpg";


const Movie = (props) => {

    let image ="";

    switch(props.name) {
        case "Dark Knight":
            image = darkKnight;
            break;
        case "Matrix":
            image = matrix;
            break;
        case "Fight Club":
            image = fightClub;
            break;
        case "Lord of the Rings":
            image = lordOfTheRings;
            break;
        case "Nacho Libre":
            image = nachoLibre;
            break;
        case "Godfather":
            image = godfather;
            break;
        case "Pulp Fiction":
            image = pulpFiction;
            break;
        case "Need for Speed":
            image = needforspeed;
            break;
        case "You Don't Mess with the Zohan":
            image = youdontmesswiththezohan;
            break;
        case "Godzilla 2":
            image = godzilla2;
            break;
        case "Florida Girls":
            image = floridagirls;
            break;
        case "The Perfection":
            image = theperfection;
            break;
        case "Game Of Thrones":
            image = gameofthronesthelastwatch;
            break;  
        case "Starfish":
            image = starfish;
            break;  
        case "Interstellar":
            image = interstellar;
            break;
        case "Backdraft 2":
            image = backdraft2;
            break;
        case "Little Woods":
            image = littlewoods;
            break;
        case "Travis Scott":
            image = travisscottlookmomicanfly;
            break;
        case "The Martian":
            image = themartian;
            break;
        case "Hustlers":
            image = hustlers;
            break;       
        default:
            image = "";
            
    }

    let cover = {
        backgroundImage: 'url(' + image + ')'
    }
    console.log("The value of image is ", image);
    return (
        <div className="movie-container">
            <div className="movie-image" style={cover}></div>
            <p className="movie-title">{props.name}</p>
            <p className="movie-year">{props.year}</p>
        </div>
    );


}

export default Movie;