import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  active = 1;
  products: any = [];
  enableDesc: boolean = false;
  enableEditIndex  = null;
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.httpClient.get("assets/mockData.json").subscribe((data :any) =>{
      this.products = data.data;
    })
  }

  enableDescription(i){
    this.enableDesc = true;
    this.enableEditIndex = i;
  }

}
