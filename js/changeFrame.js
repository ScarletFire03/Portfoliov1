function changeFrame(value){
    const mainFrame = document.getElementById('mainFrame');
    switch (value){
        case 0:
            mainFrame.src = '../html/aboutEN.html';
            break;
        case 1:
            mainFrame.src = '../html/galleryEN.html';
            break;
        case 2:
            mainFrame.src = '../html/contactEN.html';
            break;
    }
}