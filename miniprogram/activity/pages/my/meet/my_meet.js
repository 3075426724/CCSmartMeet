const ccminiPageHelper = require('../../../helper/ccmini_page_helper.js');
const PassportBiz = require('../../../biz/passport_biz.js');
const ccminiCloudHelper = require('../../../helper/ccmini_cloud_helper.js');

Page({

	/**
	 * 页面的初始数据
	 */
	data: {

	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: async function (options) {
		await PassportBiz.initPage(this);  
		if (!await PassportBiz.loginMustReturnWin(this)) return;
	},

	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady: function () {

	},

	/**
	 * 生命周期函数--监听页面显示
	 */
	onShow: function () {

	},

	/**
	 * 生命周期函数--监听页面隐藏
	 */
	onHide: function () {

	},

	/**
	 * 生命周期函数--监听页面卸载
	 */
	onUnload: function () {

	},

	url: async function (e) {
		ccminiPageHelper.url(e);
	},

	myCommListListener: function (e) {
		ccminiPageHelper.commListListener(this, e);
	},

	bindDelTap: function (e) {
		let that = this;
		let callback = async function () {
			let id = e.currentTarget.dataset.id;
			if (!id) return;
			await ccminiCloudHelper.callCloudSumbit('meet/del', {
				id
			}).then(res => {
				ccminiPageHelper.delListNode(id, that.data.dataList.list);
				that.setData({
					dataList: that.data.dataList
				});
			}).catch(err => {});
		}

		ccminiPageHelper.showConfirm('您确认删除？删除后不可恢复', callback);
	}
})