import qr from 'qr-image'
import inquirer from 'inquirer';
import fs from 'fs'
import { Console } from 'console';

console.log('hi')
 inquirer
  .prompt([
    {
        message:'Enter your Webite url',
        name:'URL'
    }
  ])
  .then((answers) => {
    var qr_svg = qr.image(answers.URL, { type: 'png' });
       qr_svg.pipe(fs.createWriteStream('mywebsite.png'));
  })
  .catch((error) => {
    if (error.isTtyError) {
       console.log(error)
     } else {
      // Something else went wrong
    }
  });