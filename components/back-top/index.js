// components/back-top/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    offsetTop: {
      type: Number,
      value: 100
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    fixed: false
  },

  ready() {
    console.log(wx.createSelectorQuery().select('page'));
    this.observerContentScroll();
  },

  detached() {
    this.createIntersectionObserver().disconnect();
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleClick() {
      wx.pageScrollTo({
        scrollTop: 0,
        duration: 300
      });
    },
    observerContentScroll() {
      const { offsetTop } = this.data;
      this.createIntersectionObserver().disconnect();
      this.createIntersectionObserver({
        thresholds: [0, 1]
      })
        .relativeToViewport({ top: -offsetTop })
        .observe(".back-top", res => {
          console.log(res);
          const { top } = res.boundingClientRect;
          const fixed = top >= offsetTop;
          console.log(fixed, top, offsetTop);
          // this.setData({ fixed });
        });
    }
  }
})
