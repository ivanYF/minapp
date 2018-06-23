'use strict';

// 获取全局应用程序实例对象
// const app = getApp()

// 创建页面实例对象
Page({
    /**
    * 页面的初始数据
    */
    data: {
        title: 'waterfall',
        loadImgSrcList: '', // 预加载 src
        flData: {
            fHeight: 0, // 左边容器的高度
            imgList: [] // 左边容器的图片集合
        },
        frData: {
            fHeight: 0, // 右边容器的高度
            imgList: [] // 右边容器的图片集合
        },
        screenWidth: 0, // 屏幕宽度
        paddingWidth: 20, // 图片左右边距
        imgWidth: 0 // 图片的实际宽度
    },

    /**
    * 生命周期函数--监听页面加载
    */
    onLoad: function onLoad() {
        // 获取屏幕宽度
        var screenData = wx.getSystemInfoSync();
        var imgWidth = screenData.screenWidth / 2 - 20;
        this.setData({
            screenWidth: screenData.screenWidth,
            imgWidth: imgWidth
        });
        this.getImgList();
    },


    /**
    * 生命周期函数--监听页面初次渲染完成
    */
    onReady: function onReady() {},


    /**
    * 生命周期函数--监听页面显示
    */
    onShow: function onShow() {},


    imgOnLoad: function imgOnLoad(e) {
        console.log("222222");
        console.log(e);
        var _this = this;
        var link = e.currentTarget.dataset.link;
        var imgWidth = _this.data.imgWidth;
        var realWidth = e.detail.width;
        var realHeight = e.detail.height;

        // 计算 imgHeight
        var imgHeight = imgWidth / realWidth * realHeight;

        var flData = _this.data.flData;
        var frData = _this.data.frData;

        console.log(flData.fHeight);
        console.log(frData.fHeight);

        // return
        // 对比左右轨道
        if (flData.fHeight <= frData.fHeight) {
            // 加入右边
            flData.imgList.push(link);
            flData.fHeight = flData.fHeight + imgHeight;

            _this.setData({ flData: flData });
        } else {
            // 加入左边
            frData.imgList.push(link);
            frData.fHeight = frData.fHeight + imgHeight;

            _this.setData({ frData: frData });
        }
    },
    /**
     * [getImgList 获取图片数据]
     * @return {[type]} [description]
     */
    getImgList: function getImgList() {
        var _this = this;
        var imgList = ['../../images/pbl/timg1.jpeg', '../../images/pbl/timg2.jpeg', '../../images/pbl/timg3.jpeg', '../../images/pbl/timg4.jpeg', '../../images/pbl/timg5.jpeg', '../../images/pbl/timg6.jpeg', '../../images/pbl/timg3.jpeg', '../../images/pbl/timg4.jpeg', '../../images/pbl/timg2.jpeg', '../../images/pbl/timg6.jpeg', '../../images/pbl/timg1.jpeg', '../../images/pbl/timg5.jpeg'];

        var newImgList = [];
        if (_this.data.loadImgSrcList.length) {
            newImgList = newImgList.concat(imgList);
        } else {
            newImgList = imgList;
        }
        _this.setData({ loadImgSrcList: newImgList });
    },
    /**
    * 生命周期函数--监听页面隐藏
    */
    onHide: function onHide() {},


    /**
    * 生命周期函数--监听页面卸载
    */
    onUnload: function onUnload() {},


    /**
    * 页面相关事件处理函数--监听用户下拉动作
    */
    onPullDownRefresh: function onPullDownRefresh() {}
});