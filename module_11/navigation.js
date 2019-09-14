window.addEventListener('load', function(event){
	let nav = document.createElement('nav');
	let arrNav = ["menu", "news", "setting", "on demand"];
	nav.id = "nav";

	for(let i = 0; i < arrNav.length; i++){
		if(i === 0){
			nav.innerHTML += "<a herf='#' class='focus'>" + arrNav[i] + "</a>"
		}else{
			nav.innerHTML += "<a href='#'>" + arrNav[i] + "</a>";
		}
		
		
	}
	document.body.insertBefore(nav,document.body.firstChild);
})
