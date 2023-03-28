const apiUrl = 'http://localhost:8080/';
 
const rest = {

    upload(fileInput, mailPatient, mailMedecin) {
		let myHeaders = new Headers();
		myHeaders.append('accept', '*/*');
        myHeaders.append('Content-Type', 'multipart/form-data');
		let formdata = new FormData();
		formdata.append('file', fileInput);
		let requestOptions = {
			method: 'POST',
			headers: myHeaders,
			body: formdata,
		};
		return fetch( apiUrl + 'upload/' + mailPatient + '/' +  mailMedecin, requestOptions);
	},
    
    // Files(mailPatient, mailMedecin) {
	// 	let myHeaders = new Headers();
	// 	myHeaders.append('accept', '*/*');
	// 	let requestOptions = {
	// 		method: 'GET',
	// 		headers: myHeaders,
	// 	};
	// 	return fetch(apiUrl + 'files/' + mailPatient + '/' +  mailMedecin, requestOptions);
	// },
};

export default rest;