jQuery("#keyboard a").click(function() {
    if (jQuery(this).children(".fa").attr("class") == "fa fa-caret-down") {
        jQuery(this).html('한글 자판 닫기 <span class="fa fa-caret-up">');
        jQuery(this).parent().parent().find("img").toggle();
    } else {
        jQuery(this).html('한글 자판 열기 <span class="fa fa-caret-down">');
        jQuery(this).parent().parent().find("img").toggle();
    }
});