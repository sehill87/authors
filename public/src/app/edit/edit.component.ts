import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  editAuthor: any;
  id: String;
  errors: Object;

  constructor(private _httpService: HttpService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this.editAuthor = {}
    this.getAuthorFromServiceById();
    this.errors = {
      errors: {
        name: ''
      }
    }
  }
  getAuthorFromServiceById() {
    this._route.params.subscribe((params: Params) => {
      console.log(params['id'])
  
      let observable = this._httpService.getAuthor(params['id'])
      observable.subscribe(data =>  {
        console.log("Got our author!", data)
        this.editAuthor = data;
      });
    });
  }
  onSubmitEditAuthor() {
    console.log("this will edit a author")
    let observable = this._httpService.editAuthor(this.editAuthor._id, this.editAuthor);
    observable.subscribe (data => {
      if (data['errors']) {
        console.log(data['errors'])
        this.errors = data['errors']
        // this.getAuthorFromServiceById();
      } else {
        this._router.navigate(['/'])
      }
    })
  }
}
