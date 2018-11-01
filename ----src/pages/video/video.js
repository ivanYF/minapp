// 获取全局应用程序实例对象
// const app = getApp()

let videoContext = '';
// 创建页面实例对象
Page({
    /**
    * 页面的初始数据
    */
    data: {
        title: 'video',
        showVideo:false,
    },

    /**
    * 生命周期函数--监听页面加载
    */
    onLoad () {
    // TODO: onLoad
    },

    /**
    * 生命周期函数--监听页面初次渲染完成
    */
    onReady () {
    // TODO: onReady
    },
    showVideo:function(e){
        videoContext = wx.createVideoContext('myVideo');
        console.log(videoContext);
        videoContext.requestFullScreen();
        videoContext.play();
        this.setData({showVideo:true})
    },
    videoEnd:function(){
        videoContext.exitFullScreen();
        console.log("2121212");
        this.setData({showVideo:false})  
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
