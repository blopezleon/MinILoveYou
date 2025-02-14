async function generateLetter() {
    try {
        const response = await fetch("https://miniloveyou.onrender.com", { 
            method: "POST",
            headers: { "Content-Type": "application/json" }
        });

        if (!response.ok) {
            throw new Error("Failed to fetch love letter");
        }

        const data = await response.json();
        document.getElementById("letter").innerText = data.letter;
    } catch (error) {
        console.error("Error fetching love letter:", error);
        document.getElementById("letter").innerText = "Oops! Something went wrong. 💔";
    }
}
