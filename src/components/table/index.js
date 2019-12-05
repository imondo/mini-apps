const app = getApp();

Component({
	options: {
		addGlobalClass: true
	},
	properties: {
		data: {
			type: Array,
			value: []
		},
		columns: {
			type: Array,
			value: []
		},
		stickyTop: {
			type: Number,
			value: 0
		},
		loading: {
			type: Boolean,
			value: false
		}
	},

	data: {
		tableWidth: 'auto',
		configList: []
	},

	attached() {
		this.init();
	},

	observers: {
		columns(val) {
			this.setColumnsWidth(val);
		},
		data(val) {
			const { columns } = this.data;
			val.forEach(item => {
				columns.forEach(col => {
					if (col.formatter) {
						item[col.prop] = col.formatter.call(this, item[col.prop], item);
					}
				});
			});
			this.setData({
				configList: val
			});
		}
	},

	methods: {
		init() {
			this.getSystem().then(res => {
				this.setData({
					tableWidth: `${res.screenWidth}px`
				});
			});
		},
		getSystem() {
			return new Promise(resolve => {
				wx.getSystemInfo({
					success: res => {
						resolve(res);
					}
				});
			});
		},
		setColumnsWidth(columns) {
			const noWidthItems = columns.filter(v => !v.width);
			const len = noWidthItems ? noWidthItems.length : 0;
			this.getSystem().then(res => {
				const { screenWidth } = res;
				const otherWidthSum = this.getHasColumns(columns); // 已有宽度列 rpx
				const conversion = screenWidth / 750; // 1rpx = ?px
				const width = len ? Math.floor((screenWidth / conversion - otherWidthSum) / len) : 127; // 默认127rpx
				const configColumns = this.parseColumns(columns, width);
				this.setData({
					configColumns
				});
			});
		},
		parseColumns(columns, relwidth) {
			columns.map(v => {
				if (v.width) {
					v.width = `${this.parseColWidth(v.width)}rpx`;
				} else {
					v.width = `${relwidth}rpx`;
				}
				if (v.formatter) {
					v.formatter = v.formatter.call(this);
				}
				return v;
			});
			return columns;
		},
		getHasColumns(columns) {
			const sum = columns.reduce((num, v) => {
				if (v.width) {
					const width = this.parseColWidth(v.width);
					num += width;
				}
				return num;
			}, 0);
			return sum;
		},
		parseColWidth(width) {
			if (/^\d+(?:px)?$|^\d+(?:rpx)?$/.test(width)) {
				return parseInt(width, 10);
			} else {
				return width;
			}
		},
		handleClickRow(e) {
			const { currentTarget: { dataset: { row } } } = e;
			this.triggerEvent('rowClick', row);
		},
		handleStickyScoll(e) {
			console.log(e, 456);
		},
		handleScroll(e) {
			console.log(e, 789);
		}
	}
});
