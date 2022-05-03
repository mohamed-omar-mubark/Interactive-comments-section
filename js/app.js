// My js
    // vars
    currentUser = null;
    comments = null;

    // Get current user and comments from json file
    fetch('./data.json').then((response) => {
        return response.json();
    })
    .then((data) => {
        // Work with JSON data here
        this.currentUser = data.currentUser;
        this.comments = data.comments;

        console.log(this.currentUser);
        console.log(this.comments);
    })
    .catch((error) => {
        console.log(error);
    });
    
    // Increase and decrease comment rate
    let increaseBtn = document.getElementById("increase-btn");
    let decreaseBtn = document.getElementById("decrease-btn");
    let rateNum= document.getElementById("rate-number");

    increaseBtn.onclick = () => {
        rateNum.innerHTML++;
    }

    decreaseBtn.onclick = () => {
        rateNum.innerHTML--;
    }