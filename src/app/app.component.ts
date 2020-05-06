import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template: `
      <me-header></me-header>
      
      <!-- content -->
      <div class='container'>
          <router-outlet></router-outlet>
      </div>
      
      <!-- footer -->
		<div class='fixed-bottom'>
			<me-footer></me-footer>
		</div>      
		
      `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {

}
