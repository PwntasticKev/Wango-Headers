$(document).ready(function() {
	$(".nav-hit-cont")
		.unbind("click")
		.bind("click", function() {
			$(".ae-img").animate({ opacity: "toggle" }, 250)
			$(".upper-line").toggleClass("menubefore-active")
			$(".lower-line").toggleClass("menuafter-active")
			$(".logo").toggle()
			$(".visit-oakland-menu").addClass("menu-title-active") // adds blue line underneath
			$(".menu-title-container").toggleClass("menu-title-container--active") //puts the container in flex.
			$(".industry-container-menu").hide()
			$(".industry-menu").removeClass("menu-title-active") //removes blue line
			if ($(".oakland-menu-container").hasClass("oakland-active")) {
				$(".oakland-menu-container").removeClass("oakland-active")
			} else if ($(".industry-container-menu").hasClass("industry-active")) {
				$(".industry-container-menu").removeClass("industry-active")
			} else {
				$(".oakland-menu-container").addClass("oakland-active")
			} //turns oakland menu on/off
		})

	$(".visit-oakland-menu").on("click", function() {
		$(".visit-oakland-menu").addClass("menu-title-active") //adds bue line
		$(".industry-menu").removeClass("menu-title-active") ////removes bue line
		$(".oakland-menu-container").addClass("oakland-active")
		$(".industry-container-menu").removeClass("industry-active")
	})

	$(".industry-menu").on("click", function() {
		$(".industry-menu").addClass("menu-title-active") //adds blue lne
		$(".visit-oakland-menu").removeClass("menu-title-active") //removes blue line
		$(".industry-container-menu").addClass("industry-active")
		$(".oakland-menu-container").removeClass("oakland-active")
	})

	$(".mobile-search-input").on("focus", function() {
		$(this).css("border-bottom", "1px solid lightgray")
	})

	$("#google_translate_element").bind("DOMNodeInserted", function(event) {
		$(".goog-te-menu-value span:first").html("English")
	})

	var redesignScreen = function() {
		var width = $(window).width()
		if (width < 767) {
			$(".fa-search").on("click", function() {
				$(".mobile-search-input").animate({ width: "toggle" }, 200)
			})
		}
		if (width < 1025) {
			$(".nav-hit-cont").on("click", function() {
				$(".lang-weather-container").toggleClass(
					"lang-weather-container--active"
				)
			})
		}
	}

	window.onresize = redesignScreen // calling redesignScreen initially
	redesignScreen()


function changeIFrameStyles() {
	if (
		$(".goog-te-menu-frame")
			.contents()
			.find(".goog-te-menu2").length
	) {
		$(".goog-te-menu-frame")
			.contents()
			.find(".goog-te-menu2")
			.css({
				"max-width": "100%",
				overflow: "scroll",
				"box-sizing": "border-box",
				height: "auto",
				width: "100%"
			})
	} else {
		setTimeout(changeIFrameStyles, 50)
	}
}
changeIFrameStyles()

})
