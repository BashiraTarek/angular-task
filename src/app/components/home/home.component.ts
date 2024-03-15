import { Component, Input } from '@angular/core';
 import { ProductsComponent } from '../products/products.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductsComponent,FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {

 clientName:string="stars"
showImg:boolean=true
searchText: string = '';
 handleToggleImg(){
 this.showImg =!this.showImg;
}

}

