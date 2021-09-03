import { Component, OnInit, ViewChild } from '@angular/core'
import { Router } from '@angular/router'
import { MainTableComponent } from '../component/main-table/main-table.component'

import { Http } from '@angular/http'
import { UserService } from '../api/user'
import api from '../api/user.api'

@Component({
    selector: 'user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css'],
    providers: []
})

export class UserComponent implements OnInit {
    @ViewChild('mychild')
    table: MainTableComponent = new MainTableComponent;

    constructor(
        private http: Http,
        private router: Router,
    ){}

    userApi: UserService = new UserService(this.http);

    ngOnInit(){
        let self = this
        setTimeout(() => {
            self.getData()
        }, 100); 
    }

    getData(){
        let thead:any[] = [
            {name:'工程项目'},{name: '创建时间'},{name: '详情描述'},{name: '所属地址'}
        ];
        let data:any[] = [];
        // for(let i = 0;i<5;i++){
        //     data.push({
        //         name: 'wang_yun_'+i,
        //         date: "2021-08-08 12:12:"+(i<10?('0'+i):i),
        //         desc: 'this is test data '+i+'_00py',
        //         addr: 'shanghai_'+i+'0000弄堂'
        //     })
        // }
        let rows:any[] = ['name','date','desc','addr'];
        let self = this
        this.table.renderData(thead, data, rows);
        // this.getList()

        this.apiFn()
    }

    updateData(res:any[]){
        let thead:any[] = [
            {name:'工程项目'},{name: '创建时间'},{name: '详情描述'},{name: '所属地址'}
        ];
        let data:any[] = [];
        for(let i = 0;i<res.length;i++){
            data.push({
                name: res[i].name,
                date: res[i].time,
                desc: res[i].desc,
                addr: res[i].addr
            })
        }
        let rows:any[] = ['name','date','desc','addr'];
        let self = this
        this.table.renderData(thead, data, rows);
    }

    getList() {
        this.userApi.getList({
            name: "wang_po",
            password: '123456'
        }).then(res=>{
            console.log(res)
            if ( res.code==200 && res.data && res.data.length>0 ) {
                this.updateData(res.data)
            }
        })
        this.userApi.getFile().toPromise().then(res=>{
            // console.log(res)
        })
    }

    apiFn(){
        api.getList({}).then( res => {
            console.log(res)
            let result: any = res
            if ( result.code==200 && result.data && result.data.length>0 ) {
                this.updateData(result.data)
            }
        }).catch( err => {
            console.log(err)
        })

        api.getFile({}).then( res => {
            console.log(res)
            let result: any = res
        }).catch( err => {
            console.log(err)
        })
    }

    backhome(){
        
        this.router.navigate(['/home'])
    }
}