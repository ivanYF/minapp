'use strict';

// 获取全局应用程序实例对象
// const app = getApp()
var recorderManager = wx.getRecorderManager();
var innerAudioContext = wx.createInnerAudioContext();
var timeNub = 0;
var timedCount = void 0;
// 创建页面实例对象
Page({
    /**
    * 页面的初始数据
    */
    data: {
        title: 'record',
        recordList: [],
        timeNub: 0, // 录音时间
        recordStatus: 1, // 1:开始录音 2:录音中 3:录音完成
        recording: null
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
        // TODO: onShow
    },

    // 开始录音
    startAudio: function startAudio() {
        var _this = this;
        // 录音
        var options = {
            duration: 100000, //指定录音的时长，单位 ms
            sampleRate: 16000, //采样率
            numberOfChannels: 1, //录音通道数
            encodeBitRate: 96000, //编码码率
            format: 'mp3' //音频格式，有效值 aac/mp3
            // frameSize: 50,//指定帧大小，单位 KB
        };
        timeNub = 0;
        _this.setData({ timeNub: 0 });
        //开始录音
        recorderManager.start(options);
        recorderManager.onStart(function () {
            // 开始计时
            _this.setData({ recordStatus: 2 });
            console.log("开始计时");
            timedCount = setInterval(function () {
                console.log("32323");
                timeNub++;
                _this.setData({ timeNub: timeNub });
            }, 1000);
        });
        //错误回调
        recorderManager.onError(function (res) {
            console.log(res);
        });
    },
    //停止录音
    stopAudio: function stopAudio() {
        var _this = this;
        recorderManager.stop();
        _this.setData({ recordStatus: 3 });
        clearInterval(timedCount);
        setTimeout(function () {
            _this.setData({ recordStatus: 1 }); // 增加新的语音操作
        }, 2000);
        recorderManager.onStop(function (res) {
            var tempFilePath = res.tempFilePath;

            var recordList = _this.data.recordList;
            var min = Math.floor(timeNub / 60) % 60;
            var sec = timeNub % 60;
            if (min < 10) {
                min = '0' + min;
            };
            if (sec < 10) {
                sec = '0' + sec;
            };
            var time = min + ':' + sec;
            recordList.unshift({
                link: tempFilePath,
                time: time
            });
            _this.setData({ recordList: recordList });

            // 上传录音 保存录音
            // wx.uploadFile({
            //     url: 'url', 
            //     filePath: res.tempFilePath,
            //     name: 'file',
            //     header: { 'content-type': 'multipart/form-data' },
            //     success: function(res) {}
            // })
        });
    },
    //播放声音
    playAudio: function playAudio(e) {
        var _this = this;
        var rIdx = e.currentTarget.dataset.rIdx;
        var link = e.currentTarget.dataset.link;
        if (!link) {
            return;
        };
        innerAudioContext.autoplay = true;
        innerAudioContext.src = link;

        innerAudioContext.onPlay(function () {
            console.log('开始播放');
            _this.setData({ recording: _this.data.recordList[rIdx] });
        });
        innerAudioContext.onStop(function (res) {
            _this.setData({ recording: null });
        });
        innerAudioContext.onEnded(function () {
            _this.setData({ recording: null });
        });
        innerAudioContext.onPause(function () {
            _this.setData({ recording: null });
        });
    },
    // 暂停播放
    pauseAudio: function pauseAudio() {
        var _this = this;
        innerAudioContext.stop();
        _this.setData({ recording: null });
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