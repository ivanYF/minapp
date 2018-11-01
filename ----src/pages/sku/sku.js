// 获取全局应用程序实例对象
// const app = getApp()

// 创建页面实例对象
Page({
    /**
    * 页面的初始数据
    */
    data: {
        title: '规格选择',
        skus:[],
    },

    /**
    * 生命周期函数--监听页面加载
    */
    onLoad () {
        let skus = [
            {
                "id":"111222",
                "properties":[
                    {
                        "key":"规格分类",
                        "value":"去黑头芦荟胶",
                        "pic":"",
                        "originalPic":"",
                        "type":0
                    },
                    {
                        "key":"件数",
                        "value":"1件",
                        "pic":"",
                        "originalPic":"",
                        "type":0
                    }
                ],
                "stock":636,
                "stockDesc":"库存充足",
                "price":29,
                "type":0,
                "original":29,
                "preSaleDesc":"",
                "limitedNumber":0,
            },
            {
                "id":"222333",
                "properties":[
                    {
                        "key":"规格分类",
                        "value":"去黑头芦荟胶",
                        "pic":"",
                        "originalPic":"",
                        "type":0
                    },
                    {
                        "key":"件数",
                        "value":"2件",
                        "pic":"",
                        "originalPic":"",
                        "type":0
                    }
                ],
                "stock":869,
                "stockDesc":"库存充足",
                "price":58,
                "type":0,
                "original":58,
                "preSaleDesc":"",
                "limitedNumber":2,
            }
        ]
        this.setData({
            skus:skus
        })
    },

    /**
    * 生命周期函数--监听页面初次渲染完成
    */
    onReady () {
        
    },

    /**
    * 生命周期函数--监听页面显示
    */
    onShow () {
        
    },

    /**
    * 生命周期函数--监听页面隐藏
    */
    onHide () {
    
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
        
    }
})
