'use strict';

// 获取全局应用程序实例对象
// const app = getApp()

// 创建页面实例对象
Page({
    /**
    * 页面的初始数据
    */
    data: {
        current: {
            src: '',
            sliderMax: 0, // 音屏的长度
            audioStatus: 0, // 0未初始化  1 播放  2 暂停
            playTime: '00:00', // 时间格式 为 00:00
            curTime: 0
        },
        list: [{ src: 'https://wx.files.weiliangyuan.cn/audio/20180809112034FJI7IEvRThpz7cd4scDu3lSPbgyLXkIk.mp3' }, { src: 'https://wx.files.weiliangyuan.cn/audio/20180809112034FJI7IEvRThpz7cd4scDu3lSPbgyLXkIk.mp3' }],
        audioList: [],
        activeIndex: -1
    },
    onReady: function onReady(e) {
        console.log("onReady ----------");
        // 使用 wx.createAudioContext 获取 audio 上下文 context
        this.audioCtx = wx.createAudioContext('myAudio');

        var that = this;
        var list = this.data.list;
        var newList = this.data.audioList;
        list.forEach(function (item, idx) {
            var cItem = that.data.current;
            cItem.src = item.src;
            newList.push(cItem);
        });

        console.log(newList);
        this.setData({ audioList: newList });
    },
    onShow: function onShow() {
        console.log("show------------");
    },
    audioInit: function audioInit(e) {
        console.log(e);
    },
    audioTimeUpdated: function audioTimeUpdated(e) {
        var that = this;
        var list = JSON.parse(JSON.stringify(that.data.audioList));
        var activeIndex = this.data.activeIndex;
        if (!list[activeIndex].sliderMax) {
            wx.hideLoading();
            list[activeIndex].sliderMax = e.detail.duration;
            this.setData({ audioList: list });
        }
        /**
         * 实时获取当前audio 播放位置
         * 更新播放时间
         * 更新slide 进度
         */
        var currentTime = Math.floor(e.detail.currentTime);
        var playTime = (Math.floor(currentTime / 60) < 10 ? '0' + Math.floor(currentTime / 60) : Math.floor(currentTime / 60)) + ':' + (currentTime % 60 < 10 ? '0' + currentTime % 60 : currentTime % 60);

        list[activeIndex].playTime = playTime;
        list[activeIndex].curTime = currentTime;

        this.setData({ audioList: list });

        if (e.detail.currentTime == list[activeIndex].sliderMax) {
            this.audioCtx.pause();

            list[activeIndex].audioStatus = 2;
            list[activeIndex].curTime = 0;
            list[activeIndex].playTime = '00:00';
            this.setData({ audioList: list });
        };
    },
    sliderChange: function sliderChange(e) {
        var time = e.detail.value;
        this.audioCtx.seek(time);
    },

    playAudio: function playAudio(e) {

        var that = this;
        var src = e.currentTarget.dataset.src;
        var idx = e.currentTarget.dataset.idx;

        var list = JSON.parse(JSON.stringify(that.data.audioList));

        if (this.data.activeIndex != idx) {
            this.setData({ activeIndex: idx });
        };

        this.audioCtx.play();
        // 未初始化时 显示 loading
        if (!this.data.audioList[idx].sliderMax) {
            wx.showLoading({
                mask: true
            });
        }

        // 播放当前 暂停其他
        for (var i = 0; i < list.length; i++) {
            if (i != idx) {
                list[i].audioStatus = 2;
            };
        };
        list[idx].audioStatus = 1;
        this.setData({ audioList: list });
    },
    pauseAudio: function pauseAudio(e) {
        var idx = e.currentTarget.dataset.idx;
        var list = this.data.audioList;
        this.audioCtx.pause();
        list[idx].audioStatus = 2;
        this.setData({ audioList: list });
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