let clickcount = 0

document.getElementById('add-activity-button').addEventListener('click', function() {
    if(clickcount > 0){
        document.getElementById('activity2').classList.remove('hidden');
    } else{
        document.getElementById('activity3').classList.remove('hidden');
        clickcount++
        console.log("incremented count")
    }
});

