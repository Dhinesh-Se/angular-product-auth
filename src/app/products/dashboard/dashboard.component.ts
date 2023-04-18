import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  productCount: number;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProductCount().subscribe(count => {
      this.productCount = count;
    });
  }
}
