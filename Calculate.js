exports.factorial=(n)=>
{
    var fact =1;
    for(var i=n;i>=1;i--)
    {
        fact = fact*i;
    }
    return fact
}
exports.square=(n)=>
{
    return n*n;
}