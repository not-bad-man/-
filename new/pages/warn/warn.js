// pages/warn/warn.js

// var dataList = require("../../data/data.js");


Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputValue: {
      value: "",
      num: 0
    },
    checkboxValue:[],
    picUrls:[],
    message: [{
      value: "私锁私用",
      checked: false,
      color: "#b9dd08"
    },{
      value: "车牌缺损",
      checked: false,
      color: "#b9dd08"
    },{
      value: "轮胎坏了",
      checked: false,
      color: "#b9dd08"
    },{
      value: "车锁坏了",
      checked: false,
      color: "#b9dd08"
    },{
      value: "违规乱停",
      checked: false,
      color: "#b9dd08"
    },{
      value: "密码不对",
      checked: false,
      color: "#b9dd08"
    },{
      value: "刹车坏了",
      checked: false,
      color: "#b9dd08"
    }, {
      value: "其他故障",
      checked: false,
      color: "#b9dd08"
    }],
    btnColor: "#f2f2f2",
    action: "拍摄/相册"
    
  },
  getInf:function (e) {
    var value = e.detail.value;
    if(value.length == 0){
      this.setData({
        btnColor: "#f2f2f2",
        checkboxValue: []
      })
    }else{
      this.setData({
        btnColor: "#b9dd08",
        checkboxValue: value
      })
    }

  },
  clickPhoto: function () {
    wx.chooseImage({
      success: (res) => {
        this.data.picUrls = this.data.picUrls.concat(res.tempFilePaths);
        this.setData({
          picUrls: this.data.picUrls,
          action: "+"
        })
      },
    })
  },
  cancel: function (e) {
    let index = e.target.dataset.index;
    let _picUrls = this.data.picUrls;
    _picUrls.splice(index, 1);
    this.setData({
      picUrls: _picUrls
    })
    if(_picUrls.length == 0){
      this.setData({
        action: "拍摄/相册"
      })
    }
  },
  changeNumber: function (e) {
    this.setData({
      inputValue: {
        num: e.detail.value,
        value: this.data.inputValue.value
      }
    })
    console.log(this.data.inputValue)
  },
  changeDesc: function (e) {
    this.setData({
      inputValue: {
        num: this.data.inputValue.num,
        value: e.detail.value
      }
    })
    console.log(this.data.inputValue)    
  },
  submit: function () {
    if(this.data.picUrls.length > 0 &&
      this.data.checkboxValue.length > 0){
        // console.log("success")
        wx.request({
          method: "GET",
          url: 'https://www.easy-mock.com/mock/5b3b34d874ad6a439a01991b/demo1/submit',
          success: (res) => {
            var data = res.data.data.msg;
            wx.showToast({
              title: data,
              icon: "success",
              duration: 2000
            })
          }
        })
      }else{
        // console.log("NO")
        wx.showModal({
          title: '请填写故障类型',
          content: '赶紧填',
          confirmText: "我填",
          cancelText: "老子不填",
          success: (res) => {
            console.log(res);
            if(res.confirm){

            }else if(res.cancel){
              wx.redirectTo({
                url: '../logs/logs',
              })
            }
          }
        })
      }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(dataList)
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