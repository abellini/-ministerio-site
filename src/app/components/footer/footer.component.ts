import { Component } from '@angular/core';

@Component({
  selector: 'me-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <nav class="navbar fixed-bottom navbar-light bg-light">
      <span class="navbar-brand">Criado com ♥ por <b>Ministério Eucarístico</b> 2018</span>
      <div class="socials">
        <a href="#" target="_blank" class="fab fa-facebook-square"></a>
        <a href="#" target="_blank" class="fab "></a>
      </div>
    </nav>
  `,
})
export class FooterComponent {
}
