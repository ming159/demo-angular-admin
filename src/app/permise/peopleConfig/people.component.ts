import { Component, OnInit, ViewChild,Directive,ElementRef } from '@angular/core'
import { Router } from '@angular/router'

import * as echarts from 'echarts'

@Component({
    selector: 'people',
    templateUrl: './people.component.html'
})
// @Directive({
//     selector: "mychart"
// })

export class PeopleComponent implements OnInit {
    // @ViewChild('mychart') mychart: ElementRef | undefined;
    constructor(
        private router: Router,
        private mychart: ElementRef
    ){}

    ngOnInit(){
        let self = this
        setTimeout(function(){
            self.getData()
        })
    }

    getData(){
        let options =  {
            title: {
                text: '本月销售状况'
            },
            tooltip: {},
            legend: {
                data:['销量']
            },
            xAxis: {
                data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子",
                "羽绒服","裙子","棉袄","男士内衣","女士内衣","短裤","帽子","皮包"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20,
                60,100,45,35,22,98,66,12],
                itemStyle: {
                    normal: {
                        color: function (params: any) {
                            var r = Math.floor(Math.random() * 256); //随机生成256以内r值
                            var g = Math.floor(Math.random() * 256); //随机生成256以内g值
                            var b = Math.floor(Math.random() * 256); //随机生成256以内b值
                            var alpha = Math.random(); //随机生成1以内a值
                            // return `rgb(${r},${g},${b},${alpha})`; //返回rgba(r,g,b,a)格式颜色
                            return `rgb(${r},${g},${b})`; //返回rgba(r,g,b,a)格式颜色
                        }
                    }
                }
            }]
        }
        let mychar = document.getElementsByClassName('people-chart')[0];
        echarts.init(mychar as HTMLDivElement).setOption(options)
    }

}