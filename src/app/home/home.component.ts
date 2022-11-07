import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  text: any = {
    "top": {
      "title": "Designer, Full Stack Developer",
      "subtitle": "I design and create simple and beautiful applications.",
    },
    "intro": {
      "title": "Hi, I'm Dennis. Nice to meet you.",
      "paragraph": "Since beginning my career as a Software Engineer over 5 years ago, I've created an app for a startup company, collaborated with talented engineers to create e-commerce websites, and done work in the coorporate world. I continue to grow in my career by learning new technologies in order to be more efficient and up to date on tech standards.",
    },
   "designer": {
      "title": "Designer",
      "subtitle": "I value simple content structure, clean design patterns, and attentive interations",
      "third": {
        "title": "Things I enjoy designing:",
        "list": "UX, UI, Web, Apps, Logos"
      },
      "fourth": {
        "title": "",
        "list": ""
      }
    }
      
  }

  constructor() { }



}