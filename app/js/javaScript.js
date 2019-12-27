$('document').ready(function() {
	// $('button').on('click', function() {

		var numberNaN = 0 / 0;


		if (isFinite(numberNaN)) {
			console.log(numberNaN);
		}

		else {
			console.log('number is NaN')
		}

		var colors = ['green', 'blue', 'red'];
		colors.push('grey');
		$('#mass').html(colors[3]);

		var number = new Array(1, 5, 3, 4);

		for (var i = 0; i < number.length; i++) {
			console.log(number[i]);
		}



	$('input').on('keyup', function(){
		var inp1 = $('#inp1').val();
		var inp2 = $('#inp2').val();

		var inp1 = parseInt(inp1);
		var inp2 = parseInt(inp2);


		var sum = inp1 + inp2;
		var time = 10;
		
		if(sum > 5 && time == 10)
			$('#res').html(inp1 + inp2);
		else if (sum == 5)
			$('#res').html('value == 5');
		else
			$('#res').html('sum < 5');
	})
});


// $('button').on('click', function() {
// 	alert('dddddd');
// });

// var viewModel = {
// 	phoneName: ko.observable("Lumia 650"),
// 	phoneCompany: "Microsoft"
// };



// var name = viewModel.phoneName();

// viewModel.phoneName("lumia 900");

// ko.applyBindings(viewModel);

// var changePhoneBtn = document.getElementById('change');
// changePhoneBtn.addEventListener('click', function(e) {
// 	viewModel.phoneName("lumia 950");
// });
// ko.applyBindings(viewModel, document.getElementById('name1'));