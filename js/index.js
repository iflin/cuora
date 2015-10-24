$(document).ready(function ()
{
	// 計數器效果
	$({
		countNum: $('#counter').text()
	}).animate({
		countNum: 15506
	}, {
		duration: 4000,
		easing: 'linear',
		step: function() {
			$('#counter').text(Math.floor(this.countNum));
		},
		complete: function() {
			$('#counter').text(this.countNum);
			// alert('finished');
		}
	});

	// 歷年淡水龜查獲數量
	AmCharts.makeChart("chartdiv", {
			"type": "serial",
			"theme": "light",
			"categoryField": "category",
			"maxSelectedSeries": 8,
			"rotate": true,
			"startDuration": 1,
			"startEffect": "easeInSine",
			"backgroundColor": "#5e6464",
			"theme": "black",
			"categoryAxis": {
					"gridPosition": "start",
					"gridColor": "#000000",
					"gridThickness": 0
			},
			"trendLines": [],
			"graphs": [{
					"balloonColor": "",
					"balloonText": "[[category]]年查獲[[title]][[value]]隻",
					"fillAlphas": 1,
					"id": "AmGraph-1",
					"lineColor": "#D5AC55",
					"lineThickness": 3,
					"title": "食蛇龜",
					"type": "column",
					"valueField": "column-1"
			}, {
					"balloonText": "[[category]]年查獲[[title]][[value]]隻",
					"fillAlphas": 1,
					"fontSize": -4,
					"id": "AmGraph-2",
					"lineColor": "#6C270E",
					"title": "柴棺龜",
					"type": "column",
					"valueField": "column-2"
			}],
			"guides": [],
			"valueAxes": [{
					"id": "ValueAxis-1",
					"position": "top",
					"title": "隻數"
			}],
			"allLabels": [],
			"balloon": {},
			"legend": {
					"markerBorderAlpha": 0,
					"markerSize": 13,
					"useGraphSettings": true,
					"useMarkerColorForValues": true,
					"width": 7
			},
			"titles": [{
					"id": "Title-1",
					"size": 20,
					"text": "歷年臺灣保育類淡水龜查獲數量"
			}],
			"dataProvider": [{
					"category": "2006",
					"column-1": "508",
					"column-2": "1009"
			}, {
					"category": "2007",
					"column-1": "10",
					"column-2": "0"
			}, {
					"category": "2008",
					"column-1": "323",
					"column-2": "0"
			}, {
					"category": "2009",
					"column-1": "1483",
					"column-2": "0"
			}, {
					"category": "2010",
					"column-1": "530",
					"column-2": "0"
			}, {
					"category": "2011",
					"column-1": "20",
					"column-2": "19"
			}, {
					"category": "2012",
					"column-1": "663",
					"column-2": "277"
			}, {
					"category": "2013",
					"column-1": "3472",
					"column-2": "3941"
			}, {
					"category": "2014",
					"column-1": "44",
					"column-2": "0"
			}, {
					"category": "2015",
					"column-1": "2286",
					"column-2": "920"
			}]
	});
});
