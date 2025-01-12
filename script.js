const group = [
    {
        name: "Mia T",
        link: "https://www.linkedin.com/in/miaraylight/",
    },
    // {
    //     name: "Your Name",
    //     link: "https://www.linkedin.com/in/yourLink/",
    // },
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
