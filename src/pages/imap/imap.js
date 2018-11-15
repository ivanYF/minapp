// 获取全局应用程序实例对象
// const app = getApp()

// 创建页面实例对象
Page({
	/**
	 * 页面的初始数据
	 */
	data: {
		title: 'imap',
		latitude: 23.099994,
    	longitude: 113.324520,
		markers: [{
			id: 1,
			latitude: 23.099994,
			longitude: 113.324520,
			name: 'T.I.T 创意园'
		}],
		covers: [{
			latitude: 23.099994,
			longitude: 113.344520,
			// iconPath: '/image/location.png'
			}, {
			latitude: 23.099994,
			longitude: 113.304520,
			// iconPath: '/image/location.png'
		}]
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad () {
		this.mapCtx = wx.createMapContext('myMap');
		this.mapCtx.moveToLocation()
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
