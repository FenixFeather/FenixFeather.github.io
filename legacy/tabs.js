$(document).ready(function(){
    $("#aboutTab").click(function(){
        $("#homeText").hide();
        //$("#homeTab").css({"text-decoration":"none"});
        $("#homeTab").css({"font-weight":"normal"});
        $("#aboutText").slideDown();
        $("#contactText").hide();
        $("#contactTab").css({"font-weight":"normal"});
        $("#title").text("About");
        $(this).css({"font-weight":"bold"});
        $("#portraitMe").hide();
        $("#logo").hide();
	});
	
    $("#homeTab").click(function(){
        $("#aboutText").hide();
        $("#aboutTab").css({"font-weight":"normal"});
        $("#homeText").slideDown();
        $("#contactText").hide();
        $("#contactTab").css({"font-weight":"normal"});
        $("#title").text("Hello World!");
        $(this).css({"font-weight":"bold"});
        $("#portraitMe").fadeIn();
        $("#logo").hide();
	});
	
    $("#contactTab").click(function(){
        $("#aboutText").hide();
        $("#aboutTab").css({"font-weight":"normal"});
        $("#homeText").hide();
        $("#homeTab").css({"font-weight":"normal"});
        $("#contactText").slideDown();
        $("#title").text("Contact");
        $(this).css({"font-weight":"bold"});
        $("#portraitMe").hide();
        $("#logo").fadeIn();
    });
	
	$(".icon").hover(function(){
		$(this).addClass("shadowed");
		},function(){
		$(this).removeClass("shadowed");
	});
	
	$(".tab").hover(function(){
		$(this).css({"box-shadow": "4px 4px 4px rgba(0,0,0,.3)"});
		},function(){
		$(this).css({"box-shadow": "2px 2px 2px rgba(0,0,0,.3)"});
	});
  
});
