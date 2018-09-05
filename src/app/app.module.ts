import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { WelcomeComponent } from './home/welcome.component';
import { AboutComponent } from './pages/about/about.component';
import { PlacesComponent } from './pages/places/places.component';
import { CommunityComponent } from './pages/community/community.component';
import { VoelaboraComponent } from './pages/voelabora/voelabora.component';
import { MinisteriobemComponent } from './pages/ministeriobem/ministeriobem.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    WelcomeComponent,
    AboutComponent,
    PlacesComponent,
    CommunityComponent,
    VoelaboraComponent,
    MinisteriobemComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'places', component: PlacesComponent },
      { path: 'community', component: CommunityComponent },
      { path: 'voelabora', component: VoelaboraComponent },
      { path: 'ministeriobem', component: MinisteriobemComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ]),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
