module.exports.function = function httpCall (army_num, find, date_input,select_Time, week, month, myDateTimeExpression){
  
  function numberPad(n, width) {
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join('0') + n;
} 


  var dates = require('dates')
  var http = require('http')
  var console = require('console')
  var Today = new dates.ZonedDateTime("Asia/Seoul")
  //var Today = today.getDateTime()
  // console.log("TODAY", today)
  // console.log(typeof(Today))
  console.log("제발",Today.getYear())



  // 날짜발화 => startday, endday로 바꿔주는 코드입니다.
  // 일주일, 공휴일, 하루 치 등 각각의 상황마다 데이터 구조가 달라서 그에 맞게 코드 작성함.
  //1주일치 ex) 다음주start ok end year,month x , 다다음주 end year = x 
  if(myDateTimeExpression){ //오늘, 내일, 다음주 와 같은 사용자 발화가 있다면? 코드 실행
    if ( myDateTimeExpression.dateInterval ){ var S_year = myDateTimeExpression.dateInterval.start.year,
  S_month = myDateTimeExpression.dateInterval.start.month,
  S_day = myDateTimeExpression.dateInterval.start.day
  if ( myDateTimeExpression.dateInterval.end.year) {E_year = myDateTimeExpression.dateInterval.end.year}
  else{E_year = myDateTimeExpression.dateInterval.start.year}
  if ( myDateTimeExpression.dateInterval.end.month) {E_month = myDateTimeExpression.dateInterval.end.month}
  else{E_month = myDateTimeExpression.dateInterval.start.month}
  E_day = myDateTimeExpression.dateInterval.end.day
  Startday = S_year + "-" + numberPad(S_month,2) + "-" + numberPad(S_day,2)
  Endday = E_year + "-" + E_month + "-" + E_day
  console.log("다음주, 다다음주, 다음달")
  }
  //내일모레
  else if ( !myDateTimeExpression.dateInterval ){ var S_year = myDateTimeExpression.date.year,
  S_month = myDateTimeExpression.date.month,
  S_day = myDateTimeExpression.date.day,
  Startday = S_year + "-" + numberPad(S_month,2) + "-" + numberPad(S_day,2)
  Endday = Startday
  console.log("내일모레") }
  //저번주 월
  else if ( myDateTimeExpression.date.parseTree.contextDateInterval ){ var S_year = myDateTimeExpression.date.year,
  S_month = myDateTimeExpression.date.parseTree.contextDateInterval.start.month,
  S_day = myDateTimeExpression.date.parseTree.contextDateInterval.start.day,
  Startday = S_year + "-" + numberPad(S_month,2) + "-" + numberPad(S_day,2)
  Endday = Startday 
  console.log("저번주 월")}
  //현충일, 크리스마스
  else if ( myDateTimeExpression.date.parseTree.holiday ){ var S_year = myDateTimeExpression.date.year,
  S_month = myDateTimeExpression.date.month,
  S_day = myDateTimeExpression.date.day,
  Startday = S_year + "-" + numberPad(S_month,2) + "-" + numberPad(S_daymonth,2)
  Endday = Startday 
  console.log("현충일")}} else{ var S_year = Today.getYear(), //else => 날짜 사용자발화가 없는 경우: 오늘 날짜 출력
  S_month = Today.getMonth(),
  S_day = Today.getDay(),
  Endday = Startday
  Startday = S_year + "-" + numberPad(S_month,2) + "-" + numberPad(S_day,2)
  Endday = Startday 
  console.log("날짜발화 없음")}


  console.log(Startday,Endday)

  //var Date = myDateTimeExpression.date

  
  //console.log(myDateTimeExpression)



 

  if (select_Time == "Select_Brst"){Select_Time = "brst"}
  if (select_Time == "Select_Lunc"){Select_Time = "lunc"}
  if (select_Time == "Select_Dinr"){Select_Time = "dinr"}

  var result = []
  server = "https://4a90fkpez2.execute-api.us-east-1.amazonaws.com/default/army-memu"
   
  var options = { 
  format: 'json',
  query: {
    'start' : Startday,
    'end': Endday,
    'army' : army_num
  }
};    

  result = http.getUrl( server,options )
  console.log(Startday)
  // if (Startday == Endday ){ //단일 날짜일 경우,
  //   if (Select_Time){result = result[0][Select_Time]
  //   console.log("최종값", result)
  //   return result} //아,점, 저 중 하나 있으면 출력 
  // else {
  //   console.log("그외 식단")
  //   console.log("최종값", result)
  //   return result}} //아,점,저 없을 경우 그외 모든 식단 출력
  // else {
  //   console.log("한달치")
  //   console.log("최종값", result)
  //   return result} //단일 날짜가 아닐 경우에는 모든 데이터 가져와
  console.log(select_Time)

  // if (Startday == Endday ){result.push({Days : 1})}
  // else{result.push({Days : 2})}

  // if (Select_Time){result.push({Select_Time : select_Time})}
  // else{result.push({Select_Time : "Null"})}
  console.log("최종값", result);
  
  return result
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