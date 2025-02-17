document.addEventListener("DOMContentLoaded", function ()
{
    const accordions = document.querySelectorAll(".accordion-topic");
    initializeAccordion(accordions);
});

function initializeAccordion(accordions) {
    accordions.forEach(topic => {
        topic.addEventListener("click", function ()
        {
            const description = this.nextElementSibling;
            toggleDescription(description);
            toggleIcon(this);
        });
    });
}

function toggleDescription(description) {
    if (description.style.maxHeight) 
    {
        description.style.maxHeight = null;
        description.style.paddingLeft = null;
    } 
    else 
    {
        description.style.maxHeight = description.scrollHeight + "px";
        description.style.paddingLeft = '10px';
    }
}


function toggleIcon(topic) 
{
    const icon = topic.querySelector("img");
    icon.src = icon.src.includes("icon-plus.svg") ? "./assets/images/icon-minus.svg" : "./assets/images/icon-plus.svg";
}
