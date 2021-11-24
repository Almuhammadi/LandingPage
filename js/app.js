let sections = document.querySelectorAll(".landing__container");
// Create nav items with nav links and add them to nav bar
let navBarList = document.getElementById("navbar__list");
for (let sectionIdx = 0; sectionIdx < sections.length; sectionIdx++) {
    let parent = sections[sectionIdx].parentNode;
    let sectionName = parent.getAttribute("data-nav");
    let sectionId = parent.getAttribute("id");
    let navItem = document.createElement("li");
    let navLink = document.createElement("a");
    navLink.href = "#" + sectionId;
    navLink.classList.add("menu__link");
    navLink.innerText = sectionName;
    // scroll to section when nav link is clicked
    navLink.addEventListener("click", function (e) {
        e.preventDefault();
        console.log("Hi");
        let navText = "#" + this.href.split("#")[1];
        let section = document.querySelector(navText);
        section.scrollIntoView({
            behavior: "smooth",
        });
    });
    navItem.appendChild(navLink);
    navBarList.appendChild(navItem);
}
// Sets the active section
let activeSectionIdx = 0;
let activeSection = sections.item(activeSectionIdx);
window.addEventListener("scroll", function () {
    for (let sectionIdx = 0; sectionIdx < sections.length; sectionIdx++) {
        let parent = sections[sectionIdx].parentNode;
        let scrollPosition = parent.getBoundingClientRect().top;
        if (scrollPosition <= 100 && scrollPosition >= 0) {
            let navItems = navBarList.childNodes;
            activeSection.classList.remove("activeSection");
            navItems[activeSectionIdx + 1].firstChild.classList.remove("activeNav");
            activeSection = parent;
            activeSectionIdx = sectionIdx;
            activeSection.classList.add("activeSection");
            navItems[activeSectionIdx + 1].firstChild.classList.add("activeNav");
        }
    }
});