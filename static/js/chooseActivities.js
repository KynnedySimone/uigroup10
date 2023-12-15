let clickcount = 0

document.getElementById('add-activity-button').addEventListener('click', function() {
    if(clickcount > 0){
        document.getElementById('activity2').classList.remove('hidden');
    } else{
        document.getElementById('instructions').classList.add('hidden');
        document.getElementById('activity3').classList.remove('hidden');
        clickcount++
        console.log("incremented count")
    }
});

document.getElementById('plus-button').addEventListener('click', function() {
        document.getElementById('activity1').classList.remove('hidden');
});
