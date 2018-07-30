// 获取全局应用程序实例对象
// const app = getApp()

// 创建页面实例对象
Page({
    /**
    * 页面的初始数据
    */
    data: {
        current: {
            src: 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46',
            sliderMax: 0, // 音屏的长度
            audioStatus: 0, // 0未初始化  1 播放  2 暂停
            playTime:'00:00', // 时间格式 为 00:00
            curTime:0,
        },
    },
    onReady: function (e) {
        console.log("onReady ----------");
        // 使用 wx.createAudioContext 获取 audio 上下文 context
        this.audioCtx = wx.createAudioContext('myAudio');
        console.log(this.audioCtx);
    },
    onShow:function(){
        console.log("show------------");
    },

    audioTimeUpdated: function (e) {
        if(!this.data.current.sliderMax){
            wx.hideLoading();
            this.setData({
                ['current.sliderMax']:e.detail.duration
            })
        }
        /**
         * 实时获取当前audio 播放位置
         * 更新播放时间
         * 更新slide 进度
         */
        let currentTime = Math.floor(e.detail.currentTime);
        let playTime = (Math.floor(currentTime/60) < 10 ? '0' + Math.floor(currentTime/60) : Math.floor(currentTime/60)) + ':' + (currentTime%60 < 10 ? '0' + currentTime%60  : currentTime%60);
        
        this.setData({
            ['current.playTime']: playTime,
            ['current.curTime']:currentTime   
        })

    },
    sliderChange: function (e) {
        let time = e.detail.value;
        this.audioCtx.seek(time)
    },

    playAudio: function () {
        this.audioCtx.play();
        // 未初始化时 显示 loading
        if(!this.data.current.sliderMax){
            wx.showLoading({
                mask:true,
            })
        }
        this.setData({
            ['current.audioStatus']:1,
        })
    },
    pauseAudio: function () {
        this.audioCtx.pause();
        this.setData({
            ['current.audioStatus']: 2,
        })
    },
    /**
    * 生命周期函数--监听页面加载
    */
    onLoad () {
        // TODO: onLoad
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
