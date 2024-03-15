import { Injectable } from '@angular/core';
import { IProducts } from '../Models/IProducts';
import productlist from '../../assets/productlist';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productcartcontainer=new BehaviorSubject<IProducts[]>([]);//l ben asghr w akbr da l mskah lakin l tane l bb3to l action

  productcart$=this.productcartcontainer.asObservable();


private products:IProducts[]=productlist;


productsCart:IProducts[]=[];


totalCartPrice: number = 0;


  private productsCartSubject = new BehaviorSubject<IProducts[]>([]);
  productsCart$ = this.productsCartSubject.asObservable();



  addToCart(product: IProducts) {
    const currentCart = this.productsCartSubject.value;
    const existingProduct = currentCart.find((p) => p.id === product.id);

    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      currentCart.push({...product, quantity: 1 });
    }
  }
  removeFromCart(product: IProducts) {
    const currentCart = this.productsCartSubject.value;
    const deletedProductIndex = currentCart.findIndex((p) => p.id === product.id);

    if (deletedProductIndex !== -1) {
      const deletedProduct = currentCart.splice(deletedProductIndex, 1)[0];
      const originalProduct = productlist.find((p) => p.id === deletedProduct.id);

      if (originalProduct) {
        originalProduct.quantity += deletedProduct.quantity;
      }
    }
    this.productsCartSubject.next([...currentCart]);
  }


  getTotalCartPrice(): number {
    const currentCart = this.productsCartSubject.value;
    return currentCart.reduce((total, product) => total + product.price * product.quantity, 0);
  }

  getTotalQuantity(): number {
    const currentCart = this.productsCartSubject.value;
    return currentCart.reduce((total, product) => total + product.quantity, 0);
  }


  getNextProductId(currentId: number | undefined): number {
    let index = this.products.findIndex((product) => product.id == currentId);
    console.log(index)
    const findedProduct = this.products[++index];
    console.log(findedProduct)
    return findedProduct.id;
  }


getPreviousProductId(currentId: number): number {
  let minimumProductId = 1;
  if (currentId > minimumProductId) {
    return currentId - 1;
  } else {
    return currentId;
  }
}

  getproductsbycategoryid(categoryid:number){
return this.products.filter(p=>p.categoryID==categoryid)
  }


  getproductbyid(id:number|undefined):IProducts|undefined{
    if(!id){return undefined}
    const product=this.products.find((product)=>product.id==id);
    if (product)
    return product;
  return;

  }

  filterproducts(searchtext:string):IProducts[]{
    if(searchtext){
     return this.products=this.products.filter((product)=>product.name.includes(searchtext));
    }
    else{
      return this.products
    }
  }



  increaseProductQuantity(product: IProducts) {
    const index = this.products.findIndex(p => p.id === product.id);
    if (index !== -1) {
      this.products[index].quantity++;
    }
  }







  calculatetotalprice() {
    let totalPrice = 0;
    this.productsCart.forEach(product => {
      totalPrice += product.price * product.quantity;
    });
    return totalPrice;
  }

  getAllProudcts():IProducts[]{
    return this.products;
  }
  
  getProductsByCategoryId(categoryID:number){

    return this.products.filter((product)=>product.categoryID===categoryID);
  }
  
}
