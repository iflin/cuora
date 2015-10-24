// 計數器效果 //
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