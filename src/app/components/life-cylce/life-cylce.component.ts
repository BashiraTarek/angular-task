import { AfterContentInit, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-life-cylce',
  standalone: true,
  imports: [],
  templateUrl: './life-cylce.component.html',
  styleUrl: './life-cylce.component.css'
})
export class LifeCylceComponent implements OnInit,OnChanges,DoCheck,AfterContentInit,AfterViewInit,OnDestroy{

  constructor(){
    console.log('constructor')
  }
 
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');//lama el html ytnfz
  }
  ngOnChanges(): void {
    console.log('ngOnChanges');//lw fehaga btt3'yar w mawgod@input
   }
  ngAfterContentInit(): void {
   console.log('ngAfterContentInit')//bt-detect lw ay change hasl fe el content  
  }

  ngOnInit(): void {
    console.log( 'ngOnInit');//bytnfz mara wahda lw el component et3mlo instiallization
  }
  ngDoCheck():void{
    console.log('ngDoCheck')// bttnfz lw hasal ay change detection aw ay ta3'yer momkn y'sar 3alaya
  }
  ngOnDestroy(): void {
    console.log(' ngOnDestroy');//bttnfz lama atla3 mn el component
  }

}
