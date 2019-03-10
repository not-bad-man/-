// pages/land/land.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInf: {
      userUrl: "",
      userName: "未登录"
    },
    actionText: "登录",
    btnType: "primary"
  },  
  land: function () {
    if(this.data.actionText == "登录"){
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: (res) => {
              console.log(res.userInfo.avatarUrl, res.userInfo.nickName);
              this.setData({
                userInf:{
                  userUrl: res.userInfo.avatarUrl,
                  userName: res.userInfo.nickName
                },
                actionText: "退出登录",
                btnType: "warn"
              });
              wx.setStorage({
                key: 'userInf',
                data: {
                  userInf: {
                    userUrl: res.userInfo.avatarUrl,
                    userName: res.userInfo.nickName
                  }
                },
              })
            }
          });
        }
      })
    }else if(this.data.actionText == "退出登录"){
      this.setData({
        userInf: {
          userUrl: "",
          userName: "未登录"
        },
        actionText: "登录",
        btnType: "primary"
      });
      // wx.clearStorage();
      wx.removeStorageSync("userInf");
    }
  },
  toWallet: function () {
    wx.redirectTo({
      url: '../wallet/wallet',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getStorage({
      key: 'userInf',
      success: (res) => {
        console.log(res);
        this.setData({
          userInf: {
            userUrl: res.data.userInf.userUrl,
            userName: res.data.userInf.userName
          },
          actionText: "退出登录",
          btnType: "warn"
        })
      },
    })
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