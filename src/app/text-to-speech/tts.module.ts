
import { Component } from '@angular/core';

@Component({
    selector: 'tts',
    templateUrl: 'tts.component.html',
    styleUrls: ['tts.component.css']
})
export class TTSComponent {
    public pageTitle = 'Welcome';
    textToRead = 'skills register login admin WoW (Women Entrepreneurs for Women Empowerment Vision Our Vision is to empower women by strengthening their skills and make them modern Entrepreneurs which strengthen both their community and India';
    constructor() {

    }
    onSubmit() {
        const speak = (message: string) => {
            var msg = new SpeechSynthesisUtterance(message)
            var voices = window.speechSynthesis.getVoices()
            msg.voice = voices[12]
            window.speechSynthesis.speak(msg)
        }

        const form: HTMLElement = document.getElementById('speech-form');
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            console.log(this.textToRead);
            speak(this.textToRead);
        })
    }

}




