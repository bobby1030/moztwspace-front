$(document).ready(function () {
	// navbar is escaped by http://www.freeformatter.com/javascript-escape.html
	// used to add navbar in every single page
	var navbar = '<nav class=\"navbar navbar-default\">\r\n      <div class=\"navbar-header\">\r\n        <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#nav-collapse\">\r\n        <span class=\"icon-bar\"><\/span>\r\n        <span class=\"icon-bar\"><\/span>\r\n        <span class=\"icon-bar\"><\/span>\r\n        <\/button>\r\n        <a class=\"navbar-brand\" href=\"index.html\">\u5DE5\u5BEE\u5373\u6642\u72C0\u614B\u7CFB\u7D71<\/a>\r\n      <\/div>\r\n      <div id=\"nav-collapse\" class=\"collapse navbar-collapse\">\r\n        <ul class=\"nav navbar-nav\">\r\n          <li><a href=\"index.html\">\u9996\u9801<\/a><\/li>\r\n          <li><a href=\"login.html\">\u7C3D\u5230\/\u8A3B\u518A<\/a><\/li>\r\n          <li><a href=\"logout.html\">\u7C3D\u51FA<\/a><\/li>\r\n          <li><a href=\"profile.html\">\u5E33\u865F\u8A2D\u5B9A<\/a><\/li>\r\n          <li><a href=\"status.html\">\u5373\u6642\u72C0\u614B<\/a><\/li>\r\n        <\/ul>\r\n      <\/div>\r\n    <\/nav>'

	// Add NavBar to all page that include this script.
	$('body').prepend(navbar);

	// determine current page and active it at NavBar
	var url = location.pathname
	if (url.substring(url.lastIndexOf('/') + 1) == '') {
		$('nav ul li').filter(':first').addClass('active');
	} else {
		$('nav ul li a').each(function () {
			if ($(this).attr('href') == url.substring(url.lastIndexOf('/') + 1)) {
				$(this).parent().addClass('active');
			}
		});
	};

	// Append hidden form (for demo usage, will remove when staging.)
	$('#append').click(function () {
		$($(this).attr('data-append')).toggle();
	});
});
