import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog-main-edit',
  templateUrl: './dialog-main-edit.component.html',
  styleUrls: ['./dialog-main-edit.component.scss']
})
export class DialogMainEditComponent implements OnInit {
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
        okEvent: function(){},
        row: {}
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
