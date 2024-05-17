document.addEventListener('DOMContentLoaded', (event) => {
    let textarea = document.getElementById('textarea');
    let charCount = document.getElementById('charCount');
    let enterFullscreen = document.getElementById('enterFullscreen');
    let exitFullscreen = document.getElementById('exitFullscreen');

    textarea.addEventListener('input', () => {
        charCount.textContent = textarea.value.length;
    });

    enterFullscreen.addEventListener('click', () => {
        if (document.documentElement.requestFullscreen) 
            {
            document.documentElement.requestFullscreen();
            } 
        else if (document.documentElement.mozRequestFullScreen) 
            { 
            document.documentElement.mozRequestFullScreen();
            } 
        else if (document.documentElement.webkitRequestFullscreen) 
            { 
            document.documentElement.webkitRequestFullscreen();
            } 
        else if (document.documentElement.msRequestFullscreen)
            { 
            document.documentElement.msRequestFullscreen();
            }
    });

    exitFullscreen.addEventListener('click', () => {
        if (document.exitFullscreen) 
            {
            document.exitFullscreen();
            } 
        else if (document.mozCancelFullScreen) 
            { 
            document.mozCancelFullScreen();
            } 
        else if (document.webkitExitFullscreen) 
            { 
            document.webkitExitFullscreen();
            }
        else if (document.msExitFullscreen)
            { 
            document.msExitFullscreen();
            }
    });
});
