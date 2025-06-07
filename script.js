
async function sendQuery() {
    const input = document.getElementById("userInput").value;
    const responseBox = document.getElementById("responseBox");
    responseBox.innerHTML = "جارٍ المعالجة...";

    const response = await fetch("https://your-secure-server.com/api/tabibi", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ message: input })
    });

    const data = await response.json();
    responseBox.innerHTML = data.reply || "لم يتم الحصول على رد.";
}
