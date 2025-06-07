function reply() {
  const input = document.getElementById('input').value;
  const responseBox = document.getElementById('response');

  if (input.includes("دوخة") || input.includes("صداع") || input.includes("تعب")) {
    responseBox.innerText = "قد تكون هذه الأعراض ناتجة عن إرهاق أو انخفاض ضغط الدم. يُفضل قياس الضغط وأخذ قسط من الراحة، وإذا استمرت الأعراض راجع الطبيب.";
  } else if (input.includes("ألم بالصدر")) {
    responseBox.innerText = "ألم الصدر المفاجئ مع ضيق تنفس قد يكون حالة طارئة. يُفضل مراجعة الطوارئ فورًا لتجنب أي مضاعفات.";
  } else {
    responseBox.innerText = "شكرًا لاستفسارك، سيتم الرد عليك قريبًا من خلال الذكاء الاصطناعي.";
  }
}