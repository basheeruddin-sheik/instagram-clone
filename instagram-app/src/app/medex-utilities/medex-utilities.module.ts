import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  DateToCalendar,
  DateToEpochPipe,
  EpochToAgePipe,
  EpochToCalendar,
  EpochToDateFromNow,
  EpochToDatePipe,
  EpochToDay,
  EpochToLLFormat,
  EpochToLLLFormat, EpochToMeridian,
  EpochToMonth,
  EpochToNowPipe,
  EpochToTime,
  EpochToTimeWithoutMeridian, EpochToWeeksAndDaysPipe, FreeText,
  SecondsToHoursAndMinutes,
  SecondsToMinutesAndSeconds,
  TimeOfDayToTime
} from "./epoch-pipes.pipe";
import {SafePipe} from "./safe.pipe";
import {
  DayOfMonth,
  NameCasePipe,
  NumberOrdinalPipe,
  PrettyJsonPipe,
  StringToArrayToPipedList,
  StringToComparatorPipe
} from "./string-pipes";

@NgModule({
  declarations: [
    DateToEpochPipe,
    EpochToDatePipe,
    EpochToDay,
    EpochToMonth,
    EpochToCalendar,
    EpochToLLFormat,
    EpochToLLLFormat,
    TimeOfDayToTime,
    SecondsToHoursAndMinutes,
    SecondsToMinutesAndSeconds,
    EpochToAgePipe,
    EpochToNowPipe,
    EpochToDateFromNow,

    EpochToTime,
    EpochToTimeWithoutMeridian,
    EpochToMeridian,

    DateToCalendar,

    SafePipe,
    FreeText,
    EpochToWeeksAndDaysPipe,

    NameCasePipe,
    NumberOrdinalPipe,
    StringToComparatorPipe,
    StringToArrayToPipedList,
    DayOfMonth,
    PrettyJsonPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DateToEpochPipe,
    EpochToDatePipe,
    EpochToDay,
    EpochToMonth,
    EpochToCalendar,
    EpochToLLFormat,
    EpochToLLLFormat,
    TimeOfDayToTime,
    SecondsToHoursAndMinutes,
    SecondsToMinutesAndSeconds,
    EpochToAgePipe,
    EpochToNowPipe,
    EpochToDateFromNow,

    EpochToTime,
    EpochToTimeWithoutMeridian,
    EpochToMeridian,

    DateToCalendar,

    SafePipe,
    FreeText,
    EpochToWeeksAndDaysPipe,

    NameCasePipe,
    NumberOrdinalPipe,
    StringToComparatorPipe,
    StringToArrayToPipedList,
    DayOfMonth,
    PrettyJsonPipe
  ]
})
export class MedexUtilitiesModule { }
