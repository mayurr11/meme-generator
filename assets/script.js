const memeGenerateBtn = document.querySelector('.meme-generator');
const memeImage = document.querySelector('.meme-image');
const memeTitle = document.querySelector('.meme-title');
const memeAuthor = document.querySelector('.meme-author');


const updateDetails = (url, title, author) => {
    memeImage.setAttribute('src', url);
    memeImage.style.marginBottom = '20px';
    memeImage.style.marginTop = '20px';
    // memeTitle.innerText = title;
    memeAuthor.innerText = author;
}


const generateMeme = async () => {
    await fetch('https://meme-api.com/gimme/wholesomememes')
    .then((res) => res.json()
    .then((data) => {
        updateDetails(data.url, data.title, data.author)
    }))
};


memeGenerateBtn.addEventListener('click', generateMeme);

