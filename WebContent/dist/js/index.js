
var map = new BMap.Map("container"); // 创建地图实例
var locationPoint = new BMap.Point(116.404, 39.915); // 创建点坐标
map.centerAndZoom(locationPoint, 15); // 初始化地图，设置中心点坐标和地图级别
map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
var ac = new BMap.Autocomplete( // 建立一个自动完成的对象
{
	"input" : "search",
	"location" : map
});

var myValue;
ac.addEventListener("onconfirm", function(e) { // 鼠标点击下拉列表后的事件
	$("#search").blur();
	var _value = e.item.value;
	myValue = _value.province + _value.city + _value.district + _value.street
			+ _value.business;
	setPlace();
});

function setPlace() {
	function myFun() {
		var pp = local.getResults().getPoi(0).point; // 获取第一个智能搜索的结果
		map.centerAndZoom(pp, 18);
	}
	var local = new BMap.LocalSearch(map, { // 智能搜索
		onSearchComplete : myFun
	});
	local.search(myValue);
}
