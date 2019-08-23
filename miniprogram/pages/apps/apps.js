// miniprogram/pages/apps/apps.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: 'apps',
    videoUrl: '',
    activeName: '0'
  },

  /**
   * tabbar路由跳转
   */
  onChange(event) {
    this.setData({
      active: event.detail
    })
    wx.redirectTo({
      url: '../' + event.detail + '/' + event.detail,
    })
    console.log(event.detail);
  },


  /**
   * 新闻跳转
   */
  onChange1(event) {
    this.setData({
      activeName: event.detail
    });
  },



  getVideoInfo(vedio) {
    if (!vedio) return
    var vid = vedio.substring(vedio.lastIndexOf('/') + 1, vedio.lastIndexOf('html') - 1);
    var that = this;
    var urlString = 'https://vv.video.qq.com/getinfo?otype=json&appver=3.2.19.333&platform=11&defnpayver=1&vid=' + vid;
    wx.request({
      url: urlString,
      success: function (res) {
        var dataJson = res.data.replace(/QZOutputJson=/, '') + "qwe";
        var data = JSON.parse(dataJson);
        var fileName = data['vl']['vi'][0]['fn'];
        var fvkey = data['vl']['vi'][0]['fvkey'];
        var host = data['vl']['vi'][0]['ul']['ui'][2]['url']
        that.setData({
          videoUrl: host + fileName + '?vkey=' + fvkey
        });
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    var vedio = "https://v.qq.com/x/page/v0336yczs4g.html";
    var vid = vedio.substring(vedio.lastIndexOf('/') + 1, vedio.lastIndexOf('html') - 1);
    var that = this;
    var urlString = 'https://vv.video.qq.com/getinfo?otype=json&appver=3.2.19.333&platform=11&defnpayver=1&vid=' + vid;
    wx.request({
      url: urlString,
      success: function (res) {
        var dataJson = res.data.replace(/QZOutputJson=/, '') + "qwe";
        var data = JSON.parse(dataJson);
        var fileName = data['vl']['vi'][0]['fn'];
        var fvkey = data['vl']['vi'][0]['fvkey'];
        var host = data['vl']['vi'][0]['ul']['ui'][2]['url']
        that.setData({
          videoUrl: host + fileName + '?vkey=' + fvkey
        });
      }
    })

    //  getVideoInfo("https://v.qq.com/x/page/v0336yczs4g.html");
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

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})