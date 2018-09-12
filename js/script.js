(function(){	
	var height;
	var block = false;
	var comp = 0;
	var imagesCount = 7;
	$(function(){
		$(".items").append("<div class=\"item\"><img src=\"images/1.png\" /></div>");
		$(".items").append("<div class=\"item\"><img src=\"images/2.png\" /></div>");
		$(".items").append("<div class=\"item\"><img src=\"images/3.png\" /></div>");
		height = $(".item").height();
		$("#start").click(function(){
			start();
		});
	});
	function start(){
		if(block)
			return;
		block = true;
		comp = 0;
		var data = [];
		for (var i = 0; i < 9; i++) {
			data[i] = Math.floor((Math.random() * imagesCount) + 1);
		}
		animate(data);
	}
	function animate(data){
		console.log(data);
		prepare();
		$(".items").eq(0).append("<div class=\"item\"><img src=\"images/"+data[0]+".png\" /></div>");
		$(".items").eq(1).append("<div class=\"item\"><img src=\"images/"+data[1]+".png\" /></div>");
		$(".items").eq(2).append("<div class=\"item\"><img src=\"images/"+data[2]+".png\" /></div>");
		
		$(".items").eq(0).append("<div class=\"item\"><img src=\"images/"+data[3]+".png\" /></div>");
		$(".items").eq(1).append("<div class=\"item\"><img src=\"images/"+data[4]+".png\" /></div>");
		$(".items").eq(2).append("<div class=\"item\"><img src=\"images/"+data[5]+".png\" /></div>");
		
		$(".items").eq(0).append("<div class=\"item\"><img src=\"images/"+data[6]+".png\" /></div>");
		$(".items").eq(1).append("<div class=\"item\"><img src=\"images/"+data[7]+".png\" /></div>");
		$(".items").eq(2).append("<div class=\"item\"><img src=\"images/"+data[8]+".png\" /></div>");
		var px = height * 54;
		var speed = 3000;
		$(".items").each(function(){
			$(this).animate({top: "-"+px+"px"}, {duration: speed, complete: function(){
				comp++;
				if (comp == 3) {
					finish();
				}
			}});	
			speed += 1000;			
		});
	}
	function clean(){
		$(".items").each(function(){
			$(this).children().slice(0, -3).remove();
		});			
		$(".items").css("top", "0px");
	}
	function prepare(){
		for(var i = 0; i <= 50; i++){
			$(".items").each(function(){
				var rand = Math.floor((Math.random() * imagesCount) + 1);
				$(this).append("<div class=\"item\"><img src=\"images/"+rand+".png\" /></div>");
			});
		}
	}
	function finish(){
		clean();
		comp = 0;
		block = false;
	}
})();