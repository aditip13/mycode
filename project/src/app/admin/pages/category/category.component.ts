import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category/category.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  cateForm: FormGroup;
  check = false;
  allCate: any;
  delete: any;
  update: any;
  checkUpdate = false;

  delItem: any;

  constructor(
    private _cs: CategoryService,
    private _fb: FormBuilder,
    private _router: Router
  ) {
    this.cateForm = this._fb.group({
      name: ["", Validators.required]
    })

    this._cs.getAll().subscribe(result => {
      this.allCate = result;
    })

  }

  ngOnInit(): void {
  }

  submit() {
    if (this.cateForm.invalid) {
      this.check = true;
      return;
    }
    if (this.checkUpdate) {
      this._cs.update(this.update._id, this.cateForm.value).subscribe(result => {
        // console.log(result);
        let n = this.allCate.indexof(this.update);
        this.allCate[n] = this.cateForm.value;
        this.cancelUpdate();

      })
    } else {
      this._cs.save(this.cateForm.value).subscribe(result => {
        // this.allCate.push(this.cateForm.value);
        this.allCate.push(result);
        this.cateForm.controls["name"].setValue("");
        // console.log(result);
        // this._router.navigate(["/admin/dashboard"]);

        // if (result.success == true) {
        // }
      })
    }
  }

  askDelete(obj: any) {
    this.delete = obj;

    this.delItem = { name: obj.name, label: "Category" };
  }

  confDelete(btn:any) {
    this._cs.delete(this.delete._id).subscribe(result => {
      // console.log(result);
      let n = this.allCate.indexof(this.delete);
      this.allCate.splice(n, 1);
      btn.click();
    })
  }

  askUpdate(obj: any) {
    this.checkUpdate = true;
    this.update = obj;
    this.cateForm.controls["name"].setValue(this.update.name);
  }

  cancelUpdate() {
    this.checkUpdate = false;
    this.update = {};
    this.cateForm.controls['name'].setValue("");
  }

}
