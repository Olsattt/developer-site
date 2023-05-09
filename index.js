document.getElementById('first-theme').addEventListener('click', function() 
{
    document.documentElement.style.setProperty('--primary-color', '#f5f5f5');
    document.documentElement.style.setProperty('--background-color', '#242424');
    document.documentElement.style.setProperty('--gray-color','#4d4d4d');
    document.documentElement.style.setProperty('--blue-btn','#6784a8');
    document.documentElement.style.setProperty('--blue-block','#002757');
    document.documentElement.style.setProperty('--gray-text','#c4c4c4');
    document.documentElement.style.setProperty('--header-color','#464646');

});
document.getElementById('second-theme').addEventListener('click', function() 
{
    document.documentElement.style.setProperty('--primary-color', '#000');
    document.documentElement.style.setProperty('--background-color', '#f5f5f5');
    document.documentElement.style.setProperty('--gray-color','#EEEFF1');
    document.documentElement.style.setProperty('--blue-btn','#5e7da3');
    document.documentElement.style.setProperty('--blue-block','#5e7da3');
    document.documentElement.style.setProperty('--gray-text','#727272');
    document.documentElement.style.setProperty('--header-color','#ececec');
});