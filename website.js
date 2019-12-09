var main = function() {
    $("#nav a span").click(function(){
        var location = $(this).text().charAt(0);
        var pos = 0;
		switch(location){
			case 'A':
				pos = $("#about").offset().top;
				break;
			case 'P':
				pos = $("#projects").offset().top;
				break;
			case 'C':
				pos = $("#contact").offset().top;
				break;
		}
		
		pos -= ($(window).height() * 0.1);
		$(document).scrollTop(pos);
	});
};

$(document).ready(main);