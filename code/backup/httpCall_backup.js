// //20191021 httpCall.js 변경
// module.exports.function = function httpCall (inputDate, kinds, find){




//   var http = require('http')
//   var console = require('console')
//   var results = []
//   //results는 결과값을 담을 리스트

//   var results1 = http.getUrl("https://openapi.mnd.go.kr/3331313332343635353437343432313337/xml/DS_TB_MNDT_DATEBYMLSVC_7652/1/5/")
//   // 서비스키 : 3331313332343635353437343432313337
//   // http url 설명 1) https://openapi.mnd.go.kr/서비스키/xml(데이터형식)/DS_TB_MNDT_DATEBYMLSVC_7652(부대)/1(1페이지)/5(5페이지)/
  
//   // *1* API 호출 시도해 본 방법 1 : 이대로 불러오면 데이터는 불러와지는데, type이 string으로 나와서 데이터에 세부적으로 접근 불가?
//   // => 또하나의 가족의 경우에는 api 호출시 데이터 형식 찍어보면 xml이라고 나옴, 그런데 국방식단표 데이터 형식 찍어보니 string형식
 
 
//     console.log(typeof(results1)) 
//   // 이거 stirng 나옴


//   // *2* 그래서 아래에 코드를 사용해서 string => xml 변환해보려고 함 (구글링해서 찾아봤어)
//  // 2021.5.24

// //   function getXmlFromString(xmlStr) {
// //     var parseXml; 

// //     if (window.DOMParser) {
// //         var dp = new window.DOMParser();
// //         return dp.parseFromString(xmlStr, "text/xml");
// //     } else if (typeof window.ActiveXObject != "undefined" 
// //         && new window.ActiveXObject("Microsoft.XMLDOM")) {
// //         var xmlDoc = new window.ActiveXObject("Microsoft.XMLDOM");
// //         xmlDoc.async = "false";
// //         xmlDoc.loadXML(xmlStr);
        
// //         return xmlDoc;
// //     }

// //     return null;
// // }


// // *3* *2*의 방법도 안 돼서 또하나의 가족 때 사용한 options 코드를 넣어보려고함 => 근데 내가 못하는 건지 잘 안됨.


//   // var results = http.getUrl("https://openapi.mnd.go.kr/", options)
//   // 부대 종류 : 7689,3389,2171, ATC(육군훈련소)
//   // API 호출 시도해 본 방법 2 : 그래서 동물 보호소 api 호출하는것 처럼 해보려고함. 여기서 막힘 

//   //  var options = { 
//   //   query: {
//   //     Key : 3331313332343635353437343432313337,
//   //     TYPE : xml,
//   //     START_INDEX : 1,
//   //     END_INDEX : 5,
//   //     SERVICE : DS_TB_MNDT_DATEBYMLSVC_7652 }
//       //요청인자, 엑셀 파일 참고 
    
   

//   const Date = {};
//   for (let i = 1; i < 32; i++) {
//   Date[i] = [];
// }
// // 달력 만들어서 해볼까 고민해봤음, 근데 데이터 불러오는 것 부터가 문제... 

// // var options= {
// //     format: 'xmljs',
// //     returnHeader : true,
// //     query: {
// //     bgnde : inputDate.bgnde_Convert,
// //     endde : inputDate.endde_Convert,
// //     pageNo : 1,
// //     upr_cd : location,
// //     org_cd : subLocation,
// //     upkind: kinds,
// //     state: '',
// //     kind: kindN, //동물의 종류 
// //     numOfRows: 50}//
// //   }
// //     var results = http.getUrl("http://openapi.animal.go.kr/openapi/service/rest/abandonmentPublicSrvc/abandonmentPublic?serviceKey=" + ServiceKey, options)

// // => 이거는 그냥 동물 보호소 api 호출한 코드를 참고하려고 써놓은거임 

