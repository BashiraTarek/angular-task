import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { IProducts } from '../../Models/IProducts';
import { ProductService } from '../../services/product.service';
import { CommonModule, CurrencyPipe, NgClass } from '@angular/common';
import { SingleProductComponent } from '../single-product/single-product.component';
import { HighlightDirective } from '../../Directives/highlight.directive';
import productlist from '../../../assets/productlist';
import { ObsService } from '../../services/obs.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [NgClass,SingleProductComponent,HighlightDirective,CurrencyPipe],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnChanges {
  product:IProducts[]=productlist
  totalCartPrice: number = 0;
  productcolor:string="yellow";
  productsCart:IProducts[]=[];
  products:IProducts[]=productlist;
  @Input() filterValue:string='';
constructor(private productService:ProductService,private obs:ObsService){
}
  
    ngOnChanges(): void {
      if(this.filterValue==''){
        this.products=productlist;
      }
      else{
        this.products=this.products.filter((product)=>product.name.includes(this.filterValue))
      }
      
    
  }


ngOnInit(): void {
  this.productService.productsCart$.subscribe((cart) => {
    this.productsCart = cart;
    this.obs.dataObservable$.subscribe((data) => {
      console.log('Received data:', data);
    });

    });
  }


ngOnDestroy(): void {
  this.obs.ngOnDestroy();
}

calculateTotalPrice() {
  this.totalCartPrice = this.productsCart.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );
}

addToCart(product: IProducts) {
  const existingProduct = this.productsCart.find((p) => p.id === product.id);
  if (existingProduct) {
    existingProduct.quantity += 1;
    product.quantity -= 1;
  } else {
    this.productsCart.push({ ...product, quantity: 1 });
    product.quantity -= 1;
  }

  this.calculateTotalPrice();
}
HandleDropDown(n:number){
  this.products=this.productService.getAllProudcts();
  if(n==1){this.products=this.products.filter((product)=>product.categoryID==1)}
  else if(n==2){this.products=this.products.filter((product)=>product.categoryID==2)}
  else if(n==3){this.products=this.products.filter((product)=>product.categoryID==3)}

}
}

