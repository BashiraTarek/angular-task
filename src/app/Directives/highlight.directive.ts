import { Directive, ElementRef, HostListener, Input ,OnChanges,Renderer2, SimpleChanges} from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective implements OnChanges{

  // @Input() set color (value:string){
  //   this.elementRef.nativeElement.style.border=value;
  // }
  
  // @Input() set quantity (value:number){
  //    if(value==1)
  //   this.elementRef.nativeElement.style.backgroundColor=value;
  // }

  @Input() set color(value: string) {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'border', value);
    this.renderer.setStyle(this.elementRef.nativeElement, 'border', '1px solid black' + value);
  }

  // @Input() set quantity(value: number) {
  //   if (value === 1) {
  //     this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor', 'yellow');
  //   } else {
  //     // Set the default background color here
  //     this.renderer.removeStyle(this.elementRef.nativeElement, 'backgroundColor');
  //   }
  // }
  // // 
  @HostListener('mouseover') onMouseOver() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'box-shadow', '0 0 5px rgba(0, 0, 0, 0.5)');
    this.renderer.setStyle(this.elementRef.nativeElement, 'border', '1px solid black')
  }

  @HostListener('mouseout') onMouseOut() {
    this.renderer.removeStyle(this.elementRef.nativeElement, 'box-shadow');
    this.renderer.setStyle(this.elementRef.nativeElement, 'border', '1px solid black')
  }
  
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}
 
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }

  // constructor(private elementRef:ElementRef) {
  
  
   

   }


