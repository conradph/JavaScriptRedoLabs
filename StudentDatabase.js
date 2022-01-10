let students = [
    {
        "Name": "Phillip",
        "Hometown": "Canton, MI",
        "FavoriteFood": "Fried Chicken"
    },
    {
        "Name":"Andy",  
        "Hometown": "Berkely, MI",
        "FavoriteFood": "French Fries"
    },
    {
        "Name":"Cassly",
        "Hometown": "Detroit, MI",
        "FavoriteFood": "Steak"
    },
    {
        "Name":"Zachary",  
        "Hometown": "Wyandotte, MI",
        "FavoriteFood": "Sushi"
    },
    {
        "Name":"Cortez",  
        "Hometown": "Detroit, MI",
        "FavoriteFood": "Chicken Fettuccine Alfredo"
    },
    {
        "Name":"Richard",  
        "Hometown": "Canton, MI",
        "FavoriteFood": "Sushi"
    },
    {
        "Name":"Erin",  
        "Hometown": "Troy, MI",
        "FavoriteFood": "Tacos"
    },
    {
        "Name":"James",  
        "Hometown": "Yap, FSM",
        "FavoriteFood": "Katsu"
    },
    {
        "Name":"Cullin",  
        "Hometown": "Fowlerville, MI",
        "FavoriteFood": "Pad Thai"
    },
    {
        "Name":"Cordero",  
        "Hometown": "Berkley, MI",
        "FavoriteFood": "BBQ"
    }
]

function StudentDatabase(){
    askAgain = false;
    do{
        let currentStudent = GetStudent(students);
        AskAboutStudent(currentStudent);
        askAgain = KnowMore();
    }
    while(askAgain)


}

function GetStudent(list)
{
    let askAgain = false;
    do{
        let studentToLookFor = prompt("Which student would you like to learn more about, enter a number between 0 and " + (list.length-1));
        if(studentToLookFor >= 0 && studentToLookFor < list.length)
        {
            return list[studentToLookFor];
        }
        else
        {
            console.log("Invalid Input");
            askAgain = true;
        }
    }
    while(askAgain)
}

function AskAboutStudent(stu)
{
    let askAgain = false;
    do{
        let infoRequested = prompt("What would you like to know about " + stu.Name + "? enter hometown or favorite food").toLowerCase();
        if(infoRequested == "hometown")
        {
            console.log(stu.Name + "'s hometown is " + stu.Hometown);
            askAgain = false;
        }
        else if(infoRequested == "favorite food")
        {
            console.log(stu.Name + "'s favorite food is " + stu.FavoriteFood);
            askAgain = false;
        }
        else
        {
            console.log("Invalid Input Try again")
            askAgain = true;
        }
    }
    while(askAgain)
}
function KnowMore()
{
    let askAgain = false;
    do{
        let knowMore = prompt("Would you like to know more? (enter yes or no)").toLowerCase();
        if(knowMore === "yes")
        {
            return true;
            askAgain = false;
        }
        else if(knowMore === "no")
        {
            console.log("Goodbye");
            return false;
            askAgain = false;
        }
        else
        {
            console.log("Invalid Input Try again")
            askAgain = true;
        }
    }
    while(askAgain)
    

}