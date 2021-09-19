let elLink = document.querySelector("#link")
let data = [
    {
        img: 'http://picsum.photos/200',
        title:"Lorem ipsum dolor sit amet.",
        lorem:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias laudantium, nesciunt accusantium quo cumque consectetur? Velit repellat quo commodi illo."
    },
    {
        img: 'http://picsum.photos/200',
        title:"Lorem ipsum dolor sit amet.",
        lorem:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias laudantium, nesciunt accusantium quo cumque consectetur? Velit repellat quo commodi illo."
    },
    {
        img: 'http://picsum.photos/200',
        title:"Lorem ipsum dolor sit amet.",
        lorem:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias laudantium, nesciunt accusantium quo cumque consectetur? Velit repellat quo commodi illo."
    },
    {
        img: 'http://picsum.photos/200',
        title:"Lorem ipsum dolor sit amet.",
        lorem:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias laudantium, nesciunt accusantium quo cumque consectetur? Velit repellat quo commodi illo."
    },
    {
        img: 'http://picsum.photos/200',
        title:"Lorem ipsum dolor sit amet.",
        lorem:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias laudantium, nesciunt accusantium quo cumque consectetur? Velit repellat quo commodi illo."
    },
    {
        img: 'http://picsum.photos/200',
        title:"Lorem ipsum dolor sit amet.",
        lorem:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias laudantium, nesciunt accusantium quo cumque consectetur? Velit repellat quo commodi illo."
    },
    {
        img: 'http://picsum.photos/200',
        title:"Lorem ipsum dolor sit amet.",
        lorem:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias laudantium, nesciunt accusantium quo cumque consectetur? Velit repellat quo commodi illo."
    },
    {
        img: 'http://picsum.photos/200',
        title:"Lorem ipsum dolor sit amet.",
        lorem:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias laudantium, nesciunt accusantium quo cumque consectetur? Velit repellat quo commodi illo."
    },
    {
        img: 'http://picsum.photos/200',
        title:"Lorem ipsum dolor sit amet.",
        lorem:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias laudantium, nesciunt accusantium quo cumque consectetur? Velit repellat quo commodi illo."
    },
    {
        img: 'http://picsum.photos/200',
        title:"Lorem ipsum dolor sit amet.",
        lorem:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias laudantium, nesciunt accusantium quo cumque consectetur? Velit repellat quo commodi illo."
    },
    {
        img: 'http://picsum.photos/200',
        title:"Lorem ipsum dolor sit amet.",
        lorem:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias laudantium, nesciunt accusantium quo cumque consectetur? Velit repellat quo commodi illo."
    },
    {
        img: 'http://picsum.photos/200',
        title:"Lorem ipsum dolor sit amet.",
        lorem:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias laudantium, nesciunt accusantium quo cumque consectetur? Velit repellat quo commodi illo."
    },
]
data.forEach((x) => {
    let newLi = document.createElement("li");
    let newImg = document.createElement("img");
    let newTitle = document.createElement("h1");
    let newLorem = document.createElement("p");
    newImg.setAttribute("height", "200px")
    newImg.setAttribute("width", "260px")
    newLi.setAttribute("class", "menu")
    newTitle.setAttribute("class", "title")
    newLorem.setAttribute("class", "lorem")
    newImg.setAttribute("src", x.img)
    newTitle.textContent = x.title
    newLorem.textContent = x.lorem

    newLi.appendChild(newImg)
    newLi.appendChild(newTitle)
    newLi.appendChild(newLorem)
    elLink.appendChild(newLi)
})