import { Component, OnInit,ViewChild } from  '@angular/core'
import { Router } from '@angular/router'
import { ElMessageService } from 'element-angular'

import { MainTableComponent } from '../component/main-table/main-table.component'
import { DialogComponent } from '../component/dialog/dialog.component'
import { DialogMainEditComponent } from '../component/dialog-main-edit/dialog-main-edit.component'
 
import api from '../api/user.api'
@Component({
    selector: 'main-app',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit{
    @ViewChild('mychild')
    table: MainTableComponent = new MainTableComponent;
    @ViewChild('mydialog')
    dialog: DialogComponent = new DialogComponent;
    @ViewChild('mydialogEdit')
    edit: DialogMainEditComponent = new DialogMainEditComponent;
    tableData: any[] = [];
    testname: String = "";
    showDel: boolean = false;
    showEdit: boolean = false;
    keyword: String = '';
    constructor(
        private router: Router,
        private message: ElMessageService,
        ){
        // this.getData()  
    }

    ngOnInit(){
        this.showDel = false;
        this.testname = "this is a baby";
        this.tableData = [{
            name: '水爷',
            date: '2017-08-19',
            address: '上海市普陀区金沙江路 1518 弄',
            account: 'admin'
          }, {
            name: '水爷',
            date: '2017-08-20',
            address: '上海市普陀区金沙江路 1518 弄',
            account: 'test'
          }, {
            name: '水爷',
            date: '2017-08-21',
            address: '上海市普陀区金沙江路 1518 弄',
            account: '12345'
          }, {
            name: '水爷',
            date: '2017-08-22',
            address: '上海市普陀区金沙江路 1510 弄',
            account: 'www'
        }];
        let self = this
        setTimeout(() => {
            self.getData()
        }, 100);
    }

    getData(){
        let thead:any[] = [
            {name:'名称'},{name: '时间'},{name: '描述'},{name: '地址'},{name: '操作'}
        ];
        let data:any[] = [];
        // for(let i = 0;i<20;i++){
        //     data.push({
        //         name: 'wang_yun_'+i,
        //         date: "2021-08-08 12:12:"+(i<10?('0'+i):i),
        //         desc: 'this is test data '+i+'_00py',
        //         addr: 'shanghai_'+i+'0000弄堂'
        //     })
        // }
        let rows:any[] = ['name','date','desc','addr','operation'];
        let self = this
        let opers:any[] = [
            {name:'编辑', event:function(row:any){
                self.editFn(row)
            }},
            {name:'删除', event:function(row:any){
                self.deleteFn(row)
            }}];
        this.table.renderData(thead, data, rows);
        this.table.renderOper(opers);
        this.table.renderCheckbox();
     
        api.getProject({name:'wang', keyword: this.keyword}).then(res=>{
            let result:any = res;
            this.update(result);
        })
    }
    update(res:any){
        let thead:any[] = [
            {name:'名称'},{name: '时间'},{name: '描述'},{name: '地址'},{name: '操作'}
        ];
        let data:any[] = [];
        res.data.map((item:any, index:any)=>{
            if(item.name.includes(this.keyword)) {
                data.push({
                    name: item.name,
                    date: item.time,
                    desc: item.desc,
                    addr: item.addr
                })
            }
        })
        let rows:any[] = ['name','date','desc','addr','operation'];
        let self = this
        let opers:any[] = [
            {name:'编辑', event:function(row:any){
                self.editFn(row)
            }},
            {name:'删除', event:function(row:any){
                self.deleteFn(row)
            }}];
        this.table.renderData(thead, data, rows);
        this.table.renderOper(opers);
        this.table.renderCheckbox();
    }

    editFn(row:any){
        console.log(row)
        this.showEdit = true;
        let self = this
        setTimeout(() => {
            self.edit.initView({
                hasIcon: false,
                titleType: '',
                title: '编辑',
                width: 800,
                closeEvent: function(){
                    self.showEdit = false 
                },
                content: '',
                type: 'warning',
                hasBtn: true,
                cancelEvent: function(){
                    self.showEdit = false 
                },
                okEvent: function(){
                    self.showEdit = false 
                },
                row: row
            })
        }, 30);
    }
    deleteFn(row:any){
        console.log(row)
        this.showDel = true
        let self = this
        setTimeout(() => {
            self.dialog.initView({
                hasIcon: false,
                titleType: '',
                title: '',
                width: 500,
                closeEvent: function(){
                    self.showDel = false 
                },
                content: '你确定要删除吗？',
                type: 'warning',
                hasBtn: true,
                cancelEvent: function(){
                    self.showDel = false 
                },
                okEvent: function(){
                    self.showDel = false 
                }
            })
        }, 30);
    }

    handle(scope: any){
        console.log(scope)
    }

    delConfirm(){
        this.showDel = false
        this.message['warning']('删除')
    }
}