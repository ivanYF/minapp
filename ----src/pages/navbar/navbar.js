// 获取全局应用程序实例对象
// const app = getApp()

// 创建页面实例对象
Page({
  /**
   * 页面的初始数据
   */
    data: {
        title: 'navbar',
        curIndex:0,
        category:[
            {
                name:'推荐',
                id:1,
            },
            {
               name:'护肤品',
                id:2, 
            },
            {
                name:'彩妆',
                id:3,
            },
            {
                name:'洗漱品',
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
            {
                name:'推荐',
                id:12,
            },
            {
               name:'护肤品',
                id:13, 
            },
            {
                name:'彩妆',
                id:14,
            },
            {
                name:'居家',
                id:15,
            },
            {
                name:'服饰',
                id:16,
            },
            {
                name:'包包',
                id:17,
            },
            {
                name:'化妆',
                id:18,
            },
            {
                name:'口红',
                id:19,
            },
            {
                name:'防晒',
                id:20,
            },
            {
                name:'书籍',
                id:21,
            },
        ],
        wHeight:0,
        scrollT: 0,
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
        let wData = wx.getSystemInfoSync();
        this.setData({ 
            wHeight:wData.windowHeight,
        })
    },
    switchCategory:function(e){
        console.log(e);
        let idx = e.currentTarget.dataset.index; // 获取点击元素的索引
        this.setData({curIndex:idx}) 
        let offsetT = e.target.offsetTop; // 点击的item距离适口view左边界距离
        /**
         * 获取点击元素距离中心的偏移量
         * 滚动距离 = 偏移数值 - 视口／2 (稍微增加一些元素的中间数值)
         */
        let scrollT = offsetT - this.data.wHeight/2 + 40;
        console.log(scrollT);
        scrollT = scrollT > 0 ? scrollT : 0;
        this.setData({ scrollT:scrollT }) 
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
