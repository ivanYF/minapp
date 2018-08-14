'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// 获取全局应用程序实例对象
// const app = getApp()

// 创建页面实例对象
Page({
    /**
    * 页面的初始数据
    */
    data: {
        current: {
            src: 'https://wx.files.weiliangyuan.cn/audio/20180809112034FJI7IEvRThpz7cd4scDu3lSPbgyLXkIk.mp3',
            sliderMax: 0, // 音屏的长度
            audioStatus: 0, // 0未初始化  1 播放  2 暂停
            playTime: '00:00', // 时间格式 为 00:00
            curTime: 0
        }
    },
    onReady: function onReady(e) {
        console.log("onReady ----------");
        // 使用 wx.createAudioContext 获取 audio 上下文 context
        this.audioCtx = wx.createAudioContext('myAudio');
        console.log(this.audioCtx);
    },
    onShow: function onShow() {
        console.log("show------------");
    },

    audioTimeUpdated: function audioTimeUpdated(e) {
        var _setData2;

        if (!this.data.current.sliderMax) {
            wx.hideLoading();
            this.setData(_defineProperty({}, 'current.sliderMax', e.detail.duration));
        }
        /**
         * 实时获取当前audio 播放位置
         * 更新播放时间
         * 更新slide 进度
         */
        var currentTime = Math.floor(e.detail.currentTime);
        var playTime = (Math.floor(currentTime / 60) < 10 ? '0' + Math.floor(currentTime / 60) : Math.floor(currentTime / 60)) + ':' + (currentTime % 60 < 10 ? '0' + currentTime % 60 : currentTime % 60);

        this.setData((_setData2 = {}, _defineProperty(_setData2, 'current.playTime', playTime), _defineProperty(_setData2, 'current.curTime', currentTime), _setData2));

        if (e.detail.currentTime == this.data.current.sliderMax) {
            var _setData3;

            this.audioCtx.pause();
            this.setData((_setData3 = {}, _defineProperty(_setData3, 'current.audioStatus', 2), _defineProperty(_setData3, 'current.curTime', 0), _defineProperty(_setData3, 'current.playTime', '00:00'), _setData3));
        };
    },
    sliderChange: function sliderChange(e) {
        var time = e.detail.value;
        this.audioCtx.seek(time);
    },

    playAudio: function playAudio() {
        this.audioCtx.play();
        // 未初始化时 显示 loading
        if (!this.data.current.sliderMax) {
            wx.showLoading({
                mask: true
            });
        }
        this.setData(_defineProperty({}, 'current.audioStatus', 1));
    },
    pauseAudio: function pauseAudio() {
        this.audioCtx.pause();
        this.setData(_defineProperty({}, 'current.audioStatus', 2));
    },
    /**
    * 生命周期函数--监听页面加载
    */
    onLoad: function onLoad() {
        // TODO: onLoad
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