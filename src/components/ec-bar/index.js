import * as echarts from '../../lib/ec-canvas/echarts';

Component({
	/**
   * 组件的属性列表
   */
	properties: {
		title: {
			type: String
		},
		uom: {
			type: String
		},
		ecData: {
			type: Object,
			value: {
				x: [],
				y: []
			}
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
		this.ecComponent = this.selectComponent('#mychart-dom-bar');
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
				const { ecData } = this.data;
				canvas.setChart(chart);
				const option = this.getOptions(ecData);
				chart.setOption(option);
				this.chart = chart;
				return chart;
			});
		},
		getOptions(data) {
			const option = {
				color: ['#448AFE'],
				tooltip: {
					trigger: 'axis',
					axisPointer: {
						// 坐标轴指示器，坐标轴触发有效
						type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
					}
				},
				grid: {
					left: '1%',
					right: '1%',
					top: '10%',
					bottom: '0',
					containLabel: true,
					tooltip: {
						show: false
					}
				},
				xAxis: [
					{
						type: 'category',
						data: data.x,
						axisTick: {
							alignWithLabel: true
            },
            nameTextStyle: {
              fontSize: 12,
              rich: {}
            }, // 不同手机型号字体超小
						axisLabel: {
              color: '#555555'
						},
						axisLine: {
							lineStyle: {
								color: '#EBEDF6'
							}
						},
						splitLine: {
							show: false
            }
					}
				],
				yAxis: [
					{
            type: 'value',
            nameTextStyle: {
              fontSize: 12,
              rich: {}
            },
						axisLabel: {
              color: '#999999'
						},
						axisLine: {
							lineStyle: {
								color: '#EBEDF6'
							}
						},
						splitLine: {
							lineStyle: {
								color: '#EBEDF6'
							}
            }
					}
				],
				series: [
					{
						type: 'bar',
						barWidth: 32,
						barMaxWidth: 32,
						label: {
							show: true,
							position: 'top',
							color: '#555555',
							fontSize: 12,
              rich: {}
						},
						data: data.y
					}
				]
			};
			return option;
		}
	}
});
