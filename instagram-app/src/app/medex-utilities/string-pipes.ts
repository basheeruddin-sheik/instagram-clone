import { Pipe, PipeTransform } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';


@Pipe({
  name: 'nameCase',
  pure: true
})
export class NameCasePipe implements PipeTransform {

  transform(string: any) {
    if (string) return string.replace(/\w\S*/g, (txt: any) => {return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
    else return string
  }
}

@Pipe({
  name: 'numberOrdinal',
  pure: true
})
export class NumberOrdinalPipe implements PipeTransform {

  transform(num: any) {
    if (num > 3 && num < 21) return 'th';
    switch (num % 10) {
      case 1:  return "st";
      case 2:  return "nd";
      case 3:  return "rd";
      default: return "th";
    }
  }
}

@Pipe({
  name: 'stringToComparator',
  pure: true
})
export class StringToComparatorPipe implements PipeTransform {

  transform(string: any) {
    if (string === "lessThan") return "<";
    if (string === "greaterThan") return ">";
    if (string === "equalTo") return "=";
    else return "";
  }
}


@Pipe({
  name: 'stringArrayToPipedList',
  pure: true
})
export class StringToArrayToPipedList implements PipeTransform {

  transform(stringArray: string[] | null) {
    let stringToDisplay = "";
    if (stringArray && stringArray.length){
      stringArray.forEach((str) => {
        stringToDisplay += " " + str + " | "
      });
      if (stringToDisplay.length > 2) stringToDisplay = stringToDisplay.substring(0, stringToDisplay.length - 2);
    }
    return stringToDisplay
  }
}



@Pipe({
  name: 'dayOfMonth'
})
export class DayOfMonth implements PipeTransform{

  transform(day: number): string {
    if (day < 1 || day > 31) return  day + "";
    if (day >= 11 && day <= 13) {
      return day + "th";
    }
    switch (day % 10) {
      case 1:  return day + "st";
      case 2:  return day + "nd";
      case 3:  return day + "rd";
      default: return day + "th";
    }
  }

}


@Pipe({
  name: 'prettyjson',
  pure:true
})
export class PrettyJsonPipe implements PipeTransform {
  transform(value: any, args: any[]): any {
    try {
      return this.applyColors(
        typeof value === 'object' ? value : JSON.parse(value),
        args[0],
        args[1]
      );
    } catch (e) {
      return this.applyColors({ error: 'Invalid JSON' }, args[0], args[1]);
    }
  }

  applyColors(obj: any, showNumebrLine: boolean = false, padding: number = 4) {
    let line = 1;

    if (typeof obj != 'string') {
      obj = JSON.stringify(obj, undefined, 3);
    }
    obj = obj.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

    obj = obj.replace(
      /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,
      (match: any) => {
        let themeClass = 'number';
        if (/^"/.test(match)) {
          if (/:$/.test(match)) {
            themeClass = 'key';
          } else {
            themeClass = 'string';
          }
        } else if (/true|false/.test(match)) {
          themeClass = 'boolean';
        } else if (/null/.test(match)) {
          themeClass = 'null';
        }
        return '<span class="' + themeClass + '">' + match + '</span>';
      }
    );

    return showNumebrLine
      ? obj.replace(
          /^/gm,
          () =>
            `<span class="number-line pl-3 select-none" >${String(line++).padEnd(padding)}</span>`
        )
      : obj;
  }
}

