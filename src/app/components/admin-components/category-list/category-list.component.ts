import { CategoryServiceService } from './../../../service/category-service.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { AnonymousSubscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit, OnDestroy {
  private timerSubscription: AnonymousSubscription;
  private postsSubscription: AnonymousSubscription;
  constructor(private _categoryService: CategoryServiceService) { }
  data: any = [];
  id: number;
  name: string;
  ngOnInit() {
    this.refreshData();
  }
  editById(id, name) {
    this.id = id;
    this.name = name;
  }
  addCatagory() {
    this.id = undefined;
  }
  delete(id) {
    this._categoryService.delete(id).subscribe((data) => {
        console.log(data);
      }, (error) => {
        console.log(error);
      });
  }
  public ngOnDestroy() {
    if (this.postsSubscription) {
      this.postsSubscription.unsubscribe();
    }
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
  }
  private refreshData() {
    this.postsSubscription = this._categoryService.index().subscribe(
      (data) => {
        this.data = data;
        this.timerSubscription = Observable.timer(5000)
        .subscribe(() => this.refreshData());
      },
      (error) => {
        console.log(error);
      },
      () => {
        console.log('complete');
      }
    );
  }
}
