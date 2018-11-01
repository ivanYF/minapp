// 获取全局应用程序实例对象
const app = getApp()



// 创建页面实例对象
Page({
    /**
    * 页面的初始数据
    */
    data: {
        title: 'Index page',
        userInfo: {},
        curIndex:0,
        category:[
            {
                name:'推荐',
                id:1,
            },
            {
               name:'护肤',
                id:2, 
            },
            {
                name:'彩妆',
                id:3,
            },
            {
                name:'洗漱',
                id:4,
            },
            {
                name:'居家',
                id:5,
            },
            {
                name:'服饰',
                id:6,
            },
            {
                name:'包包',
                id:7,
            },
            {
                name:'化妆',
                id:8,
            },
            {
                name:'口红',
                id:9,
            },
            {
                name:'防晒',
                id:10,
            },
            {
                name:'书籍',
                id:11,
            },
        ],
        wWidth: 0,
        wHeight:0,
        scrollL: 0,
    },
    /**
    * 生命周期函数--监听页面加载
    */
    onLoad () {
        
        console.log('------------- index  onload ------ ')

        wx.showLoading({
            title:'index onload'
        })
    },
    /**
    * 生命周期函数--监听页面初次渲染完成
    */
    onReady () {
        console.log('------------- index  ready ------ ')
        setTimeout(function(){
            wx.hideLoading();
        },2000)
    },
    /**
    * 生命周期函数--监听页面显示
    */
    onShow (options) {
        let wData = wx.getSystemInfoSync();
        this.setData({ 
            wWidth:wData.windowWidth,
            wHeight:wData.windowHeight,
        })
    },
    switchCategory:function(e){
        let idx = e.currentTarget.dataset.index; // 获取点击元素的索引
        this.setData({curIndex:idx}) 
        let offsetL = e.target.offsetLeft; // 点击的item距离适口view左边界距离
        /**
         * 获取点击元素距离中心的偏移量
         * 滚动距离 = 偏移数值 - 视口／2 (稍微增加一些元素的中间数值)
         */
        let scrollL = offsetL - this.data.wWidth/2 + 20;
        scrollL = scrollL > 0 ? scrollL : 0;
        this.setData({ scrollL:scrollL }) 
    },
    scrollFun:function(e){
        // console.log(e);
    },
    /**
    * 生命周期函数--监听页面隐藏
    */
    onHide () {
        // console.log(' ---------- onHide ----------')
    },
    /**
    * 生命周期函数--监听页面卸载
    */
    onUnload () {
        // console.log(' ---------- onUnload ----------')
    },
    /**
    * 页面相关事件处理函数--监听用户下拉动作
    */
    onPullDownRefresh () {
        // console.log(' ---------- onPullDownRefresh ----------')
    }
})
