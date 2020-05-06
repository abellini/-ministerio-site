import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule, Http, XHRBackend, RequestOptions } from '@angular/http';
import { EmbedVideo } from 'ngx-embed-video';
import { ReactiveFormsModule } from '@angular/forms';
// import { ToastrModule } from 'ngx-toastr';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { WelcomeComponent } from './home/welcome.component';
import { AboutComponent } from './pages/about/about.component';
import { PlacesComponent } from './pages/places/places.component';
import { WakeupComponent } from './pages/wakeup/wakeup.component';
import { TestimonyComponent } from './pages/testimony/testimony.component';
import { VigilsComponent } from './pages/vigils/vigils.component';
import { BookswordComponent } from './pages/booksword/booksword.component';
import { ReflectiondailyComponent } from './pages/reflectiondaily/reflectiondaily.component';
import { WordofscienceComponent } from './pages/wordofscience/wordofscience.component';
import { PrayrosaryComponent } from './pages/prayrosary/prayrosary.component';
import { AutoinfotadeuComponent } from './components/autoinfotadeu/autoinfotadeu.component';
import { AutoinfoanamariaComponent } from './components/autoinfoanamaria/autoinfoanamaria.component';
import { AutoinfoanapaulaComponent } from './components/autoinfoanapaula/autoinfoanapaula.component';
import { MissaonatalComponent } from './pages/missaonatal/missaonatal.component';
import { RefugeesComponent } from './pages/refugees/refugees.component';
import { RetiroComponent } from './pages/retiro/retiro.component';
import { InscricaoComponent } from './pages/inscricao/inscricao.component';
import { InscricaoService } from './pages/services/inscricao.service';
import { HttpFactory } from './pages/shared/http.factory';

const APP_PROVIDERS = [
	InscricaoService
];

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    WelcomeComponent,
    AboutComponent,
    PlacesComponent,
    WakeupComponent,
    TestimonyComponent,
    VigilsComponent,
    BookswordComponent,
    ReflectiondailyComponent,
    WordofscienceComponent,
    PrayrosaryComponent,
    AutoinfotadeuComponent,
    AutoinfoanamariaComponent,
    AutoinfoanapaulaComponent,
    RetiroComponent,
    InscricaoComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
	 ReactiveFormsModule,
	 // BrowserAnimationsModule, // required animations module
    // ToastrModule.forRoot(), // ToastrModule added
    EmbedVideo.forRoot(),
    RouterModule.forRoot([
      { path: 'vigils', component: VigilsComponent },
      { path: 'booksword', component: BookswordComponent },
      { path: 'welcome', component: WelcomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'places', component: PlacesComponent },
		{ path: 'retiro', component: RetiroComponent },
		{ path: 'inscricao', component: InscricaoComponent },
      { path: 'wakeup', component: WakeupComponent },
      { path: 'testimony', component: TestimonyComponent },
      { path: 'prayrosary', component: PrayrosaryComponent },
      { path: 'wordofscience', component: WordofscienceComponent },
      { path: 'reflectiondaily', component: ReflectiondailyComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ]),
  ],
  providers: [
		APP_PROVIDERS,
		{
			provide: Http,
			userFactory: HttpFactory,
			deps: [ XHRBackend, RequestOptions ]
		}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
