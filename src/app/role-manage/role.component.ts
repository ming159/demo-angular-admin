import { Component,OnInit } from '@angular/core'

import * as echarts from 'echarts'

@Component({
    selector:'role-manage',
    templateUrl: './role.component.html'
})

export class RoleComponent implements OnInit{
    constructor(){}
    ngOnInit(){
        let self = this
        setTimeout(function(){
            self.getData()
        })
    }
    getData(){
        let option = {
            title: {
                text: '某站点用户访问来源',
                subtext: '纯属虚构',
                y: "top"
            },
            tooltip: {},
            legend: {
                // orient: 'vertical',
                // left: 'left',
            },
            series: [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius: '50%',
                    data: [
                        {value: 1048, name: '搜索引擎'},
                        {value: 735, name: '直接访问'},
                        {value: 580, name: '邮件营销'},
                        {value: 484, name: '联盟广告'},
                        {value: 300, name: '视频广告'}
                    ],
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        };
        let mychar = document.getElementsByClassName('role-chart')[0];
        echarts.init(mychar as HTMLDivElement).setOption(option);
    }
}