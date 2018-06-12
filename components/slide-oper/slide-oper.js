Component({ 
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },

  properties: {
    index: {
      type: Number,
      value: -2
    }
  },
  
  data: {
    countIndex: -1,
    confimIndex: -1,
    isDelate: false,
    isConfim: false,
    clientX: 0
  },
  
  methods: {
    touchStart: function (e) {
      let clientX = e.touches[0].clientX;
      this.setData({ clientX });
    },
    touchMove: function (e) {
      let moveX = e.touches[0].clientX;
      let x = moveX - this.data.clientX;
      let _index = e.target.dataset.index;
      // left
      if (x <= -40) {
        this.setData({
          countIndex: _index,
          confimIndex: -1
        });
      }
      // right
      if (x > 40) {
        this.setData({
          countIndex: -1,
          confimIndex: -1
        });
      }
    },
    deleteConfim: function (e) {
      let _index = e.target.dataset.index;
      this.setData({
        confimIndex: _index
      });
    },
    handleDelete: function (e) {
      // this.$emit('handleDel');
    }
  }
})
