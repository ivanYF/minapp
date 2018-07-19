// 获取全局应用程序实例对象
// const app = getApp()

// 创建页面实例对象
Page({
    /**
    * 页面的初始数据
    */
    data: {
        title: 'fixnav',
        category:[
            [{
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
            }],
            [{
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
            }],
            [{
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
            }],
            [{
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
            {
                name:'推荐',
                id:22,
            },
            {
               name:'护肤品',
                id:23, 
            },
            {
                name:'彩妆',
                id:24,
            }]
        ],
        popList:[],
        navBottom:0,
        showPopNav:false,
        activeId:1,
        hidePop:false,
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
        var popList = [];
        this.data.category.forEach(function(pList,idx){
            if (pList && pList.length) {
                pList.forEach(function(pItem,pidx){
                    popList.push(pItem)
                })
            };
        })
        this.setData({ popList:popList })
    },

    /**
    * 生命周期函数--监听页面显示
    */
    onShow () {
        var _this = this;
        wx.createSelectorQuery().selectAll('#navBar').boundingClientRect(function(rects){
            if (rects && rects[0] && rects[0].bottom) {
                _this.setData({ navBottom:rects[0].bottom })
            };
        }).exec()
    },
    viewScroll:function(e){
        var offsetTop = e.detail.scrollTop;

        if (offsetTop >= this.data.navBottom && !this.data.showPopNav) {
            this.setData({ showPopNav:true })
            console.log("显示11111111");
        }
        if (offsetTop < this.data.navBottom && this.data.showPopNav){
            this.setData({ showPopNav:false })
            console.log("隐藏2222222");
        }

        if (offsetTop < this.data.navBottom){
            this.setData({ hidePop: true})
        }else{
            this.setData({ hidePop: false})
        }
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
