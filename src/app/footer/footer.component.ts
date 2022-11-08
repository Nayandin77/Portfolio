import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  footer: any = {
    "icon": "",
    "text": "Living, learning, & leveling up one day at a time.",
    "copyright": "Handcrafted by me © Dennis Nayandin",
    "framework": {
      "text": "",
      "language": "Angular"
    }
  }

}
