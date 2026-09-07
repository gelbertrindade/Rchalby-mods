/*
    CATÁLOGO DE MODS
*/

const movies = [

    {
        id: 1,
        title: "Caminhão 1318",
        year: 2026,
        genre: "caminhao",
        genreName: "Caminhão",
        duration: "549MB",
        description:
            "Atualizado para a versão mais recente do Euro Truck Simulator 2.",
        poster: "capas/mecedes-1318.png",
        download: "https://gofile.io/d/KgqZMdli"
    },

    {
        id: 2,
        title: "Scania 111S (Jacaré)",
        year: 2026,
        genre: "caminhao",
        genreName: "Caminhão",
        duration: "119MB",
        description:
            "Atualizado para a versão mais recente do Euro Truck Simulator 2.",
        poster: "capas/jacare.png",
        download: "https://gofile.io/d/I93C2yci"
    },

    {
        id: 3,
        title: "Scania P360",
        year: 2026,
        genre: "caminhao",
        genreName: "Caminhão",
        duration: "561MB",
        description:
            "Atualizado para a versão mais recente do Euro Truck Simulator 2.",
        poster: "capas/scania-p360.png",
        download: "https://gofile.io/d/Hy9kDcda"
    },

    {
        id: 4,
        title: "Mercedes-Benz Axor",
        year: 2026,
        genre: "caminhao",
        genreName: "Caminhão",
        duration: "1GB, 900MB",
        description:
            "Atualizado para a versão mais recente do Euro Truck Simulator 2.",
        poster: "capas/mercedezbn.png",
        download: "https://gofile.io/d/yQH8H9wZ"
    },

    {
        id: 5,
        title: "Scania G440 Streamline",
        year: 2026,
        genre: "caminhao",
        genreName: "Caminhão",
        duration: "354MB",
        description:
            "Atualizado para a versão mais recente do Euro Truck Simulator 2.",
        poster: "capas/scania-g440.png",
        download: "https://gofile.io/d/8yp3HYSY"
    },

    {
        id: 6,
        title: "Scania 113H",
        year: 2026,
        genre: "caminhao",
        genreName: "Caminhão",
        duration: "512MB",
        description:
            "Atualizado para a versão mais recente do Euro Truck Simulator 2.",
        poster: "capas/scania113.png",
        download: "https://gofile.io/d/gwcCfTqp"
    },

    {
        id: 7,
        title: "Daf XF",
        year: 2026,
        genre: "caminhao",
        genreName: "Caminhão",
        duration: "408MB",
        description:
            "Atualizado para a versão mais recente do Euro Truck Simulator 2.",
        poster: "capas/daf.png",
        download: "https://gofile.io/d/hcUJexrp"
    },

    {
        id: 8,
        title: "Scania 113 Frontal",
        year: 2026,
        genre: "caminhao",
        genreName: "Caminhão",
        duration: "512MB",
        description:
            "Atualizado para a versão mais recente do Euro Truck Simulator 2.",
        poster: "capas/scania-143.png",
        download: "https://gofile.io/d/228HgPWU"
    },

    {
        id: 9,
        title: "Volvo EDC",
        year: 2026,
        genre: "caminhao",
        genreName: "Caminhão",
        duration: "não definido",
        description:
            "Atualizado para a versão mais recente do Euro Truck Simulator 2.",
        poster: "capas/volvovm.png",
        download: "https://gofile.io/d/5oyIPOKx"
    },

    {
        id: 10,
        title: "Basculante",
        year: 2026,
        genre: "reboque",
        genreName: "Reboque",
        duration: "não definido",
        description:
            "Atualizado para a versão mais recente do Euro Truck Simulator 2.",
        poster: "capas/basculante.png",
        download: "https://gofile.io/d/32Z0WUvZ"
    },

    {
        id: 11,
        title: "Pack reboques Brasileiros",
        year: 2026,
        genre: "reboque",
        genreName: "Reboque",
        duration: "não definido",
        description:
            "Atualizado para a versão mais recente do Euro Truck Simulator 2.",
        poster: "capas/packreboquesbr.png",
        download: "https://gofile.io/d/Uo63bYkf"
    },

    {
        id: 12,
        title: "Gol Quadrado TURBO",
        year: 2026,
        genre: "carro",
        genreName: "Carro",
        duration: "não definido",
        description:
            "Atualizado para a versão mais recente do Euro Truck Simulator 2.",
        poster: "capas/golquadrado.png",
        download: "https://gofile.io/d/yxnYdAML"
    },

    {
        id: 13,
        title: "BMW M5",
        year: 2026,
        genre: "carro",
        genreName: "Carro",
        duration: "não definido",
        description:
            "Atualizado para a versão mais recente do Euro Truck Simulator 2.",
        poster: "capas/bmwm5.png",
        download: "https://gofile.io/d/ALUDIf38"
    },

    {
        id: 14,
        title: "Voyage turbo",
        year: 2026,
        genre: "carro",
        genreName: "Carro",
        duration: "não definido",
        description:
            "Atualizado para a versão mais recente do Euro Truck Simulator 2.",
        poster: "capas/voyage.png",
        download: "https://steamcommunity.com/sharedfiles/filedetails/?id=2651729182"
    }

];


