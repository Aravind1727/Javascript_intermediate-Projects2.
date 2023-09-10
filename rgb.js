function colors(){
    var red = document.getElementById('red').value;
    var green = document.getElementById('green').value;
    var blue = document.getElementById('blue').value;
    document.body.style.backgroundColor = 'rgb('+ red + ','+ green + ',' + blue + ')';
    document.getElementById('idoutput').innerHTML = 'rgb('+ red + ','+ green + ',' + blue + ')';
}