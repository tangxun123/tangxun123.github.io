var ver = '2.1';
if(localStorage.version !== ver) {
	localStorage.removeItem('content');
	localStorage.version = ver;
}
