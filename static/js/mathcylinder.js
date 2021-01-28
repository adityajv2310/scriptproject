
calculateBtn = document.querySelector('#button_calculate');

calculateBtn.addEventListener('click',function(e){
    
    txtradius = document.querySelector('#value_radius');
    txtheight = document.querySelector('#value_height');
    txtresult = document.querySelector('#value_result');

    let result;

    result = parseFloat(txtradius.value) * parseFloat(txtheight.value)
    txtresult.value = result;
    
});