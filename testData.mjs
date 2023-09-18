import { getData } from './getData.mjs';

const runTest = async () => {
 try {
  const data = await getData();
  if (data instanceof Array) {
   data.forEach(item => {
    if (typeof item !== 'string') throw Error('Item is not a string');
   });
  } else {
   throw Error('Data is not an Array');
  }
  console.log('Test passed');
 } catch (error) {
  console.error(`Test failed: ${error}`);
 }
};

runTest();