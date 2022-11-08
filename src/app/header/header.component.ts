import { Component } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  text: any = {
    "icon": "home",
    "link1": "Projects",
    "link2": "Contact"
  }
}
