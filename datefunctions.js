function tomorrow(){
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d;
};

function twentyFourHours(){
    const now = Date.now()
    return new Date(now + 24*60*60*1000)
};
  
function fourHours(){
    const now = Date.now()
    return new Date(now + 4*60*60*1000)
};
  
function xHours(x){
    const now = Date.now()
    return new Date(now + x*60*60*1000)
};

function nextweek(){
    const d = new Date();
    d.setDate(d.getDate() + 7);
    return d;
};

module.exports   = {
    tomorrow,
    twentyFourHours,
    fourHours,
    xHours,
    nextweek
};