const labels = document.querySelector('.form-control label')

labels.forEach(element => {
    element.innerHTML = element.innerText
        .split('')
        .map((letter,idx) =>`<span style="transition-delay:${idx*300}ms">${letter}</span>`)
        .join('')
});