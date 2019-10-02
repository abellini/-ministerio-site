import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { EmbedVideo } from 'ngx-embed-video';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { WelcomeComponent } from './home/welcome.component';
import { AboutComponent } from './pages/about/about.component';
import { PlacesComponent } from './pages/places/places.component';
import { CommunityComponent } from './pages/community/community.component';
import { VoelaboraComponent } from './pages/voelabora/voelabora.component';
import { MinisteriobemComponent } from './pages/ministeriobem/ministeriobem.component';
import { WakeupComponent } from './pages/wakeup/wakeup.component';
import { LevanteplenoComponent } from './pages/levantepleno/levantepleno.component';
import { LevantekidsComponent } from './pages/levantekids/levantekids.component';
import { IdeComponent } from './pages/ide/ide.component';
import { VoeoraComponent } from './pages/voeora/voeora.component';
import { TestimonyComponent } from './pages/testimony/testimony.component';
import { VigilsComponent } from './pages/vigils/vigils.component';
import { BookswordComponent } from './pages/booksword/booksword.component';
import { ChristmasprayerComponent } from './pages/christmasprayer/christmasprayer.component';
import { ReflectiondailyComponent } from './pages/reflectiondaily/reflectiondaily.component';
import { WordofscienceComponent } from './pages/wordofscience/wordofscience.component';
import { PrayrosaryComponent } from './pages/prayrosary/prayrosary.component';
import { AutoinfotadeuComponent } from './components/autoinfotadeu/autoinfotadeu.component';
import { AutoinfoanamariaComponent } from './components/autoinfoanamaria/autoinfoanamaria.component';
import { AutoinfoanapaulaComponent } from './components/autoinfoanapaula/autoinfoanapaula.component';
import { MissaonatalComponent } from './pages/missaonatal/missaonatal.component';
import { RefugeesComponent } from './pages/refugees/refugees.component';

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
    MinisteriobemComponent,
    WakeupComponent,
    LevanteplenoComponent,
    LevantekidsComponent,
    IdeComponent,
    VoeoraComponent,
    TestimonyComponent,
    VigilsComponent,
    BookswordComponent,
    ChristmasprayerComponent,
    ReflectiondailyComponent,
    WordofscienceComponent,
    PrayrosaryComponent,
    AutoinfotadeuComponent,
    AutoinfoanamariaComponent,
    AutoinfoanapaulaComponent,
    MissaonatalComponent,
    RefugeesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    EmbedVideo.forRoot(),
    RouterModule.forRoot([
      { path: 'vigils', component: VigilsComponent },                          
      { path: 'christmas', component: ChristmasprayerComponent },
      { path: 'booksword', component: BookswordComponent },
      { path: 'welcome', component: WelcomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'places', component: PlacesComponent },
      //{ path: 'community', component: CommunityComponent },
      //{ path: 'voelabora', component: VoelaboraComponent },
      //{ path: 'voeora', component: VoeoraComponent },
      //{ path: 'ministeriobem', component: MinisteriobemComponent },
      { path: 'wakeup', component: WakeupComponent },
      //{ path: 'levantepleno', component: LevanteplenoComponent },
      //{ path: 'levantekids', component: LevantekidsComponent },
      //{ path: 'ide', component: IdeComponent },
      { path: 'testimony', component: TestimonyComponent },
      { path: 'prayrosary', component: PrayrosaryComponent },
      { path: 'wordofscience', component: WordofscienceComponent },
      { path: 'reflectiondaily', component: ReflectiondailyComponent },
      { path: 'missaonatal', component: MissaonatalComponent },
      { path: 'refugees', component: RefugeesComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ]),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
