import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css'],
})
export class BindingComponent implements OnInit {
  //inside class we can not use keywords
  myStr = 'Hello World';
  Title = 'Web Development';
  imgUrl =
    'https://media.istockphoto.com/photos/soldier-full-body-silhouette-saluting-gesture-at-sunset-copy-space-picture-id1221702998';
  mybool = true;

  getDate() {
    var date = new Date();
    console.log(date);
  }

  getName() {
    console.log('Harish');
  }

  place = 'Chennai';

  getPlace() {
    console.log(this.place);
  }

  constructor() {}

  ngOnInit(): void {}
}
