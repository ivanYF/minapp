'use strict';

// 获取全局应用程序实例对象
// const app = getApp()

// 创建页面实例对象
Page({
	/**
  * 页面的初始数据
  */
	data: {
		title: 'reply',
		inputFocus: false

	},

	/**
  * 生命周期函数--监听页面加载
  */
	onLoad: function onLoad() {
		// TODO: onLoad
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

		var pages = getCurrentPages();
		var prevPage = pages[pages.length - 2];
		console.log(pages);
		console.log(prevPage);
		prevPage.onLoad();
		// wx.navigateBack({
		// 	delta: 1
		// })
		// TODO: onShow
	},
	focusReply: function focusReply() {
		this.setData({ inputFocus: true });
	},
	blurReply: function blurReply() {
		this.setData({ inputFocus: false });
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