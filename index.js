let isLoggedIn = false;

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("form");
    const signInButton = document.querySelector("button[type='button']");
    const submitCommentButton = document.querySelector("#comments-section button");

    loginForm.addEventListener("submit", handleLogin);
    signInButton.addEventListener("click", handleSignIn);
    submitCommentButton.addEventListener("click", submitComment);
});

function handleLogin(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    try {
        if (username === "" || password === "") {
            throw new Error("Username and password cannot be empty.");
        }
        isLoggedIn = true;
        alert(`Welcome, ${username}!`);
        displayHomeButton();
    } catch (error) {
        alert(`Error: ${error.message}`);
    }
}

function displayHomeButton() {
    const homeButton = document.getElementById("home-button");
    if (homeButton) {
        homeButton.style.display = "block";
    }
}

function handleSignIn() {
    alert("Sign in functionality to be implemented.");
}

function submitComment() {
    const commentInput = document.getElementById("comment");
    const commentsDisplay = document.getElementById("comments-display");

    try {
        const comment = commentInput.value.trim();
        if (comment === "") {
            throw new Error("Comment cannot be empty.");
        }

        const newComment = document.createElement("p");
        newComment.textContent = comment;
        commentsDisplay.appendChild(newComment);
        commentInput.value = "";
    } catch (error) {
        alert(`Error: ${error.message}`);
    }
}
