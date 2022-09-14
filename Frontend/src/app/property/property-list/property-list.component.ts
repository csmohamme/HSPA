import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css'],
})
export class PropertyListComponent implements OnInit {
  properties: Array<any> = [
    {
      Id: 1,
      Name: 'Mohammed Moatz',
      Type: 'House',
      Price: 12000,
    },
    {
      Id: 2,
      Name: 'Ayat Ahmed',
      Type: 'House',
      Price: 19000,
    },
    {
      Id: 3,
      Name: 'Abdall Omre',
      Type: 'House',
      Price: 156000,
    },
    {
      Id: 4,
      Name: 'Ahmed',
      Type: 'House',
      Price: 12000,
    },
    {
      Id: 5,
      Name: 'Wad Alwazer ',
      Type: 'House',
      Price: 12400,
    },
    {
      Id: 6,
      Name: 'Brock ',
      Type: 'Department',
      Price: 10000,
    },
    {
      Id: 6,
      Name: 'Brock ',
      Type: 'Department',
      Price: 10000,
    },
    {
      Id: 6,
      Name: 'Brock ',
      Type: 'Department',
      Price: 10000,
    },

  ];
  constructor() { }

  ngOnInit() { }
}
