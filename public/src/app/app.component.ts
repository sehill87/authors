import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  newAuthor: any;
  editAuthor: any;
  authors;
  author;
  id: String;

  constructor(private _httpService: HttpService) {}
  ngOnInit() {
    this.newAuthor = { name: "" }
    this.editAuthor = { _id: "", name: "" }
    this.getAuthorsFromService();
    // this.getTaskFromService();
  }
  getAuthorsFromService() {
    let observable = this._httpService.getAuthors()
    observable.subscribe(data =>  {
      console.log("Got our authors!", data)
      this.authors = data;
      console.log(this.authors)

    });
  }
  getAuthorFromService(id) {
    let observable = this._httpService.getAuthor(id)
    observable.subscribe(data => {
      console.log("Got the author!", data)
      this.author = data;
    });
  }
}
