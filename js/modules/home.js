export default class Home {
    /* ===================================
     *  CONSTRUCTOR
     * =================================== */
    constructor(){
        this.bindEvents();
    }


    /* ===================================
     *  EVENTS
     * =================================== */
    bindEvents(){
        console.log('Homepage Detected, Home Page Script Will Run');
        this.SetupHomePage();
    }

    /* ===================================
     *  METHODS
     * =================================== */
    SetupHomePage(){
        console.log('SetupHomePage Was Called');
    }
}