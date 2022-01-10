function Calculate(){
    let response = "y";
    do{
    let roomLength = prompt("Enter Room Length");
    let roomWidth = prompt("Enter Room Width:");
    let roomHeight = prompt("Enter Room Height:");

    let area = roomLength * roomWidth;
    let perimeter = roomLength * 2 + roomWidth * 2;
    let volume = area * roomHeight;

    console.log("Area: " + area);
    console.log("Perimeter " + perimeter);
    console.log("Volume: " + volume);

    let carpetTiles = area/5;
    let paintCans = (perimeter * roomHeight + area); //paint is needed on all of the walls as well as the ceiling

    console.log("Carpet Tiles Needed: " + carpetTiles);
    console.log("Paint Cans Needed: " + paintCans);

    response = prompt("Would you like to continue? (y/n)").toLowerCase();
    }
    while(response === "y");
} 