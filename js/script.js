$ (function (){

	$ ('#senha').bind ('keyup', function (){

		var txt = $ (this).val();
		var forca =0;

		if (txt.length >6){
			forca+= 25;
		}

		var reg = new RegExp (/[a-z]/i);
		if (reg.test(txt)){
		forca+=25;
		}

		var reg = new RegExp (/[0-9]/i);
		if (reg.test(txt)){
			forca+=25;
		}

		var reg = new RegExp (/[^a-z0-9]/i);
		if (reg.test(txt)){
			forca+=25;
		}

		$('#forca').html('Força:' +forca);
	});



});


