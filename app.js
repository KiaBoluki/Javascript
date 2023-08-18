function getFullname( firstName , lastName )
{
    const fullName = firstName + ' ' + lastName;
    
    return fullName ;
}

function getYears ( birthYear )
{

    const thisYear = 1402;

    const ageYears = thisYear - birthYear ; // 2 

    return " " + ageYears; 
}

function greetings(){

    const greetings =  "<h1>" + getFullname('Radin', 'Mashoufi') + ". Shoma " + getYears(1387) + " Saal darid." + "</h1>"
    document.body.innerHTML =  greetings; 
}

greetings()