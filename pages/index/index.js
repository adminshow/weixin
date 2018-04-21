//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      '/static/img4.jpg',
      '/static/img3.jpg',
      '/static/img2.jpg'
    ],
    indicatorDots: false,
    autoplay: true,
    loop: true,
    interval: 3000,
    duration: 3000,
    list: [
      {
        "icon": "iconfont icon-cart",
        "text": "励步商店",
        "id": 0
      },
      {
        "icon": "iconfont icon-daifukuan",
        "text": "电子发票",
        "id": 1
      },
      {
        "icon": "iconfont icon-daishouhuo",
        "text": "GESE证书查询",
        "id": 2
      },
      {
        "icon": "iconfont icon-shezhi",
        "text": "教室直播",
        "id": 3
      },
      {
        "icon": "iconfont icon-wodedingdan",
        "text": "自助转校",
        "id": 4
      },
      {
        "icon": "iconfont icon-arrowleft",
        "text": "自助退费",
        "id": 5
      },
      {
        "icon": "iconfont icon-mine",
        "text": "合同查询",
        "id": 6
      },
      {
        "icon": "iconfont icon-sousuo",
        "text": "更多应用",
        "id": 7
      }
    ],
    index: 0
  },
  //事件处理函数
  onLoad: function () {
    wx.navigateTo({
      url: '../login/login',
    })
  },
  tabClick(e) {
    if(e.currentTarget.id == 1 ) {
      wx.navigateTo({
       url: '../invoice/invoice',
     })
    }
  }
})
