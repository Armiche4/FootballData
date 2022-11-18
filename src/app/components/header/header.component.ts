import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageInt } from 'src/app/interfaces/languageInt';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'es']);
  }

  cambiolengua(lang: string) {
    this.translate.use(lang);
  }

  currentLanguage: string = 'es';

  languages: LanguageInt[] = [
    { code: 'es', name: 'Español' },
    { code: 'en', name: 'English' },
  ];

  ngOnInit(): void {}

  onSelectedLanguage() {
    this.translate.use(this.currentLanguage);
  }
}
