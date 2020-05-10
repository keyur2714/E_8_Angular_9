import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-my-table',
  templateUrl: './my-table.component.html',
  styleUrls: ['./my-table.component.css']
})
export class MyTableComponent implements OnInit {

  @Input() dataList : any[] = [];
  @Input() headerList : string[] = [];
  @Input() fieldList : string[] = [];
  @Input() bgColor : string = 'dark';
  @Input() textColor : string = 'info';

  @Output("getSelectedRow") selectedRow = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  setSelectedRow(data : any):void{
    //alert(data);
    this.selectedRow.emit(data);
  }
}
