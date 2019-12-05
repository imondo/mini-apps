// components/stcky/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    zIndex: {
      type: Number,
      value: 99
    },
    offsetTop: {
      type: Number,
      value: 0
    },
    disabled: {
      type: Boolean,
      value: false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    fixed: false,
    wrapStyle: '',
    containerStyle: ''
  },

  ready() {
    this.observerContentScroll();
  },

  detached() {
    this.createIntersectionObserver().disconnect();
  },

  /**
   * 组件的方法列表
   */
  methods: {
    setStyle() {
      const { offsetTop, height, fixed, zIndex } = this.data;

      if (fixed) {
        this.setData({
          wrapStyle: `top: ${offsetTop}px;`,
          containerStyle: `height: ${height}px; z-index: ${zIndex};`
        });
      } else {
        this.setData({
          wrapStyle: "",
          containerStyle: ""
        });
      }
    },
    observerContentScroll() {
      const { offsetTop } = this.data;
      this.createIntersectionObserver().disconnect();
      this.createIntersectionObserver()
        .relativeToViewport({ top: -offsetTop })
        .observe(".stcky-wrapper", res => {
          if (this.data.disabled) {
            return;
          }
          const { top, height } = res.boundingClientRect;
          const fixed = res.intersectionRatio > 0 ? '' : 'top';
          this.triggerEvent("scroll", {
            scrollTop: top,
            isFixed: fixed
          });

          this.setData({ fixed, height });

          wx.nextTick(() => {
            this.setStyle();
          });
        });
    }
  }
});
