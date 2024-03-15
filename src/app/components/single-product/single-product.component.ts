import { Component, EventEmitter, Output} from '@angular/core';
import { Input} from '@angular/core';
import { IProducts } from '../../Models/IProducts';
import { HighlightDirective } from '../../Directives/highlight.directive';
import { LifeCylceComponent } from '../life-cylce/life-cylce.component';
import { SearchHighlightPipe } from '../../Pipes/search-highlight.pipe';
import { CurrencyPipe, DatePipe, NgClass } from '@angular/common';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-single-product',
  standalone: true,
  imports: [SearchHighlightPipe,LifeCylceComponent,HighlightDirective,CurrencyPipe,NgClass,DatePipe],
  templateUrl: './single-product.component.html',
  styleUrl: './single-product.component.css'
})
export class SingleProductComponent {
  constructor(private productservice:ProductService,private router:Router){}
  productcolor:string="yellow";
@Input() product!:IProducts ;
@Input()searchValue:string='';
@Output() handleAddToCart=new EventEmitter();
addProductToCart(event: MouseEvent, product: IProducts) {
  event.stopPropagation()
  this.productservice.addToCart(product);
}
handleBuy(product:IProducts){
  if(product.quantity>0)
  product.quantity=product.quantity-1;
}

handleRoute(id: number) {
  this.router.navigate(['/product', id]);
}
currentdate:Date=new Date();
}
