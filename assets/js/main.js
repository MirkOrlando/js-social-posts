/* Milestone 1
Creiamo il nostro array di oggetti che rappresentano ciascun post. 
Ogni post dovrà avere le informazioni necessarie per stampare 
la relativa card:
id del post, numero progressivo da 1 a n
nome autore,
foto autore,
data in formato americano (mm-gg-yyyy),
testo del post,
immagine (non tutti i post devono avere una immagine),
numero di likes.
Non è necessario creare date casuali
Per le immagini va bene utilizzare qualsiasi servizio di placeholder 
ad es. Unsplash (https://unsplash.it/300/300?image=) 
*/

const posts = [
  {
    id: 1,
    nicknameAuthor: "Mirko Orlando",
    proPicAuthor: "https://picsum.photos/300",
    date: "04/12/2022",
    caption:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibu corrupti ad mollitia minima, placeat vel maxime perspiciatis, alias velit quasi, doloribus aliquid doloremque sint at ea impedit voluptates repellat voluptatum.",
    image: "https://picsum.photos/600/300",
    likes: 22,
  },
  {
    id: 2,
    nicknameAuthor: "Stefano Russo",
    proPicAuthor: "https://picsum.photos/200",
    date: "04/10/2022",
    caption:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibu corrupti ad mollitia minima, placeat vel maxime perspiciatis, alias velit quasi, doloribus aliquid doloremque sint at ea impedit voluptates repellat voluptatum.",
    image: "",
    likes: 275,
  },
  {
    id: 3,
    nicknameAuthor: "Matteo Gramegna",
    proPicAuthor: "https://picsum.photos/350",
    date: "04/07/2022",
    caption:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibu corrupti ad mollitia minima, placeat vel maxime perspiciatis, alias velit quasi, doloribus aliquid doloremque sint at ea impedit voluptates repellat voluptatum.",
    image: "",
    likes: 184,
  },
  {
    id: 4,
    nicknameAuthor: "Lucia Verdi",
    proPicAuthor: "https://picsum.photos/800",
    date: "03/31/2022",
    caption:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibu corrupti ad mollitia minima, placeat vel maxime perspiciatis, alias velit quasi, doloribus aliquid doloremque sint at ea impedit voluptates repellat voluptatum.",
    image: "https://picsum.photos/600/400",
    likes: 98,
  },
  {
    id: 5,
    nicknameAuthor: "Clara Bianchi",
    proPicAuthor: "https://picsum.photos/90",
    date: "03/27/2022",
    caption:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibu corrupti ad mollitia minima, placeat vel maxime perspiciatis, alias velit quasi, doloribus aliquid doloremque sint at ea impedit voluptates repellat voluptatum.",
    image: "https://picsum.photos/600/350",
    likes: 67,
  },
];

console.log(posts);

/* 
Milestone 2
Prendendo come riferimento il layout di esempio presente nell'html,
stampiamo i post del nostro feed.
*/
generatePosts(posts, ".container");

/**
 * Generates the posts
 * @param {array} list an array of the posts to be generated
 * @param {string} containerSelector a string to select the container of the posts
 */
function generatePosts(list, containerSelector) {
  // 1. inizializzare la variabile per l'elemento della dom in cui
  //      verrà inserito il post
  const containerElement = document.querySelector(containerSelector);
  // 2. ciclare l'array per lavorare su ogni singolo post
  list.forEach((element) => {
    // 3. creare la card del post
    const cardElement = `
              <div class="card">
                  <div class="author">
                      <div class="propic_container">
                          <img src="${element.proPicAuthor}" alt="" />
                      </div>   
                      <div class="nickname_container">
                          <div class="nickname">${element.nicknameAuthor}</div>
                          <div class="date">${element.date}</div>
                      </div>
                  </div>
                  <div class="caption">${element.caption}</div>
                  <img src="${element.image}" alt="" />
                  <div class="like_action">
                      <div class="col">
                          <div class="btn_like">
                              <i class="fa-solid fa-thumbs-up"></i> Mi Piace
                          </div>
                      </div>
                      <div class="col">
                          <div class="likes_counter">
                              Piace a <span class="n_likes">${element.likes}</span> persone
                          </div>
                      </div>
                  </div>
              </div>`;
    // 4. appendere le card nel container
    containerElement.insertAdjacentHTML("beforeend", cardElement);
  });
  const cards = document.querySelectorAll(".card");
  cards.forEach((card, i) => {
    card.postId = list[i].id;
  });
  //console.log(cards);
}

/*
Milestone 3
Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo 
del bottone e incrementiamo il counter dei likes relativo. 
Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like.
*/
const postLiked = [];
const cards = document.querySelectorAll(".card");
console.log(cards);
cards.forEach((card) => {
  //console.log(card.children[3].children[0].children[0]);
  const btnlike = card.children[3].children[0].children[0];
  //console.log(card.children[3].children[1].children[0].children[0]);
  const likeCounter = card.children[3].children[1].children[0].children[0];
  const id = card.postId;
  console.log(typeof id);
  btnlike.addEventListener("click", (e) => {
    //console.log("hai cliccato like");
    //console.log(btn);
    btnlike.classList.add("liked");
    likeCounter.innerHTML = parseInt(likeCounter.innerHTML) + 1;
    console.log(id);
    postLiked.push[id];
    console.log(postLiked);
  });
});

/* const btnLikeElement = document.querySelectorAll(".btn_like");
console.log(btnLikeElement);
btnLikeElement.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    //console.log("hai cliccato like");
    //console.log(btn);
    btn.classList.add("liked");
    const likes = document.querySelector(".n_likes");
    likes.innerHTML = parseInt(likes.innerHTML) + 1;
  });
}); */

/* 
BONUS
1) Formattare le date in formato italiano (gg/mm/aaaa)
2) Gestire l'assenza dell'immagine profilo con un elemento di fallback 
    che contiene le iniziali dell'utente (es. Luca Formicola > LF).
3) Al click su un pulsante "Mi Piace" di un post, 
    se abbiamo già cliccato dobbiamo decrementare il contatore e cambiare il colore del bottone.
*/
