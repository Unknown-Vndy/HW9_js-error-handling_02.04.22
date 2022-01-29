'use strict';


try {
   // console.log(pow('s', 2));
   // console.log(pow(2, 's'));
   // console.log(pow(2, 2.5));
   // console.log(pow(2, -2));
   console.log(pow(2, 2));
} catch (error) {
   console.log(error);
}


function pow(base, exponent) {
   if (typeof base !== 'number' || typeof exponent !== 'number') {
      throw new TypeError('base and exponent have to be numbers');
   }
   if (!Number.isInteger(exponent)) {
      throw new RangeError('exponent has to be an integer number');
   }
   if (exponent === 0 && base !== 0) {
      return 1;
   }
   if (exponent < 1) {
      throw new RangeError('exponent has to be a positive number');
   }


   if (exponent === NaN) {
      return NaN;
   }
   if (base === NaN) {
      return NaN;
   }


   if (exponent === 1) {
      return base;
   } else {
      return base * pow(base, exponent - 1);
   }
}