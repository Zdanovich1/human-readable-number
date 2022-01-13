module.exports = function toReadable(number) {
   let a = number % 10;
   let b = (number - a) % 100;
   let c = (number - b - a);

   let units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

   let upToTwenty = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

   let dozens = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

   let hundreds = ['one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred'];

   if (dozens[(b / 10) - 1] == undefined && hundreds[(c / 100) - 1] == undefined) {
      return units[a];
   }
   else if (dozens[(b / 10) - 1] == undefined && units[a] == 'zero') {
      return hundreds[(c / 100) - 1];
   }
   else if (dozens[(b / 10) - 1] == undefined) {
      return hundreds[(c / 100) - 1] + ' ' + units[a];
   }
   else if (hundreds[(c / 100) - 1] == undefined && 11 <= (number - c) && (number - c) <= 19) {
      return upToTwenty[a];
   }
   else if (hundreds[(c / 100) - 1] == undefined && units[a] == 'zero') {
      return dozens[(b / 10) - 1];
   }
   else if (hundreds[(c / 100) - 1] == undefined) {
      return dozens[(b / 10) - 1] + ' ' + units[a];
   }
   else if (11 <= (number - c) && (number - c) <= 19) {
      return hundreds[(c / 100) - 1] + ' ' + upToTwenty[a];
   }
   else if (units[a] == 'zero') {
      return hundreds[(c / 100) - 1] + ' ' + dozens[(b / 10) - 1];
   }
   else {
      return hundreds[(c / 100) - 1] + ' ' + dozens[(b / 10) - 1] + ' ' + units[a];
   }
}
