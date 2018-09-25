document.getElementById("cms").addEventListener('input',function(e){
		let cms = e.target.value;
		document.getElementById("Metres").innerHTML = cms/100;
		document.getElementById("Feet").innerHTML = cms/30.48;
		document.getElementById("Inches").innerHTML = cms*0.39;
	});