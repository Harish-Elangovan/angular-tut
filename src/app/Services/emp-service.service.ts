// To generate service - ng g s serviceName
// to generate service by creating folder - ng g s folder name/serviceName
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmpServiceService {
  getData() {
    return [
      {
        Empno: 9523,
        Name: 'Harish',
        Age: 25,
        Designation: 'Full-Stack Developer',
      },
      {
        Empno: 9524,
        Name: 'Naveen',
        Age: 26,
        Designation: 'Java Developer',
      },
      {
        Empno: 9525,
        Name: 'Santhosh',
        Age: 25,
        Designation: 'Front-End Developer',
      },
    ];
  }

  constructor() {}
}
