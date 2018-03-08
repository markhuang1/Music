function scor(i){
	var lef =0;
	var sto = 0 ;
	var imgs = document.getElementById("scors");
	imgs.style.left=-730+"px";
	lef = -1460;
	var stop = setInterval(function (){
				imgs.style.transition = "all 1s"
				imgs.style.left=lef+"px";
				lef = lef-730;
				if(lef<=-730*(i-1))
				{
					setTimeout(function(){
						imgs.style.transition = "all 0s";
						lef =-730;
						imgs.style.left=lef+"px";
						lef = -1460;
					},1500);
				}
	},3000);
	var leftso = document.getElementsByClassName("ad-right")[0];
	var leftsoc = leftso.addEventListener("click",function(){
	if(lef>-730*(i-2))
	{
		imgs.style.transition = "all 1s";
		imgs.style.left=lef+"px";
		lef = lef-730;
	}
	else{
		imgs.style.transition = "all 1s";
		imgs.style.left=lef+"px";
		setTimeout(function(){
						imgs.style.transition = "all 0s";
						lef =-730;
						imgs.style.left=lef+"px";
						lef = -1460;
					},1000);
	}
	});
	leftso.addEventListener("mouseover",function(){
		clearInterval(stop); 
	});
	leftso.addEventListener("mouseout",function(){
		stop = setInterval(function (){
				imgs.style.transition = "all 1s"
				imgs.style.left=lef+"px";
				lef = lef-730;
				if(lef<=-730*(i-1))
				{
					setTimeout(function(){
						imgs.style.transition = "all 0s";
						lef =-730;
						imgs.style.left=lef+"px";
						lef = -1460;
					},1500);
				}
	},3000);
	});
	var righ = document.getElementsByClassName("ad-left")[0];
	var rights = righ.addEventListener("click",function(){
	
	if(lef<(-730*2)&&lef>=(-730*(i-2)))
	{
		imgs.style.transition = "all 1s";
		lef = lef+730;
		imgs.style.left=lef+"px";
	}
	else{
		lef = lef+730;
		imgs.style.transition = "all 1s";
		imgs.style.left=lef+"px";
		setTimeout(function(){
						imgs.style.transition = "all 0s";
						lef =-730*(i-2);
						imgs.style.left=lef+"px";
					},1000);
	}
	});
	righ.addEventListener("mouseover",function(){
		clearInterval(stop); 
	});
	righ.addEventListener("mouseout",function(){
		if(lef<=-1460)
		{
			lef = lef -730;
		}
		else{
			lef = -1460;
		}
		stop = setInterval(function (){
				imgs.style.transition = "all 1s"
				imgs.style.left=lef+"px";
				lef = lef-730;
				if(lef<=-730*(i-1))
				{
					setTimeout(function(){
						imgs.style.transition = "all 0s";
						lef =-730;
						imgs.style.left=lef+"px";
						lef = -1460;
					},1500);
				}
	},3000);
	});
}
scor(10);
function cli(){
	var prin = document.getElementById("search");
	prin.addEventListener("click",function (){
			if(prin.value ==""){
				prin.setAttribute("placeholder","");
			}
		});
	prin.addEventListener("blur",function (){
			if(prin.value==""){
				prin.placeholder = "视屏/音乐/电台/用户";
			}
		});
}
cli();
