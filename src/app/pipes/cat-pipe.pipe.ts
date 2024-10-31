import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'catPipe',
  standalone: true,
})
export class CatPipePipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): unknown {
    const valueArr = value.split(/ > /g);
    if (valueArr.length > 2) {
      return `${valueArr[0]} > ... > ${valueArr[valueArr.length - 1]}`;
    } else {
      return `${valueArr[0]} > ${valueArr[1]}`;
    }
  }
}
