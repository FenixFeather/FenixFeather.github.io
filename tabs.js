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
});
