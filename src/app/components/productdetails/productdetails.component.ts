import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { Subscription } from 'rxjs';
import { IProducts } from '../../Models/IProducts';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-productdetails',
  standalone: true,
  imports: [CurrencyPipe,RouterModule],
  templateUrl: './productdetails.component.html',
  styleUrl: './productdetails.component.css'
})


export class ProductDetailsComponent implements OnInit {
  product: IProducts | undefined;
  isLastIndex: boolean = false;
  subscriptions: Subscription[] = [];
  currentIndex: number = 0;
  products: any[] = [];
constructor(private productservice:ProductService,private activatedroute:ActivatedRoute,private router:Router){

}
  ngOnInit(): void {
   const ayhaga=this.activatedroute.snapshot.paramMap.get("id");
   const id=ayhaga?+ayhaga:undefined
   this.product=this.productservice.getproductbyid(id);
  }

  goNext(id: number): void {
    const nextId = this.productservice.getNextProductId(id);
    this.router.navigate(['/product', nextId]);
    setTimeout(() => {
      window.location.reload();
    }, 100);    }

  goPrevious(id: number): void {
    const previousId = this.productservice.getPreviousProductId(id);
    this.router.navigate(['/product', previousId]);
    setTimeout(() => {
      window.location.reload();
    }, 100);    }
}