//   console.log(typeof(results))
//   //console.log(results)
//   console.log(typeof(results.DS_TB_MNDT_DATEBYMLSVC_7652.row))
//   console.log(results.DS_TB_MNDT_DATEBYMLSVC_7652.row)
  
  
//   return results.DS_TB_MNDT_DATEBYMLSVC_7652.row
// }

// //results.result.response.body.items.item



// //** Json구조 만들기 포기

// var Brst = new Array()
// var Lunc = new Array()
// var Dinr = new Array()
// var Dates = new Array()
// // for (var i = 1; i < 32; i++){
// //   for (var j = 0; j < List_TC; j++){ 
// //      ;
// //     // ****문제 : 1일은 6개 2일은 7개 즉 2일 날짜 전까지 해야함.
// //     //그럼 1만 찾지말고 2까지 찾아서..? ㄱㄱ 
// //     //console.log(i,j)
// //     var k = i + 1 ;
// //     if (parseInt(result['DS_TB_MNDT_DATEBYMLSVC_'+ String(army_num)]['row'][j]["dates"].substring(8,10)) == i ){
// //       var row1 = j
// //     }
// //     // 첫번째 6/1일이 들어있는 row
// //     if(parseInt(result['DS_TB_MNDT_DATEBYMLSVC_'+ String(army_num)]['row'][j]["dates"].substring(8,10)) == k ) {
// //         //console.log(parseInt(result['DS_TB_MNDT_DATEBYMLSVC_'+ String(army_num)]['row'][j]["dates"].substring(8,10)), i)
// //        // 두 번째 6/2일이 들어있는 row 
       
// //         var row2 = j // j번째 row를 저장
// //         var results = new Object()
// //         Dates.push(String(2021) + String(numberPad(6, 2)) + String(numberPad(i, 2)))
// //         //results.dates = String(2021) + String(06) + String(numberPad(i, 2))
// //         //console.log(results.dates)
// //         for (var row3 = row2 - row1  ; row3 > 0 ; row3--) {
          
// //           Brst.push(result['DS_TB_MNDT_DATEBYMLSVC_'+ String(army_num)]['row'][row1+ row3]["brst"])
// //           Lunc.push(results[ "lunc" + row3 ]  = result['DS_TB_MNDT_DATEBYMLSVC_'+ String(army_num)]['row'][row1+ row3]["lunc"])
// //           Dinr.push(results[ "dinr" + row3 ]  = result['DS_TB_MNDT_DATEBYMLSVC_'+ String(army_num)]['row'][row1+ row3]["dinr"])
          
// //         }
// //             //console.log("ok", i,j)
// //       } //else (result['DS_TB_MNDT_DATEBYMLSVC_'+ String(army_num)]['row'][i]= '데이터없음')
// //     }
// // Dates.push(Brst)
// // Menu.push(Dates)}



// //2021 06 09 임시저장
// // 우리 입맛 json 만들기!!!
// // ****문제 : 1일은 row가 6개까지 들어가고 2일은 row가 7개까지 들어감. 어떤 일자는 8개 까지도 들어감
// // 그렇게 되면 1일 식단(row1~6, 6개) 2일 식단(row7~13, 7개) 등 불규칙하게 데이터를 불러오게 됨. 
// // => 생각한 아이디어 => 2일식단 row 번호 - 1일 식단 row 번호 를 계산하자.
// // ex) 2일 시작 row = 7, 1일 시작 row = 1 
// // 7-1 = 6, 6만큼 for문 돌리기 

// // But! 생각한 아이디어의 문제 : 맨 마지막은 어떻게 처리하지? 
// // 일단 발생할 문제는 제외하고 직접 미천하게 나마 짜봤음.
// var Menu = new Array()


// for (var i = 1; i < 32; i++){ //*31일 까지
//   for (var j = 0; j < List_TC; j++){ //불러온 row 데이터의 갯수(날짜 데이터 찾기위해 모든 데이터를 훑어봄)
//      ;


