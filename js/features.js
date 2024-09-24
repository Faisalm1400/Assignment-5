document.getElementById('show-donation')
.addEventListener('click', function(){
    showSectionById('donation-container');
    
    document.getElementById('show-donation').classList.add('bg-btn-primary');
    document.getElementById('show-donation').classList.remove('btn-outline');
    
    document.getElementById('show-history').classList.add('btn-outline');
    document.getElementById('show-history').classList.remove('bg-btn-primary');
})

document.getElementById('show-history')
.addEventListener('click', function(){
    showSectionById('history-section');
    document.getElementById('show-history').classList.add('bg-btn-primary');
    document.getElementById('show-history').classList.remove('btn-outline');

    document.getElementById('show-donation').classList.add('btn-outline');
    document.getElementById('show-donation').classList.remove('bg-btn-primary');
})

document.getElementById('btn-alert')
.addEventListener('click', function(){
    document.getElementById('show-success-alert').classList.add('hidden');
})