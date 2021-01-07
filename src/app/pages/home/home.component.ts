import { Component, OnInit, Output } from '@angular/core';
import { PagesListService } from 'app/services/pages-list.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [PagesListService]
})
export class HomeComponent implements OnInit {

  constructor(private servicePageList: PagesListService) { }

  @Output()
  title1 = "title1"

  @Output()
  title2 = "title2"

  @Output()
  titles: string;

  ngOnInit() {
    var al = this.servicePageList.getHeroes();
    this.titles = al;
  
    // al.subscribe(arg => {
    //   console.log('arg', arg);
    //   this.titles = arg;
    // });
  }

}
