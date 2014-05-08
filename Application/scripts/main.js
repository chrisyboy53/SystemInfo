
/*
  This is the starting point of the application
*/

$(document).ready(function() {
  
  $('#refresh').click(getMemory);
  
  timeMem();
  
});

function timeMem()
{
  getMemory();
  setTimeout(timeMem, 500);
}

function getMemory() {
  chrome.system.memory.getInfo(function( info ){
    
    var memProg = $('#memoryProgress');
    
    var totalMem = info.capacity;
    
    var tKb = parseInt(totalMem / 1024);
    
    var tMb = parseInt(tKb / 1024);
    
    var kb = parseInt(info.availableCapacity / 1024);
    
    var mb = parseInt(kb / 1024);
    
    var percentage = parseInt((mb / tMb) * 100);
    
    memProg.width(percentage + "%");
    
    $('#memoryInfo').html( numberWithCommas(kb) + "/" +  numberWithCommas(tKb) + " Kb" );
  });
  
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}