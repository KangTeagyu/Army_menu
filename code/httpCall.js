module.exports.function = function httpCall (army_num, find, dates){
  
  function numberPad(n, width) {
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join('0') + n;
}

  
  var http = require('http')
  var console = require('console')
  if ( army_num == 7652 ) { server = "https://miumvsnz2c.execute-api.us-east-1.amazonaws.com/default/army_7652"}
  if ( army_num == 7369 ) { server = "https://ss9g58rl46.execute-api.us-east-1.amazonaws.com/default/army_7369"}
  if ( army_num == 9030 ) { server = "https://76azup5d8b.execute-api.us-east-1.amazonaws.com/default/army_9030"}
  if ( army_num == 8902 ) { server = "https://ge6bewzau9.execute-api.us-east-1.amazonaws.com/default/army_8902"}
  if ( army_num == 8623 ) { server = "https://i4xt1lclpd.execute-api.us-east-1.amazonaws.com/default/army_8623"}
  if ( army_num == 6335 ) { server = "https://bqh00dsun0.execute-api.us-east-1.amazonaws.com/default/army_6335"}
  if ( army_num == 6282 ) { server = "https://2d4701k3qj.execute-api.us-east-1.amazonaws.com/default/army_6282"}
  if ( army_num == 6176 ) { server = "https://vnr4ytgmrg.execute-api.us-east-1.amazonaws.com/default/army_6176"}
  if ( army_num == 5322 ) { server = "https://pnbmenb1w7.execute-api.us-east-1.amazonaws.com/default/army_5322"}
  if ( army_num == 5021 ) { server = "https://sq5674wavh.execute-api.us-east-1.amazonaws.com/default/army_5021"}
  if ( army_num == 3389 ) { server = "https://vkc4iwqqfd.execute-api.us-east-1.amazonaws.com/default/army_3389"}
  if ( army_num == 3296 ) { server = "https://q9213qoy13.execute-api.us-east-1.amazonaws.com/default/army_3296"}
  if ( army_num == 2171 ) { server = "https://xist3bhhbj.execute-api.us-east-1.amazonaws.com/default/army_2171"}
  if ( army_num == 1691 ) { server = "https://b8081yk5aa.execute-api.us-east-1.amazonaws.com/default/army_1691"}
  if ( army_num == "ATC" ) { server = "https://09gtxv1jc2.execute-api.us-east-1.amazonaws.com/default/army_ATC"}


  var result = []
  result = http.getUrl( server, {format : 'json'} )
 


  console.log(result["2021-06-01"]["brst"]) 
  var dates_num = result.length


  return result["2021-06-01"]
}

  // if ( army_num == 7652 ) { army_num = "7652"}
  // if ( army_num == 7369 ) { army_num = "7369"}
  // if ( army_num == 9030 ) { army_num = "7369"}
  // if ( army_num == 8902 ) { army_num = "8902"}
  // if ( army_num == 8623 ) { army_num = "8623"}
  // if ( army_num == 6335 ) { army_num = "6335"}
  // if ( army_num == 6282 ) { army_num = "6282"}
  // if ( army_num == 6176 ) { army_num = "6176"}
  // if ( army_num == 5322 ) { army_num = "5322"}
  // if ( army_num == 5021 ) { army_num = "5021"}
  // if ( army_num == 3389 ) { army_num = "3389"}
  // if ( army_num == 5021 ) { army_num = "5021"}