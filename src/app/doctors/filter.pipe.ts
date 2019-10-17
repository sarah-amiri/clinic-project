import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'filter'
})

export class FilterPipe implements PipeTransform {
    transform(value: any, text: string, s: string, d: string, t: string): any {
        let att, day;
        let days:any = ['شنبه', 'یکشنبه', 'دوشنبه', 'سه شنبه', 'چهارشنبه', 'پنجشنبه', 'جمعه'];
        if (!value) {
            return [];
        }
        if (!text && !s && !d && !t) {
            return value;
        }
        if (d) {
            day = days.indexOf(d);
        }
        return value.filter(item => {
            return (
                (!text || item.fname.includes(text) || item.lname.includes(text)) &&
                (!s || item.specialty === s) &&
                (!d || item.attendance.morning.includes(day) || item.attendance.afternoon.includes(day)) &&
                (!t || item.attendance[t].length)
            );
        });
    }
}