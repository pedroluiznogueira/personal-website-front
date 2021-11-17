import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  title = 'EmailTemplate';
  dataset: Details = {
    name:'',
    age:'',
    country:'',
    email:'udeyouproject@gmail.com'
  };

  loading = false;

  constructor(
    private https: HttpClient
  ) { }

  ngOnInit(): void {
  }

  onSubmit(){

    this.https.post<Details>('http://localhost:8080/email/fale-conosco-professor', this.dataset).subscribe(
        res => {
          this.dataset = res;
          this.dataset.age = '';
          this.dataset.name = '';
          this.dataset.country = '';
          this.dataset.email = '';
        });
  }

  load() {
    this.loading = !this.loading;
  }

  
}

interface Details{
  name:string;
  age:string;
  country:string;
  email:string;
}