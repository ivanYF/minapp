'use strict';

// 获取全局应用程序实例对象
// const app = getApp()
var ADDRESS = require('./../../utils/address.js');
// 创建页面实例对象
Page({
    /**
    * 页面的初始数据
    */
    data: {
        title: '三级联动',
        data: '',
        addressJSON: null,
        multiIndex: [0, 0, 0],
        addressMulti: []
    },

    /**
    * 生命周期函数--监听页面加载
    */
    onLoad: function onLoad() {},


    /**
    * 生命周期函数--监听页面初次渲染完成
    */
    onReady: function onReady() {},


    /**
    * 生命周期函数--监听页面显示
    */
    onShow: function onShow() {
        this.setData({ addressJSON: ADDRESS.addressJSON });
        this.initAddress();
    },


    initAddress: function initAddress() {
        var addressMulti = [];
        var addressJSON = this.data.addressJSON;

        // 第一纬度
        var ArrayOne = [];
        for (var key in addressJSON) {
            ArrayOne.push(key);
        };
        addressMulti.push(ArrayOne);

        // 第二纬度
        var ArrayTwo = [];

        for (var key in addressJSON[ArrayOne[0]]) {
            ArrayTwo.push(key);
        };
        addressMulti.push(ArrayTwo);

        // 第三纬度
        var ArrayThree = addressJSON[ArrayOne[0]][ArrayTwo[0]];
        addressMulti.push(ArrayThree);

        this.setData({ addressMulti: addressMulti });
    },

    bindMultiPickerChange: function bindMultiPickerChange(e) {
        console.log('picker发送选择改变，携带值为', e.detail.value);
        this.setData({
            multiIndex: e.detail.value
        });

        console.log(this.data.addressMulti[0][this.data.multiIndex[0]]);
        console.log(this.data.addressMulti[1][this.data.multiIndex[1]]);
        console.log(this.data.addressMulti[2][this.data.multiIndex[2]]);
    },
    getKeyList: function getKeyList(obj) {
        var keyList = [];
        if (obj) {
            for (var key in obj) {
                keyList.push(key);
            };
        };
        return keyList;
    },
    bindMultiPickerColumnChange: function bindMultiPickerColumnChange(e) {
        var _this = this;
        var data = {
            addressMulti: this.data.addressMulti,
            multiIndex: this.data.multiIndex
        };
        data.multiIndex[e.detail.column] = e.detail.value;
        switch (e.detail.column) {
            case 0:

                // 计算第二纬度
                var keyOne = data.addressMulti[0][data.multiIndex[0]];
                data.addressMulti[1] = this.getKeyList(this.data.addressJSON[keyOne]);

                // 计算第三纬度
                var keyTwo = data.addressMulti[1][0];
                data.addressMulti[2] = this.data.addressJSON[keyOne][keyTwo];

                data.multiIndex[1] = 0;
                data.multiIndex[2] = 0;

                break;
            case 1:
                // 计算第三纬度
                var keyOne = data.addressMulti[0][data.multiIndex[0]];
                var keyTwo = data.addressMulti[1][data.multiIndex[1]];
                data.addressMulti[2] = this.data.addressJSON[keyOne][keyTwo];
                data.multiIndex[2] = 0;
                break;
        }
        this.setData(data);
    },
    /**
    * 生命周期函数--监听页面隐藏
    */
    onHide: function onHide() {},


    /**
    * 生命周期函数--监听页面卸载
    */
    onUnload: function onUnload() {},


    /**
    * 页面相关事件处理函数--监听用户下拉动作
    */
    onPullDownRefresh: function onPullDownRefresh() {}
});