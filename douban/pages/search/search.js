// pages/search/search.js
var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  backToInit () {
    wx.navigateBack({
      url: "../init/init"
    })
  },

  searchMovie (e) {
    var value = e.detail.value;
    wx.request({
      // url: app.globalData.doubanBase + app.globalData.searchURL + value,
      url: app.globalData.doubanBase + app.globalData.searchURL + value,
      method: "GET",
      header: {'content-type': 'application/xml'},
      success: (res) => {
        console.log(res)
        this.arrangeData (res.data.subjects);
      },
      fail: function (err) {
        console.log(err)
      }
    })
  },
  arrangeData (arr) {
    var newArr = [];
    arr.forEach(item => {
      var dirs = item.directors.map(i => i.name).join("/");
      var desc = item.rating.average + "分/" + item.year + "/" + dirs
      newArr.push({
        title: item.title,
        image: item.images.small,
        desc,
        id: item.id
      })
    })
    this.setData({newArr})
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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