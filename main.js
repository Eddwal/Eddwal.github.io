window.onload = () => {

    //Hamburger click handler
    const menuBtn = document.querySelector('.hamburger');
    const mobileNav = document.querySelector('.mobile-nav-ul');
    menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('is-active');
        mobileNav.classList.toggle('is-active')
    })

    
}