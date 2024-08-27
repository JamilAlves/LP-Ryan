    const faqs = document.querySelectorAll(".faq");

    faqs.forEach((faq) => {
        faq.addEventListener("click", () => {
            faq.classList.toggle("active");
        });
    });



    /*ANIMAÇÃO*/

    

    const myObserver = new IntersectionObserver ((entries) => {
        entries.forEach((entry) => {
            if(entry.isIntersecting){
                entry.target.classList.add('show')
            } else {
                entry.target.classList.remove('show')
            }
        })
    })

    const elements = document.querySelectorAll('.interface');

    elements.forEach((element) => myObserver.observe(element))

    /*ANIMAÇÃO 2*/ 

    const myObserveP = new IntersectionObserver ((P) => {
        P.forEach((entry) => {
            if(entry.isIntersecting){
                entry.target.classList.add('show')
            } else {
                entry.target.classList.remove('show')
            }
        })
    })

    const elementP = document.querySelectorAll('.faq');

    elementP.forEach((element) => myObserveP.observe(element))