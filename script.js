let red = 255;
let green = 255;
let bleu = 255;
let option = "backgroundColor";

$( ".ui-slider" ).slider({
	animate: "slow",
	range: "max",
	step: 1,
	min: 0,
	max: 255,
});

$("#red").slider({
	value: red,
	slide: function(event, ui) {
		red = ui.value;
		$("#textBox").css(option, `rgb(${red}, ${green}, ${bleu})`);
	}
});
$("#green").slider({
	value: green,
	slide: function(event, ui) {
		green = ui.value;
		$("#textBox").css(option, `rgb(${red}, ${green}, ${bleu})`);
	}
});
$("#bleu").slider({
	value: bleu,
	slide: function(event, ui) {
		bleu = ui.value;
		$("#textBox").css(option, `rgb(${red}, ${green}, ${bleu})`);
	}
});

$("button").button().click(function () {
	$("button").removeClass("active");
	$(this).addClass("active");
});
$("#color").button().click(function () {
	option = "color";
});
$("#backgroundColor").button().click(function () {
	option = "backgroundColor";
});
