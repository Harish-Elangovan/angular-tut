import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css'],
})
export class PipeComponent implements OnInit {
  color = 'Red';
  date = new Date(1995, 1, 16);
  actors = ['Surya', 'Vijay', 'Vikram'];
  employee = { Name: 'Harish', Age: '23', Designation: 'Full_Stack_Developer' };

  constructor() {}

  ngOnInit(): void {}
}
