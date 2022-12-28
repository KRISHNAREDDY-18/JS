const a=89;
function outer(){
    b=45;
    function inner(){
        c=76;
        
        console.log(a,b,c);
        
    }
    console.log(a,b);
    inner();
    
}
console.log('I am a global Variable:'+a);
outer();

