// Define API URL
var API_BASE = 'api.moztw-space.rmstudio.tw/v1',
	API_REGISTER = API_BASE + '/register',
	API_SIGNIN = API_BASE + '/signin',
	API_SIGNOUT = API_BASE + '/signout',
	API_PROFILE = API_BASE + '/profile',
	API_STATUS = API_BASE + '/status',
    API_RESPONSE;

function register(request) {
	$.post(API_REGISTER, request)
		.done(function (response) {
            // Request Success
			console.log('\"REGISTER\" Request Success');
            return response;
		})
		.fail(function () {
			// Request Failed
            console.log('Failed to communicate with API server.');
            return false;
		});
};

function signin(id) {
	$.get(API_SIGNIN + '/' + id)
		.done(function (response) {
			// Request Success
            console.log('\"SIGNIN\" Request Success');
            return response;
		})
		.fail(function () {
			// Request Failed
            console.log('Failed to communicate with API server.');
            return false;
		});
};

function signout(id) {
	$.get(API_SIGNOUT + '/' + id)
		.done(function (response) {
			// Request Success
            console.log('\"SIGNOUT\" Request Success');
            return response;
		})
		.fail(function () {
			// Request Failed
            console.log('Failed to communicate with API server.');
            return false;
		});
};

function profile_fetch(id) {
	$.get(API_PROFILE + '/' + id)
		.done(function (response) {
			// Request Success
            console.log('\"PROFILE_FETCH\" Request Success');
            return response;
		})
		.fail(function () {
			// Request Failed
            console.log('Failed to communicate with API server.');
            return false;
		});
};

function profile_update(id, request) {
	$.post(API_PROFILE + '/' + id, request)
		.done(function (response) {
			// Request Success
            console.log('\"PROFILE_UPDATE\" Request Success');
            return response;
		})
		.fail(function () {
			// Request Failed
            console.log('Failed to communicate with API server.');
            return false;
		});
};

function status() {
	$.get(API_STATUS, request)
		.done(function (response) {
			// Request Success
            console.log('\"STATUS\" Request Success');
            return response;
		})
		.fail(function () {
			// Request Failed
            console.log('Failed to communicate with API server.');
            return false;
		});
};
