var $ = jQuery.noConflict();
$(document).ready(function($) {
	"use strict";
	
	var check_in_date = $('#check_in_date');
	var check_out_date = $('#check_out_date');
	try{
		check_in_date.datepicker({
			minDate: 0,
			dateFormat: "M dd, yy",
			defaultDate: "+1w",
			changeMonth: true,
			numberOfMonths: 2,
			onClose: function( selectedDate ) {
				check_out_date.datepicker( "option", "minDate", selectedDate );
			}
		});
		$('#check_in_date_button').on('click', function (){
			check_in_date.datepicker('show');
		});
		
		check_out_date.datepicker({
			dateFormat: "M dd, yy",
			defaultDate: "+1w",
			changeMonth: true,
			numberOfMonths: 2,
			onClose: function( selectedDate ) {
				check_in_date.datepicker( "option", "maxDate", selectedDate );
			}
		});
		
		$('#check_out_date_button').on('click', function (){
			check_out_date.datepicker('show');
		});
	} catch(err) {
	}
	
	var mainHeader = $('header');
	try{
		if($(window).width() > 767){	
			$( window ).scroll(function() {
				var minScroll = 100;
				if($(window).scrollTop() > minScroll){
					mainHeader.addClass('headerscroll');
				}else{
					mainHeader.removeClass('headerscroll');
				}
			});
		}
		$(window).on("resize", function () {
			if($(window).width() > 767){	
				$( window ).scroll(function() {
					var minScroll = 100;
					if($(window).scrollTop() > minScroll){
						mainHeader.addClass('headerscroll');
					}else{
						mainHeader.removeClass('headerscroll');
					}
				});
			}else{
				mainHeader.removeClass('headerscroll');
			}
		});
	} catch(err) {
	}
	
	var mainSlider = $('.flexslider');
	try{		
		mainSlider.flexslider({
			animation: "fade",
			controlNav: true,
    		directionNav: true,  
		});
	} catch(err) {
	}
	
	var bookingform = $('.bookingform');
	try{		
		$(window).load(function() {
			$('.bookingform').animate({
				opacity: 1
			}, 500, function(){
				$('.bookingformloader').fadeOut();
			});
		}); 
	} catch(err) {
	}
	
	
			
});