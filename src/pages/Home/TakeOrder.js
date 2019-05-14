import React, { Component } from 'react';

const dishNames = [
    {
        cate:'面食',
        unit:'两',
        choose:[1,2,3]
        items: [
            {
                name:'红烧牛肉面',
                desc:''
            },
            {
                name:'酸菜牛肉面',
                desc:''
            },
            {
                name:'泡椒牛肉面',
                desc:''
            }
        ]
    },
    {
        cate:'炒饭',
        unit:'份',
        choose:['大','中','小'],
        items: [
            {
                name:'鸡杂炒饭',
                desc:''
            },
            {
                name:'酸菜炒饭',
                desc:''
            },
            {
                name:'回锅肉炒饭',
                desc:''
            }
        ]
    },
    {
        cate:'炒面',
        unit:'两',
        choose:[1,2,3],
        items: [
            {
                name:'鸡杂炒面',
                desc:''
            },
            {
                name:'酸菜炒面',
                desc:''
            },
            {
                name:'回锅肉炒面',
                desc:''
            }
        ]
    },
    {
        cate:'炒菜',
        unit:'份',
        choose:['大','中','小'],
        items: [
            {
                name:'鸡杂',
                desc:''
            },
            {
                name:'毛血旺',
                desc:''
            },
            {
                name:'红烧豆腐',
                desc:''
            },
            {
                name:'红烧豆腐',
                desc:''
            },
            {
                name:'红烧豆腐',
                desc:''
            }
        ]
    },
]

export default class TakeOrder extends Component {
    render() {

        return (
            <div className='tabke-page'>
            
            </div>
        )
    }
}