import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toTime'
})
export class ToTimePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    let hours = Math.floor(value/3600000);
    let minutes =  Math.floor((value % 3600000)/60000);
    let seconds = Math.floor((value % 60000)/1000);
    let miliseconds = value % 1000;
    let result = ('0' + hours).slice(-2) + ':' + ('0' + minutes).slice(-2) + ':' + ('0' + seconds).slice(-2) + ':' + ('00' + miliseconds).slice(-3);
    return result;
    // let result = (hours < 10) ? '0' + hours : hours + ':' + 
    // (minutes < 10) ? '0' + minutes : minutes + ':' +
    // (seconds < 10) ? '0' + seconds : seconds + ':' +
    // (miliseconds < 10) ? '00' + miliseconds 
    // ? (miliseconds < 100) ? '0' + miliseconds : miliseconds;
    // return result;
  }
}
