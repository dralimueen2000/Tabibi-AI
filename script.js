async function sendQuery() {
    const input = document.getElementById("userInput").value;
    const responseText = document.getElementById("responseText");
    responseText.innerText = "جارٍ المعالجة...";

    try {
        const res = await fetch("https://tabibi-proxy.vercel.app/api/chat", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message: input })
        });

        const data = await res.json();
        responseText.innerText = data.reply || "لم يتم الحصول على رد.";
    } catch (error) {
        responseText.innerText = "حدث خطأ في الاتصال.";
    }
}