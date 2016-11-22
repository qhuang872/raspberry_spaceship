$(document).ready(function(){
function moveUp(){
	var ship = document.getElementById("spaceship");
	var currentVerticalPosition = ship.offsetTop;
	blueShipRotateUp(ship);
	ship.style.top=(currentVerticalPosition-8)+"px";
}
function moveDown(){
	var ship = document.getElementById("spaceship");
	var currentVerticalPosition = ship.offsetTop;
	blueShipRotateDown(ship);
	ship.style.top=(currentVerticalPosition+8)+"px";
}
function moveLeft(){
	var ship = document.getElementById("spaceship");
	var currentHorizontalPosition = ship.offsetLeft;
	ship.style.left=(currentHorizontalPosition-8)+"px";
}
function moveRight(){
	var ship = document.getElementById("spaceship");
	var currentHorizontalPosition = ship.offsetLeft;
	ship.style.left=(currentHorizontalPosition+8)+"px";

}
function blueShipRotateDown(ship){
	ship.style.background = 'url("split_up/spaceships_65.gif")';
}
function blueShipRotateUp(ship){
	ship.style.background = 'url("split_up/spaceships_35.gif")';
}
function blueShipRotateBack(ship){
	ship.style.background = 'url("split_up/spaceships_05.gif")';
}

function
document.addEventListener("keypress",function(event){
	if(event.keyCode==38){
		moveUp();
	}else if(event.keyCode==40){
		moveDown();
	}else if(event.keyCode==37){
		moveLeft();
	}else if(event.keyCode==39){
		moveRight();
	}else if(event.keyCode==65){
		fire();
	}
})
});
