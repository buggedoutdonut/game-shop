export const AnimationFunction = () => {
    const bannerText = document.querySelector('.bannerText')
    const gameImage = document.querySelectorAll('.topGames')
    const gameThumbnails = document.querySelectorAll('.hottestGameThumbnails')

    const observer = new IntersectionObserver((entry) =>{
    entry.forEach((entry) =>{
        if(entry.isIntersecting){
            entry.target.classList.add('animate')
        } else {
            entry.target.classList.remove('animate')
        }
    })
    })
    observer.observe(bannerText)

    const imageObserver = new IntersectionObserver((entry) =>{
        entry.forEach((entry) =>{
            if(entry.isIntersecting){
                entry.target.classList.add('animateImg')
            }
        })
    })

    gameImage.forEach((element) =>{
        imageObserver.observe(element)
    })

    const gameSlideObserver = new IntersectionObserver((entry) =>{
        entry.forEach((entry) =>{
            if(entry.isIntersecting){
                entry.target.classList.add('animateThumbnailSlide')
            } 
        })
    })
    
    gameThumbnails.forEach((element) =>{
        gameSlideObserver.observe(element)
    })

}
