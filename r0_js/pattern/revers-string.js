var str = '12345';
[].map.call(str, function(x) {
  return x;
}).reverse().join('');
