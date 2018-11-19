'use strict';

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
		mapScale: 16,
		city: '',
		showOpenSetting: false,
		markers: [{
			id: 1,
			latitude: 23.099994,
			longitude: 113.324520,
			name: 'T.I.T 创意园'
		}],
		covers: [{
			latitude: 23.099994,
			longitude: 113.344520
			// iconPath: '/image/location.png'
		}, {
			latitude: 23.099994,
			longitude: 113.304520
			// iconPath: '/image/location.png'
		}]
	},

	/**
  * 生命周期函数--监听页面加载
  */
	onLoad: function onLoad() {
		this.mapCtx = wx.createMapContext('myMap');
		this.mapCtx.moveToLocation();
	},


	/**
  * 生命周期函数--监听页面初次渲染完成
  */
	onReady: function onReady() {
		// TODO: onReady
	},


	/**
  * 生命周期函数--监听页面显示
  */
	onShow: function onShow() {
		var _this = this;
		_this.getLocation();
	},
	getLocation: function getLocation() {
		var _this = this;
		wx.getLocation({
			type: 'wgs84',
			success: function success(res) {
				if (res.latitude && res.longitude) {
					_this.getCity(res);
				} else {
					_this.setData({ showOpenSetting: true });
				}
			}
		});
	},
	getCity: function getCity(data) {
		var _this = this;
		var url = 'https://apis.map.qq.com/ws/geocoder/v1/?location=' + data.latitude + ',' + data.longitude + '&get_poi=0&key=ZNJBZ-EYYL6-HRQSI-MESUJ-TNSH7-6RBYK';
		wx.request({
			url: url,
			method: 'GET',
			success: function success(res) {
				console.log(res);
				if (res.data && res.data.result && res.data.result.address_component && res.data.result.address_component.city) {
					_this.setData({ city: res.data.result.address_component.city });
				}
			}
		});
	},
	openSetting: function openSetting() {
		var _this = this;
		_this.getLocation();
	},
	minuScale: function minuScale() {
		var scaleNub = this.data.mapScale;

		if (scaleNub >= 5) {
			--scaleNub;
			this.setData({
				mapScale: scaleNub
			});
		}
	},
	addScale: function addScale() {
		var scaleNub = this.data.mapScale;
		if (scaleNub <= 18) {
			++scaleNub;
			this.setData({
				mapScale: scaleNub
			});
		}
	},
	updateMsg: function updateMsg() {
		wx.showToast({
			title: '正在开发中，敬请期待',
			icon: 'none',
			duration: 2000
		});
	},
	updataLocation: function updataLocation() {
		this.getLocation();
		this.mapCtx.moveToLocation();
	},

	/**
  * 生命周期函数--监听页面隐藏
  */
	onHide: function onHide() {
		// TODO: onHide
	},


	/**
  * 生命周期函数--监听页面卸载
  */
	onUnload: function onUnload() {
		// TODO: onUnload
	},


	/**
  * 页面相关事件处理函数--监听用户下拉动作
  */
	onPullDownRefresh: function onPullDownRefresh() {
		// TODO: onPullDownRefresh
	}
});