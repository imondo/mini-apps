Component({  
  properties: {
    visibleHeight: { // 弹出层高度
      type: Number,
      value: 400
    },
    isHidden: { // 是否显示遮罩
      type: Boolean,
      value: false
    }, 
    status: { // 弹出层显示 0 不显示 1 显示
      type: Number,
      value: 0,
      observer: function (newV, oldV) {
        if (newV) {
          this.showModal();
        }
      }
    }
  },
  
  methods: {
    showModal: function () {
      // 显示遮罩层
      let animation = wx.createAnimation({
        duration: 200,
        timingFunction: "linear",
        delay: 0
      })
      this.animation = animation
      animation.translateY(1000).step()
      this.setData({
        animationData: animation.export(),
        showModalStatus: true
      })
      setTimeout(function () {
        animation.translateY(0).step()
        this.setData({
          animationData: animation
        })
      }.bind(this), 200)
    },
    
    hideModal: function () {
      // 隐藏遮罩层
      let animation = wx.createAnimation({
        duration: 200,
        timingFunction: "linear",
        delay: 0
      })
      this.animation = animation
      animation.translateY(1000).step()
      this.setData({
        animationData: animation.export(),
      })
      setTimeout(function () {
        animation.translateY(0).step()
        this.setData({
          animationData: animation.export(),
          showModalStatus: false
        })
      }.bind(this), 200)

      this.setData({
        status: 0
      })
    }
  }
})