//     console.log(result['DS_TB_MNDT_DATEBYMLSVC_'+ String(army_num)]['row'][j]["dates"],i,j) //*디버깅하려고 해놓은거
    
//     var k = i + 1 ; // i = 1일차, k = 2일차
//     if (parseInt(result['DS_TB_MNDT_DATEBYMLSVC_'+ String(army_num)]['row'][j]["dates"].substring(8,10)) == i ){
//       var row1 = j //*모든 row 데이터 살피면서 날짜 데이터 찾고, 2021-06-01 중 01 == 01(i값) 일치하면 row1에 j(row 위치) 값 저장
//       console.log("1조건")
    
//       // console.log(result['DS_TB_MNDT_DATEBYMLSVC_'+ String(army_num)]['row'][j]["dates"], j)
//       // console.log(parseInt(result['DS_TB_MNDT_DATEBYMLSVC_'+ String(army_num)]['row'][j]["dates"].substring(8,10)), i)
//     }
    
//     if(parseInt(result['DS_TB_MNDT_DATEBYMLSVC_'+ String(army_num)]['row'][j]["dates"].substring(8,10)) == k ) {
//         console.log("2조건")
//         var row2 = j 
//     //*모든 row 데이터 살피면서 날짜 데이터 찾고, 2021-06-02 중 02 == 02(k값) 일치하면 row1에 j(row 위치) 값 저장
       
//         // console.log(result['DS_TB_MNDT_DATEBYMLSVC_'+ String(army_num)]['row'][j]["dates"], j)
//         // console.log(parseInt(result['DS_TB_MNDT_DATEBYMLSVC_'+ String(army_num)]['row'][j]["dates"].substring(8,10)), i,k)
       
//         //*입맛 따라 JSoN 데이터 만들기
//         var results = new Object() 
//         results.dates = String(2021) + String(numberPad(6, 2)) + String(numberPad(i, 2)) //*날짜 먼저 저장
//         console.log(results.dates)
//         for (var row3 = row2 - row1  ; row3 > 0 ; row3--) { //*row2, row1 차이만큼 for문 돌려서 식단 가져옴.
          
//           results[ "brst" + row3 ]  = result['DS_TB_MNDT_DATEBYMLSVC_'+ String(army_num)]['row'][row1+ row3]["brst"]
//           results[ "lunc" + row3 ]  = result['DS_TB_MNDT_DATEBYMLSVC_'+ String(army_num)]['row'][row1+ row3]["lunc"]
//           results[ "dinr" + row3 ]  = result['DS_TB_MNDT_DATEBYMLSVC_'+ String(army_num)]['row'][row1+ row3]["dinr"]
          
//         }
//             //console.log("ok", i,j)
//       } //else (result['DS_TB_MNDT_DATEBYMLSVC_'+ String(army_num)]['row'][i]= '데이터없음')
//     }
// Menu.push(results)} // Menu에 식단 저장


