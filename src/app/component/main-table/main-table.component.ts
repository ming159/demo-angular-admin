import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-table',
  templateUrl: './main-table.component.html',
  styleUrls: ['./main-table.component.scss']
})
export class MainTableComponent implements OnInit {
  thead: any[] = [];
  tableData: any[] = [];
  rows: any[] = [];
  operation: any[] = [];
  checkbox: boolean = false;
  checkall: boolean = false;
  selectArr: any [] = [];
  constructor() { }

  ngOnInit(): void {
    this.thead = [];
    this.tableData = [];
    this.rows = [];
  }
  renderData(theadArr:any[], tbodyArr:any[], rowArr: any[]){
     this.thead = theadArr;
     this.tableData = tbodyArr;
     this.rows = rowArr;
  }
  renderOper(data:any[]){
     this.operation = data
  }
  renderCheckbox(){
    this.checkbox = true
    this.thead = [{name:''}].concat(this.thead);
    this.rows = [''].concat(this.rows);
    this.tableData.map(r=>{
      r.check = false
    })
  }
  setStyles(hascheckbox:any,index:String){
    if(hascheckbox){
      return !index?'80px':'calc('+(100/(this.thead.length-1))+'% - '+(80/(this.thead.length-1))+'px)';
    }else{
      return (100/this.thead.length)+'%';
    }
  }
  selectAll(event:any){
    // console.log(event)
    this.tableData.map(r=>{
      r.check = event
    })
  }
  selectCurrent(event:any,row:any){
    // console.log(event)
    this.tableData.map(r=>{
      if(r==row){
        r.check = event
      }
    })
    // console.log(this.tableData)
    let hasCheck = false
    let resArr = this.tableData
    resArr.map(item=>{
      if(item.check){
        hasCheck = true
      }
    })
    this.checkall = hasCheck
  }
}
