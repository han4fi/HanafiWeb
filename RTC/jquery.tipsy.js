//<![CDATA[
jQuery(document).ready(function($) {
// Images Tip
  $('.jowo-pix .box-content li a').tipsy({gravity: 's', fade: true});
  $('.jowo-pix .box-content li a').tipsy({gravity: 's', fade: true});


// Tabs //
	$('#tabbed-widget').each(function() {
		$(this).find(".tabs-wrap").hide(); //Hide all content
		$(this).find("ul.tabs li:first").addClass("active").show(); //Activate first tab
		$(this).find("ul.tabs li:first").addClass("active").show(); //Activate first tab
		$(this).find(".tabs-wrap:first").show(); //Show first tab content
	});
	$("ul.tabs li").click(function(e) {
		$(this).parents('#tabbed-widget').find("ul.tabs li").removeClass("active"); //Remove any "active" class
		$(this).addClass("active"); //Add "active" class to selected tab
		$(this).parents('#tabbed-widget').find(".tabs-wrap").hide(); //Hide all tab content

		var activeTab = $(this).find("a").attr("href"); //Find the href attribute value to identify the active tab + content
		$(this).parents('#tabbed-widget').find(activeTab).fadeIn(); //Fade in the active ID content
		
		e.preventDefault();
	});
	$("ul.tabs li").click(function(e) {
		$(this).parents('#tabbed-widget').find("ul.tabs li").removeClass("active"); //Remove any "active" class
		$(this).addClass("active"); //Add "active" class to selected tab
		$(this).parents('#tabbed-widget').find(".tabs-wrap").hide(); //Hide all tab content

		var activeTab = $(this).find("a").attr("href"); //Find the href attribute value to identify the active tab + content
		$(this).parents('#tabbed-widget').find(activeTab).fadeIn(); //Fade in the active ID content
		
		e.preventDefault();
	});
	$("ul.tabs li a").click(function(e) {
		e.preventDefault();
	})
	$("ul.tabs li a").click(function(e) {
		e.preventDefault();
	})
  
	





}); 
//]]>