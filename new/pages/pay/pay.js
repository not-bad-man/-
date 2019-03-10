// pages/pay/pay.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bikenumber: 0,
    hour: 0,
    minute: 0,
    second: 0,
    operat: "正在计费",
    isDisabled: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      bikenumber: options.bikenumber || this.data.bikenumber
    })
    var h = 0,
        m = 0,
        s = 0;
    this.timer = setInterval(()=>{
      s++;
      if(s == 60){
        m ++;
        s = 0;
        if(m == 60){
          h ++;
          m = 0;
          if(h == 24){
            h = 0;
          }
        }
      }
      this.setData({
        hour: h,
        minute: m,
        second: s
      })
    }, 1000)

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
  
  },
  stop: function () {
    clearInterval(this.timer);
    this.timer = "";
    this.setData({
      operat: "本次骑行时间",
      isDisabled: true
    })
  },
  backToMap: function () {
    if(!this.timer){
      wx.redirectTo({
        url: "../logs/logs"
      })
    }else{
      wx.navigateTo({
        url: '../logs/logs?timer' + this.timer
      })
    }
    
  }
})