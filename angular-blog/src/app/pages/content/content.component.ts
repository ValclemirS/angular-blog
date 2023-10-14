import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  photocover:string="https://i.pinimg.com/originals/93/03/ed/9303ed216f918c12fb1769de1ceb30e5.jpg"
  contenttitle:string="mundo"
  description:string="ola"
  constructor() { }

  ngOnInit(): void {
  }

}
