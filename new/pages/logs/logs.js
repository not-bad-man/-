

// pages/logs/logs.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    latitude: 0,
    longitude: 0,
    // controls: 
  },
  bindcontroltap: function (e){
    switch(e.controlId){
      case 1: {
        this.movetoCenter();
        break;
      }
      case 2: {
        if(this.timer){
          wx.navigateBack({
            delta: 1
          })
        }else{
          wx.scanCode({
            success: function () {
              wx.showLoading({
                title: '正在获取信息',
              })
              console.log("success");
              wx.request({
                url: 'https://www.easy-mock.com/mock/5b3b2dcb82cc9e3c70a7b525/demo/getInf',
                success: function (res) {
                  console.log(res);
                  wx.hideLoading();
                }
              })
            },
            fail: function () {
              wx.request({
                url: 'https://www.easy-mock.com/mock/5b3b2dcb82cc9e3c70a7b525/demo/getInf',
                success: function (res) {
                  console.log(res.data.data);
                  wx.redirectTo({
                    url: '../password/password?password=1234',
                    success: function () {
                      wx.showToast({
                        title: '获取成功',
                        duration: 1000
                      })
                    }
                  })
                }
              })
            }
          })
        }
        break; 
      }
      case 3:{
        wx.navigateTo({
          url: '../warn/warn',
        })
        break;
      }
      case 4:{
        wx.navigateTo({
          url: "../wallet/wallet"
        })
        break;
      }
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.timer = options.timer;
    var _this = this;
    wx.getLocation({
      success: function(res) {
        _this.setData({latitude: res.latitude, longitude: res.longitude})
      },
    }),
    wx.getSystemInfo({
      success: function(res) {
        _this.setData({
          controls:[{
            id: 1,
            iconPath: "/images/location.png",
            position: {
              width: 50,
              height: 50,
              left: 20,
              top: res.windowHeight - 80
            },
            clickable: true
          },{
            id: 2,
            iconPath: "/images/use.png",
            position: {
              width: 90,
              height: 90,
              left: res.windowWidth/2 - 45,
              top: res.windowHeight - 100
            },
            clickable: true
          },{
            id: 3,
            iconPath: "/images/warn.png",
            position: {
              height: 50,
              width: 50,
              top: res.windowHeight - 80,
              left: res.windowWidth - 70
            },
            clickable: true
          },{
            id: 4,
            iconPath: "/images/avatar.png",
            position: {
              width: 50,
              height: 50,
              left: res.windowWidth - 70,
              top: res.windowHeight - 155
            },
            clickable: true
          },{
            id: 5,
            iconPath: "/images/marker.png",
            position: {
              width: 30,
              height: 50,
              top: res.windowHeight / 2 - 45,
              left: res.windowWidth / 2 - 15
            },
            clickable: true
          }]
        })
      },
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // console.log("I am rendering")
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    // console.log("It is time to show")
    this.mapctx = wx.createMapContext('ofo-map');
    this.movetoCenter();
  },
  movetoCenter: function () {
    this.mapctx.moveToLocation();
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    // console.log("I am hidding")
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
  onTabItemTap: function (item) {
    // console.log(item)
  },
  
})