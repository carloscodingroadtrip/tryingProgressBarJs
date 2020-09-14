//thin core progress bar
const thinCoreBar = new ProgressBar.Line(thinCoreLine, {
	strokeWidth: 1,
	easing: 'easeInOut',
	duration: 1400,
	color: '#689F38',
	trailColor: '#161718',
	trailWidth: 1,
	svgStyle: { width: '100%', height: '100%' },
});

thinCoreBar.animate(1.0); // Number from 0.0 to 1.0

//thin core progress bar
const mediumCoreBar = new ProgressBar.Line(mediumCoreLine, {
	strokeWidth: 4,
	easing: 'easeInOut',
	duration: 1400,
	color: '#689F38',
	trailColor: '#161718',
	trailWidth: 1,
	svgStyle: { width: '100%', height: '100%' },
});

mediumCoreBar.animate(1.0); // Number from 0.0 to 1.0

//full core bar
const fullCoreBar = new ProgressBar.Line(fullCoreLine, {
	strokeWidth: 8,
	easing: 'easeInOut',
	duration: 1400,
	color: '#689F38',
	trailColor: '#161718',
	trailWidth: 1,
	svgStyle: { width: '100%', height: '100%' },
});

fullCoreBar.animate(1.0); // Number from 0.0 to 1.0

//*************************************/
// STARTs for the CIRCLE logic
//************************************ */
window.onload = function onLoad() {
	//thin Circle - change the strokeWidth
	let thinCircle = new ProgressBar.Circle('#thinCircle', {
		color: '#689F38',
		trailColor: '#161718',
		strokeWidth: 3,
		duration: 2500,
		easing: 'easeInOut',
	});

	thinCircle.set(0.05);

	setTimeout(function () {
		thinCircle.animate(0.3);
	}, 1000);

	setTimeout(function () {
		thinCircle.animate(0.4);
	}, 3500);

	setTimeout(function () {
		thinCircle.animate(0.8);
	}, 5500);

	setTimeout(function () {
		thinCircle.animate(1);
	}, 8000);

	//medium Circle - change the strokeWidth
	let mediumCircle = new ProgressBar.Circle('#mediumCircle', {
		color: '#689F38',
		trailColor: '#161718',
		strokeWidth: 8,
		duration: 2500,
		easing: 'easeInOut',
	});

	mediumCircle.set(0.02);

	setTimeout(function () {
		mediumCircle.animate(0.3);
	}, 1000);

	setTimeout(function () {
		mediumCircle.animate(0.4);
	}, 3500);

	setTimeout(function () {
		mediumCircle.animate(0.8);
	}, 5500);

	setTimeout(function () {
		mediumCircle.animate(1);
	}, 8000);

	//full Circle - change the strokeWidth
	let largeCircle = new ProgressBar.Circle('#largeCircle', {
		color: '#689F38',
		trailColor: '#161718',
		strokeWidth: 17,
		duration: 2500,
		easing: 'easeInOut',
	});

	largeCircle.set(0.02);

	setTimeout(function () {
		largeCircle.animate(0.3);
	}, 1000);

	setTimeout(function () {
		largeCircle.animate(0.4);
	}, 3500);

	setTimeout(function () {
		largeCircle.animate(0.8);
	}, 5500);

	setTimeout(function () {
		largeCircle.animate(1);
	}, 8000);
};
