var amount_of_Sides;
var size;

amount_of_Sides = prompt("What is the amount of sides you would like?");
size = prompt("Also, What size would you like your shape to be?")
alert("Youve chosen" + amount_of_Sides + "sides, and" + size + "inches")


function draw_Polygon() {
  Turtle.penDown();
  Turtle.penColour('#000099');
  for (var count = 0; count < amount_of_Sides; count++) {
      Turtle.moveForward(size);
    Turtle.turnLeft(360 / amount_of_Sides);
  }
  Turtle.penUp();
}


draw_Polygon();
