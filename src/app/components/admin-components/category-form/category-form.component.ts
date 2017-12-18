import { NgForm } from '@angular/forms';
import { CategoryServiceService } from './../../../service/category-service.service';
import { CategoryListComponent } from './../category-list/category-list.component';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent implements OnInit {
  constructor(private _categoryService: CategoryServiceService) { }
  data: any;
  @Input() passName;
  @Input() passId;
  ngOnInit() {
  }
  onSubmit(formCategory: NgForm) {
    if (this.passId === '') {
      this._categoryService.save(formCategory.value).subscribe((data) => {
        console.log(this.data);
      }, (error) => {
        console.log(error);
      });
    }else {
      this._categoryService.edit(this.passId, formCategory.value).subscribe((data) => {
        console.log(this.data);
      }, (error) => {
        console.log(error);
      });
    }
  }
}
