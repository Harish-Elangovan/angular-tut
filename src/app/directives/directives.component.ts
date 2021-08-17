import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css'],
})
export class DirectivesComponent implements OnInit {
  bool = true;
  color = 'lime';

  MEAN = ['MongoDB', 'EXPRESS_JS', 'ANGULAR', 'NODE_Js'];

  students = [
    { Name: 'Harish', Marks: 500, Age: 23 },
    { Name: 'Naveen', Marks: 400, Age: 23 },
    { Name: 'Santhosh', Marks: 420, Age: 23 },
    { Name: 'Shajay', Marks: 300, Age: 23 },
  ];

  Actors = [
    { Name: 'Surya', Age: '44', Status: 'Alive' },
    { Name: 'Vijay', Age: '46', Status: 'Alive' },
    { Name: 'MGR', Age: '72', Status: 'Dead' },
    { Name: 'Shivaji', Age: '74', Status: 'Dead' },
    { Name: 'Vkiram', Age: '54', Status: 'Alive' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
