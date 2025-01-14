const group = [
    {
        name: "Malika Taitelieva",
        link: "https://www.linkedin.com/in/miaraylight/",
    },
    {
        name: "Shemar Houston",
        link: "https://www.linkedin.com/in/shemarhouston/",
    },
    {
        name: "Iván Gómez",
        link: "https://www.linkedin.com/in/ivan-gomez-03694331b/",
    },
    {
        name: "Destiny Frieson",
        link: "https://www.linkedin.com/in/hiredestinyfrieson-423309335/",
    },
    {
        name: "Jameer Harris",
        link: "https://www.linkedin.com/in/hirejameerharris/",
    },
    {
        name: "Sally Ruslanova",
        link: "https://www.linkedin.com/in/sally-ruslanova-735b1b339/",
    },
    {
        name: "Travis Rosario",
        link: "https://www.linkedin.com/in/travis-rosario-3673341b0/",
    },
    {
        name: "Naia Dawson",
        link: "https://www.linkedin.com/in/hirenaiadawson/",
    },
    {
        name: "Asantea Payne",
        link: "https://www.linkedin.com/in/theasanteapayne/",
    },
    {
        name: "Lidiia Vatsyk",
        link: "https://www.linkedin.com/in/lidiia-vatsyk-58a440240/",
    },
    {
        name: "Jozelyn Puente",
        link: "https://www.linkedin.com/in/empowerjozelynpuente/",
    },
    {
        name: "Daniel Arismendi",
        link: "https://www.linkedin.com/in/daab36/",
    },
    {
        name: "Daniel Alvarez",
        link: "https://www.linkedin.com/in/daniel-alvarez-05967bb8/",
    },
    {
        name: "Kiara Harris",
        link: "https://www.linkedin.com/in/kiara-harris-877865289",
    },
    {
        name: "Christian Acosta",
        link: "https://www.linkedin.com/in/user-christian-acosta/",
    },
    {
        name: "Edson A. Gonzalez",
        link: "https://www.linkedin.com/in/hireed/",
    },
    {
        name: "Jaluan Newson",
        link: "https://www.linkedin.com/in/jaluan4success/",
    },
    {
        name: "Anahi Ojeda",
        link: "https://www.linkedin.com/in/anahi-ojeda-67a174aa/",
    },
    {
        name: "Noor Hassaballa",
        link: "https://www.linkedin.com/in/theworldisnoors/",
    },
    {
        name: "Jasmine Valladares",
        link: "https://www.linkedin.com/in/jasminevalladares/",
    },
];


const boxContainer = document.querySelector(".boxContainer"); // get div from html

for (let i = 0; i < group.length; i++) {
    const element = group[i];
    let link = document.createElement("a"); // Create a link for element 
    link.textContent = element.name; // Set the link text to the element name
    link.classList.add("linkButton"); // Add a CSS class for styling
    link.addEventListener("click", ()=> window.open(`${element.link}`, '_blank')); // Attach a click event listener to navigate
    boxContainer.appendChild(link); // Add the link to the box container
}
