function submitNumerologyForm(frm, v) {
    v.validate();
    if(!v.isValid()) {
        return false;
    }


	if ('1' == requireLogin) {
		loginWithPopup('showResults', [frm, v], 'numerology');
		return false;
	} 
	
	document.frmNumerologyBirth.submit();
	
}

function showResults(params) {
	document.frmNumerologyBirth.submit();
}
