﻿$(document).ready(function () {  $(".toggle_container").hide();  $(".trigger").click(function () { $(this).toggleClass("active").next().slideToggle("slow"); return false; });   $('form .clearme').focus(function () { var orig_text = $(this).attr('rel'); var value = $(this).val(); if (orig_text == value) { $(this).val(""); } }); $('form .clearme').blur(function () { var orig_text = $(this).attr('rel'); var value = $(this).val(); if (value == "") { $(this).val(orig_text); } });   $(".closeme").click(function () { $(this).slideUp(); });  $(".viewclose").toggle( function (e) { $(this).parent().parent().next(".scent_details").show(); $(this).html("Less"); e.preventDefault(); }, function (e) { $(this).parent().parent().next(".scent_details").hide(); $(this).html("More"); e.preventDefault(); }  );   });