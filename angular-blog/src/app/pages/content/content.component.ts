import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {data} from '../../data/data';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  photocover:string=""
  contenttitle:string=""
  description:string=""
  private id:string|null="0"
  constructor( 
    private route:ActivatedRoute ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      value => this.id = value.get("id")
    )
    this.setvaluetocomponents(this.id)
  }
  setvaluetocomponents(id:string|null){
    const result= data.filter(
      article => article.id == id)[0]
      this.contenttitle= result.title
      this.description= result.description
      this.photocover= result.photocover
      console.log(result.id)

  }
}
