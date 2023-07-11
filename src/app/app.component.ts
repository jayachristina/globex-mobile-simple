import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'globex-mobile-simple';

  testBrowser: boolean = true;
  products: any;

  constructor(@Inject(PLATFORM_ID) platformId: string, private http: HttpClient) {
    this.testBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
    if (this.testBrowser) {
      this.fetchProductsList();
    }
  }


  fetchProductsList() {
    this.http.get<any>("/api/getProducts").subscribe(data => {
        this.products = data.content;
    })
  }
}


