import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Shoping-List-App';
  tab='recipe';
  onNavigate(feature : string)
  {
    this.tab = feature;
  }
}
