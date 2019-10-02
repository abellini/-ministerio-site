import { Component } from '@angular/core';

@Component({
  selector: 'me-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <nav class="navbar fixed-bottom navbar-light bg-light">
      <span class="navbar-brand"><small class="text-muted"> Desenvolvido por <b>Ministério Eucarístico</b> 2019 </small> </span>
      <div class="text-center center-block">
        
        <!--
        <a href="https://facebook.com/VoluntariadoEucaristico" class="btn btn-social-icon btn-facebook">
            <i id="social-fa" class="fa fa-facebook"></i>
        </a>
        
        &nbsp;    
        <a href="https://instagram.com/voe_oficial?utm_source=ig_profile_share&igshid=4wdzglrraf1e" class="btn btn-social-icon btn-instagram">
            <i id="social-in" class="fa fa-instagram"></i>
        </a>
        
        &nbsp;
        <a href="https://twitter.com/bootsnipp" class="btn btn-social-icon btn-twitter">
            <i id="social-tw" class="fa fa-twitter"></i>
        </a>
        -->
        &nbsp;
        <a href="mailto:contato@ministerioeucaristico.com.br" title="Email" class="btn btn-social-icon btn-email">
            <i id="social-em" class="fa fa-envelope"></i>
        </a>
        <!--
        &nbsp;
        <a href="#" class="icoRss" title="Rss" class="btn btn-social-icon btn-rss">
            <i id="social-rs" class="fa fa-rss"></i>
        </a>        
        <a href="https://www.facebook.com/bootsnipp" title="Facebook">
            <i id="social-fb" class="fa fa-facebook fa-2x social"></i>
        </a>
        <a href="https://twitter.com/bootsnipp" title="Twitter">
            <i id="social-tw" class="fa fa-twitter fa-2x social"></i>
        </a>
        <a href="mailto:bootsnipp@gmail.com" title="Email">
            <i id="social-em" class="fa fa-envelope fa-2x social"></i>
        </a>
        -->
      </div>
    </nav>
  `,
})
export class FooterComponent {
}
