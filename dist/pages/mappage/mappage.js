'use strict';

// 获取全局应用程序实例对象
// const app = getApp()

// 创建页面实例对象
Page({
    /**
     * 页面的初始数据
     */
    data: {
        title: 'mappage',
        address: '',
        latitude: '',
        longitude: '',
        showButton: false
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function onLoad() {
        // TODO: onLoad
    },


    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function onReady() {
        // TODO: onReady
    },


    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function onShow() {
        this.checkLocationSet();
    },

    checkLocationSet: function checkLocationSet() {
        var _this = this;
        wx.getSetting({
            success: function success(res) {
                console.log(res);
                if (res.authSetting['scope.userLocation'] == null) {
                    // 未授权过，不做任何处理
                    _this.setData({ showButton: false });
                } else {
                    if (!res.authSetting['scope.userLocation']) {
                        // 关闭了 应该打开
                        _this.setData({ showButton: true });
                    } else {
                        // 直接处理
                        _this.setData({ showButton: false });
                    }
                }
            }
        });
    },
    getLocation: function getLocation() {
        var _this = this;

        wx.getSetting({
            success: function success(res) {
                if (res.authSetting['scope.userLocation'] == null) {
                    _this.saveLocation();
                } else {
                    if (!res.authSetting['scope.userLocation']) {
                        wx.authorize({
                            scope: 'scope.userLocation',
                            success: function success() {
                                // 成功
                                _this.saveLocation();
                            }
                        });
                    } else {
                        // 直接处理
                        _this.saveLocation();
                    }
                }
            }
        });
    },
    saveLocation: function saveLocation() {
        var _this = this;
        wx.getLocation({
            type: 'gcj02', //返回可以用于wx.openLocation的经纬度
            success: function success(res) {
                var latitude = res.latitude;
                var longitude = res.longitude;
                wx.chooseLocation({
                    latitude: latitude,
                    longitude: longitude,
                    scale: 28,
                    success: function success(res) {
                        console.log(res);
                        _this.setData({
                            address: res.address,
                            latitude: res.latitude,
                            longitude: res.longitude

                        });
                    }
                });
            }
        });
    },
    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function onHide() {
        // TODO: onHide
    },


    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function onUnload() {
        // TODO: onUnload
    },


    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function onPullDownRefresh() {
        // TODO: onPullDownRefresh
    }
});