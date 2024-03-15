import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  imgSrc:string="https://picsum.photos/200/300"
  isBtnDisabled :boolean=false;

  constructor(){
setTimeout(()=>{
this.isBtnDisabled=true;
},5000);


  }
}
