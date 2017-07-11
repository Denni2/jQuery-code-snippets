var output;
var x = 1;
var y = 0;
var codes = ['#dadd75', '#f8ff00', '#1b00a0', '#5f568b', '#211949', '#a9002b', '#74096f', '#e7003b', '#da17d1', '#9b7632', '#4b2020', '#ffaf1c', '#f5a2ff', '#76d113', '#cadfb3', '#3f6c0e', '#faf0a9', '#1ce4c0', '#1d8875', '#034353', '#2239da', '#ca00bd', '#6c7470', '# #d35400', '# #28b463', '#fcff3b', '#7c7d56', '#04b004', '#90e1cb', '#767a79', '#001c9c', '#ff4d68', '#eaeaea', '#e8730c', '#61f10e', '#3e2896', '#ea4dfc', '#989b5c', '#ebf343', '#5c9000', '#00b25e', '#405099', '#4c6358', '#34c8c8', '#c8b434', '#1f1449', '#d11c0a', '#5f5f5f', '#82238c', '#fafe88', '#880404'];

// defaut values that the page will show before the button is clicked
$(document).ready(function (){

	$("#full_page").css("background-color", '#8d9112');
	$("#quote_box").css("background-color", '#211949');
	$.getJSON("quotes.json", function(data){
		var vals = data[0].quote + data[0].name;
		output = "<p class='eggs' id='sayings'>" + data[0].quote + "</p>" + "<p class='eggs' id='author'>" + data[0].name + "</p>";
		$("#tweet").attr("href", "https://twitter.com/intent/tweet?text=" + vals);
		$("#displayer").append(output);
	});

	// events that will happen after the click of button
	$("#quotes").on("click", function (){
		var output;
		$(".eggs").remove(output); // removes the last line of quote 
		$.getJSON("quotes.json", function (data){

			if(x < data.length){
				$("#full_page").css("background-color", codes[y]);
				$("#quote_box").css("background-color", "#c9fdfa");
				var vals = data[x].quote + " " + data[x].name;
				output = "<p class='eggs' id='sayings'>" + data[x].quote + "</p>" + "<p class='eggs' id='author'>" + data[x].name + "</p>";
				$("#tweet").attr("href", "https://twitter.com/intent/tweet?text=" + vals);
				x+=1;
				y+=1;
			} // next line of quotes is displayed

			else { 
				output = "<p class='eggs' id='sayings'>" + "To get more quotes, visit: " + "</p>";
			} // when the user gets to the end of the JSON file

			
			$("#displayer").append(output);
		});

	});

	
	
});

