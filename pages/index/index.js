Page({

  /**
   * 页面的初始数据
   */
  data: {
    region:['广东省','广州市','白云区'],
    // value是一个数组类型的值
    id:0,
    now:{
      temp:0,
      cond_txt:'未知',
      icon:'999',
      humidity:0,
      pressure:0,
      vis:0,
      windDir:0,
      windSpeed:0,
      windScale:0
    },
  },
regionChange:function(e){
  this.setData({region:e.detail.value});
  this.getweather();//更新天气
},

// 获取实况天气数据
getweather:function(){
  var that = this;//var也是定义一个变量，相比于let是全局变量。that=this，是因为this不能在网络请求（wxAPI）使用。
  wx.request({//request的作用是向服务器请求数据
    url:'https://geoapi.qweather.com/v2/city/lookup?',//从哪个服务器获取数据
    data:{//data表示向服务器传送的数据
      location:that.data.region[1], //region[1]代表的是"市"
      key:'742d7cbcc68048d39c12014f98edfc5d',
    },
    success:function(res){//成功的话，让信息出现在控制台上（回调函数，res中包含了服务器返回的数据）
      that.id = res.data.location[0].id;//将省份的id赋值过来
    }
  })
  wx.request({
    url:'https://devapi.qweather.com/v7/weather/now?',
    data:{
      location:that.id, //省份的id
      key:'742d7cbcc68048d39c12014f98edfc5d'
    },
    success:function(res){
      //console.log(res.data); //在控制台输出返回值
      that.setData({now:res.data.now})//修改now的值
    }
  })
},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getweather();
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