/*
    ELEMENTOS
*/

const moviesContainer =
    document.querySelector("#moviesContainer");

const movieCounter =
    document.querySelector("#movieCounter");

const catalogTitle =
    document.querySelector("#catalogTitle");

const searchInput =
    document.querySelector("#searchInput");

const navButtons =
    document.querySelectorAll(".nav-btn");


/*
    HERO
*/

const heroTitle =
    document.querySelector("#heroTitle");

const heroDescription =
    document.querySelector("#heroDescription");

const heroYear =
    document.querySelector("#heroYear");

const heroGenre =
    document.querySelector("#heroGenre");

const heroDuration =
    document.querySelector("#heroDuration");

const heroWatchButton =
    document.querySelector("#heroWatchButton");


/*
    MODAL
*/

const movieModal =
    document.querySelector("#movieModal");

const closeModal =
    document.querySelector("#closeModal");

const modalPoster =
    document.querySelector("#modalPoster");

const modalTitle =
    document.querySelector("#modalTitle");

const modalYear =
    document.querySelector("#modalYear");

const modalGenre =
    document.querySelector("#modalGenre");

const modalDuration =
    document.querySelector("#modalDuration");

const modalDescription =
    document.querySelector("#modalDescription");

const modalWatchButton =
    document.querySelector("#modalWatchButton");


/*
    ESTADO
*/

let currentCategory = "todos";

let filteredMovies = [...movies];

let selectedIndex = 0;

let selectedMovie = movies[0];


/*
    RENDERIZAR MODS
*/

function renderMovies() {

    if (!moviesContainer) {
        return;
    }

    moviesContainer.innerHTML = "";

    filteredMovies.forEach((movie, index) => {

        const card =
            document.createElement("article");

        card.classList.add("movie-card");

        if (index === selectedIndex) {
            card.classList.add("selected");
        }

        card.dataset.index = index;

        card.innerHTML = `

            <img
                src="${movie.poster}"
                alt="${movie.title}"
                loading="lazy"
            >

            <div class="card-info">

                <h3>
                    ${movie.title}
                </h3>

                <p>
                    ${movie.year}
                    •
                    ${movie.genreName}
                </p>

            </div>

        `;

        card.addEventListener(
            "click",
            () => {

                selectedIndex = index;

                selectMovie(movie);

                openMovieModal(movie);

            }
        );

        moviesContainer.appendChild(card);

    });


    if (movieCounter) {

        movieCounter.textContent =
            `${filteredMovies.length} mods`;

    }

    updateSelectedCard();

}


/*
    SELECIONAR MOD
*/

function selectMovie(movie) {

    if (!movie) {
        return;
    }

    selectedMovie = movie;

    if (heroTitle) {
        heroTitle.textContent =
            movie.title;
    }

    if (heroDescription) {
        heroDescription.textContent =
            movie.description;
    }

    if (heroYear) {
        heroYear.textContent =
            movie.year;
    }

    if (heroGenre) {
        heroGenre.textContent =
            movie.genreName;
    }

    if (heroDuration) {
        heroDuration.textContent =
            movie.duration;
    }

    updateSelectedCard();

}


/*
    CARD SELECIONADO
*/

function updateSelectedCard() {

    const cards =
        document.querySelectorAll(".movie-card");

    cards.forEach(card => {

        card.classList.remove("selected");

    });


    const selected =
        cards[selectedIndex];

    if (!selected) {
        return;
    }


    selected.classList.add("selected");


    selected.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center"
    });


    if (filteredMovies[selectedIndex]) {

        selectedMovie =
            filteredMovies[selectedIndex];

    }

}


/*
    ABRIR MODAL
*/

