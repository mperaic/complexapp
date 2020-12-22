export default class Search {
    // 1. select DOM elements and keep track of any useful data
    constructor() {
        this.headerSearchIcon = document.querySelector(".header-search-icon")
        this.events()
    }

    // 2. events
    events() {
        this.headerSearchIcon.addEventListener("click", (e) => {
            e.preventDefault()
            this.openOverlay()
        })
    }
    // 3. methods
    openOverlay() {
        alert("openOverlay method just ran!")
    }
}