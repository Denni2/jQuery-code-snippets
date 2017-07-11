var quoter = [
	{
		"quote":"“Love is like the wind, you can't see it but you can feel it.”",
		"name":"― Nicholas Sparks "
	},
	{
		"quote":"“The difference between genius and stupidity is: genius has its limits.” ",
		"name":"― Alexandre Dumas fils"
	},
	{
		"quote":"“I would venture to guess that Anon, who wrote so many poems without signing them, was often a woman.”",
		"name":"― Virginia Woolf"
	},
	{
		"quote":"“We’re all a little weird. And life is a little weird. And when we find someone whose weirdness is compatible with ours, we join up with them and fall into mutually satisfying weirdness—and call it love—true love.”",
		"name":"― Robert Fulghum"
	},
	{
		"quote":"“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
		"name":"― Albert Einstein"
	},
	{
		"quote":"“The opposite of love is not hate, it's indifference. The opposite of art is not ugliness, it's indifference. The opposite of faith is not heresy, it's indifference. And the opposite of life is not death, it's indifference.”",
		"name":"― Elie Wiesel"
	},
	{
		"quote":"“How wonderful it is that nobody need wait a single moment before starting to improve the world.” ",
		"name":"― Anne Frank"
	},
	{
		"quote":"“Never doubt that a small group of thoughtful, committed, citizens can change the world. Indeed, it is the only thing that ever has.”",
		"name":"― Margaret Mead"
	},
	{
		"quote":"“Man is the only creature who refuses to be what he is.”",
		"name":"― Albert Camus"
	},
	{
		"quote":"“It is hard enough to remember my opinions, without also remembering my reasons for them!”",
		"name":"- Friedrich Nietzsche"
	},
	{
		"quote":"“Never let your sense of morals prevent you from doing what is right.”",
		"name":"― Isaac Asimov"
	},
	{
		"quote":"“Wise men speak because they have something to say; fools because they have to say something.”",
		"name":"― Plato"
	},{
		"quote":"“You're not to be so blind with patriotism that you can't face reality. Wrong is wrong, no matter who does it or says it.”",
		"name":"― Malcolm X"
	},{
		"quote":"“Let's think the unthinkable, let's do the undoable. Let us prepare to grapple with the ineffable itself, and see if we may not eff it after all.”",
		"name":"― Douglas Adams"
	},
	{
		"quote":"“Going to church doesn’t make you a Christian any more than going to a garage makes you an automobile.”",
		"name":"― Billy Sunday"
	},
	{
		"quote":"“I did not attend his funeral, but I sent a nice letter saying I approved of it.”",
		"name":"― Mark Twain"
	},
	{
		"quote":"“He had just about enough intelligence to open his mouth when he wanted to eat, but certainly no more.”",
		"name":"― P.G. Wodehouse"
	},
	{
		"quote":"“I wish it need not have happened in my time, said Frodo. So do I, said Gandalf, and so do all who live to see such times. But that is not for them to decide. All we have to decide is what to do with the time that is given us.” ",
		"name":"― J.R.R. Tolkien"
	},
	{
		"quote":"“Books have a unique way of stopping time in a particular moment and saying: Let’s not forget this.”",
		"name":"― Dave Eggers"
	},
	{
		"quote":"“Yesterday is gone. Tomorrow has not yet come. We have only today. Let us begin.”",
		"name":"― Mother Teresa"
	},
	{
		"quote":"“The saddest aspect of life right now is that science gathers knowledge faster than society gathers wisdom.” ",
		"name":"― Isaac Asimov"
	},
	{
		"quote":"“It is the mark of an educated mind to be able to entertain a thought without accepting it.” ",
		"name":"― Aristotle"
	},
	{
		"quote":"“Any fool can know. The point is to understand.”",
		"name":"― Albert Einstein"
	},
	{
		"quote":"“By three methods we may learn wisdom: First, by reflection, which is noblest; Second, by imitation, which is easiest; and third by experience, which is the bitterest.”",
		"name":"― Confucius"
	},
	{
		"quote":"Life can only be understood backwards; but it must be lived forwards. ",
		"name":"-Søren Kierkegaard"
	},
	{
		"quote":"Life is beautiful, as long as it consumes you. When it is rushing through you, destroying you, life is gorgeous, glorious. It’s when you burn a slow fire and save fuel, that life’s not worth having. ",
		"name":"-D. H. Lawrence"
	},{
		"quote":"If we did the things we are capable of, we would astound ourselves.",
		"name":"-Thomas Edison"
	},
	{
		"quote":"Never give up on something that you can’t go a day without thinking about.",
		"name":"-Winston Churchill"
	}
];
var output;
var x = 0;
var y = 0;
var codes = ['#dadd75', '#f8ff00', '#1b00a0', '#5f568b', '#211949', '#a9002b', '#74096f', '#e7003b', '#da17d1', '#9b7632', '#4b2020', '#ffaf1c', '#f5a2ff', '#76d113', '#cadfb3', '#3f6c0e', '#faf0a9', '#1ce4c0', '#1d8875', '#034353', '#2239da', '#ca00bd', '#6c7470', '# #d35400', '# #28b463', '#fcff3b', '#7c7d56', '#04b004', '#90e1cb', '#767a79', '#001c9c', '#ff4d68', '#eaeaea', '#e8730c', '#61f10e', '#3e2896', '#ea4dfc', '#989b5c', '#ebf343', '#5c9000', '#00b25e', '#405099', '#4c6358', '#34c8c8', '#c8b434', '#1f1449', '#d11c0a', '#5f5f5f', '#82238c', '#fafe88', '#880404'];

// defaut values that the page will show before the button is clicked
var que = Math.floor(Math.random() * (quoter.length));
$(document).ready(function (){

	$("#full_page").css("background-color", '#8d9112');
	$("#quote_box").css("background-color", '#211949');
  
	var vals = quoter[que].quote + quoter[que].name;
	output = "<p class='eggs' id='sayings'>" + quoter[que].quote + "</p>" + "<p class='eggs' id='author'>" + quoter[que].name + "</p>";
	$("#tweet").attr("href", "https://twitter.com/intent/tweet?text=" + vals);
	$("#displayer").append(output);

	// events that will happen after the click of button

	$("#quotes").on("click", function (){
		var output;
		var que = Math.floor(Math.random() * (quoter.length));
		$(".eggs").remove(output); // removes the last line of quote 
		if(x < quoter.length){
			$("#full_page").css("background-color", codes[y]);
			$("#quote_box").css("background-color", "#c9fdfa");
			var vals = quoter[que].quote + " " + quoter[que].name;
			output = "<p class='eggs' id='sayings'>" + quoter[que].quote + "</p>" + "<p class='eggs' id='author'>" + quoter[que].name + "</p>";
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



