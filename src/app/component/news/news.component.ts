import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  input2:any = ""
  constructor() { }

  ngOnInit(): void {
    this.input2 = "123456"
  }

}
