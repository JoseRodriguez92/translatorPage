import { paths, popups, menu } from "./data.js";

class Translater {

    constructor() {
        this.lng = localStorage.getItem(lng) ? localStorage.getItem(lng) : 'fr';
    };

    /** Verificamos el lenguaje  */
    setLng(lng) {
        localStorage.setItem('lng', lng);
        this.this.translatePage();
    };

    /** Translate Menu  */
    translateMenu() {

    };

    /** Translate page */
    translatePage() {

        const pathActual = window.location.pathname;

        switch (pathActual) {

            case "/":

                /** DOM Elements */
                const paragraphsHome = document.querySelector('.informationGCS div div').children;
                /** Init translate */
                for (let i = 0; i < paragraphsHome.length; i++) { paragraphsHome[i].innerHTML = paths[pathActual][this.lng][i] };
                break;

            case "musique":

                /** DOM Elements */
                const titlesMusique = document.querySelectorAll('.elementor-heading-title');
                const titleCards = document.querySelectorAll('.elementor-cta__title.elementor-cta__content-item.elementor-content-item');
                const paragraphsCars = document.querySelectorAll('.elementor-cta__description.elementor-cta__content-item.elementor-content-item');
                /** Init translate */

                /** Traducción de Titulos */
                for (let i = 0; i < 4; i++) { titlesMusique[i].innerHTML = paths[pathActual][this.lng][i] };

                /** Traducción de titulos en las cards */
                for (let i = 0; i < 13; i++) { titleCards[i + 5].innerHTML = paths[pathActual][this.lng][i + 5] };

                /** Traducción de parrafos en las cards */
                for (let i = 0; i < 12; i++) { paragraphsCars[i + 18].innerHTML = paths[pathActual][this.lng][i + 18] };

                break;

            case "apropos":

                /** DOM Elements */
                const titleApropos = document.querySelector('.informationGCS div div div p');
                const information = document.querySelectorAll('.informationGCS div div p');
                const titlesPage = document.querySelectorAll('.elementor-heading-title.elementor-size-default')

                /** Init translate */

                break;

            case "contact":

                /** DOM Elements */
                const name = document.querySelector('#form-field-name');
                const email = document.querySelector('#form-field-email');
                const subject = document.querySelector('#form-field-field_e106c47');
                const message = document.querySelector('#form-field-message');
                const btn = document.querySelector('.elementor-button-text');

                /** Init translate */
                name.placeholder = paths[pathActual][this.lng][0];
                email.placeholder = paths[pathActual][this.lng][1];
                subject.placeholder = paths[pathActual][this.lng][2];
                message.placeholder = paths[pathActual][this.lng][3];
                btn.innerHTML = paths[pathActual][this.lng][4];

                break;

        };

    };

    /** Translate pop up  */
    translatePopUp() {
        const title = document.querySelector('[data-elementor-type="popup"]').querySelector('.elementor-heading-title.elementor-size-default');
    };

};

const translater = new Translater();
if (!window.translaterPage) { window.translaterPage = translater };