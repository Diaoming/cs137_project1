var isIntroHidden = false;
function hideIntro()
{
    if(isIntroHidden)
    {
        document.getElementById("intro").style.opacity = 1.0;
        document.getElementById("hideButton").textContent = "Hide Intro";    
        
    }
    else
    {
        document.getElementById("intro").style.opacity = 0.0;
        document.getElementById("hideButton").textContent = "Display Intro";    
    }
    isIntroHidden = !isIntroHidden;
}