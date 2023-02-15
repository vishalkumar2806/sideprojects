




const generator = (tParts: number ) => {
  var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZ";
  var totalCodes = Array();
  var stringArr = "";
  for (var i = 0; i < tParts; i++) {
    var stringArray = Array();
    for (var j = 0; j < 3; j++) {
        var stringChar = "";
        for (var k = 0; k < 4; k++) {
            var rnum = Math.floor(Math.random() * chars.length);
            stringChar += chars.substring(rnum, rnum + 1);
        }
        stringArray.push(stringChar);
    }
    stringArray.push('XXXX')
    var genCodes = stringArray.join('-');
    totalCodes.push(genCodes);
  }
  return totalCodes;
};

export default generator;
