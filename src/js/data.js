// data.js

export const movies = [
    {
        id: "interestelar",
        title: "Interestelar",
        year: 2014,
        rating: 8.7,
        art: "interestelar",
        genre: "Ficção científica",
        clickable: true
    },
    {
        id: "duna",
        title: "Duna",
        year: 2024,
        rating: 8.2,
        art: "duna",
        genre: "Ficção científica"
    },
    {
        id: "batman",
        title: "Batman",
        year: 2022,
        rating: 8.5,
        art: "batman",
        genre: "Ação"
    },
    {
        id: "oppenheimer",
        title: "Oppenheimer",
        year: 2023,
        rating: 8.4,
        art: "oppenheimer",
        genre: "Drama"
    },
    {
        id: "top-gun",
        title: "Top Gun Maverick",
        year: 2022,
        rating: 8.3,
        art: "topgun",
        genre: "Ação"
    },
    {
        id: "deadpool",
        title: "Deadpool & Wolverine",
        year: 2024,
        rating: 8.1,
        art: "deadpool",
        genre: "Ação"
    },
    {
        id: "divertida-mente",
        title: "Divertida Mente 2",
        year: 2024,
        rating: 8.0,
        art: "insideout",
        genre: "Comédia"
    },
    {
        id: "gladiador",
        title: "Gladiador II",
        year: 2024,
        rating: 7.8,
        art: "gladiator",
        genre: "Ação"
    },
    {
        id: "godzilla",
        title: "Godzilla e Kong",
        year: 2024,
        rating: 7.6,
        art: "godzilla",
        genre: "Ação"
    }
];


export const featuredMovie = {
    id: "interestelar",
    title: "Interestelar",

    year: 2014,
    duration: "2h 49min",
    mainGenre: "Ficção científica",

    ageRating: "12",
    ageDescription: "Não recomendado para menores de 12 anos",

    poster: "/images/posters/interestelar.webp",
    banner: "/images/banners/interestelar.jpg",

    imdb: {
        score: "8,7",
        maxScore: "/10",
        description: "Avaliação dos usuários"
    },

    rottenTomatoes: {
        score: "73%",
        description: "Tomatometer"
    },

    synopsis:
        "As reservas naturais da Terra estão chegando ao fim. Um grupo de astronautas recebe a missão de explorar possíveis planetas capazes de receber a humanidade, enquanto Cooper precisa deixar sua família para trás.",

    cast: [
        "Matthew McConaughey",
        "Anne Hathaway",
        "Jessica Chastain",
        "Michael Caine"
    ],

    director: "Christopher Nolan",

    genres: [
        "Ficção científica",
        "Drama",
        "Aventura"
    ]
};