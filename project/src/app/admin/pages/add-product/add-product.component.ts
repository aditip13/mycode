import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product/product.service';
import { CategoryService } from 'src/app/services/category/category.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  proForm: FormGroup
  check = false;
  allCate: any;
  id: any;

  constructor(
    private _fb: FormBuilder,
    private _ps: ProductService,
    private _router: Router,
    private _cs: CategoryService,
    private _actRoute: ActivatedRoute
  ) {
    this.proForm = this._fb.group({
      _id: [],
      name: ["", Validators.required],
      price: [null, Validators.required],
      discount: [null, Validators.required],
      category: ["", Validators.required],
      description: ["", Validators.required],
      image: ["", Validators.required]
    })

    this._cs.getAll().subscribe(result => {
      this.allCate = result;
    })

    this.id = this._actRoute.snapshot.paramMap.get("id");
    // console.log(id);

    if (this.id) {
      this.proForm.controls['image'].clearValidators();
      this._ps.getOne(this.id).subscribe(result => {
        // console.log(result);
        delete result.__v;
        result.image = "";
        this.proForm.setValue(result);

      })
    }


  }

  ngOnInit(): void {
  }

  submit(file: any) {
    if (this.proForm.invalid) {
      this.check = true;
      return;
    }
    let form = new FormData();

    if (file.files[0] !== undefined) {
      let obj = file.files[0];
      form.append("image", obj);
    }

    form.append("formdata", JSON.stringify(this.proForm.value));

    if (this.id) {
      this._ps.update(this.id, form).subscribe(result => {
        this._router.navigate(["admin/product"]);
      })
    } else {
      this._ps.save(form).subscribe(result => {
        // console.log(result);
        this._router.navigate(["admin/product"]);
      })
    }
  }


}
