
async function sendQuery() {
    const input = document.getElementById("userInput").value;
    const responseBox = document.getElementById("responseBox");
    responseBox.textContent = "الرد: جارٍ المعالجة...";

    try {
        const res = await fetch("https://tabibi-proxy.onrender.com/api/chat", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message: input })
        });

        const data = await res.json();
        responseBox.textContent = "الرد: " + (data.reply || "لم يتمكن من توليد رد.");
    } catch (error) {
        responseBox.textContent = "الرد: حدث خطأ في الاتصال.";
    }
}
