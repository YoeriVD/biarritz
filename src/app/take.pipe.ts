import { PipeTransform, Pipe } from "@angular/core";
@Pipe({
    name: 'take'
})
export class TakePipe implements PipeTransform {
    transform(value: any[], amount: number) {
        return value.slice(0, amount);
    }
}