const inputTeamName = document.querySelector('#team-name');
const btnSubmit = document.querySelector('#btn-submit');
const teamLogo = document.querySelector('#team-logo'); 

btnSubmit.addEventListener('click', () => {
    const teamName = inputTeamName.value;

    if ( teamName == 'barca' ) {
        // console.log( teamName + " is a good team")
        teamLogo.src = "images/barca.png"
    } else 
    if ( teamName == 'real' ) {
        // console.log( teamName + " is a good team")
        teamLogo.src = "images/real.webp"
    }
    else if ( teamName == 'liverpool'){
        teamLogo.src = 'images/liverpool.png';
    }
    
    else {
        window.alert(teamName + " is not in our list.");
    }
})