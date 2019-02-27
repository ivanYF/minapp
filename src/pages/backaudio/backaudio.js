// 获取全局应用程序实例对象
// const app = getApp()
let bgMusic = wx.getBackgroundAudioManager();
// 创建页面实例对象
Page({
  /**
   * 页面的初始数据
   */
  data: {
    title: 'backaudio'
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

  /**
   * 生命周期函数--监听页面显示
   */
  onShow () {
    // TODO: onShow
  },
  audioPlay(){
	  console.log('play')
	  bgMusic.title= "测试";
        bgMusic.desc = "描述";
    	bgMusic.singer = "阿龙";
	  bgMusic.src = "https://wx.files.weiliangyuan.cn/audio/20180809112034FJI7IEvRThpz7cd4scDu3lSPbgyLXkIk.mp3";
	  bgMusic.onTimeUpdate(()=>{
		console.log('------' + bgMusic.currentTime)
	  })
	  bgMusic.play();
  },
  audioPause(){	
	  console.log('pause')
	  bgMusic.pause();
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