// 서비스키 : 3331313332343635353437343432313337
 // army_num 코드 추가 20210607

  //총 리스트 갯수
  // var List_TC = Object.keys(result['DS_TB_MNDT_DATEBYMLSVC_'+ String(army_num)]['row']).length 
  // console.log("list_total_count =", List_TC)

  // //Value Compilation Error: IllegalConcept 해결
  // var Key_VC = Object.keys(result['DS_TB_MNDT_DATEBYMLSVC_'+ String(army_num)]['row'][1])
  // console.log("test1", Key_VC)
  // console.log("test1.5", Key_VC.length)
  // console.log("test1.7",result['DS_TB_MNDT_DATEBYMLSVC_'+ String(army_num)]['row'][0][String(Key_VC[0])] )
  



  // for(var i = 0; i < List_TC ; i++) { 
  //         for(var j = 0; j < Key_VC.length ; j++) {
  //           try { if (!result['DS_TB_MNDT_DATEBYMLSVC_'+ String(army_num)]['row'][i][String(Key_VC[j])]) {
  //           result['DS_TB_MNDT_DATEBYMLSVC_'+ String(army_num)]['row'][i][String(Key_VC[j])] = '없음'
  //                     }
  //                   } catch(e){result['DS_TB_MNDT_DATEBYMLSVC_'+ String(army_num)]['row'][i] = '데이터없음'}
                  
  //               }
  //             }
 



  // for(var i = 0; i < List_TC ; i++) { 
  //   for(var j = 0; j < Key_VC.length ; j++) {
  //      if (!result['DS_TB_MNDT_DATEBYMLSVC_'+ String(army_num)]['row'][i][String(Key_VC[j])]) {
  //         //console.log("hi", i,j)
  //         result['DS_TB_MNDT_DATEBYMLSVC_'+ String(army_num)]['row'][i][String(Key_VC[j])] = '없음'
  //         //console.log("ok", i,j)
  //    } //else (result['DS_TB_MNDT_DATEBYMLSVC_'+ String(army_num)]['row'][i]= '데이터없음')
  //   }
  // }
 
         
 
//   console.log("test2",result['DS_TB_MNDT_DATEBYMLSVC_'+ String(army_num)]['row'][1]['sum_cal'])

//   //*달력 만들기
//   const Date = {};
//   for (let i = 1; i < 32; i++) {
//   Date[i] = [];
// }


// var Menu = new Array()


// for (var j = 0; j < List_TC; j++){ //불러온 row 데이터의 갯수(날짜 데이터 찾기위해 모든 데이터를 훑어봄)
//      ;
//     console.log(result['DS_TB_MNDT_DATEBYMLSVC_'+ String(army_num)]['row'][j]["dates"],i,j) //*디버깅하려고 해놓은거
    
//     var k = parseInt(result['DS_TB_MNDT_DATEBYMLSVC_'+ String(army_num)]['row'][j]["dates"].substring(8,10)) + 1
//     if (result['DS_TB_MNDT_DATEBYMLSVC_'+ String(army_num)]['row'][j]["dates"]!= "없음"){
//       results.dates = result['DS_TB_MNDT_DATEBYMLSVC_'+ String(army_num)]['row'][j]["dates"]
//       var row1 = j //*모든 row 데이터 살피면서 날짜 데이터 찾고, 2021-06-01 중 01 == 01(i값) 일치하면 row1에 j(row 위치) 값 저장
//       console.log("1조건")
    
//       // console.log(result['DS_TB_MNDT_DATEBYMLSVC_'+ String(army_num)]['row'][j]["dates"], j)
//       // console.log(parseInt(result['DS_TB_MNDT_DATEBYMLSVC_'+ String(army_num)]['row'][j]["dates"].substring(8,10)), i)
//     }
    
//     if(parseInt(result['DS_TB_MNDT_DATEBYMLSVC_'+ String(army_num)]['row'][j]["dates"].substring(8,10)) == k ) {
//         console.log("2조건")
//         var row2 = j 
    
//         var results = new Object() 
//         results.dates = String(2021) + String(numberPad(6, 2)) + String(numberPad(i, 2)) //*날짜 먼저 저장
//         console.log(results.dates)
//         for (var row3 = row2 - row1  ; row3 > 0 ; row3--) { //*row2, row1 차이만큼 for문 돌려서 식단 가져옴.
          
//           results[ "brst" + row3 ]  = result['DS_TB_MNDT_DATEBYMLSVC_'+ String(army_num)]['row'][row1+ row3]["brst"]
//           results[ "lunc" + row3 ]  = result['DS_TB_MNDT_DATEBYMLSVC_'+ String(army_num)]['row'][row1+ row3]["lunc"]
//           results[ "dinr" + row3 ]  = result['DS_TB_MNDT_DATEBYMLSVC_'+ String(army_num)]['row'][row1+ row3]["dinr"]
          
