import { Injectable } from '@nestjs/common';
import { SeniorCitizen } from '../entities/senior.entity';
import { createCanvas, loadImage } from 'canvas';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class ImageService {
  generateImage(seniorCitizen: SeniorCitizen): Promise<string> {
    return new Promise<string>(async (resolve, reject) => {
      try {
        const imagePath = `images/${seniorCitizen.seniorId}.jpg`;
        const imageFilePath = path.resolve(__dirname, '..', '..', imagePath);

        const canvas = createCanvas(300, 300);
        const ctx = canvas.getContext('2d');

        const background = await loadImage('path/to/background/image.jpg'); 
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

        
        ctx.fillStyle = 'white';
        ctx.font = '24px Arial';
        ctx.fillText(`Senior ID: ${seniorCitizen.seniorId}`, 10, 30);

        
        const imageBuffer = canvas.toBuffer('image/jpeg');

        
        fs.writeFile(imageFilePath, imageBuffer, (err) => {
          if (err) {
            reject(err);
          } else {
            resolve(imagePath);
          }
        });
      } catch (err) {
        reject(err);
      }
    });
  }
}
