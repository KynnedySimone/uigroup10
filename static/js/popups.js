/**

document.getElementById('clickableDiv').addEventListener('click', function() {
    document.getElementById('popup').classList.remove('hidden');
});

document.getElementById('closePopup').addEventListener('click', function() {
    document.getElementById('popup').classList.add('hidden');
}); **/

document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('clickableDiv').addEventListener('click', function() {
        document.getElementById('popup').classList.remove('hidden');
        document.getElementById('overlay').classList.remove('hidden');
    });

    document.getElementById('closePopup').addEventListener('click', function() {
        document.getElementById('popup').classList.add('hidden');
        document.getElementById('overlay').classList.add('hidden');
    });
});