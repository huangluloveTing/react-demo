
import React , {Component} from 'react';
import {Toast} from 'antd-mobile'

console.log('base compile')

Component.prototype.$toast = {
    success: (content , cb) => {
        Toast.success(content || null, 1, cb)
    },
    fail: (fail ,cb) => {
        Toast.fail(fail || null , 2 , cb)
    },
    info: (info, cb) => {
        Toast.info(info || null , 1.5 , cb)
    },
    loading: (loading, cb) => {
        Toast.loading(loading || '正在加载中...' , 100 , cb)
    }
}