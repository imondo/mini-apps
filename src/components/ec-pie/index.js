import * as echarts from '../../lib/ec-canvas/echarts';

const app = getApp();

Component({
	/**
   * 组件的属性列表
   */
	properties: {
		ecData: {
			type: Array,
			value: []
		},
		series: {
			type: Object,
			value: {}
		},
		legend: {
			type: Boolean,
			value: false
		},
		ecShow: {
			type: Boolean,
			value: false
		}
	},
	data: {
		ec: {
			lazyLoad: true
		}
	},
	observers: {
		ecData(val) {
			this.initChart();
		}
	},
	attached() {
		this.ecComponent = this.selectComponent('#mychart-dom-pie');
		this.initChart();
  },
  detached() {
    if (this.chart) {
      if (!this.chart.hide) return;
      this.chart.dispose();
    }
  },
	methods: {
		initChart() {
      if (!this.ecComponent) return;
			this.ecComponent.init((canvas, width, height) => {
				const chart = echarts.init(canvas, null, {
					width: width,
					height: height
				});
				canvas.setChart(chart);
				const option = this.getOptions();
        chart.setOption(option);
				this.chart = chart;
				this.canvasImagePath(chart);
				return chart;
			});
		},
		getOptions() {
			const series = this.getSeries();
			const { ecData, legend } = this.data;
			const legendData = ecData.reduce((arr, v) => {
				if (v.name) {
					arr.push(v.name);
				}
				return arr;
			}, []);
			const option = {
				color: ['#43bbd3', '#f0b24f', '#f7ea6a', '#bdd25c', '#49b559', '#448AFE', '#D8D8D8'],
				grid: {
					left: '0',
					right: '0',
					top: '20%',
					bottom: '20%',
					containLabel: false
				},
				series: [series]
			};

			if (legend) {
				option.legend = {
					type: 'scroll',
					orient: 'vertical',
					right: 0,
					top: 5,
					bottom: 0,
					padding: 0,
					itemGap: 2,
					itemWidth: 6,
					itemHeight: 3,
					data: legendData
				};
			}
			return option;
		},
		// @return {}
		getSeries() {
			const { ecData, series, legend } = this.data;
			const seriesConfig = Object.assign(
				{
					type: 'pie',
					radius: ['0', '70%'],
					center: legend ? ['35%', '50%'] : ['50%', '50%'],
					avoidLabelOverlap: true,
					stillShowZeroSum: true,
					label: {
						show: true,
						position: 'outside',
						color: '#333333',
						align: legend ? 'center' : 'auto',
						rich: {}, // 解决字体安卓特小
						formatter: v => {
							const { name, percent } = v;
							if (legend) {
								return `${percent}%`;
							}
							if (name.length > 4) {
								return `${name}\n${percent}%`;
							} else {
								return `${name}${percent}%`;
							}
						}
					},
					labelLine: {
						length: 0,
						length2: legend ? 5 : 15,
						width: 0.5
					},
					data: ecData
				},
				series
			);
			return seriesConfig;
		},
		canvasImagePath(chart) {
			chart.on('finished', () => {
				this.ecComponent.canvasToTempFilePath({
					success: res => {
						this.triggerEvent('canvasIamge', res.tempFilePath);
					},
					fail: res => console.log('转换图片失败', res)
				});
			});	
		}
	}
});