//         }
//             //console.log("ok", i,j)
//       } //else (result['DS_TB_MNDT_DATEBYMLSVC_'+ String(army_num)]['row'][i]= '데이터없음')
//     }
// Menu.push(results) // Menu에 식단 저장




  // for(var i = 0; i < Menu.length ; i++) { 
  //   for(var j = 0; j < Menu[i].length ; j++) {
  //      if (!Menu[i]) {
  //         //console.log("hi", i,j)
  //         result['DS_TB_MNDT_DATEBYMLSVC_'+ String(army_num)]['row'][i][String(Key_VC[j])] = '없음'
  //         //console.log("ok", i,j)
  //    } //else (result['DS_TB_MNDT_DATEBYMLSVC_'+ String(army_num)]['row'][i]= '데이터없음')
  //   }
  // }

//20210614 백업
// module.exports.function = function httpCall (army_num, find, date_input){
  
//   function numberPad(n, width) {
//     n = n + '';
//     return n.length >= width ? n : new Array(width - n.length + 1).join('0') + n;
// } 
//   var http = require('http')
//   var console = require('console')


//   if ( army_num == 7652 ) { server = "https://miumvsnz2c.execute-api.us-east-1.amazonaws.com/default/army_7652"}
//   if ( army_num == 7369 ) { server = "https://ss9g58rl46.execute-api.us-east-1.amazonaws.com/default/army_7369"}
//   if ( army_num == 9030 ) { server = "https://76azup5d8b.execute-api.us-east-1.amazonaws.com/default/army_9030"}
//   if ( army_num == 8902 ) { server = "https://ge6bewzau9.execute-api.us-east-1.amazonaws.com/default/army_8902"}
//   if ( army_num == 8623 ) { server = "https://i4xt1lclpd.execute-api.us-east-1.amazonaws.com/default/army_8623"}
//   if ( army_num == 6335 ) { server = "https://bqh00dsun0.execute-api.us-east-1.amazonaws.com/default/army_6335"}
//   if ( army_num == 6282 ) { server = "https://2d4701k3qj.execute-api.us-east-1.amazonaws.com/default/army_6282"}
//   if ( army_num == 6176 ) { server = "https://vnr4ytgmrg.execute-api.us-east-1.amazonaws.com/default/army_6176"}
//   if ( army_num == 5322 ) { server = "https://pnbmenb1w7.execute-api.us-east-1.amazonaws.com/default/army_5322"}
//   if ( army_num == 5021 ) { server = "https://sq5674wavh.execute-api.us-east-1.amazonaws.com/default/army_5021"}
//   if ( army_num == 3389 ) { server = "https://vkc4iwqqfd.execute-api.us-east-1.amazonaws.com/default/army_3389"}
//   if ( army_num == 3296 ) { server = "https://q9213qoy13.execute-api.us-east-1.amazonaws.com/default/army_3296"}
//   if ( army_num == 2171 ) { server = "https://xist3bhhbj.execute-api.us-east-1.amazonaws.com/default/army_2171"}
//   if ( army_num == 1691 ) { server = "https://b8081yk5aa.execute-api.us-east-1.amazonaws.com/default/army_1691"}
//   if ( army_num == "ATC" ) { server = "https://09gtxv1jc2.execute-api.us-east-1.amazonaws.com/default/army_ATC"}


//   var result = []
//   result = http.getUrl( server, {format : 'json'} )
 


//   console.log(result["2021-06-01"]["brst"]) 
//   var dates_num = result.length


//   return result["2021-06-01"]
// }


