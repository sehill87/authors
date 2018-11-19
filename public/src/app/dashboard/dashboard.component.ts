import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    authors;
    author;
    id: String;

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getAuthorsFromService()
  }
  getAuthorsFromService() {
    let observable = this._httpService.getAuthors()
    observable.subscribe(data =>  {
      console.log("Got our authors!", data)
      this.authors = data;
      console.log(this.authors)
    });
  }
  deleteAuthorFromService(id) {
    console.log('Click will delete', id)
    let observable = this._httpService.deleteAuthor(id);
    observable.subscribe (data => {
      this.getAuthorsFromService();
    })
  }
}
