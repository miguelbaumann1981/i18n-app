import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-language-selector',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './language-selector.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LanguageSelectorComponent { 

  languageService = inject(LanguageService);
  currentLang = this.languageService.currentLang;

  languages = signal([
    { code: 'en', flag: 'US' },
    { code: 'es', flag: 'ES' },
    { code: 'fr', flag: 'FR' },
    { code: 'it', flag: 'IT' },
  ]);

  changeLanguage(event: Event) {
    const target = event.target as HTMLSelectElement;
    const lang = target.value;
    this.languageService.changeLang(lang);
  }

}