function openMovieModal(movie) {

    if (!movieModal || !movie) {
        return;
    }

    selectedMovie = movie;


    if (modalPoster) {

        modalPoster.src =
            movie.poster;

        modalPoster.alt =
            movie.title;

    }


    if (modalTitle) {
        modalTitle.textContent =
            movie.title;
    }

    if (modalYear) {
        modalYear.textContent =
            movie.year;
    }

    if (modalGenre) {
        modalGenre.textContent =
            movie.genreName;
    }

    if (modalDuration) {
        modalDuration.textContent =
            movie.duration;
    }

    if (modalDescription) {
        modalDescription.textContent =
            movie.description;
    }


    movieModal.classList.add("show");

}


/*
    FECHAR MODAL
*/

function closeMovieModal() {

    if (!movieModal) {
        return;
    }

    movieModal.classList.remove("show");

}


/*
    DOWNLOAD EXTERNO
*/

function openDownloadLink(movie) {

    if (!movie || !movie.download) {

        alert(
            "Link de download não configurado para este mod."
        );

        return;
    }


    if (movie.download.includes("SEU-LINK-")) {

        alert(
            "Coloque o link real de download deste mod no campo download."
        );

        return;
    }


    window.open(
        movie.download,
        "_blank",
        "noopener,noreferrer"
    );

}


/*
    BOTÃO DOWNLOAD DO HERO
*/

if (heroWatchButton) {

    heroWatchButton.addEventListener(
        "click",
        () => {

            openDownloadLink(selectedMovie);

        }
    );

}


/*
    BOTÃO DOWNLOAD DO MODAL
*/

if (modalWatchButton) {

    modalWatchButton.addEventListener(
        "click",
        () => {

            closeMovieModal();

            openDownloadLink(selectedMovie);

        }
    );

}


/*
    FECHAR MODAL NO BOTÃO X
*/

if (closeModal) {

    closeModal.addEventListener(
        "click",
        closeMovieModal
    );

}


/*
    FECHAR MODAL CLICANDO FORA
*/

if (movieModal) {

    movieModal.addEventListener(
        "click",
        event => {

            if (event.target === movieModal) {

                closeMovieModal();

            }

        }
    );

}


/*
    CATEGORIAS
*/

navButtons.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            navButtons.forEach(btn => {

                btn.classList.remove("active");

            });


            button.classList.add("active");


            currentCategory =
                button.dataset.category;


            filterMovies();

        }
    );

});


/*
    FILTRAR MODS
*/

function filterMovies() {

    const search =
        searchInput
            ? searchInput.value
                .toLowerCase()
                .trim()
            : "";


    filteredMovies =
        movies.filter(movie => {

            const categoryMatch =
                currentCategory === "todos" ||
                movie.genre === currentCategory;


            const searchMatch =
                movie.title
                    .toLowerCase()
                    .includes(search);


            return categoryMatch &&
                searchMatch;

        });


    selectedIndex = 0;

    renderMovies();


    if (filteredMovies.length > 0) {

        selectMovie(
            filteredMovies[0]
        );

    }

}


/*
    PESQUISA
*/

if (searchInput) {

    searchInput.addEventListener(
        "input",
        filterMovies
    );

}


/*
    CONTROLE PELO TECLADO
*/

document.addEventListener(
    "keydown",
    event => {


        /*
            MODAL ABERTO
        */

        if (
            movieModal &&
            movieModal.classList.contains("show")
        ) {

            if (event.key === "Escape") {

                closeMovieModal();

            }

            return;

        }


        /*
            INPUT DE PESQUISA
        */

        if (
            searchInput &&
            document.activeElement === searchInput
        ) {

            if (event.key === "Escape") {

                searchInput.value = "";

                filterMovies();

                searchInput.blur();

            }

            return;

        }


        /*
            DIREITA
        */

        if (event.key === "ArrowRight") {

            event.preventDefault();


            if (
                selectedIndex <
                filteredMovies.length - 1
            ) {

                selectedIndex++;

                selectMovie(
                    filteredMovies[selectedIndex]
                );

            }

        }


        /*
            ESQUERDA
        */

        if (event.key === "ArrowLeft") {

            event.preventDefault();


            if (selectedIndex > 0) {

                selectedIndex--;

                selectMovie(
                    filteredMovies[selectedIndex]
                );

            }

        }


        /*
            ENTER
        */

        if (event.key === "Enter") {

            event.preventDefault();


            if (selectedMovie) {

                openMovieModal(
                    selectedMovie
                );

            }

        }


        /*
            ESC
        */

        if (event.key === "Escape") {

            closeMovieModal();

        }

    }
);


/*
    INICIALIZAÇÃO
*/

renderMovies();

if (movies.length > 0) {

    selectMovie(movies[0]);

}