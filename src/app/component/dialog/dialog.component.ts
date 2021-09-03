import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  dialogInfo: any = {}
  constructor() { }

  ngOnInit(): void {
    let self = this
    setTimeout(() => {
      self.dialogInfo = {
        hasIcon: false,
        titleType: '',
        title: '',
        width: 500,
        closeEvent: function(){
            // 
        },
        content: '',
        type: '',
        hasBtn: false,
        cancelEvent: function(){},
        okEvent: function(){}
      }
    });
  }

  initView(target: any){
    let self = this
    setTimeout(() => {
      self.dialogInfo = target
    });
  }

}
