import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mini Calculadora';
  
  protected numero1:number = 0;
  protected numero2:number = 0;
  protected resultado:number = 0;
}
