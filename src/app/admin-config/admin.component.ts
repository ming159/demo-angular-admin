import { Component,OnInit } from '@angular/core'

import flight from './flight'
import * as echarts from 'echarts'

@Component({
    selector: 'admin-config',
    templateUrl: './admin.component.html'
})

export class AdminComponent implements OnInit{
    constructor(){}
    ngOnInit(){
        let self = this
        setTimeout(function(){
            self.getData()
        })
    }
    getData(){
        let data :any = flight;
        const getAirportCoord = function(idx:any) {
            return [data.airports[idx][3], data.airports[idx][4]];
        }
        var routes = data.routes.map(function(airline:any) {
            return [
                getAirportCoord(airline[1]),
                getAirportCoord(airline[2])
            ];
        });
        let ROOT_PATH = 'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples'
        let option = {
            backgroundColor: '#000',
            globe: {
                baseTexture: ROOT_PATH + '/data-gl/asset/world.topo.bathy.200401.jpg',
                heightTexture: ROOT_PATH + '/data-gl/asset/bathymetry_bw_composite_4k.jpg',
                shading: 'lambert',
                light: {
                    ambient: {
                        intensity: 0.4
                    },
                    main: {
                        intensity: 0.4
                    }
                },
                viewControl: {
                    autoRotate: false
                }
            },
            series: {
                type: 'lines3D',
                coordinateSystem: 'globe',
                blendMode: 'lighter',
                lineStyle: {
                    width: 1,
                    color: 'rgb(50, 50, 150)',
                    opacity: 0.1
                },
                data: routes
            }
        };
        let opt:any = {
            title: {
                text: '堆叠区域图'
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    label: {
                        backgroundColor: '#6a7985'
                    }
                }
            },
            legend: {
                data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
            },
            toolbox: {
                feature: {
                    saveAsImage: {}
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    boundaryGap: false,
                    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: [
                {
                    name: '邮件营销',
                    type: 'line',
                    stack: '总量',
                    areaStyle: {},
                    emphasis: {
                        focus: 'series'
                    },
                    data: [120, 132, 101, 134, 90, 230, 210]
                },
                {
                    name: '联盟广告',
                    type: 'line',
                    stack: '总量',
                    areaStyle: {},
                    emphasis: {
                        focus: 'series'
                    },
                    data: [220, 182, 191, 234, 290, 330, 310]
                },
                {
                    name: '视频广告',
                    type: 'line',
                    stack: '总量',
                    areaStyle: {},
                    emphasis: {
                        focus: 'series'
                    },
                    data: [150, 232, 201, 154, 190, 330, 410]
                },
                {
                    name: '直接访问',
                    type: 'line',
                    stack: '总量',
                    areaStyle: {},
                    emphasis: {
                        focus: 'series'
                    },
                    data: [320, 332, 301, 334, 390, 330, 320]
                },
                {
                    name: '搜索引擎',
                    type: 'line',
                    stack: '总量',
                    label: {
                        show: true,
                        position: 'top'
                    },
                    areaStyle: {},
                    emphasis: {
                        focus: 'series'
                    },
                    data: [820, 932, 901, 934, 1290, 1330, 1320]
                }
            ]
        };
        let mychar = document.getElementsByClassName('admin-chart')[0];
        echarts.init(mychar as HTMLDivElement).setOption(opt);
    }
}   