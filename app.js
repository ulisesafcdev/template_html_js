const images = [
    {
        title: "Card 1",
        img: "https://dummyimage.com/200x200/222/ff00bb"
    },
    {
        title: "Card 2",
        img: "https://dummyimage.com/200x200/222/ff00bb"
    },
    {
        title: "Card 3",
        img: "https://dummyimage.com/200x200/222/ff00bb"
    },
    {
        title: "Card 4",
        img: "https://dummyimage.com/200x200/222/ff00bb"
    },
    {
        title: "Card 5",
        img: "https://dummyimage.com/200x200/222/ff00bb"
    },
    {
        title: "Card 6",
        img: "https://dummyimage.com/200x200/222/ff00bb"
    },
    {
        title: "Card 7",
        img: "https://dummyimage.com/200x200/222/ff00bb"
    },
    {
        title: "Card 8",
        img: "https://dummyimage.com/200x200/222/ff00bb"
    }
];

const $cards = document.querySelector(".container");
const $template = document.getElementById("template-card").content;
const $fragment = document.createDocumentFragment();

images.forEach(el => {

    $template.querySelector("img").setAttribute("src", el.img);
    $template.querySelector("img").setAttribute("alt", el.title);
    $template.querySelector("figcaption").textContent = el.title;

    let $clone = document.importNode($template, true);

    $fragment.appendChild($clone);

});

$cards.appendChild($fragment);