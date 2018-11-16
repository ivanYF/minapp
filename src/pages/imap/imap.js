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
		mapScale:16,
		city:'',
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
		let _this = this;
		_this.getLocation();
	},
	getLocation(){
		let _this = this;
		console.log(1111)

		wx.getSetting({
      		success: (res) => {
        		console.log(res);
       			console.log(res.authSetting['scope.userLocation']);
        		if (res.authSetting['scope.userLocation'] != undefined && res.authSetting['scope.userLocation'] != true) {
          			wx.openSetting({
						success: function (data) {
							console.log(data);
							if (data.authSetting["scope.userLocation"] == true) {
								wx.showToast({
									title: '授权成功',
									icon: 'success',
									duration: 5000
								})
							}else{
								wx.showToast({
									title: '授权失败',
									icon: 'success',
									duration: 5000
								})
							}
						}
					})
        		} else if (res.authSetting['scope.userLocation'] == undefined) {//初始化进入
          			
        		}
      		}
    	})



		// wx.getLocation({
		// 	type: 'wgs84',
		// 	success (res) {
		// 		_this.getCity(res);
		// 	}
		// })
	},
	getCity(data){
		let _this = this;
		let url = `https://apis.map.qq.com/ws/geocoder/v1/?location=${data.latitude},${data.longitude}&get_poi=0&key=ZNJBZ-EYYL6-HRQSI-MESUJ-TNSH7-6RBYK`;
		wx.request({
			url: url,
			method:'GET',
			success (res) {
				console.log(res)
				if(res.data && res.data.result && res.data.result.address_component && res.data.result.address_component.city){
					_this.setData({ city:res.data.result.address_component.city })
				}
			}
		})
	},
	minuScale(){
		let scaleNub = this.data.mapScale;
	
		if(scaleNub >= 5){
			--scaleNub;
			this.setData({
				mapScale:scaleNub
			})
		}
	},
	addScale(){
		let scaleNub = this.data.mapScale;
		if(scaleNub <= 18){
			++scaleNub;
			this.setData({
				mapScale:scaleNub
			})
		}
	},
	updateMsg(){
		wx.showToast({
			title: '正在开发中，敬请期待',
			icon: 'none',
			duration: 2000
		})
	},
	updataLocation(){
		this.getLocation();
		this.mapCtx.moveToLocation();
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
