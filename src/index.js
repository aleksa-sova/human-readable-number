module.exports = function toReadable (number) {
    
    let xStr = number.toString();
    let result = '';
    let numTwo = Number(xStr.substr(xStr.length - 2, 2));

    numTwo < 20 ? numTwo = firstNum(numTwo) : numTwo = secondNum(numTwo);
    
    function firstNum(y) {
    y.toString()[0] === 0 ? y = y.toString().subStr(1) : y = y;

    switch (y) {
      case 0: return '';
        break;
      case 1: return 'one';
        break;
      case 2: return 'two';
        break;
      case 3: return 'three';
        break;
      case 4: return 'four';
        break;
      case 5: return 'five';
        break;
      case 6: return 'six';
        break;
      case 7: return 'seven'; 
        break;
      case 8: return 'eight';
        break;
      case 9: return 'nine';
        break;
      case 10: return 'ten';    
        break; 
      case 11: return 'eleven';  
        break;
      case 12: return 'twelve';
        break;
      case 13: return 'thirteen';
        break;
      case 14: return 'fourteen';
        break;
      case 15: return 'fifteen';
         break;  
      case 16: return 'sixteen';
        break; 
      case 17: return 'seventeen';
        break;
      case 18: return 'eighteen';
        break;
      case 19: return 'nineteen';  
        break;
    }
  }
  
  function secondNum(y) {
      let q = '';
      const g = firstNum(Number(y.toString()[1]));
      if (g) {
        q = ' ' + g;
      }
      let x = '';
      
    switch (Number(y.toString()[0])) {
      case 2: x = 'twenty';
        break;
      case 3: x = 'thirty';
        break;
      case 4: x = 'forty';
        break;
      case 5: x = 'fifty';
        break;
      case 6: x = 'sixty';
        break;
      case 7: x = 'seventy'; 
        break;
      case 8: x = 'eighty';
        break;
      case 9: x = 'ninety';
        break;
    }
      return x + q;
  }

    if (xStr.length === 3) {
        numTwo === '' ? result = firstNum(Number(xStr[0])) + ' hundred' : result = firstNum(Number(xStr[0])) + ' hundred ' + numTwo;
    } else if (x === 0) {
    } else if (number === 0) {
      result = 'zero';
    } else if (xStr.length <= 2) {
      result = numTwo;
    } else {
      result = '';
    }
    
    return result;
}











// module.exports = function toReadable (number) {
//    const firstNum = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
//    const secondNum = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
//    const tens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
//    const numStr = String(number).split('');
//    let str = '';

//    if (numStr.length === 1) {
//        numStr.unshift('0', '0');
//    }else if (numStr.length === 2) {
//        numStr.unshift('0');
//    }

//    if (number === 0) {
//        str += 'zero';
//    };
//    switch (numStr[0]) {
//        case '1':
//            str += firstNum[0] + ' hundred ';
//            break;
//        case '2':
//            str += firstNum[1] + ' hundred ';
//            break;
//        case '3':
//             str += firstNum[2] + ' hundred ';
//             break;
//         case '4':
//             str += firstNum[3] + ' hundred ';
//             break;
//        case '5':
//             str += firstNum[4] + ' hundred ';
//             break;
//        case '6':
//             str += firstNum[5] + ' hundred ';
//             break;
//    }
// }


// let toReadable = n => {
//     let a = [
//       '', 'one', 'two', 'three', 'four',
//       'five', 'six', 'seven', 'eight', 'nine',
//       'ten', 'eleven', 'twelve', 'thirteen', 'fourteen',
//       'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
//     ];
//     let b = [
//       '', '', 'twenty', 'thirty', 'forty',
//       'fifty', 'sixty', 'seventy', 'eighty', 'ninety'
//     ];
//     let g = [
//       '', 'thousand'
//     ];
    
//     let makeGroup = ([ones,tens,huns]) => {
//       return [
//         num(huns) === 0 ? '' : a[huns] + ' hundred ',
//         num(ones) === 0 ? b[tens] : b[tens] && b[tens] + '-' || '',
//         a[tens+ones] || a[ones]
//       ].join('');
//     };
    
    
//     if (typeof n === 'number') return toReadable(String(n));
//     if (n === '0')             return 'zero';
//     return comp (chunk(3)) (reverse) (arr(n))
//       .map(makeGroup)
//       .filter(comp(not)(isEmpty))
//       .reverse()
//       .join(' ');
//   };


 // var a = ['','one ','two ','three ','four ', 'five ','six ','seven ','eight ','nine ','ten ','eleven ','twelve ','thirteen ','fourteen ','fifteen ','sixteen ','seventeen ','eighteen ','nineteen '];
    // var b = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];
    
    // function toReadable (number) {
    //     if ((number = number.toString()).length > 9) return 'overflow';
    //     n = ('000000000' + number).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
    //     if (!n) return; var str = '';
    //     str += (n[1] != 0) ? (a[Number(n[1])] || b[n[1][0]] + ' ' + a[n[1][1]]) + 'crore ' : '';
    //     str += (n[2] != 0) ? (a[Number(n[2])] || b[n[2][0]] + ' ' + a[n[2][1]]) + 'lakh ' : '';
    //     str += (n[3] != 0) ? (a[Number(n[3])] || b[n[3][0]] + ' ' + a[n[3][1]]) + 'thousand ' : '';
    //     str += (n[4] != 0) ? (a[Number(n[4])] || b[n[4][0]] + ' ' + a[n[4][1]]) + 'hundred ' : '';
    //     str += (n[5] != 0) ? ((str != '') ? 'and ' : '') + (a[Number(n[5])] || b[n[5][0]] + ' ' + a[n[5][1]]) : '';
    //     return str;
    // }
    
    // document.getElementById('number').onkeyup = function () {
    //     document.getElementById('words').innerHTML = inWords(document.getElementById('number').value);
    // };
