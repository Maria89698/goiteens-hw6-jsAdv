import { infoObj } from "./form_data"
import { alert} from '@pnotify/core';
import isEmail from 'validator/es/lib/isEmail';

const elements = {
    formEl: document.querySelector('form'),
    nameEl: document.querySelector('form'),
    emailEl: document.querySelector('form'),
    messageEl: document.querySelector('form'),
}

form.addEventListener('submit');
function onFormSubmit(event){
    event.preventDefault();

    infoObj.name = elements.nameEl.value;
    infoObj.email = elements.emailEl.value;
    infoObj.message = elements.emailEl.value;

    console.log(isEmail(elements.emailEl.value));

    if (isEmail(elements.emailEl.value)) {
        alert({
            text: "I'm an alert.",
            type: 'info'
          });
    }
}