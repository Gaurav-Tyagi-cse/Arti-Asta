function submitNumerologyCompatibilityForm(frm, v) {
    v.validate();
    if(!v.isValid()) {
        return ;
    }


	if ('1' == requireLogin) {
		loginWithPopup('showResultsCompatibility', [frm, v], 'numerology-compatibility');
	} else {
		showResultsCompatibility([frm, v]);
	}
	
}

function showResultsCompatibility(params) {
	params[0].removeAttribute('onsubmit');
	params[0].submit();
}

function submitNumerologyBirthForm(frm, v) {
    v.validate();
    if(!v.isValid()) {
        return ;
    }


	if ('1' == requireLoginBirth) {
		loginWithPopup('showResultsBirth', [frm, v], 'numerology-birth');
	} else {
		showResultsBirth([frm, v]);
	}
	
}

function showResultsBirth(params) {
	document.frmNumerologyBirth.removeAttribute('onsubmit');
	document.frmNumerologyBirth.submit();
}
