// Select the button
const toggleThemeBtn = document.querySelector(".btn-toggle");
// Select the stylesheet <link>
const theme = document.querySelector("#theme-link");

// Listen for a click on the button
toggleThemeBtn.addEventListener("click", function() {
  if (theme.getAttribute("href") == "light-theme.css") {
	theme.href = "style.css";
	
	changeIconsTheme("dark")
  } else {
	theme.href = "light-theme.css";
	
	changeIconsTheme("light")
  }
});

function changeIconsTheme(theme){
	const darkThemeImgs = ['images-darkmode-codeerschool','images-darkmode-tsb', 'images-darkmode-gladwell', 'images-darkmode-languages', 'images-darkmode-databases', 
	'images-darkmode-other']

	const lightThemeImgs = ['images-lightmode-codeerschool', 'images-lightmode-tsb', 'images-lightmode-gladwell', 'images-lightmode-languages', 'images-lightmode-databases', 
	'images-lightmode-other']

	for (i = 0; i < darkThemeImgs.length; i++){
		if (theme == "dark"){
			// $("#" + `${darkThemeImgs}`).remove();
			document.getElementById(`${darkThemeImgs[i]}`).style.display = 'inline-block';
			document.getElementById(`${lightThemeImgs[i]}`).style.display = 'none';
		} else if (theme == "light"){
			document.getElementById(`${darkThemeImgs[i]}`).style.display = 'none';
			document.getElementById(`${lightThemeImgs[i]}`).style.display = 'inline-block';
		}
	}
}

// Display project info onclick
function displayInfoProject(listInfo, displayInfo) {
	listInfo.forEach((element) => {
		$(element).click(function() {
			$(displayInfo).css('height', '91%');
			$('.card-reveal').children().fadeIn(600);
		});
	});
}

function hideInfoProject(closeBtn, displayInfo) {
	$(closeBtn).click(function() {
		$('.card-reveal').css('height', '0');
		$('.card-reveal').children().fadeOut(300);
	});
}

// Arrays for each project
var project1_more_info = [ $('#project-tsb'), $('#project-tsb-i') ];
var project2_more_info = [ $('#project-men-spa'), $('#project-men-spa-i') ];
var project3_more_info = [ $('#project-kbcreative'), $('#project-kbcreative-i') ];
var project4_more_info = [ $('#project-coffee'), $('#project-coffee-i') ];
var project5_more_info = [ $('#project-rte'), $('#project-rte-i') ];
var project6_more_info = [ $('#project-easybank'), $('#project-easybank-i') ];
var project7_more_info = [ $('#project-anime'), $('#project-anime-i') ];
var project8_more_info = [ $('#project-prev-portfolio'), $('#project-prev-portfolio-i') ];
var project9_more_info = [ $('#project-url-api'), $('#project-url-api') ];

// Array of all project arrays
var projects_array = [
	project1_more_info,
	project2_more_info,
	project3_more_info,
	project4_more_info,
	project5_more_info,
	project9_more_info,
	project6_more_info,
	project7_more_info,
	project8_more_info
];

var reveal_array = [
	$('#project-tsb-reveal'),
	$('#project-barber-reveal'),
	$('#project-kbcreative-reveal'),
	$('#project-coffee-reveal'),
	$('#project-rte-reveal'),
	$('#project-url-api-reveal'),
	$('#project-easybank-reveal'),
	$('#project-anime-reveal'),
	$('#project-prev-portfolio-reveal')
];
var close_array = [
	$('#close-tsb'),
	$('#close-barber'),
	$('#close-kbcreative'),
	$('#close-coffee'),
	$('#close-rte'),
	$('#close-url-api'),
	$('#close-easybank'),
	$('#close-anime'),
	$('#close-prev-portfolio')
];

// On click more info display hidden div with info of card of each project
for (i = 0; i < reveal_array.length; i++) {
	displayInfoProject(projects_array[i], reveal_array[i]);
	hideInfoProject(close_array[i], reveal_array[i]);
}

// Function to highlight be giving class
function addClass(elements) {
	elements.forEach((element) => {
		$(element).click(function() {
			$(element).toggleClass('active-nav');
		});
	});
}

function highlightNav(itemSkip, array) {
	array.forEach((element) => {
		if (element != itemSkip) {
			$(element).css('font-weight', 'normal');
		} else if (element == itemSkip) {
			$(element).css('font-weight', '600');
		}
	});
}

var listNavItems = [
	$('#about-nav'),
	$('#experience-nav'),
	$('#projects-nav'),
	$('#skills-nav'),
	$('#education-nav'),
	$('#contact-nav')
];

addClass(listNavItems);

var distance1 = $('#about-section').offset().top;
var distance2 = $('#experience-section').offset().top;
var distance3 = $('#projects-section').offset().top;
var distance4 = $('#skills-section').offset().top;
var distance5 = $('#education-section').offset().top;
var distance6 = $('#contact-section').offset().top;

$(window).scroll(function() {
	if ($(this).scrollTop() >= distance1) {
		$('#about-nav').addClass('active-nav');
		highlightNav($('#about-nav'), listNavItems);
	} else {
		$('#about-nav').css('font-weight', 'normal');
		$('#about-nav').removeClass('active-nav');
	}

	if ($(this).scrollTop() >= distance2) {
		$('#experience-nav').addClass('active-nav');
		$('#about-nav').removeClass('active-nav');
		highlightNav($('#experience-nav'), listNavItems);
	} else {
		$('#experience-nav').removeClass('active-nav');
	}

	if ($(this).scrollTop() >= distance3) {
		$('#projects-nav').addClass('active-nav');
		$('#experience-nav').removeClass('active-nav');
		highlightNav($('#projects-nav'), listNavItems);
	} else {
		$('#projects-nav').removeClass('active-nav');
	}

	if ($(this).scrollTop() >= distance4) {
		$('#skills-nav').addClass('active-nav');
		$('#projects-nav').removeClass('active-nav');
		highlightNav($('#skills-nav'), listNavItems);
	} else {
		$('#skills-nav').removeClass('active-nav');
	}

	if ($(this).scrollTop() >= distance5) {
		$('#education-nav').addClass('active-nav');
		$('#skills-nav').removeClass('active-nav');
		highlightNav($('#education-nav'), listNavItems);
	} else {
		$('#education-nav').removeClass('active-nav');
	}

	if ($(this).scrollTop() >= distance6) {
		$('#contact-nav').addClass('active-nav');
		$('#education-nav').removeClass('active-nav');
		highlightNav($('#contact-nav'), listNavItems);
	} else {
		$('#contact-nav').removeClass('active-nav');
	}
});

function openNav() {
	document.getElementById('mySidenav').style.width = '105vw';
	$('#mySidenav li').fadeIn(600);
	$('#mySidenav li').css('margin-left', '48px');
	$('#hamburger-mobile').fadeOut(200);
	$('#closeBtn').fadeIn(100);
}

function closeNav() {
	document.getElementById('mySidenav').style.width = '0';
	$('#mySidenav li').fadeOut(400);
	$('#mySidenav li').css('margin-left', '-300px');
	$('#closeBtn').fadeOut(200);
	$('#hamburger-mobile').fadeIn(100);
}
