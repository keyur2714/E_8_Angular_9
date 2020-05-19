import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ViewChildDemo';

  @ViewChild("tit",{static : true})
  tit : ElementRef;

  ngOnInit(){
    this.tit.nativeElement.innerHTML = 'Radhe Krishna...!';
    this.tit.nativeElement.style.color = 'orange';
    this.tit.nativeElement.style.background = 'black';
  }

}
