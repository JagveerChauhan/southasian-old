import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
constructor( private renderer:Renderer2, private el:ElementRef){}
openSearchBar: boolean= false;
ngOnInit(): void {
  
}

openSearchbar(){
  this.openSearchBar=!this.openSearchBar
}
  openNav() {
    const sidepanel = this.el.nativeElement.querySelector('#mySidepanel');
    this.renderer.setStyle(sidepanel, 'width', '100vw');
    this.renderer.setStyle(sidepanel, 'height', '100vh');
    // const sidepanel1 = this.el.nativeElement.querySelector('#mySidepanel1');
  }
   openNav1() {
    const sidepanel1 = this.el.nativeElement.querySelector('#mySidepanel1');
    this.renderer.setStyle(sidepanel1, 'width', '100vw');
    // this.renderer.setStyle(sidepanel1, 'height', '100vh');
    // const sidepanel1 = this.el.nativeElement.querySelector('#mySidepanel1');
  } 

  closeNav() {
    const sidepanel = this.el.nativeElement.querySelector('#mySidepanel');
    this.renderer.setStyle(sidepanel, 'width', '0px');
  } 
  closeNav1() {
    const sidepanel = this.el.nativeElement.querySelector('#mySidepanel1');
    this.renderer.setStyle(sidepanel, 'width', '0px');
  }
}
