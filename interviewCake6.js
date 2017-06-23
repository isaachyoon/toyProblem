function findRectangleIntersection(rect1, rect2){
	if((rect1.x - rect1.width < rect2.x && rect2.x < rect1.x) && (rect1.y < rect2.y && rect2.y < rect1.y + rect1.height)) {
		let BrightCorner = rect2.x
		let BleftCorner = rect1.x
		let TrightCornder = rect2.y
		let TleftCornder = rect2.y + (rect2)
	}

}

var my_rectangle = {
	x:1,
	y:5,
	width: 10,
	height: 4
}

var my_rectangle2 = {
	x: 0,
	y: 7,
	width: 5,
	height: 5
}

findRectangleIntersection(my_rectangle, my_rectangle2)
/*
	top-right corner: (x, y + height)
	top-left corner: (x - width, y + height)
	botoom-left: (x - width, y)

	bottom-left < secondRectX < my_rectangle
	top-bottomY < my_rectangleY < topY
*/

