import { Component, Input } from '@angular/core';
import { IProducts } from '../../Models/IProducts';
import { ProductService } from '../../services/product.service';


@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})

export class CartComponent {
  @Input() filterValue:string='';
  productsCart:IProducts[]=[];
  products:IProducts[]=[];
  product!:IProducts
constructor(private productService:ProductService){

}
ngOnInit(): void {
  this.productService.productsCart$.subscribe((cart) => {
    this.productsCart = cart;
  });
}

  deleteproductbyid(product:IProducts){
    console.log("eeeee")
    this.productService.removeFromCart(product);
  }

    calculateTotalPrice(): number {
      return this.productsCart.reduce((total, product) => total + (product.price * product.quantity), 0);
    }
  }


