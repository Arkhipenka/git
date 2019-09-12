window.addEventListener('load', function(event){
	let nav = document.createElement('nav');
	let arrNav = ["menu", "news", "setting", "on demand"];
	nav.id = "nav";

	for(let i = 0; i < arrNav.length; i++){
		nav.innerHTML += "<a href='#'>" + arrNav[i] + "</a>";
		
	}
	document.body.insertBefore(nav,document.body.firstChild);
	//form.innerHTML = "<a href='#'>General</a>";
		//document.body.insertBefore(form, document.body.firstChild);

		//let div = document.createElement('div');
				//div.id = 'div';
		//document.body.appendChild(div);
})
