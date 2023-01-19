function changeFrame(value){
    const mainFrame = document.getElementById('mainFrame');
    switch (value){
        case 0:
            mainFrame.src = 'https://scarletfire03.github.io/Portfoliov1/html/aboutEN.html';
            break;
        case 1:
            mainFrame.src = 'https://scarletfire03.github.io/Portfoliov1/html/galleryEN.html';
            break;
        case 2:
            mainFrame.src = 'https://scarletfire03.github.io/Portfoliov1/html/contactEN.html';
            break;
    }
}