//  if ( army_num == 7652 ) { server = "https://miumvsnz2c.execute-api.us-east-1.amazonaws.com/default/army_7652"}
//   if ( army_num == 7369 ) { server = 'https://e36qpwpto2.execute-api.us-east-1.amazonaws.com/default/army_7369'}
//   if ( army_num == 9030 ) { server = "https://cuj41rvdei.execute-api.us-east-1.amazonaws.com/default/army_9030"}
//   if ( army_num == 8902 ) { server = "https://46szavn3ee.execute-api.us-east-1.amazonaws.com/default/army_8902"}
//   if ( army_num == 8623 ) { server = "https://99gd1d8u39.execute-api.us-east-1.amazonaws.com/default/army_8623"}
//   if ( army_num == 6335 ) { server = "https://lg7fo4cmwi.execute-api.us-east-1.amazonaws.com/default/army_6335"}
//   if ( army_num == 6282 ) { server = "https://pxz375yxse.execute-api.us-east-1.amazonaws.com/default/army_6282"}
//   if ( army_num == 6176 ) { server = "https://d43zasyz71.execute-api.us-east-1.amazonaws.com/default/army_6176"}
//   if ( army_num == 5322 ) { server = "https://atrtruhes0.execute-api.us-east-1.amazonaws.com/default/army_5322"}
//   if ( army_num == 5021 ) { server = "https://hcdqo0bmx9.execute-api.us-east-1.amazonaws.com/default/army_5021"}
//   if ( army_num == 3389 ) { server = "https://vod5yhwpma.execute-api.us-east-1.amazonaws.com/default/army_3389"}
//   if ( army_num == 3296 ) { server = "https://gh0yroyg3e.execute-api.us-east-1.amazonaws.com/default/army_3296"}
//   if ( army_num == 2171 ) { server = "https://b3iuztziq3.execute-api.us-east-1.amazonaws.com/default/army_2171"}
//   if ( army_num == 1691 ) { server = "https://6s2xklt20m.execute-api.us-east-1.amazonaws.com/default/army_1691"}
//   if ( army_num == "ATC" ) { server = "https://b52fsbboai.execute-api.us-east-1.amazonaws.com/default/army_ATC"}


//20210619
//json에 date 추가하려고 시도했던 코드(망함)
// console.log("test1",result)
  // console.log("test2",result[0])
  // console.log("test3",result.length)
  // var results = new Object()
  // Date_Keys = Object.keys(result)
  // console.log('데이트키',Date_Keys)
  // console.log(Date_Keys[0])
  // console.log(Date_Keys.length)  

  // console.log("test1",test[0])

  // console.log("test3",result.length)

  // var resultlist = new Array()
  // for (var i = 0; i < Date_Keys.length; i++) {
  //   console.log("for1", i, Date_Keys[i])
  //   console.log(result[Date_Keys[i]])
  //   results.Dates = (Date_Keys[i])
  //   results["Dates"][Dates.Date_Keys[i]] = result[Date_Keys[i]]
  //   resultlist.push(results)
    
  //  }

//  for (var i = 0; i < Date_Keys.length; i++) {
//     console.log("for1", i, Date_Keys[i])
//     //console.log(result[Date_Keys[i]])
//     results.Dates = (Date_Keys[i])
//     results.Dates.Menu = result[Date_Keys[i]]
//     resultlist.push(results)
//     //resultslist[Dates.Date_Keys[i]] = result[Date_Keys[i]]
    
    
//    }


  // console.log("결과값", resultlist)


  // if (Startday == Endday ){ //단일 날짜일 경우,
  //   if (Select_Time){result = result[Startday][Select_Time]
  //   var Case = 1
  //   // result.Case = "1"
  //   console.log("최종값", result)
  //   return result} //아,점, 저 중 하나 있으면 출력 
  // else {
  //   console.log("그외 식단")
  //   var Case = 1
  //   // result["Case"] = "2"
  //   console.log("최종값", result)
  //   return result}} //그외 모든 식단 출력
  // else {
  //   console.log("한달치")
  //   var Case = 3
  //   // result["Case"] = "3"
  //   console.log("최종값", result)
  //   return result} //단일 날짜가 아닐 경우에는 모든 데이터 가져와


  //console.log(typeof(result)) 
  //var dates_num = result.length