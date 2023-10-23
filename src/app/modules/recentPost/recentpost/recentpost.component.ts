import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

export interface products {
  id:number;
  title:string;
  heading: string;
description:string
  img: string;

}

export interface nationalNews{
  id: number;
  date: string;
  heading: string;
  img: string;
  title:string;

}

@Component({
  selector: 'app-recentpost',
  templateUrl: './recentpost.component.html',
  styleUrls: ['./recentpost.component.scss']
})


export class RecentpostComponent  implements OnInit{
constructor( private renderer: Renderer2, private el: ElementRef){}
ngOnInit(): void {
}

NationalNews: nationalNews [] = [
    { id: 1, title:'Business',  date: ' 15th Jan', heading:`Qatar's foreign minister accuses Saudi Arabia of saparking `,  img:'/assets/images/qatar.jpg' },
    { id: 2, title:'Business', date: ' 15th Jan', heading:`Qatar's foreign minister accuses Saudi Arabia of saparking `,  img:'/assets/images/qatar.jpg' },
    { id: 3, title:'Business', date: ' 15th Jan', heading:`Qatar's foreign minister accuses Saudi Arabia of saparking `,  img:'/assets/images/qatar.jpg' },
  
  ];
  
  product: products [] = [
    { id: 1, title:'Business', heading:`Qatar's foreign minister accuses Saudi Arabia of saparking humananitarian crisis`, description:`Dw interview , Qatar's foreign minister has slammed Soudi Arabia for " destabilizing the region ." The minister said Riyash is usinf what it calls security concerns as a "smooke screen" to harm Qautar's economy.  `  , img:'/assets/images/news.jpg' },
    { id: 2, title:'Business', heading:`Qatar's foreign minister accuses Saudi Arabia of saparking humananitarian crisis`, description:`Dw interview , Qatar's foreign minister has slammed Soudi Arabia for " destabilizing the region ." The minister said Riyash is usinf what it calls security concerns as a "smooke screen" to harm Qautar's economy.  `  , img:'/assets/images/news.jpg' },
    { id: 3, title:'Business', heading:`Qatar's foreign minister accuses Saudi Arabia of saparking humananitarian crisis`, description:`Dw interview , Qatar's foreign minister has slammed Soudi Arabia for " destabilizing the region ." The minister said Riyash is usinf what it calls security concerns as a "smooke screen" to harm Qautar's economy.  `  , img:'/assets/images/news.jpg' },
  
  ]

  openNav1() {
    const sidepanel1 = this.el.nativeElement.querySelector('#mySidepanel1');
    this.renderer.setStyle(sidepanel1, 'width', '100vw');
    // this.renderer.setStyle(sidepanel1, 'display', 'block');
    this.renderer.setStyle(sidepanel1, 'height', '100vh');
    // const sidepanel1 = this.el.nativeElement.querySelector('#mySidepanel1');
  }
  closeNav() {
    const sidepanel = this.el.nativeElement.querySelector('#mySidepanel1');
    this.renderer.setStyle(sidepanel, 'width', '0px');
    // const closebtn = this.el.nativeElement.querySelector('#closebtn');
    // this.renderer.setStyle(closebtn, 'display', 'none');
  }

  openNav() {
    const sidepanel = this.el.nativeElement.querySelector('#mySidepanel');
    this.renderer.setStyle(sidepanel, 'width', '100vw');
    this.renderer.setStyle(sidepanel, 'height', '100vh');
    // const sidepanel1 = this.el.nativeElement.querySelector('#mySidepanel1');
  }
  closeNav1() {
    const sidepanel = this.el.nativeElement.querySelector('#mySidepanel');
    this.renderer.setStyle(sidepanel, 'width', '0px');
  }
}

