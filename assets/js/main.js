/* Milestone 1
Creiamo il nostro array di oggetti che rappresentano ciascun post. 
Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
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
    image: "https://picsum.photos/300",
    likes: 22,
  },
  {
    id: 2,
    nicknameAuthor: "Stefano Russo",
    proPicAuthor: "https://picsum.photos/300",
    date: "04/10/2022",
    image: "https://picsum.photos/300",
    likes: 275,
  },
  {
    id: 3,
    nicknameAuthor: "Matteo Gramegna",
    proPicAuthor: "https://picsum.photos/300",
    date: "04/07/2022",
    image: "https://picsum.photos/300",
    likes: 184,
  },
  {
    id: 4,
    nicknameAuthor: "Lucia Verdi",
    proPicAuthor: "https://picsum.photos/300",
    date: "03/31/2022",
    image: "https://picsum.photos/300",
    likes: 98,
  },
  {
    id: 5,
    nicknameAuthor: "Clara Bianchi",
    proPicAuthor: "https://picsum.photos/300",
    date: "03/27/2022",
    image: "https://picsum.photos/300",
    likes: 67,
  },
];

console.log(posts);

/* 
Milestone 2
Prendendo come riferimento il layout di esempio presente nell'html,
stampiamo i post del nostro feed.
*/
// 1. inizializzare la variabile per l'elemento della dom in cui verrà inserito il post
// 2. ciclare l'array per lavorare su ogni singolo post
// 3. creare la card del post
// 4. appendere le card nel container

/*
Milestone 3
Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo 
del bottone e incrementiamo il counter dei likes relativo. 
Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like.
*/

/* 
BONUS
1) Formattare le date in formato italiano (gg/mm/aaaa)
2) Gestire l'assenza dell'immagine profilo con un elemento di fallback 
    che contiene le iniziali dell'utente (es. Luca Formicola > LF).
3) Al click su un pulsante "Mi Piace" di un post, 
    se abbiamo già cliccato dobbiamo decrementare il contatore e cambiare il colore del bottone.
*/
