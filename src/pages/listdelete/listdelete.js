// 获取全局应用程序实例对象
// const app = getApp()

// 创建页面实例对象
Page({
    /**
    * 页面的初始数据
    */
    data: {
        title: 'listdelete',
        items:[
            {
                id:1,
                val:'竖直导航模块'
            },
            {
                id:2,
                val:'录音操作模块'
            },
            {
                id:3,
                val:'瀑布流渲染模块'
            },
            {
                id:4,
                val:'三级地址选择模块'
            },
            {
                id:5,
                val:'当前地址位置解析模块'
            },
            {
                id:6,
                val:'上拉分屏模块模块，防抖动'
            }
        ],
        startX:0,
        startY:0,
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
    touchstart: function (e) {
        this.data.items.forEach(function (v, i) {
            // 把其他项目的删除按钮 隐藏掉 
            if (v.isTouchMove) v.isTouchMove = false;
        })
        console.log(e);
        console.log("============");
        this.setData({
            startX: e.changedTouches[0].clientX,
            startY: e.changedTouches[0].clientY,
            items: this.data.items
        })
    },
    // 角度小于 30 往左滑动 触发为 true  反之 false
    touchmove: function (e) {
        console.log("------");
        console.log(e);
        var _this = this,
            index = e.currentTarget.dataset.index,//当前索引
            startX = _this.data.startX,//开始X坐标
            startY = _this.data.startY,//开始Y坐标
            touchMoveX = e.changedTouches[0].clientX,//滑动变化坐标
            touchMoveY = e.changedTouches[0].clientY,//滑动变化坐标
            angle = _this.angle({ X: startX, Y: startY }, { X: touchMoveX, Y: touchMoveY }); //获取滑动角度

        // return 滑动超过30度角
        if (Math.abs(angle) > 30) return;
        _this.data.items.forEach(function (v, i) {
            if (i == index) {
                if (touchMoveX > startX){
                    v.isTouchMove = false
                }else{
                    v.isTouchMove = true
                }
            }
        })
        //更新数据
        _this.setData({ items: _this.data.items })
    },
    angle: function (start, end) {
        var _X = end.X - start.X,
            _Y = end.Y - start.Y;
        //返回角度 /Math.atan()返回数字的反正切值
        return 360 * Math.atan(_Y / _X) / (2 * Math.PI);
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
