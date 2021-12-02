import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  name?: string;
  info?: string;
  email?: string;

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
  }

  goToLink(url: string){
    window.open(url, "_blank");
  }

  onSubmit() {
    let obj: Object = {
      name: this.name,
      info: this.info,
      email: this.email
    };

    this.http.post("http://localhost:8080/contact/me", obj)
      .subscribe(
        (res) => {
          this.name = '';
          this.email = '';
          this.info = '';
        }
      );

    console.log(obj)
  }

}
