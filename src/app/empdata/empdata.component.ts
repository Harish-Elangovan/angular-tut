import { Component, OnInit } from '@angular/core';
import { EmpServiceService } from '../Services/emp-service.service';

@Component({
  selector: 'app-empdata',
  templateUrl: './empdata.component.html',
  styleUrls: ['./empdata.component.css'],
  providers: [EmpServiceService],
})
export class EmpdataComponent implements OnInit {
  employees: any = [];
  constructor(private data: EmpServiceService) {}

  ngOnInit(): void {
    this.employees = this.data.getData();
  }
}
