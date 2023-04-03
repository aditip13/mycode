import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  allProduct: any;
  delete: any;
  delItem: any;

  constructor(
    private _ps: ProductService
  ) {
    this._ps.getAll().subscribe(result => {
      this.allProduct = result;
    })
  }

  ngOnInit(): void {
  }

  askDelete(obj: any) {
    this.delete = obj;

    this.delItem = { name: obj.name, label: "Product" };
  }

  confDelete(btn:any) {
    this._ps.delete(this.delete._id).subscribe(result => {
      let n = this.allProduct.indexof(this.delete);
      this.allProduct.splice(n, 1);
      btn.click();
    })
  }

}
