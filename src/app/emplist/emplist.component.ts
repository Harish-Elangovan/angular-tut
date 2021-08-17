import { Component, OnInit } from '@angular/core';
import { EmpServiceService } from '../Services/emp-service.service';

@Component({
  selector: 'app-emplist',
  templateUrl: './emplist.component.html',
  styleUrls: ['./emplist.component.css'],
  providers: [EmpServiceService],
})
export class EmplistComponent implements OnInit {
  employees: any = [];
  constructor(private data: EmpServiceService) {}

  ngOnInit(): void {
    this.employees = this.data.getData();
  }
}
