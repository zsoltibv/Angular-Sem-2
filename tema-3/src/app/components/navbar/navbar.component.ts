import { Component } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(private translateService: TranslateService) {
    translateService.setDefaultLang('en');
  }

  public selectLanguage(event: any): void {
    this.translateService.use(event.target.value);
  }
}
