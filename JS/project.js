// identification the constiables
const nbm = document.getElementById("navbar__list");
const sectionsContent = document.getElementsByClassName("landing__container");
let numOfSecs = sectionsContent.length;
const myDiv = document.querySelector('div');
// changing the style of the navigation bar
nbm.setAttribute('style', 'padding: 14px 16px;');
function ce() {
  // for loop for creating sections on the navigation bar
  for (i = 1; i <= numOfSecs; i++) {
    const newli = document.createElement('li');
    nbm.appendChild(newli);
    const newN = document.createElement('a');
    newN.innerHTML = "Section " + i + " ";
    // href for link the sections
    newN.href = "#section" + i;
    // make smooth function
    newN.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
    // using addEventListener to highlight the sections
    newN.addEventListener("mouseover", function mouseOver(event) {
      newN.classList.add("over");
    }, false);
    // using addEventListener to remove the highlight from the sections
    newN.addEventListener("mouseout", function mouseOut(event) {
      newN.classList.remove("over");
    }, false);
    // highlight the section close to the top
    document.addEventListener('scroll', function () {
      const disArr = [];
      for (let i = 0; i < sectionsContent.length; i++) {
        disArr.push(Math.abs(sectionsContent[i].getBoundingClientRect().top));
      }
      let min = 0;
      for (const i in disArr) {
        if (disArr[i] < disArr[min]) {
          min = i
        }
      }
      // add active to sections
      navElements = nbm.querySelectorAll("a");
      for (let i = 0; i < sectionsContent.length; i++) {
        sectionsContent[i].parentElement.classList.remove("your-active-class");
        navElements[i].classList.remove("inView");
      }
      // Set sections as active
      sectionsContent[min].parentElement.classList.add("your-active-class");
      navElements[min].classList.add("inView");


    });
    newli.appendChild(newN);
  }
}
console.log(ce());
