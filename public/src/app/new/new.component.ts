import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  newAuthor: any;
  id: String;
  errors: object;

  constructor(private _httpService: HttpService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this.newAuthor = { name: "" }
    this.errors = { 
      errors: {
        name: ""
      }
    }
  }
  onSubmitAddAuthor() {
    let observable = this._httpService.addAuthor(this.newAuthor);
    observable.subscribe (data => {
      console.log('New author added', data);
      if (data['errors']) {
        console.log(data['errors'])
        this.errors = data['errors']
        // this._router.navigate(['/new'])
      } else {
        this._router.navigate(['/'])
      }
    })
    this.newAuthor = { name: "" }
  }
}
