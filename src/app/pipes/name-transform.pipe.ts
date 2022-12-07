import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'NameToShortTransform',
})
export class NameTransformPipe implements PipeTransform {
  transform(value: string | undefined, ...args: unknown[]): string | undefined {
    return value?.slice(0, 3);
  }
}
