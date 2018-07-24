// 获取全局应用程序实例对象
// const app = getApp()

// 创建页面实例对象
Page({
    /**
    * 页面的初始数据
    */
    data: {
        current: {
            poster: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000',
            name: '此时此刻',
            author: '许巍',
            src: 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46',
        },
        audioAction: {
            method: 'pause'
        }
    },
    onReady: function (e) {
        // 使用 wx.createAudioContext 获取 audio 上下文 context
        this.audioCtx = wx.createAudioContext('myAudio');
        console.log(this.audioCtx);
    },
    audioPlayed: function (e) {
        console.log('audio is played')
    },
    audioTimeUpdated: function (e) {
        console.log(e);
        this.duration = e.detail.duration;
    },
    timeSliderChanged: function (e) {
        console.log(e);
        if (!this.duration)return;
        var time = this.duration * e.detail.value / 100;
        this.setData({
            audioAction: {
                method: 'setCurrentTime',
                data: time
            }
        });
    },
    playbackRateSliderChanged: function (e) {
        this.setData({
            audioAction: {
                method: 'setPlaybackRate',
                data: e.detail.value
            }
        })
    },

    playAudio: function () {
        this.setData({
            audioAction: {
            method: 'play'
        }
    });
    },
    pauseAudio: function () {
        this.setData({
            audioAction: {
                method: 'pause'
            }
        });
    },
    /**
    * 生命周期函数--监听页面加载
    */
    onLoad () {
        // TODO: onLoad
    },


    /**
    * 生命周期函数--监听页面显示
    */
    onShow () {
    // TODO: onShow
    },

    /**
    * 生命周期函数--监听页面隐藏
    */
    onHide () {
    // TODO: onHide
    },

    /**
    * 生命周期函数--监听页面卸载
    */
    onUnload () {
    // TODO: onUnload
    },

    /**
    * 页面相关事件处理函数--监听用户下拉动作
    */
    onPullDownRefresh () {
    // TODO: onPullDownRefresh
    }
})
