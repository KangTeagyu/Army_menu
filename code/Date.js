module.exports.function = function (dateTimeExpression) {
  var console = require('console')
  console.log("dateTimeExpression:", dateTimeExpression)
  if (dateTimeExpression.dateInterval) {
    return {
      start: dateTimeExpression.dateInterval.start,
      end: dateTimeExpression.dateInterval.end
    }
  }
  if (dateTimeExpression.dateTimeInterval) {
    return {
      start: dateTimeExpression.dateTimeInterval.start.date,
      end: dateTimeExpression.dateTimeInterval.end.date
    }
  }
  if (dateTimeExpression.date) {
    //using same date for both start and end. This is not a valid case,should throw checkedError
    return {
      start: dateTimeExpression.date,
      end: dateTimeExpression.date
    }
  }
  return null //TODO handle error cases
}

//날짜 처리 관련 코드임
//https://bixbydevelopers.com/dev/docs/dev-guide/developers/library.datetime 참고