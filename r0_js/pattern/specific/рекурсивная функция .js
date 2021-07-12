let i=0;
function my_function(n){
    i++;
    return (i<=n) ?  ' ' + i + my_function(n): " "
}