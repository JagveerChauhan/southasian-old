import { Component, OnInit } from '@angular/core';
export interface nationalNews{
  id: number;
  date: string;
  heading: string;
  img: string;
  title:string;

}
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})


export class FooterComponent  implements OnInit{

  constructor(){}
  ngOnInit(): void {
    
  }
  NationalNews: nationalNews [] = [
    { id: 1, title:'Business',  date: ' 15th Jan', heading:`Qatar's foreign minister accuses Saudi Arabia of saparking `,  img:'/assets/images/qatar.jpg' },
    { id: 2, title:'Business', date: ' 15th Jan', heading:`Qatar's foreign minister accuses Saudi Arabia of saparking `,  img:'/assets/images/qatar.jpg' },
    { id: 3, title:'Business', date: ' 15th Jan', heading:`Qatar's foreign minister accuses Saudi Arabia of saparking `,  img:'/assets/images/qatar.jpg' },
  
  ];
}

