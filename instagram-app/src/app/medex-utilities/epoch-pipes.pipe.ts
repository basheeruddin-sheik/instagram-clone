import {Pipe, PipeTransform} from "@angular/core";
import * as moment from "moment";

@Pipe({
    name: "dateToEpoch"
})
export class DateToEpochPipe implements PipeTransform {
    transform(value: number) {
        if (value) {
            return moment(value).unix();
        } else {
            return 0;
        }
    }
}

@Pipe({
    name: "epochToNow"
})
export class EpochToNowPipe implements PipeTransform {
    transform(value: number) {
        if (value) {
            return moment(value * 1000).fromNow();
        } else {
            return 0;
        }
    }
}


@Pipe({
    name: "epochToDate"
})
export class EpochToDatePipe implements PipeTransform {
    montharr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    transform(value: number) {
        if (value === 9999999999) {
            return "-";
        }

        const date = new Date(value * 1000);

        return date.getDate() + " " + this.montharr[date.getMonth()] + "'" + date.getFullYear().toString().substring(2);
    }
}

@Pipe({
    name: "epochToCalendar"
})
export class EpochToCalendar implements PipeTransform {
    transform(value: number) {
        moment.locale("en", {
            calendar: {
                lastDay: "[Yesterday at] LT",
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                lastWeek: "[Last] dddd [at] LT",
                nextWeek: "dddd [at] LT",
                sameElse: "ll [at] LT"
            }
        });
        return moment(value * 1000).calendar();
    }
}

@Pipe({
    name: "dateToCalendar"
})
export class DateToCalendar implements PipeTransform {
    transform(value: number) {
        moment.locale("en", {
            calendar: {
                lastDay: "[Yesterday at] LT",
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                lastWeek: "[Last] dddd [at] LT",
                nextWeek: "dddd [at] LT",
                sameElse: "ll [at] LT"
            }
        });
        return moment(value).calendar();
    }
}

@Pipe({
    name: "epochToLLFormat"
})
export class EpochToLLFormat implements PipeTransform {
    transform(value: number) {
        return moment(value * 1000).format("LL");
    }
}

@Pipe({
    name: "epochToLLLFormat"
})
export class EpochToLLLFormat implements PipeTransform {
    transform(value: number) {
        return moment(value * 1000).format("LLL");
    }
}

@Pipe({
    name: "epochToDay"
})
export class EpochToDay implements PipeTransform {
    transform(value: number) {
        return moment(value * 1000).date();
    }
}

@Pipe({
    name: "epochToMonth"
})
export class EpochToMonth implements PipeTransform {
    months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    transform(value: number) {
        return this.months[moment(value * 1000).month()];
    }
}

@Pipe({
    name: "secondsToHoursAndMinutes"
})
export class SecondsToHoursAndMinutes implements PipeTransform {
    transform(value: number) {
        const hours = moment((moment().startOf("day").unix() + value) * 1000).hours();
        const min = moment((moment().startOf("day").unix() + value) * 1000).minutes();
        const hrStr = hours > 0 ? `${hours} hr` : "";
        const minStr = min > 0 ? `${min} min` : "";
        return `${hrStr} ${minStr}`;
    }
}

@Pipe({
    name: "secondsToMinutesAndSeconds"
})
export class SecondsToMinutesAndSeconds implements PipeTransform {
    transform(value: number) {
        const seconds = value % 60;
        const minutes = Math.floor(value / 60);

        // const hours = moment((moment().startOf('day').unix() + value) * 1000).hours();
        // const min = moment((moment().startOf('day').unix() + value) * 1000).minutes();
        // const hrStr = hours > 0 ? `${hours} hr` : "";
        // const minStr = min > 0 ? `${min} min` : "";
        return `${minutes}:${seconds} min`;
    }
}

@Pipe({
    name: "timeOfDayTotime"
})
export class TimeOfDayToTime implements PipeTransform {
    transform(value: number) {
        return moment((moment().startOf("day").unix() + value) * 1000).format("h:mm a");
    }
}

@Pipe({
    name: "epochToAge"
})
export class EpochToAgePipe implements PipeTransform {

    transform(value: number) {

        const today = moment();
        return today.diff(moment(value * 1000), "year");
    }
}

@Pipe({
    name: "epochToWeeksAndDays"
})
export class EpochToWeeksAndDaysPipe implements PipeTransform {

    transform(epoch: number) {
        const today = moment().startOf("day").unix();
        const diff = today - epoch;
        const weeks = Math.floor(diff / (86400 * 7));
        const days = Math.round(diff % (86400 * 7) / 86400);
        return `${weeks} weeks and ${days} days`;
    }
}


@Pipe({
    name: "epochToTime"
})
export class EpochToTime implements PipeTransform {
    transform(value: number) {
        return moment(value * 1000).format("h:mm a");
    }
}

@Pipe({
    name: "epochToTimeWithoutMeridian"
})
export class EpochToTimeWithoutMeridian implements PipeTransform {
    transform(value: number) {
        return moment(value * 1000).format("hh:mm");
    }
}

@Pipe({
    name: "epochToDateFromNow"
})
export class EpochToDateFromNow implements PipeTransform {
    transform(value: number) {
        if (value) {
            const currentTime = moment().unix();
            const startOfDay = moment().startOf("day").unix();
            const endOfDay = moment().endOf("day").unix();
            if (value >= startOfDay && value <= endOfDay) {
                return "Today";
            } else if (currentTime > value) {
                return moment(value * 1000).fromNow();
            } else if (currentTime < value) {
                return moment().to(value * 1000);
            }
            return "Today";
        } else {
            return "";
        }
    }
}

@Pipe({
    name: "epochToMeridian"
})
export class EpochToMeridian implements PipeTransform {
    transform(value: number) {
        return moment(value * 1000).format("a");
    }
}


@Pipe({
    name: "freetext",
})
export class FreeText implements PipeTransform {

    transform(text: string) {
        if (text === undefined) {
            return "";
        } else {
            return text;
        }
    }
}
