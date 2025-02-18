// script.js

// Login function
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const loginMessage = document.getElementById('loginMessage');

    // Simple authentication
    if (username === 'student' && password === 'password') {
        document.querySelector('.login-container').style.display = 'none';
        document.querySelector('.voting-container').style.display = 'block';
    } else {
        loginMessage.textContent = 'Invalid credentials!';
        loginMessage.style.color = 'red';
    }
}

// Voting function
function submitVote() {
    const selectedCandidate = document.querySelector('input[name="candidate"]:checked');
    const voteMessage = document.getElementById('voteMessage');

    if (selectedCandidate) {
        let votes = JSON.parse(localStorage.getItem('votes')) || [];
        votes.push(selectedCandidate.value);
        localStorage.setItem('votes', JSON.stringify(votes));

        document.querySelector('.voting-container').style.display = 'none';
        document.querySelector('.confirmation-container').style.display = 'block';
    } else {
        voteMessage.textContent = 'Please select a candidate to vote for.';
        voteMessage.style.color = 'red';
    }
}

// Function to check the list of votes
function checkVotes() {
    let votes = JSON.parse(localStorage.getItem('votes')) || [];
    let voteListContainer = document.getElementById('voteListContainer');
    let voteList = document.getElementById('voteList');

    if (votes.length === 0) {
        voteList.innerHTML = "No votes have been cast yet.";
    } else {
        voteList.innerHTML = "Votes cast: " + votes.join(", ");
    }

    // Show the vote list container
    voteListContainer.style.display = 'block';
}

// Function to reset votes
function resetVotes() {
    localStorage.removeItem('votes');
    alert("Vote history has been reset.");
    checkVotes(); // Refresh the vote list
}
