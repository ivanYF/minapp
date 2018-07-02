// 获取全局应用程序实例对象
// const app = getApp()

// mock
const msgList = [
    {
        id: 1,
        text: '我如果爱你'
    },
    {
        id: 2,
        text: '绝不像攀援的凌霄花'
    },
    {
        id: 3,
        text: '借你的高枝炫耀自己'
    },
    {
        id: 4,
        text: '我如果爱你'
    },
    {
        id: 5,
        text: '绝不学痴情的鸟儿'
    },
    {
        id: 6,
        text: '为绿荫重复单调的歌曲'
    },
    {
        id: 7,
        text: '也不止像泉源'
    },
    {
        id: 8,
        text: '常年送来清凉的慰藉'
    },
    {
        id: 9,
        text: '也不止像险峰'
    },
    {
        id: 10,
        text: '增加你的高度，衬托你的威仪'
    },
    {
        id: 11,
        text: '甚至日光，甚至春雨'
    },
    {
        id: 12,
        text: '我如果爱你'
    },
    {
        id: 13,
        text: '绝不像攀援的凌霄花'
    },
    {
        id: 14,
        text: '借你的高枝炫耀自己'
    },
    {
        id: 15,
        text: '我如果爱你'
    },
    {
        id: 16,
        text: '绝不学痴情的鸟儿'
    },
    {
        id: 17,
        text: '为绿荫重复单调的歌曲'
    },
    {
        id: 18,
        text: '也不止像泉源'
    },
    {
        id: 19,
        text: '常年送来清凉的慰藉'
    },
    {
        id: 20,
        text: '也不止像险峰'
    },
    {
        id: 21,
        text: '增加你的高度，衬托你的威仪'
    },
    {
        id: 22,
        text: '甚至日光，甚至春雨'
    },
]
// 创建页面实例对象
Page({
    /**
     * 页面的初始数据
     */
    data: {
        title: '上拉加载',
        lowerBottom: '50px',  // 距离底部 50 出发 lower
        itemList: [],
        scrollTop:0,
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
    upper:function(){
        console.log("滚动到顶部");
    },

    lower:function(){
        console.log("滚动到底部");
        var list = this.data.itemList;
        var newList = [
            {
                id:111,
                text:'我是新增加的内容'
            },
            {
                id:111,
                text:'我是新增加的内容'
            },
            {
                id:111,
                text:'我是新增加的内容'
            },
            {
                id:111,
                text:'我是新增加的内容'
            },
            {
                id:111,
                text:'我是新增加的内容'
            },
            {
                id:111,
                text:'我是新增加的内容'
            },
            {
                id:111,
                text:'我是新增加的内容'
            },
            {
                id:111,
                text:'我是新增加的内容'
            },
            {
                id:111,
                text:'我是新增加的内容'
            },
            {
                id:111,
                text:'我是新增加的内容'
            },
            {
                id:111,
                text:'我是新增加的内容'
            },
            {
                id:111,
                text:'我是新增加的内容'
            },
        ]
        list = newList.concat(list);
        this.setData({ itemList:list })
    },
    scroll:function(){

    },
    /**
     * 生命周期函数--监听页面显示
     */
    onShow () {
        // TODO: onShow
        var _this = this;
        this.setData({ itemList:msgList})
        setTimeout(function(){
            _this.setData({ scrollTop:0 }) //滚动到顶部
        },200)
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
