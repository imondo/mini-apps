const api = require('./../../api/index.js');
const app = getApp();

Page({
	data: {
		active: 0,
		pageNo: 1,
		pageCount: 0,
		loading: true,
		isShowBackTop: false,
		ecBarOffset: 0,
		tabs: [
			{
				title: '总资产',
				name: 'general'
			},
			{
				title: '房间',
				name: 'room'
			},
			{
				title: '计算机',
				name: 'computer'
			},
			{
				title: '人员',
				name: 'staff'
			},
			{
				title: '图书',
				name: 'book'
			}
		],
		cardValue: ['-', '-', '-'],
		bar: {
			x: [],
			y: []
		},
		tableColumns: [],
		tableData: []
	},
	onLoad() {
		this.getPageInfo();
		this.getTable();
	},
	onShow() {
		app.Dom.get('.index-item_table').then(res => {
			this.setData({
				ecBarOffset: res.top
			});
		});
	},
	onChange(e) {
		this.setData(
			{
				active: e.detail.index,
				cardValue: ['-', '-', '-'],
				bar: null,
				pageCount: 0,
				pageNo: 1,
				tableData: [],
				loading: true
			},
			() => {
				this.getPageInfo();
				this.getTable();
			}
		);
	},
	getPageInfo() {
		const { active, tabs } = this.data;
		const { getAsset, getComputer, getBook, getStaff, getBuilding } = api;
		const func = {
			general: getAsset,
			room: getBuilding,
			computer: getComputer,
			staff: getStaff,
			book: getBook
		};
		func[tabs[active]['name']]().then(res => {
			const { list } = res.data;
			this.fomartCardData(res.data);
			this.fomartBarData(list);
		});
	},
	getTable() {
		const { pageNo } = this.data;
		const { getSchoolAsset, getSchoolComputer, getSchoolBook, getSchoolStaff, getSchoolBuilding } = api;
		const func = {
			general: getSchoolAsset,
			room: getSchoolBuilding,
			computer: getSchoolComputer,
			staff: getSchoolStaff,
			book: getSchoolBook
		};
		this.setData({
			loading: true
		});
		const key = this.getTabName();
		func[key]({ pageNo }).then(res => {
			if (res && res.data && Array.isArray(res.data.list)) {
				this.formartTable(res.data.list);
				this.setData({
					pageCount: res.data.pageCount
				});
			} else {
				this.setData({
					tableData: [],
					loading: false
				});
			}
		});
	},

	formartTable(data) {
		const rowKeys = Object.keys(data[0]);
		const head = rowKeys.filter(v => !isNaN(+v));
		const key = this.getTabName();
		const tableColumns = [
			{
				lable: '学校/年份',
				prop: 'orgName',
				width: 240,
				align: 'left',
				cellClassName: 'school-cell'
			}
		];
		const formatter = key === 'general' ? value => (+value ? (value / 10000).toFixed(2) : 0) : null
		head.reverse(); // 年份2019，2018
		head.forEach(year => {
			const col = {
				lable: `${year}年`,
				prop: `${year}`,
				placeholder: '0',
				formatter: formatter
			};
			tableColumns.push(col);
		});
		const tableList = this.formartTableData(data, head);
		const { pageNo, tableData } = this.data;
		this.setData({
			tableColumns,
			tableData: tableData.concat(tableList),
			pageNo: pageNo + 1,
			loading: false
		});
	},

	formartTableData(data, head) {
		const tableData = [];
		const name = this.getTabName();
		// 对应取值
		const keys = {
			general: 'amount',
			room: 'area',
			computer: 'quantity',
			staff: 'quantity',
			book: 'quantity'
		};
		const value = keys[name];
		data.forEach(item => {
			const { orgName } = item;
			const o = { orgName };
			for (const key of head) {
				o[key] = item[key][value];
			}
			tableData.push(o);
		});
		return tableData;
	},

	getTabName() {
		const { tabs, active } = this.data;
		return tabs[active]['name'];
	},

	// 柱状图数据
	fomartBarData(data) {
		const x = [];
		const y = [];
		data.forEach(item => {
			const key = Object.keys(item)[0];
			x.push(key);
			y.push(item[key]);
		});
		this.setData({
			bar: { x, y }
		});
	},

	// 卡片数据
	fomartCardData(data) {
		const { active, tabs } = this.data;
		const cardValue = [];
		const card = {
			general: ['total', 'fund', 'avg'],
			room: ['total', 'currentYear', 'avg'],
			computer: ['total', 'student', 'teacher'],
			staff: ['total', 'fullTimeNum', 'highNum'],
			book: ['total', 'bookAvg', 'currentYearAvg']
		};
		card[tabs[active]['name']].forEach(key => {
			cardValue.push(data[key] || 0);
		});
		this.setData({
			cardValue
		});
	},
	onReachBottom() {
		this.getLoadingMore();
	},
	getLoadingMore() {
		let { pageNo, pageCount } = this.data;
		if (pageNo <= pageCount) {
			this.getTable();
		}
	},
	onPageScroll(e) {
		const { scrollTop } = e;
		const { ecBarOffset } = this.data;
		this.setData({
			isShowBackTop: scrollTop > ecBarOffset
		});
	}
});
