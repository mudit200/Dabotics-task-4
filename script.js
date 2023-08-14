document.addEventListener("DOMContentLoaded", function() {
    const faqs = document.querySelectorAll(".faq");
  
    faqs.forEach(faq => {
      const question = faq.querySelector(".question");
      const answer = faq.querySelector(".answer");
  
      question.addEventListener("click", function() {
        // Toggle the 'show' class on the answer element
        answer.classList.toggle("show");
      });
    });
  });
  