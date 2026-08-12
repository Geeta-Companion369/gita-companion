import { R as React, r as reactExports, j as jsxRuntimeExports, C as ChevronDown, A as AnimatePresence, L as LotusParticles, m as motion, u as useNavigate } from "./index-DqMoqjqS.js";
import { b as buttonVariants, B as Button$1 } from "./button-DcgIin-g.js";
import { c as cn } from "./utils-2v2HxlWs.js";
import { C as ChevronLeft } from "./chevron-left-Did6TZD4.js";
import { C as ChevronRight } from "./chevron-right-DpWvcAOP.js";
import { u as useLastRead } from "./use-last-read-B0FsH367.js";
import { u as usePoints } from "./use-points-C2isEgOA.js";
import { u as useStreak } from "./use-streak-DFw7a2Id.js";
import { u as useUserProfile } from "./use-user-profile-C4tGUeMp.js";
import { g as getBackend } from "./backend-client-C24_cpfN.js";
import "./index-02v6GR4f.js";
import "./index-Cz6G9221.js";
function tzName(timeZone, date, format2 = "long") {
  return new Intl.DateTimeFormat("en-US", {
    // Enforces engine to render the time. Without the option JavaScriptCore omits it.
    hour: "numeric",
    timeZone,
    timeZoneName: format2
  }).format(date).split(/\s/g).slice(2).join(" ");
}
const offsetFormatCache = {};
const offsetCache = {};
function tzOffset(timeZone, date) {
  try {
    const format2 = offsetFormatCache[timeZone] || (offsetFormatCache[timeZone] = new Intl.DateTimeFormat("en-US", {
      timeZone,
      timeZoneName: "longOffset"
    }).format);
    const offsetStr = format2(date).split("GMT")[1];
    if (offsetStr in offsetCache) return offsetCache[offsetStr];
    return calcOffset(offsetStr, offsetStr.split(":"));
  } catch {
    if (timeZone in offsetCache) return offsetCache[timeZone];
    const captures = timeZone == null ? void 0 : timeZone.match(offsetRe);
    if (captures) return calcOffset(timeZone, captures.slice(1));
    return NaN;
  }
}
const offsetRe = /([+-]\d\d):?(\d\d)?/;
function calcOffset(cacheStr, values) {
  const hours = +(values[0] || 0);
  const minutes = +(values[1] || 0);
  const seconds = +(values[2] || 0) / 60;
  return offsetCache[cacheStr] = hours * 60 + minutes > 0 ? hours * 60 + minutes + seconds : hours * 60 - minutes - seconds;
}
class TZDateMini extends Date {
  //#region static
  constructor(...args) {
    super();
    if (args.length > 1 && typeof args[args.length - 1] === "string") {
      this.timeZone = args.pop();
    }
    this.internal = /* @__PURE__ */ new Date();
    if (isNaN(tzOffset(this.timeZone, this))) {
      this.setTime(NaN);
    } else {
      if (!args.length) {
        this.setTime(Date.now());
      } else if (typeof args[0] === "number" && (args.length === 1 || args.length === 2 && typeof args[1] !== "number")) {
        this.setTime(args[0]);
      } else if (typeof args[0] === "string") {
        this.setTime(+new Date(args[0]));
      } else if (args[0] instanceof Date) {
        this.setTime(+args[0]);
      } else {
        this.setTime(+new Date(...args));
        adjustToSystemTZ(this);
        syncToInternal(this);
      }
    }
  }
  static tz(tz, ...args) {
    return args.length ? new TZDateMini(...args, tz) : new TZDateMini(Date.now(), tz);
  }
  //#endregion
  //#region time zone
  withTimeZone(timeZone) {
    return new TZDateMini(+this, timeZone);
  }
  getTimezoneOffset() {
    const offset = -tzOffset(this.timeZone, this);
    return offset > 0 ? Math.floor(offset) : Math.ceil(offset);
  }
  //#endregion
  //#region time
  setTime(time) {
    Date.prototype.setTime.apply(this, arguments);
    syncToInternal(this);
    return +this;
  }
  //#endregion
  //#region date-fns integration
  [Symbol.for("constructDateFrom")](date) {
    return new TZDateMini(+new Date(date), this.timeZone);
  }
  //#endregion
}
const re = /^(get|set)(?!UTC)/;
Object.getOwnPropertyNames(Date.prototype).forEach((method) => {
  if (!re.test(method)) return;
  const utcMethod = method.replace(re, "$1UTC");
  if (!TZDateMini.prototype[utcMethod]) return;
  if (method.startsWith("get")) {
    TZDateMini.prototype[method] = function() {
      return this.internal[utcMethod]();
    };
  } else {
    TZDateMini.prototype[method] = function() {
      Date.prototype[utcMethod].apply(this.internal, arguments);
      syncFromInternal(this);
      return +this;
    };
    TZDateMini.prototype[utcMethod] = function() {
      Date.prototype[utcMethod].apply(this, arguments);
      syncToInternal(this);
      return +this;
    };
  }
});
function syncToInternal(date) {
  date.internal.setTime(+date);
  date.internal.setUTCSeconds(date.internal.getUTCSeconds() - Math.round(-tzOffset(date.timeZone, date) * 60));
}
function syncFromInternal(date) {
  Date.prototype.setFullYear.call(date, date.internal.getUTCFullYear(), date.internal.getUTCMonth(), date.internal.getUTCDate());
  Date.prototype.setHours.call(date, date.internal.getUTCHours(), date.internal.getUTCMinutes(), date.internal.getUTCSeconds(), date.internal.getUTCMilliseconds());
  adjustToSystemTZ(date);
}
function adjustToSystemTZ(date) {
  const baseOffset = tzOffset(date.timeZone, date);
  const offset = baseOffset > 0 ? Math.floor(baseOffset) : Math.ceil(baseOffset);
  const prevHour = /* @__PURE__ */ new Date(+date);
  prevHour.setUTCHours(prevHour.getUTCHours() - 1);
  const systemOffset = -(/* @__PURE__ */ new Date(+date)).getTimezoneOffset();
  const prevHourSystemOffset = -(/* @__PURE__ */ new Date(+prevHour)).getTimezoneOffset();
  const systemDSTChange = systemOffset - prevHourSystemOffset;
  const dstShift = Date.prototype.getHours.apply(date) !== date.internal.getUTCHours();
  if (systemDSTChange && dstShift) date.internal.setUTCMinutes(date.internal.getUTCMinutes() + systemDSTChange);
  const offsetDiff = systemOffset - offset;
  if (offsetDiff) Date.prototype.setUTCMinutes.call(date, Date.prototype.getUTCMinutes.call(date) + offsetDiff);
  const systemDate = /* @__PURE__ */ new Date(+date);
  systemDate.setUTCSeconds(0);
  const systemSecondsOffset = systemOffset > 0 ? systemDate.getSeconds() : (systemDate.getSeconds() - 60) % 60;
  const secondsOffset = Math.round(-(tzOffset(date.timeZone, date) * 60)) % 60;
  if (secondsOffset || systemSecondsOffset) {
    date.internal.setUTCSeconds(date.internal.getUTCSeconds() + secondsOffset);
    Date.prototype.setUTCSeconds.call(date, Date.prototype.getUTCSeconds.call(date) + secondsOffset + systemSecondsOffset);
  }
  const postBaseOffset = tzOffset(date.timeZone, date);
  const postOffset = postBaseOffset > 0 ? Math.floor(postBaseOffset) : Math.ceil(postBaseOffset);
  const postSystemOffset = -(/* @__PURE__ */ new Date(+date)).getTimezoneOffset();
  const postOffsetDiff = postSystemOffset - postOffset;
  const offsetChanged = postOffset !== offset;
  const postDiff = postOffsetDiff - offsetDiff;
  if (offsetChanged && postDiff) {
    Date.prototype.setUTCMinutes.call(date, Date.prototype.getUTCMinutes.call(date) + postDiff);
    const newBaseOffset = tzOffset(date.timeZone, date);
    const newOffset = newBaseOffset > 0 ? Math.floor(newBaseOffset) : Math.ceil(newBaseOffset);
    const offsetChange = postOffset - newOffset;
    if (offsetChange) {
      date.internal.setUTCMinutes(date.internal.getUTCMinutes() + offsetChange);
      Date.prototype.setUTCMinutes.call(date, Date.prototype.getUTCMinutes.call(date) + offsetChange);
    }
  }
}
class TZDate extends TZDateMini {
  //#region static
  static tz(tz, ...args) {
    return args.length ? new TZDate(...args, tz) : new TZDate(Date.now(), tz);
  }
  //#endregion
  //#region representation
  toISOString() {
    const [sign, hours, minutes] = this.tzComponents();
    const tz = `${sign}${hours}:${minutes}`;
    return this.internal.toISOString().slice(0, -1) + tz;
  }
  toString() {
    return `${this.toDateString()} ${this.toTimeString()}`;
  }
  toDateString() {
    const [day, date, month, year] = this.internal.toUTCString().split(" ");
    return `${day == null ? void 0 : day.slice(0, -1)} ${month} ${date} ${year}`;
  }
  toTimeString() {
    const time = this.internal.toUTCString().split(" ")[4];
    const [sign, hours, minutes] = this.tzComponents();
    return `${time} GMT${sign}${hours}${minutes} (${tzName(this.timeZone, this)})`;
  }
  toLocaleString(locales, options) {
    return Date.prototype.toLocaleString.call(this, locales, {
      ...options,
      timeZone: (options == null ? void 0 : options.timeZone) || this.timeZone
    });
  }
  toLocaleDateString(locales, options) {
    return Date.prototype.toLocaleDateString.call(this, locales, {
      ...options,
      timeZone: (options == null ? void 0 : options.timeZone) || this.timeZone
    });
  }
  toLocaleTimeString(locales, options) {
    return Date.prototype.toLocaleTimeString.call(this, locales, {
      ...options,
      timeZone: (options == null ? void 0 : options.timeZone) || this.timeZone
    });
  }
  //#endregion
  //#region private
  tzComponents() {
    const offset = this.getTimezoneOffset();
    const sign = offset > 0 ? "-" : "+";
    const hours = String(Math.floor(Math.abs(offset) / 60)).padStart(2, "0");
    const minutes = String(Math.abs(offset) % 60).padStart(2, "0");
    return [sign, hours, minutes];
  }
  //#endregion
  withTimeZone(timeZone) {
    return new TZDate(+this, timeZone);
  }
  //#region date-fns integration
  [Symbol.for("constructDateFrom")](date) {
    return new TZDate(+new Date(date), this.timeZone);
  }
  //#endregion
}
const millisecondsInWeek = 6048e5;
const millisecondsInDay = 864e5;
const constructFromSymbol = Symbol.for("constructDateFrom");
function constructFrom(date, value) {
  if (typeof date === "function") return date(value);
  if (date && typeof date === "object" && constructFromSymbol in date)
    return date[constructFromSymbol](value);
  if (date instanceof Date) return new date.constructor(value);
  return new Date(value);
}
function toDate(argument, context) {
  return constructFrom(context || argument, argument);
}
function addDays(date, amount, options) {
  const _date = toDate(date, options == null ? void 0 : options.in);
  if (isNaN(amount)) return constructFrom(date, NaN);
  if (!amount) return _date;
  _date.setDate(_date.getDate() + amount);
  return _date;
}
function addMonths(date, amount, options) {
  const _date = toDate(date, options == null ? void 0 : options.in);
  if (isNaN(amount)) return constructFrom(date, NaN);
  if (!amount) {
    return _date;
  }
  const dayOfMonth = _date.getDate();
  const endOfDesiredMonth = constructFrom(date, _date.getTime());
  endOfDesiredMonth.setMonth(_date.getMonth() + amount + 1, 0);
  const daysInMonth = endOfDesiredMonth.getDate();
  if (dayOfMonth >= daysInMonth) {
    return endOfDesiredMonth;
  } else {
    _date.setFullYear(
      endOfDesiredMonth.getFullYear(),
      endOfDesiredMonth.getMonth(),
      dayOfMonth
    );
    return _date;
  }
}
let defaultOptions = {};
function getDefaultOptions() {
  return defaultOptions;
}
function startOfWeek(date, options) {
  var _a, _b, _c, _d;
  const defaultOptions2 = getDefaultOptions();
  const weekStartsOn = (options == null ? void 0 : options.weekStartsOn) ?? ((_b = (_a = options == null ? void 0 : options.locale) == null ? void 0 : _a.options) == null ? void 0 : _b.weekStartsOn) ?? defaultOptions2.weekStartsOn ?? ((_d = (_c = defaultOptions2.locale) == null ? void 0 : _c.options) == null ? void 0 : _d.weekStartsOn) ?? 0;
  const _date = toDate(date, options == null ? void 0 : options.in);
  const day = _date.getDay();
  const diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  _date.setDate(_date.getDate() - diff);
  _date.setHours(0, 0, 0, 0);
  return _date;
}
function startOfISOWeek(date, options) {
  return startOfWeek(date, { ...options, weekStartsOn: 1 });
}
function getISOWeekYear(date, options) {
  const _date = toDate(date, options == null ? void 0 : options.in);
  const year = _date.getFullYear();
  const fourthOfJanuaryOfNextYear = constructFrom(_date, 0);
  fourthOfJanuaryOfNextYear.setFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setHours(0, 0, 0, 0);
  const startOfNextYear = startOfISOWeek(fourthOfJanuaryOfNextYear);
  const fourthOfJanuaryOfThisYear = constructFrom(_date, 0);
  fourthOfJanuaryOfThisYear.setFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setHours(0, 0, 0, 0);
  const startOfThisYear = startOfISOWeek(fourthOfJanuaryOfThisYear);
  if (_date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (_date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}
function getTimezoneOffsetInMilliseconds(date) {
  const _date = toDate(date);
  const utcDate = new Date(
    Date.UTC(
      _date.getFullYear(),
      _date.getMonth(),
      _date.getDate(),
      _date.getHours(),
      _date.getMinutes(),
      _date.getSeconds(),
      _date.getMilliseconds()
    )
  );
  utcDate.setUTCFullYear(_date.getFullYear());
  return +date - +utcDate;
}
function normalizeDates(context, ...dates) {
  const normalize = constructFrom.bind(
    null,
    dates.find((date) => typeof date === "object")
  );
  return dates.map(normalize);
}
function startOfDay(date, options) {
  const _date = toDate(date, options == null ? void 0 : options.in);
  _date.setHours(0, 0, 0, 0);
  return _date;
}
function differenceInCalendarDays(laterDate, earlierDate, options) {
  const [laterDate_, earlierDate_] = normalizeDates(
    options == null ? void 0 : options.in,
    laterDate,
    earlierDate
  );
  const laterStartOfDay = startOfDay(laterDate_);
  const earlierStartOfDay = startOfDay(earlierDate_);
  const laterTimestamp = +laterStartOfDay - getTimezoneOffsetInMilliseconds(laterStartOfDay);
  const earlierTimestamp = +earlierStartOfDay - getTimezoneOffsetInMilliseconds(earlierStartOfDay);
  return Math.round((laterTimestamp - earlierTimestamp) / millisecondsInDay);
}
function startOfISOWeekYear(date, options) {
  const year = getISOWeekYear(date, options);
  const fourthOfJanuary = constructFrom(date, 0);
  fourthOfJanuary.setFullYear(year, 0, 4);
  fourthOfJanuary.setHours(0, 0, 0, 0);
  return startOfISOWeek(fourthOfJanuary);
}
function addWeeks(date, amount, options) {
  return addDays(date, amount * 7, options);
}
function addYears(date, amount, options) {
  return addMonths(date, amount * 12, options);
}
function max(dates, options) {
  let result;
  let context = options == null ? void 0 : options.in;
  dates.forEach((date) => {
    if (!context && typeof date === "object")
      context = constructFrom.bind(null, date);
    const date_ = toDate(date, context);
    if (!result || result < date_ || isNaN(+date_)) result = date_;
  });
  return constructFrom(context, result || NaN);
}
function min(dates, options) {
  let result;
  let context = options == null ? void 0 : options.in;
  dates.forEach((date) => {
    if (!context && typeof date === "object")
      context = constructFrom.bind(null, date);
    const date_ = toDate(date, context);
    if (!result || result > date_ || isNaN(+date_)) result = date_;
  });
  return constructFrom(context, result || NaN);
}
function isSameDay(laterDate, earlierDate, options) {
  const [dateLeft_, dateRight_] = normalizeDates(
    options == null ? void 0 : options.in,
    laterDate,
    earlierDate
  );
  return +startOfDay(dateLeft_) === +startOfDay(dateRight_);
}
function isDate(value) {
  return value instanceof Date || typeof value === "object" && Object.prototype.toString.call(value) === "[object Date]";
}
function isValid(date) {
  return !(!isDate(date) && typeof date !== "number" || isNaN(+toDate(date)));
}
function differenceInCalendarMonths(laterDate, earlierDate, options) {
  const [laterDate_, earlierDate_] = normalizeDates(
    options == null ? void 0 : options.in,
    laterDate,
    earlierDate
  );
  const yearsDiff = laterDate_.getFullYear() - earlierDate_.getFullYear();
  const monthsDiff = laterDate_.getMonth() - earlierDate_.getMonth();
  return yearsDiff * 12 + monthsDiff;
}
function endOfMonth(date, options) {
  const _date = toDate(date, options == null ? void 0 : options.in);
  const month = _date.getMonth();
  _date.setFullYear(_date.getFullYear(), month + 1, 0);
  _date.setHours(23, 59, 59, 999);
  return _date;
}
function normalizeInterval(context, interval) {
  const [start, end] = normalizeDates(context, interval.start, interval.end);
  return { start, end };
}
function eachMonthOfInterval(interval, options) {
  const { start, end } = normalizeInterval(options == null ? void 0 : options.in, interval);
  let reversed = +start > +end;
  const endTime = reversed ? +start : +end;
  const date = reversed ? end : start;
  date.setHours(0, 0, 0, 0);
  date.setDate(1);
  let step = 1;
  const dates = [];
  while (+date <= endTime) {
    dates.push(constructFrom(start, date));
    date.setMonth(date.getMonth() + step);
  }
  return reversed ? dates.reverse() : dates;
}
function startOfMonth(date, options) {
  const _date = toDate(date, options == null ? void 0 : options.in);
  _date.setDate(1);
  _date.setHours(0, 0, 0, 0);
  return _date;
}
function endOfYear(date, options) {
  const _date = toDate(date, options == null ? void 0 : options.in);
  const year = _date.getFullYear();
  _date.setFullYear(year + 1, 0, 0);
  _date.setHours(23, 59, 59, 999);
  return _date;
}
function startOfYear(date, options) {
  const date_ = toDate(date, options == null ? void 0 : options.in);
  date_.setFullYear(date_.getFullYear(), 0, 1);
  date_.setHours(0, 0, 0, 0);
  return date_;
}
function eachYearOfInterval(interval, options) {
  const { start, end } = normalizeInterval(options == null ? void 0 : options.in, interval);
  let reversed = +start > +end;
  const endTime = reversed ? +start : +end;
  const date = reversed ? end : start;
  date.setHours(0, 0, 0, 0);
  date.setMonth(0, 1);
  let step = 1;
  const dates = [];
  while (+date <= endTime) {
    dates.push(constructFrom(start, date));
    date.setFullYear(date.getFullYear() + step);
  }
  return reversed ? dates.reverse() : dates;
}
function endOfWeek(date, options) {
  var _a, _b, _c, _d;
  const defaultOptions2 = getDefaultOptions();
  const weekStartsOn = (options == null ? void 0 : options.weekStartsOn) ?? ((_b = (_a = options == null ? void 0 : options.locale) == null ? void 0 : _a.options) == null ? void 0 : _b.weekStartsOn) ?? defaultOptions2.weekStartsOn ?? ((_d = (_c = defaultOptions2.locale) == null ? void 0 : _c.options) == null ? void 0 : _d.weekStartsOn) ?? 0;
  const _date = toDate(date, options == null ? void 0 : options.in);
  const day = _date.getDay();
  const diff = (day < weekStartsOn ? -7 : 0) + 6 - (day - weekStartsOn);
  _date.setDate(_date.getDate() + diff);
  _date.setHours(23, 59, 59, 999);
  return _date;
}
function endOfISOWeek(date, options) {
  return endOfWeek(date, { ...options, weekStartsOn: 1 });
}
const formatDistanceLocale = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
};
const formatDistance = (token, count, options) => {
  let result;
  const tokenValue = formatDistanceLocale[token];
  if (typeof tokenValue === "string") {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace("{{count}}", count.toString());
  }
  if (options == null ? void 0 : options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return "in " + result;
    } else {
      return result + " ago";
    }
  }
  return result;
};
function buildFormatLongFn(args) {
  return (options = {}) => {
    const width = options.width ? String(options.width) : args.defaultWidth;
    const format2 = args.formats[width] || args.formats[args.defaultWidth];
    return format2;
  };
}
const dateFormats = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
};
const timeFormats = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
};
const dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
};
const formatLong = {
  date: buildFormatLongFn({
    formats: dateFormats,
    defaultWidth: "full"
  }),
  time: buildFormatLongFn({
    formats: timeFormats,
    defaultWidth: "full"
  }),
  dateTime: buildFormatLongFn({
    formats: dateTimeFormats,
    defaultWidth: "full"
  })
};
const formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
};
const formatRelative = (token, _date, _baseDate, _options) => formatRelativeLocale[token];
function buildLocalizeFn(args) {
  return (value, options) => {
    const context = (options == null ? void 0 : options.context) ? String(options.context) : "standalone";
    let valuesArray;
    if (context === "formatting" && args.formattingValues) {
      const defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      const width = (options == null ? void 0 : options.width) ? String(options.width) : defaultWidth;
      valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      const defaultWidth = args.defaultWidth;
      const width = (options == null ? void 0 : options.width) ? String(options.width) : args.defaultWidth;
      valuesArray = args.values[width] || args.values[defaultWidth];
    }
    const index = args.argumentCallback ? args.argumentCallback(value) : value;
    return valuesArray[index];
  };
}
const eraValues = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
};
const quarterValues = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
};
const monthValues = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],
  wide: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]
};
const dayValues = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ]
};
const dayPeriodValues = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
};
const formattingDayPeriodValues = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
};
const ordinalNumber = (dirtyNumber, _options) => {
  const number = Number(dirtyNumber);
  const rem100 = number % 100;
  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + "st";
      case 2:
        return number + "nd";
      case 3:
        return number + "rd";
    }
  }
  return number + "th";
};
const localize = {
  ordinalNumber,
  era: buildLocalizeFn({
    values: eraValues,
    defaultWidth: "wide"
  }),
  quarter: buildLocalizeFn({
    values: quarterValues,
    defaultWidth: "wide",
    argumentCallback: (quarter) => quarter - 1
  }),
  month: buildLocalizeFn({
    values: monthValues,
    defaultWidth: "wide"
  }),
  day: buildLocalizeFn({
    values: dayValues,
    defaultWidth: "wide"
  }),
  dayPeriod: buildLocalizeFn({
    values: dayPeriodValues,
    defaultWidth: "wide",
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: "wide"
  })
};
function buildMatchFn(args) {
  return (string, options = {}) => {
    const width = options.width;
    const matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
    const matchResult = string.match(matchPattern);
    if (!matchResult) {
      return null;
    }
    const matchedString = matchResult[0];
    const parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
    const key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, (pattern) => pattern.test(matchedString)) : (
      // [TODO] -- I challenge you to fix the type
      findKey(parsePatterns, (pattern) => pattern.test(matchedString))
    );
    let value;
    value = args.valueCallback ? args.valueCallback(key) : key;
    value = options.valueCallback ? (
      // [TODO] -- I challenge you to fix the type
      options.valueCallback(value)
    ) : value;
    const rest = string.slice(matchedString.length);
    return { value, rest };
  };
}
function findKey(object, predicate) {
  for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key) && predicate(object[key])) {
      return key;
    }
  }
  return void 0;
}
function findIndex(array, predicate) {
  for (let key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }
  return void 0;
}
function buildMatchPatternFn(args) {
  return (string, options = {}) => {
    const matchResult = string.match(args.matchPattern);
    if (!matchResult) return null;
    const matchedString = matchResult[0];
    const parseResult = string.match(args.parsePattern);
    if (!parseResult) return null;
    let value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
    value = options.valueCallback ? options.valueCallback(value) : value;
    const rest = string.slice(matchedString.length);
    return { value, rest };
  };
}
const matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
const parseOrdinalNumberPattern = /\d+/i;
const matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
};
const parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i]
};
const matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
};
const parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
const matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
const parseMonthPatterns = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ],
  any: [
    /^ja/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^may/i,
    /^jun/i,
    /^jul/i,
    /^au/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ]
};
const matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
const parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
};
const matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
const parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
};
const match = {
  ordinalNumber: buildMatchPatternFn({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: (value) => parseInt(value, 10)
  }),
  era: buildMatchFn({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseEraPatterns,
    defaultParseWidth: "any"
  }),
  quarter: buildMatchFn({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: "any",
    valueCallback: (index) => index + 1
  }),
  month: buildMatchFn({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: "any"
  }),
  day: buildMatchFn({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseDayPatterns,
    defaultParseWidth: "any"
  }),
  dayPeriod: buildMatchFn({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: "any",
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: "any"
  })
};
const enUS$1 = {
  code: "en-US",
  formatDistance,
  formatLong,
  formatRelative,
  localize,
  match,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function getDayOfYear(date, options) {
  const _date = toDate(date, options == null ? void 0 : options.in);
  const diff = differenceInCalendarDays(_date, startOfYear(_date));
  const dayOfYear = diff + 1;
  return dayOfYear;
}
function getISOWeek(date, options) {
  const _date = toDate(date, options == null ? void 0 : options.in);
  const diff = +startOfISOWeek(_date) - +startOfISOWeekYear(_date);
  return Math.round(diff / millisecondsInWeek) + 1;
}
function getWeekYear(date, options) {
  var _a, _b, _c, _d;
  const _date = toDate(date, options == null ? void 0 : options.in);
  const year = _date.getFullYear();
  const defaultOptions2 = getDefaultOptions();
  const firstWeekContainsDate = (options == null ? void 0 : options.firstWeekContainsDate) ?? ((_b = (_a = options == null ? void 0 : options.locale) == null ? void 0 : _a.options) == null ? void 0 : _b.firstWeekContainsDate) ?? defaultOptions2.firstWeekContainsDate ?? ((_d = (_c = defaultOptions2.locale) == null ? void 0 : _c.options) == null ? void 0 : _d.firstWeekContainsDate) ?? 1;
  const firstWeekOfNextYear = constructFrom((options == null ? void 0 : options.in) || date, 0);
  firstWeekOfNextYear.setFullYear(year + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setHours(0, 0, 0, 0);
  const startOfNextYear = startOfWeek(firstWeekOfNextYear, options);
  const firstWeekOfThisYear = constructFrom((options == null ? void 0 : options.in) || date, 0);
  firstWeekOfThisYear.setFullYear(year, 0, firstWeekContainsDate);
  firstWeekOfThisYear.setHours(0, 0, 0, 0);
  const startOfThisYear = startOfWeek(firstWeekOfThisYear, options);
  if (+_date >= +startOfNextYear) {
    return year + 1;
  } else if (+_date >= +startOfThisYear) {
    return year;
  } else {
    return year - 1;
  }
}
function startOfWeekYear(date, options) {
  var _a, _b, _c, _d;
  const defaultOptions2 = getDefaultOptions();
  const firstWeekContainsDate = (options == null ? void 0 : options.firstWeekContainsDate) ?? ((_b = (_a = options == null ? void 0 : options.locale) == null ? void 0 : _a.options) == null ? void 0 : _b.firstWeekContainsDate) ?? defaultOptions2.firstWeekContainsDate ?? ((_d = (_c = defaultOptions2.locale) == null ? void 0 : _c.options) == null ? void 0 : _d.firstWeekContainsDate) ?? 1;
  const year = getWeekYear(date, options);
  const firstWeek = constructFrom((options == null ? void 0 : options.in) || date, 0);
  firstWeek.setFullYear(year, 0, firstWeekContainsDate);
  firstWeek.setHours(0, 0, 0, 0);
  const _date = startOfWeek(firstWeek, options);
  return _date;
}
function getWeek(date, options) {
  const _date = toDate(date, options == null ? void 0 : options.in);
  const diff = +startOfWeek(_date, options) - +startOfWeekYear(_date, options);
  return Math.round(diff / millisecondsInWeek) + 1;
}
function addLeadingZeros(number, targetLength) {
  const sign = number < 0 ? "-" : "";
  const output = Math.abs(number).toString().padStart(targetLength, "0");
  return sign + output;
}
const lightFormatters = {
  // Year
  y(date, token) {
    const signedYear = date.getFullYear();
    const year = signedYear > 0 ? signedYear : 1 - signedYear;
    return addLeadingZeros(token === "yy" ? year % 100 : year, token.length);
  },
  // Month
  M(date, token) {
    const month = date.getMonth();
    return token === "M" ? String(month + 1) : addLeadingZeros(month + 1, 2);
  },
  // Day of the month
  d(date, token) {
    return addLeadingZeros(date.getDate(), token.length);
  },
  // AM or PM
  a(date, token) {
    const dayPeriodEnumValue = date.getHours() / 12 >= 1 ? "pm" : "am";
    switch (token) {
      case "a":
      case "aa":
        return dayPeriodEnumValue.toUpperCase();
      case "aaa":
        return dayPeriodEnumValue;
      case "aaaaa":
        return dayPeriodEnumValue[0];
      case "aaaa":
      default:
        return dayPeriodEnumValue === "am" ? "a.m." : "p.m.";
    }
  },
  // Hour [1-12]
  h(date, token) {
    return addLeadingZeros(date.getHours() % 12 || 12, token.length);
  },
  // Hour [0-23]
  H(date, token) {
    return addLeadingZeros(date.getHours(), token.length);
  },
  // Minute
  m(date, token) {
    return addLeadingZeros(date.getMinutes(), token.length);
  },
  // Second
  s(date, token) {
    return addLeadingZeros(date.getSeconds(), token.length);
  },
  // Fraction of second
  S(date, token) {
    const numberOfDigits = token.length;
    const milliseconds = date.getMilliseconds();
    const fractionalSeconds = Math.trunc(
      milliseconds * Math.pow(10, numberOfDigits - 3)
    );
    return addLeadingZeros(fractionalSeconds, token.length);
  }
};
const dayPeriodEnum = {
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
};
const formatters = {
  // Era
  G: function(date, token, localize2) {
    const era = date.getFullYear() > 0 ? 1 : 0;
    switch (token) {
      case "G":
      case "GG":
      case "GGG":
        return localize2.era(era, { width: "abbreviated" });
      case "GGGGG":
        return localize2.era(era, { width: "narrow" });
      case "GGGG":
      default:
        return localize2.era(era, { width: "wide" });
    }
  },
  // Year
  y: function(date, token, localize2) {
    if (token === "yo") {
      const signedYear = date.getFullYear();
      const year = signedYear > 0 ? signedYear : 1 - signedYear;
      return localize2.ordinalNumber(year, { unit: "year" });
    }
    return lightFormatters.y(date, token);
  },
  // Local week-numbering year
  Y: function(date, token, localize2, options) {
    const signedWeekYear = getWeekYear(date, options);
    const weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear;
    if (token === "YY") {
      const twoDigitYear = weekYear % 100;
      return addLeadingZeros(twoDigitYear, 2);
    }
    if (token === "Yo") {
      return localize2.ordinalNumber(weekYear, { unit: "year" });
    }
    return addLeadingZeros(weekYear, token.length);
  },
  // ISO week-numbering year
  R: function(date, token) {
    const isoWeekYear = getISOWeekYear(date);
    return addLeadingZeros(isoWeekYear, token.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function(date, token) {
    const year = date.getFullYear();
    return addLeadingZeros(year, token.length);
  },
  // Quarter
  Q: function(date, token, localize2) {
    const quarter = Math.ceil((date.getMonth() + 1) / 3);
    switch (token) {
      case "Q":
        return String(quarter);
      case "QQ":
        return addLeadingZeros(quarter, 2);
      case "Qo":
        return localize2.ordinalNumber(quarter, { unit: "quarter" });
      case "QQQ":
        return localize2.quarter(quarter, {
          width: "abbreviated",
          context: "formatting"
        });
      case "QQQQQ":
        return localize2.quarter(quarter, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQ":
      default:
        return localize2.quarter(quarter, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function(date, token, localize2) {
    const quarter = Math.ceil((date.getMonth() + 1) / 3);
    switch (token) {
      case "q":
        return String(quarter);
      case "qq":
        return addLeadingZeros(quarter, 2);
      case "qo":
        return localize2.ordinalNumber(quarter, { unit: "quarter" });
      case "qqq":
        return localize2.quarter(quarter, {
          width: "abbreviated",
          context: "standalone"
        });
      case "qqqqq":
        return localize2.quarter(quarter, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqq":
      default:
        return localize2.quarter(quarter, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function(date, token, localize2) {
    const month = date.getMonth();
    switch (token) {
      case "M":
      case "MM":
        return lightFormatters.M(date, token);
      case "Mo":
        return localize2.ordinalNumber(month + 1, { unit: "month" });
      case "MMM":
        return localize2.month(month, {
          width: "abbreviated",
          context: "formatting"
        });
      case "MMMMM":
        return localize2.month(month, {
          width: "narrow",
          context: "formatting"
        });
      case "MMMM":
      default:
        return localize2.month(month, { width: "wide", context: "formatting" });
    }
  },
  // Stand-alone month
  L: function(date, token, localize2) {
    const month = date.getMonth();
    switch (token) {
      case "L":
        return String(month + 1);
      case "LL":
        return addLeadingZeros(month + 1, 2);
      case "Lo":
        return localize2.ordinalNumber(month + 1, { unit: "month" });
      case "LLL":
        return localize2.month(month, {
          width: "abbreviated",
          context: "standalone"
        });
      case "LLLLL":
        return localize2.month(month, {
          width: "narrow",
          context: "standalone"
        });
      case "LLLL":
      default:
        return localize2.month(month, { width: "wide", context: "standalone" });
    }
  },
  // Local week of year
  w: function(date, token, localize2, options) {
    const week = getWeek(date, options);
    if (token === "wo") {
      return localize2.ordinalNumber(week, { unit: "week" });
    }
    return addLeadingZeros(week, token.length);
  },
  // ISO week of year
  I: function(date, token, localize2) {
    const isoWeek = getISOWeek(date);
    if (token === "Io") {
      return localize2.ordinalNumber(isoWeek, { unit: "week" });
    }
    return addLeadingZeros(isoWeek, token.length);
  },
  // Day of the month
  d: function(date, token, localize2) {
    if (token === "do") {
      return localize2.ordinalNumber(date.getDate(), { unit: "date" });
    }
    return lightFormatters.d(date, token);
  },
  // Day of year
  D: function(date, token, localize2) {
    const dayOfYear = getDayOfYear(date);
    if (token === "Do") {
      return localize2.ordinalNumber(dayOfYear, { unit: "dayOfYear" });
    }
    return addLeadingZeros(dayOfYear, token.length);
  },
  // Day of week
  E: function(date, token, localize2) {
    const dayOfWeek = date.getDay();
    switch (token) {
      case "E":
      case "EE":
      case "EEE":
        return localize2.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting"
        });
      case "EEEEE":
        return localize2.day(dayOfWeek, {
          width: "narrow",
          context: "formatting"
        });
      case "EEEEEE":
        return localize2.day(dayOfWeek, {
          width: "short",
          context: "formatting"
        });
      case "EEEE":
      default:
        return localize2.day(dayOfWeek, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function(date, token, localize2, options) {
    const dayOfWeek = date.getDay();
    const localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
    switch (token) {
      case "e":
        return String(localDayOfWeek);
      case "ee":
        return addLeadingZeros(localDayOfWeek, 2);
      case "eo":
        return localize2.ordinalNumber(localDayOfWeek, { unit: "day" });
      case "eee":
        return localize2.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting"
        });
      case "eeeee":
        return localize2.day(dayOfWeek, {
          width: "narrow",
          context: "formatting"
        });
      case "eeeeee":
        return localize2.day(dayOfWeek, {
          width: "short",
          context: "formatting"
        });
      case "eeee":
      default:
        return localize2.day(dayOfWeek, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(date, token, localize2, options) {
    const dayOfWeek = date.getDay();
    const localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
    switch (token) {
      case "c":
        return String(localDayOfWeek);
      case "cc":
        return addLeadingZeros(localDayOfWeek, token.length);
      case "co":
        return localize2.ordinalNumber(localDayOfWeek, { unit: "day" });
      case "ccc":
        return localize2.day(dayOfWeek, {
          width: "abbreviated",
          context: "standalone"
        });
      case "ccccc":
        return localize2.day(dayOfWeek, {
          width: "narrow",
          context: "standalone"
        });
      case "cccccc":
        return localize2.day(dayOfWeek, {
          width: "short",
          context: "standalone"
        });
      case "cccc":
      default:
        return localize2.day(dayOfWeek, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(date, token, localize2) {
    const dayOfWeek = date.getDay();
    const isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;
    switch (token) {
      case "i":
        return String(isoDayOfWeek);
      case "ii":
        return addLeadingZeros(isoDayOfWeek, token.length);
      case "io":
        return localize2.ordinalNumber(isoDayOfWeek, { unit: "day" });
      case "iii":
        return localize2.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting"
        });
      case "iiiii":
        return localize2.day(dayOfWeek, {
          width: "narrow",
          context: "formatting"
        });
      case "iiiiii":
        return localize2.day(dayOfWeek, {
          width: "short",
          context: "formatting"
        });
      case "iiii":
      default:
        return localize2.day(dayOfWeek, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function(date, token, localize2) {
    const hours = date.getHours();
    const dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";
    switch (token) {
      case "a":
      case "aa":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(date, token, localize2) {
    const hours = date.getHours();
    let dayPeriodEnumValue;
    if (hours === 12) {
      dayPeriodEnumValue = dayPeriodEnum.noon;
    } else if (hours === 0) {
      dayPeriodEnumValue = dayPeriodEnum.midnight;
    } else {
      dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";
    }
    switch (token) {
      case "b":
      case "bb":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(date, token, localize2) {
    const hours = date.getHours();
    let dayPeriodEnumValue;
    if (hours >= 17) {
      dayPeriodEnumValue = dayPeriodEnum.evening;
    } else if (hours >= 12) {
      dayPeriodEnumValue = dayPeriodEnum.afternoon;
    } else if (hours >= 4) {
      dayPeriodEnumValue = dayPeriodEnum.morning;
    } else {
      dayPeriodEnumValue = dayPeriodEnum.night;
    }
    switch (token) {
      case "B":
      case "BB":
      case "BBB":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function(date, token, localize2) {
    if (token === "ho") {
      let hours = date.getHours() % 12;
      if (hours === 0) hours = 12;
      return localize2.ordinalNumber(hours, { unit: "hour" });
    }
    return lightFormatters.h(date, token);
  },
  // Hour [0-23]
  H: function(date, token, localize2) {
    if (token === "Ho") {
      return localize2.ordinalNumber(date.getHours(), { unit: "hour" });
    }
    return lightFormatters.H(date, token);
  },
  // Hour [0-11]
  K: function(date, token, localize2) {
    const hours = date.getHours() % 12;
    if (token === "Ko") {
      return localize2.ordinalNumber(hours, { unit: "hour" });
    }
    return addLeadingZeros(hours, token.length);
  },
  // Hour [1-24]
  k: function(date, token, localize2) {
    let hours = date.getHours();
    if (hours === 0) hours = 24;
    if (token === "ko") {
      return localize2.ordinalNumber(hours, { unit: "hour" });
    }
    return addLeadingZeros(hours, token.length);
  },
  // Minute
  m: function(date, token, localize2) {
    if (token === "mo") {
      return localize2.ordinalNumber(date.getMinutes(), { unit: "minute" });
    }
    return lightFormatters.m(date, token);
  },
  // Second
  s: function(date, token, localize2) {
    if (token === "so") {
      return localize2.ordinalNumber(date.getSeconds(), { unit: "second" });
    }
    return lightFormatters.s(date, token);
  },
  // Fraction of second
  S: function(date, token) {
    return lightFormatters.S(date, token);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(date, token, _localize) {
    const timezoneOffset = date.getTimezoneOffset();
    if (timezoneOffset === 0) {
      return "Z";
    }
    switch (token) {
      case "X":
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      case "XXXX":
      case "XX":
        return formatTimezone(timezoneOffset);
      case "XXXXX":
      case "XXX":
      default:
        return formatTimezone(timezoneOffset, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(date, token, _localize) {
    const timezoneOffset = date.getTimezoneOffset();
    switch (token) {
      case "x":
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      case "xxxx":
      case "xx":
        return formatTimezone(timezoneOffset);
      case "xxxxx":
      case "xxx":
      default:
        return formatTimezone(timezoneOffset, ":");
    }
  },
  // Timezone (GMT)
  O: function(date, token, _localize) {
    const timezoneOffset = date.getTimezoneOffset();
    switch (token) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + formatTimezoneShort(timezoneOffset, ":");
      case "OOOO":
      default:
        return "GMT" + formatTimezone(timezoneOffset, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(date, token, _localize) {
    const timezoneOffset = date.getTimezoneOffset();
    switch (token) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + formatTimezoneShort(timezoneOffset, ":");
      case "zzzz":
      default:
        return "GMT" + formatTimezone(timezoneOffset, ":");
    }
  },
  // Seconds timestamp
  t: function(date, token, _localize) {
    const timestamp = Math.trunc(+date / 1e3);
    return addLeadingZeros(timestamp, token.length);
  },
  // Milliseconds timestamp
  T: function(date, token, _localize) {
    return addLeadingZeros(+date, token.length);
  }
};
function formatTimezoneShort(offset, delimiter = "") {
  const sign = offset > 0 ? "-" : "+";
  const absOffset = Math.abs(offset);
  const hours = Math.trunc(absOffset / 60);
  const minutes = absOffset % 60;
  if (minutes === 0) {
    return sign + String(hours);
  }
  return sign + String(hours) + delimiter + addLeadingZeros(minutes, 2);
}
function formatTimezoneWithOptionalMinutes(offset, delimiter) {
  if (offset % 60 === 0) {
    const sign = offset > 0 ? "-" : "+";
    return sign + addLeadingZeros(Math.abs(offset) / 60, 2);
  }
  return formatTimezone(offset, delimiter);
}
function formatTimezone(offset, delimiter = "") {
  const sign = offset > 0 ? "-" : "+";
  const absOffset = Math.abs(offset);
  const hours = addLeadingZeros(Math.trunc(absOffset / 60), 2);
  const minutes = addLeadingZeros(absOffset % 60, 2);
  return sign + hours + delimiter + minutes;
}
const dateLongFormatter = (pattern, formatLong2) => {
  switch (pattern) {
    case "P":
      return formatLong2.date({ width: "short" });
    case "PP":
      return formatLong2.date({ width: "medium" });
    case "PPP":
      return formatLong2.date({ width: "long" });
    case "PPPP":
    default:
      return formatLong2.date({ width: "full" });
  }
};
const timeLongFormatter = (pattern, formatLong2) => {
  switch (pattern) {
    case "p":
      return formatLong2.time({ width: "short" });
    case "pp":
      return formatLong2.time({ width: "medium" });
    case "ppp":
      return formatLong2.time({ width: "long" });
    case "pppp":
    default:
      return formatLong2.time({ width: "full" });
  }
};
const dateTimeLongFormatter = (pattern, formatLong2) => {
  const matchResult = pattern.match(/(P+)(p+)?/) || [];
  const datePattern = matchResult[1];
  const timePattern = matchResult[2];
  if (!timePattern) {
    return dateLongFormatter(pattern, formatLong2);
  }
  let dateTimeFormat;
  switch (datePattern) {
    case "P":
      dateTimeFormat = formatLong2.dateTime({ width: "short" });
      break;
    case "PP":
      dateTimeFormat = formatLong2.dateTime({ width: "medium" });
      break;
    case "PPP":
      dateTimeFormat = formatLong2.dateTime({ width: "long" });
      break;
    case "PPPP":
    default:
      dateTimeFormat = formatLong2.dateTime({ width: "full" });
      break;
  }
  return dateTimeFormat.replace("{{date}}", dateLongFormatter(datePattern, formatLong2)).replace("{{time}}", timeLongFormatter(timePattern, formatLong2));
};
const longFormatters = {
  p: timeLongFormatter,
  P: dateTimeLongFormatter
};
const dayOfYearTokenRE = /^D+$/;
const weekYearTokenRE = /^Y+$/;
const throwTokens = ["D", "DD", "YY", "YYYY"];
function isProtectedDayOfYearToken(token) {
  return dayOfYearTokenRE.test(token);
}
function isProtectedWeekYearToken(token) {
  return weekYearTokenRE.test(token);
}
function warnOrThrowProtectedError(token, format2, input) {
  const _message = message(token, format2, input);
  console.warn(_message);
  if (throwTokens.includes(token)) throw new RangeError(_message);
}
function message(token, format2, input) {
  const subject = token[0] === "Y" ? "years" : "days of the month";
  return `Use \`${token.toLowerCase()}\` instead of \`${token}\` (in \`${format2}\`) for formatting ${subject} to the input \`${input}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;
const longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
const escapedStringRegExp = /^'([^]*?)'?$/;
const doubleQuoteRegExp = /''/g;
const unescapedLatinCharacterRegExp = /[a-zA-Z]/;
function format(date, formatStr, options) {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  const defaultOptions2 = getDefaultOptions();
  const locale = (options == null ? void 0 : options.locale) ?? defaultOptions2.locale ?? enUS$1;
  const firstWeekContainsDate = (options == null ? void 0 : options.firstWeekContainsDate) ?? ((_b = (_a = options == null ? void 0 : options.locale) == null ? void 0 : _a.options) == null ? void 0 : _b.firstWeekContainsDate) ?? defaultOptions2.firstWeekContainsDate ?? ((_d = (_c = defaultOptions2.locale) == null ? void 0 : _c.options) == null ? void 0 : _d.firstWeekContainsDate) ?? 1;
  const weekStartsOn = (options == null ? void 0 : options.weekStartsOn) ?? ((_f = (_e = options == null ? void 0 : options.locale) == null ? void 0 : _e.options) == null ? void 0 : _f.weekStartsOn) ?? defaultOptions2.weekStartsOn ?? ((_h = (_g = defaultOptions2.locale) == null ? void 0 : _g.options) == null ? void 0 : _h.weekStartsOn) ?? 0;
  const originalDate = toDate(date, options == null ? void 0 : options.in);
  if (!isValid(originalDate)) {
    throw new RangeError("Invalid time value");
  }
  let parts = formatStr.match(longFormattingTokensRegExp).map((substring) => {
    const firstCharacter = substring[0];
    if (firstCharacter === "p" || firstCharacter === "P") {
      const longFormatter = longFormatters[firstCharacter];
      return longFormatter(substring, locale.formatLong);
    }
    return substring;
  }).join("").match(formattingTokensRegExp).map((substring) => {
    if (substring === "''") {
      return { isToken: false, value: "'" };
    }
    const firstCharacter = substring[0];
    if (firstCharacter === "'") {
      return { isToken: false, value: cleanEscapedString(substring) };
    }
    if (formatters[firstCharacter]) {
      return { isToken: true, value: substring };
    }
    if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + firstCharacter + "`"
      );
    }
    return { isToken: false, value: substring };
  });
  if (locale.localize.preprocessor) {
    parts = locale.localize.preprocessor(originalDate, parts);
  }
  const formatterOptions = {
    firstWeekContainsDate,
    weekStartsOn,
    locale
  };
  return parts.map((part) => {
    if (!part.isToken) return part.value;
    const token = part.value;
    if (!(options == null ? void 0 : options.useAdditionalWeekYearTokens) && isProtectedWeekYearToken(token) || !(options == null ? void 0 : options.useAdditionalDayOfYearTokens) && isProtectedDayOfYearToken(token)) {
      warnOrThrowProtectedError(token, formatStr, String(date));
    }
    const formatter = formatters[token[0]];
    return formatter(originalDate, token, locale.localize, formatterOptions);
  }).join("");
}
function cleanEscapedString(input) {
  const matched = input.match(escapedStringRegExp);
  if (!matched) {
    return input;
  }
  return matched[1].replace(doubleQuoteRegExp, "'");
}
function getDaysInMonth(date, options) {
  const _date = toDate(date, options == null ? void 0 : options.in);
  const year = _date.getFullYear();
  const monthIndex = _date.getMonth();
  const lastDayOfMonth = constructFrom(_date, 0);
  lastDayOfMonth.setFullYear(year, monthIndex + 1, 0);
  lastDayOfMonth.setHours(0, 0, 0, 0);
  return lastDayOfMonth.getDate();
}
function getMonth(date, options) {
  return toDate(date, options == null ? void 0 : options.in).getMonth();
}
function getYear(date, options) {
  return toDate(date, options == null ? void 0 : options.in).getFullYear();
}
function isAfter(date, dateToCompare) {
  return +toDate(date) > +toDate(dateToCompare);
}
function isBefore(date, dateToCompare) {
  return +toDate(date) < +toDate(dateToCompare);
}
function isSameMonth(laterDate, earlierDate, options) {
  const [laterDate_, earlierDate_] = normalizeDates(
    options == null ? void 0 : options.in,
    laterDate,
    earlierDate
  );
  return laterDate_.getFullYear() === earlierDate_.getFullYear() && laterDate_.getMonth() === earlierDate_.getMonth();
}
function isSameYear(laterDate, earlierDate, options) {
  const [laterDate_, earlierDate_] = normalizeDates(
    options == null ? void 0 : options.in,
    laterDate,
    earlierDate
  );
  return laterDate_.getFullYear() === earlierDate_.getFullYear();
}
function setMonth(date, month, options) {
  const _date = toDate(date, options == null ? void 0 : options.in);
  const year = _date.getFullYear();
  const day = _date.getDate();
  const midMonth = constructFrom(date, 0);
  midMonth.setFullYear(year, month, 15);
  midMonth.setHours(0, 0, 0, 0);
  const daysInMonth = getDaysInMonth(midMonth);
  _date.setMonth(month, Math.min(day, daysInMonth));
  return _date;
}
function setYear(date, year, options) {
  const date_ = toDate(date, options == null ? void 0 : options.in);
  if (isNaN(+date_)) return constructFrom(date, NaN);
  date_.setFullYear(year);
  return date_;
}
const FIVE_WEEKS = 5;
const FOUR_WEEKS = 4;
function getBroadcastWeeksInMonth(month, dateLib) {
  const firstDayOfMonth = dateLib.startOfMonth(month);
  const firstDayOfWeek = firstDayOfMonth.getDay() > 0 ? firstDayOfMonth.getDay() : 7;
  const broadcastStartDate = dateLib.addDays(month, -firstDayOfWeek + 1);
  const lastDateOfLastWeek = dateLib.addDays(broadcastStartDate, FIVE_WEEKS * 7 - 1);
  const numberOfWeeks = dateLib.getMonth(month) === dateLib.getMonth(lastDateOfLastWeek) ? FIVE_WEEKS : FOUR_WEEKS;
  return numberOfWeeks;
}
function startOfBroadcastWeek(date, dateLib) {
  const firstOfMonth = dateLib.startOfMonth(date);
  const dayOfWeek = firstOfMonth.getDay();
  if (dayOfWeek === 1) {
    return firstOfMonth;
  } else if (dayOfWeek === 0) {
    return dateLib.addDays(firstOfMonth, -1 * 6);
  } else {
    return dateLib.addDays(firstOfMonth, -1 * (dayOfWeek - 1));
  }
}
function endOfBroadcastWeek(date, dateLib) {
  const startDate = startOfBroadcastWeek(date, dateLib);
  const numberOfWeeks = getBroadcastWeeksInMonth(date, dateLib);
  const endDate = dateLib.addDays(startDate, numberOfWeeks * 7 - 1);
  return endDate;
}
const enUS = {
  ...enUS$1,
  labels: {
    labelDayButton: (date, modifiers, options, dateLib) => {
      let formatDate;
      if (dateLib && typeof dateLib.format === "function") {
        formatDate = dateLib.format.bind(dateLib);
      } else {
        formatDate = (d, pattern) => format(d, pattern, { locale: enUS$1, ...options });
      }
      let label = formatDate(date, "PPPP");
      if (modifiers.today)
        label = `Today, ${label}`;
      if (modifiers.selected)
        label = `${label}, selected`;
      return label;
    },
    labelMonthDropdown: "Choose the Month",
    labelNext: "Go to the Next Month",
    labelPrevious: "Go to the Previous Month",
    labelWeekNumber: (weekNumber) => `Week ${weekNumber}`,
    labelYearDropdown: "Choose the Year",
    labelGrid: (date, options, dateLib) => {
      let formatDate;
      if (dateLib && typeof dateLib.format === "function") {
        formatDate = dateLib.format.bind(dateLib);
      } else {
        formatDate = (d, pattern) => format(d, pattern, { locale: enUS$1, ...options });
      }
      return formatDate(date, "LLLL yyyy");
    },
    labelGridcell: (date, modifiers, options, dateLib) => {
      let formatDate;
      if (dateLib && typeof dateLib.format === "function") {
        formatDate = dateLib.format.bind(dateLib);
      } else {
        formatDate = (d, pattern) => format(d, pattern, { locale: enUS$1, ...options });
      }
      let label = formatDate(date, "PPPP");
      if (modifiers == null ? void 0 : modifiers.today) {
        label = `Today, ${label}`;
      }
      return label;
    },
    labelNav: "Navigation bar",
    labelWeekNumberHeader: "Week Number",
    labelWeekday: (date, options, dateLib) => {
      let formatDate;
      if (dateLib && typeof dateLib.format === "function") {
        formatDate = dateLib.format.bind(dateLib);
      } else {
        formatDate = (d, pattern) => format(d, pattern, { locale: enUS$1, ...options });
      }
      return formatDate(date, "cccc");
    }
  }
};
class DateLib {
  /**
   * Creates an instance of `DateLib`.
   *
   * @param options Configuration options for the date library.
   * @param overrides Custom overrides for the date library functions.
   */
  constructor(options, overrides) {
    this.Date = Date;
    this.today = () => {
      var _a;
      if ((_a = this.overrides) == null ? void 0 : _a.today) {
        return this.overrides.today();
      }
      if (this.options.timeZone) {
        return TZDate.tz(this.options.timeZone);
      }
      return new this.Date();
    };
    this.newDate = (year, monthIndex, date) => {
      var _a;
      if ((_a = this.overrides) == null ? void 0 : _a.newDate) {
        return this.overrides.newDate(year, monthIndex, date);
      }
      if (this.options.timeZone) {
        return new TZDate(year, monthIndex, date, this.options.timeZone);
      }
      return new Date(year, monthIndex, date);
    };
    this.addDays = (date, amount) => {
      var _a;
      return ((_a = this.overrides) == null ? void 0 : _a.addDays) ? this.overrides.addDays(date, amount) : addDays(date, amount);
    };
    this.addMonths = (date, amount) => {
      var _a;
      return ((_a = this.overrides) == null ? void 0 : _a.addMonths) ? this.overrides.addMonths(date, amount) : addMonths(date, amount);
    };
    this.addWeeks = (date, amount) => {
      var _a;
      return ((_a = this.overrides) == null ? void 0 : _a.addWeeks) ? this.overrides.addWeeks(date, amount) : addWeeks(date, amount);
    };
    this.addYears = (date, amount) => {
      var _a;
      return ((_a = this.overrides) == null ? void 0 : _a.addYears) ? this.overrides.addYears(date, amount) : addYears(date, amount);
    };
    this.differenceInCalendarDays = (dateLeft, dateRight) => {
      var _a;
      return ((_a = this.overrides) == null ? void 0 : _a.differenceInCalendarDays) ? this.overrides.differenceInCalendarDays(dateLeft, dateRight) : differenceInCalendarDays(dateLeft, dateRight);
    };
    this.differenceInCalendarMonths = (dateLeft, dateRight) => {
      var _a;
      return ((_a = this.overrides) == null ? void 0 : _a.differenceInCalendarMonths) ? this.overrides.differenceInCalendarMonths(dateLeft, dateRight) : differenceInCalendarMonths(dateLeft, dateRight);
    };
    this.eachMonthOfInterval = (interval) => {
      var _a;
      return ((_a = this.overrides) == null ? void 0 : _a.eachMonthOfInterval) ? this.overrides.eachMonthOfInterval(interval) : eachMonthOfInterval(interval);
    };
    this.eachYearOfInterval = (interval) => {
      var _a;
      const years = ((_a = this.overrides) == null ? void 0 : _a.eachYearOfInterval) ? this.overrides.eachYearOfInterval(interval) : eachYearOfInterval(interval);
      const uniqueYears = new Set(years.map((d) => this.getYear(d)));
      if (uniqueYears.size === years.length) {
        return years;
      }
      const yearsArray = [];
      uniqueYears.forEach((y) => {
        yearsArray.push(new Date(y, 0, 1));
      });
      return yearsArray;
    };
    this.endOfBroadcastWeek = (date) => {
      var _a;
      return ((_a = this.overrides) == null ? void 0 : _a.endOfBroadcastWeek) ? this.overrides.endOfBroadcastWeek(date) : endOfBroadcastWeek(date, this);
    };
    this.endOfISOWeek = (date) => {
      var _a;
      return ((_a = this.overrides) == null ? void 0 : _a.endOfISOWeek) ? this.overrides.endOfISOWeek(date) : endOfISOWeek(date);
    };
    this.endOfMonth = (date) => {
      var _a;
      return ((_a = this.overrides) == null ? void 0 : _a.endOfMonth) ? this.overrides.endOfMonth(date) : endOfMonth(date);
    };
    this.endOfWeek = (date, options2) => {
      var _a;
      return ((_a = this.overrides) == null ? void 0 : _a.endOfWeek) ? this.overrides.endOfWeek(date, options2) : endOfWeek(date, this.options);
    };
    this.endOfYear = (date) => {
      var _a;
      return ((_a = this.overrides) == null ? void 0 : _a.endOfYear) ? this.overrides.endOfYear(date) : endOfYear(date);
    };
    this.format = (date, formatStr, _options) => {
      var _a;
      const formatted = ((_a = this.overrides) == null ? void 0 : _a.format) ? this.overrides.format(date, formatStr, this.options) : format(date, formatStr, this.options);
      if (this.options.numerals && this.options.numerals !== "latn") {
        return this.replaceDigits(formatted);
      }
      return formatted;
    };
    this.getISOWeek = (date) => {
      var _a;
      return ((_a = this.overrides) == null ? void 0 : _a.getISOWeek) ? this.overrides.getISOWeek(date) : getISOWeek(date);
    };
    this.getMonth = (date, _options) => {
      var _a;
      return ((_a = this.overrides) == null ? void 0 : _a.getMonth) ? this.overrides.getMonth(date, this.options) : getMonth(date, this.options);
    };
    this.getYear = (date, _options) => {
      var _a;
      return ((_a = this.overrides) == null ? void 0 : _a.getYear) ? this.overrides.getYear(date, this.options) : getYear(date, this.options);
    };
    this.getWeek = (date, _options) => {
      var _a;
      return ((_a = this.overrides) == null ? void 0 : _a.getWeek) ? this.overrides.getWeek(date, this.options) : getWeek(date, this.options);
    };
    this.isAfter = (date, dateToCompare) => {
      var _a;
      return ((_a = this.overrides) == null ? void 0 : _a.isAfter) ? this.overrides.isAfter(date, dateToCompare) : isAfter(date, dateToCompare);
    };
    this.isBefore = (date, dateToCompare) => {
      var _a;
      return ((_a = this.overrides) == null ? void 0 : _a.isBefore) ? this.overrides.isBefore(date, dateToCompare) : isBefore(date, dateToCompare);
    };
    this.isDate = (value) => {
      var _a;
      return ((_a = this.overrides) == null ? void 0 : _a.isDate) ? this.overrides.isDate(value) : isDate(value);
    };
    this.isSameDay = (dateLeft, dateRight) => {
      var _a;
      return ((_a = this.overrides) == null ? void 0 : _a.isSameDay) ? this.overrides.isSameDay(dateLeft, dateRight) : isSameDay(dateLeft, dateRight);
    };
    this.isSameMonth = (dateLeft, dateRight) => {
      var _a;
      return ((_a = this.overrides) == null ? void 0 : _a.isSameMonth) ? this.overrides.isSameMonth(dateLeft, dateRight) : isSameMonth(dateLeft, dateRight);
    };
    this.isSameYear = (dateLeft, dateRight) => {
      var _a;
      return ((_a = this.overrides) == null ? void 0 : _a.isSameYear) ? this.overrides.isSameYear(dateLeft, dateRight) : isSameYear(dateLeft, dateRight);
    };
    this.max = (dates) => {
      var _a;
      return ((_a = this.overrides) == null ? void 0 : _a.max) ? this.overrides.max(dates) : max(dates);
    };
    this.min = (dates) => {
      var _a;
      return ((_a = this.overrides) == null ? void 0 : _a.min) ? this.overrides.min(dates) : min(dates);
    };
    this.setMonth = (date, month) => {
      var _a;
      return ((_a = this.overrides) == null ? void 0 : _a.setMonth) ? this.overrides.setMonth(date, month) : setMonth(date, month);
    };
    this.setYear = (date, year) => {
      var _a;
      return ((_a = this.overrides) == null ? void 0 : _a.setYear) ? this.overrides.setYear(date, year) : setYear(date, year);
    };
    this.startOfBroadcastWeek = (date, _dateLib) => {
      var _a;
      return ((_a = this.overrides) == null ? void 0 : _a.startOfBroadcastWeek) ? this.overrides.startOfBroadcastWeek(date, this) : startOfBroadcastWeek(date, this);
    };
    this.startOfDay = (date) => {
      var _a;
      return ((_a = this.overrides) == null ? void 0 : _a.startOfDay) ? this.overrides.startOfDay(date) : startOfDay(date);
    };
    this.startOfISOWeek = (date) => {
      var _a;
      return ((_a = this.overrides) == null ? void 0 : _a.startOfISOWeek) ? this.overrides.startOfISOWeek(date) : startOfISOWeek(date);
    };
    this.startOfMonth = (date) => {
      var _a;
      return ((_a = this.overrides) == null ? void 0 : _a.startOfMonth) ? this.overrides.startOfMonth(date) : startOfMonth(date);
    };
    this.startOfWeek = (date, _options) => {
      var _a;
      return ((_a = this.overrides) == null ? void 0 : _a.startOfWeek) ? this.overrides.startOfWeek(date, this.options) : startOfWeek(date, this.options);
    };
    this.startOfYear = (date) => {
      var _a;
      return ((_a = this.overrides) == null ? void 0 : _a.startOfYear) ? this.overrides.startOfYear(date) : startOfYear(date);
    };
    this.options = { locale: enUS, ...options };
    this.overrides = overrides;
  }
  /**
   * Generates a mapping of Arabic digits (0-9) to the target numbering system
   * digits.
   *
   * @since 9.5.0
   * @returns A record mapping Arabic digits to the target numerals.
   */
  getDigitMap() {
    const { numerals = "latn" } = this.options;
    const formatter = new Intl.NumberFormat("en-US", {
      numberingSystem: numerals
    });
    const digitMap = {};
    for (let i = 0; i < 10; i++) {
      digitMap[i.toString()] = formatter.format(i);
    }
    return digitMap;
  }
  /**
   * Replaces Arabic digits in a string with the target numbering system digits.
   *
   * @since 9.5.0
   * @param input The string containing Arabic digits.
   * @returns The string with digits replaced.
   */
  replaceDigits(input) {
    const digitMap = this.getDigitMap();
    return input.replace(/\d/g, (digit) => digitMap[digit] || digit);
  }
  /**
   * Formats a number using the configured numbering system.
   *
   * @since 9.5.0
   * @param value The number to format.
   * @returns The formatted number as a string.
   */
  formatNumber(value) {
    return this.replaceDigits(value.toString());
  }
  /**
   * Returns the preferred ordering for month and year labels for the current
   * locale.
   */
  getMonthYearOrder() {
    var _a;
    const code = (_a = this.options.locale) == null ? void 0 : _a.code;
    if (!code) {
      return "month-first";
    }
    return DateLib.yearFirstLocales.has(code) ? "year-first" : "month-first";
  }
  /**
   * Formats the month/year pair respecting locale conventions.
   *
   * @since 9.11.0
   */
  formatMonthYear(date) {
    const { locale, timeZone, numerals } = this.options;
    const localeCode = locale == null ? void 0 : locale.code;
    if (localeCode && DateLib.yearFirstLocales.has(localeCode)) {
      try {
        const intl = new Intl.DateTimeFormat(localeCode, {
          month: "long",
          year: "numeric",
          timeZone,
          numberingSystem: numerals
        });
        const formatted = intl.format(date);
        return formatted;
      } catch {
      }
    }
    const pattern = this.getMonthYearOrder() === "year-first" ? "y LLLL" : "LLLL y";
    return this.format(date, pattern);
  }
}
DateLib.yearFirstLocales = /* @__PURE__ */ new Set([
  "eu",
  "hu",
  "ja",
  "ja-Hira",
  "ja-JP",
  "ko",
  "ko-KR",
  "lt",
  "lt-LT",
  "lv",
  "lv-LV",
  "mn",
  "mn-MN",
  "zh",
  "zh-CN",
  "zh-HK",
  "zh-TW"
]);
const defaultDateLib = new DateLib();
class CalendarDay {
  constructor(date, displayMonth, dateLib = defaultDateLib) {
    this.date = date;
    this.displayMonth = displayMonth;
    this.outside = Boolean(displayMonth && !dateLib.isSameMonth(date, displayMonth));
    this.dateLib = dateLib;
    this.isoDate = dateLib.format(date, "yyyy-MM-dd");
    this.displayMonthId = dateLib.format(displayMonth, "yyyy-MM");
    this.dateMonthId = dateLib.format(date, "yyyy-MM");
  }
  /**
   * Checks if this day is equal to another `CalendarDay`, considering both the
   * date and the displayed month.
   *
   * @param day The `CalendarDay` to compare with.
   * @returns `true` if the days are equal, otherwise `false`.
   */
  isEqualTo(day) {
    return this.dateLib.isSameDay(day.date, this.date) && this.dateLib.isSameMonth(day.displayMonth, this.displayMonth);
  }
}
class CalendarMonth {
  constructor(month, weeks) {
    this.date = month;
    this.weeks = weeks;
  }
}
class CalendarWeek {
  constructor(weekNumber, days) {
    this.days = days;
    this.weekNumber = weekNumber;
  }
}
function Button(props) {
  return React.createElement("button", { ...props });
}
function CaptionLabel(props) {
  return React.createElement("span", { ...props });
}
function Chevron(props) {
  const { size = 24, orientation = "left", className } = props;
  return (
    // biome-ignore lint/a11y/noSvgWithoutTitle: handled by the parent component
    React.createElement(
      "svg",
      { className, width: size, height: size, viewBox: "0 0 24 24" },
      orientation === "up" && React.createElement("polygon", { points: "6.77 17 12.5 11.43 18.24 17 20 15.28 12.5 8 5 15.28" }),
      orientation === "down" && React.createElement("polygon", { points: "6.77 8 12.5 13.57 18.24 8 20 9.72 12.5 17 5 9.72" }),
      orientation === "left" && React.createElement("polygon", { points: "16 18.112 9.81111111 12 16 5.87733333 14.0888889 4 6 12 14.0888889 20" }),
      orientation === "right" && React.createElement("polygon", { points: "8 18.112 14.18888889 12 8 5.87733333 9.91111111 4 18 12 9.91111111 20" })
    )
  );
}
function Day(props) {
  const { day, modifiers, ...tdProps } = props;
  return React.createElement("td", { ...tdProps });
}
function DayButton(props) {
  const { day, modifiers, ...buttonProps } = props;
  const ref = React.useRef(null);
  React.useEffect(() => {
    var _a;
    if (modifiers.focused)
      (_a = ref.current) == null ? void 0 : _a.focus();
  }, [modifiers.focused]);
  return React.createElement("button", { ref, ...buttonProps });
}
var UI;
(function(UI2) {
  UI2["Root"] = "root";
  UI2["Chevron"] = "chevron";
  UI2["Day"] = "day";
  UI2["DayButton"] = "day_button";
  UI2["CaptionLabel"] = "caption_label";
  UI2["Dropdowns"] = "dropdowns";
  UI2["Dropdown"] = "dropdown";
  UI2["DropdownRoot"] = "dropdown_root";
  UI2["Footer"] = "footer";
  UI2["MonthGrid"] = "month_grid";
  UI2["MonthCaption"] = "month_caption";
  UI2["MonthsDropdown"] = "months_dropdown";
  UI2["Month"] = "month";
  UI2["Months"] = "months";
  UI2["Nav"] = "nav";
  UI2["NextMonthButton"] = "button_next";
  UI2["PreviousMonthButton"] = "button_previous";
  UI2["Week"] = "week";
  UI2["Weeks"] = "weeks";
  UI2["Weekday"] = "weekday";
  UI2["Weekdays"] = "weekdays";
  UI2["WeekNumber"] = "week_number";
  UI2["WeekNumberHeader"] = "week_number_header";
  UI2["YearsDropdown"] = "years_dropdown";
})(UI || (UI = {}));
var DayFlag;
(function(DayFlag2) {
  DayFlag2["disabled"] = "disabled";
  DayFlag2["hidden"] = "hidden";
  DayFlag2["outside"] = "outside";
  DayFlag2["focused"] = "focused";
  DayFlag2["today"] = "today";
})(DayFlag || (DayFlag = {}));
var SelectionState;
(function(SelectionState2) {
  SelectionState2["range_end"] = "range_end";
  SelectionState2["range_middle"] = "range_middle";
  SelectionState2["range_start"] = "range_start";
  SelectionState2["selected"] = "selected";
})(SelectionState || (SelectionState = {}));
var Animation;
(function(Animation2) {
  Animation2["weeks_before_enter"] = "weeks_before_enter";
  Animation2["weeks_before_exit"] = "weeks_before_exit";
  Animation2["weeks_after_enter"] = "weeks_after_enter";
  Animation2["weeks_after_exit"] = "weeks_after_exit";
  Animation2["caption_after_enter"] = "caption_after_enter";
  Animation2["caption_after_exit"] = "caption_after_exit";
  Animation2["caption_before_enter"] = "caption_before_enter";
  Animation2["caption_before_exit"] = "caption_before_exit";
})(Animation || (Animation = {}));
function Dropdown(props) {
  const { options, className, components: components2, classNames, ...selectProps } = props;
  const cssClassSelect = [classNames[UI.Dropdown], className].join(" ");
  const selectedOption = options == null ? void 0 : options.find(({ value }) => value === selectProps.value);
  return React.createElement(
    "span",
    { "data-disabled": selectProps.disabled, className: classNames[UI.DropdownRoot] },
    React.createElement(components2.Select, { className: cssClassSelect, ...selectProps }, options == null ? void 0 : options.map(({ value, label, disabled }) => React.createElement(components2.Option, { key: value, value, disabled }, label))),
    React.createElement(
      "span",
      { className: classNames[UI.CaptionLabel], "aria-hidden": true },
      selectedOption == null ? void 0 : selectedOption.label,
      React.createElement(components2.Chevron, { orientation: "down", size: 18, className: classNames[UI.Chevron] })
    )
  );
}
function DropdownNav(props) {
  return React.createElement("div", { ...props });
}
function Footer(props) {
  return React.createElement("div", { ...props });
}
function Month(props) {
  const { calendarMonth, displayIndex, ...divProps } = props;
  return React.createElement("div", { ...divProps }, props.children);
}
function MonthCaption(props) {
  const { calendarMonth, displayIndex, ...divProps } = props;
  return React.createElement("div", { ...divProps });
}
function MonthGrid(props) {
  return React.createElement("table", { ...props });
}
function Months(props) {
  return React.createElement("div", { ...props });
}
const dayPickerContext = reactExports.createContext(void 0);
function useDayPicker() {
  const context = reactExports.useContext(dayPickerContext);
  if (context === void 0) {
    throw new Error("useDayPicker() must be used within a custom component.");
  }
  return context;
}
function MonthsDropdown(props) {
  const { components: components2 } = useDayPicker();
  return React.createElement(components2.Dropdown, { ...props });
}
function Nav(props) {
  const { onPreviousClick, onNextClick, previousMonth, nextMonth, ...navProps } = props;
  const { components: components2, classNames, labels: { labelPrevious: labelPrevious2, labelNext: labelNext2 } } = useDayPicker();
  const handleNextClick = reactExports.useCallback((e) => {
    if (nextMonth) {
      onNextClick == null ? void 0 : onNextClick(e);
    }
  }, [nextMonth, onNextClick]);
  const handlePreviousClick = reactExports.useCallback((e) => {
    if (previousMonth) {
      onPreviousClick == null ? void 0 : onPreviousClick(e);
    }
  }, [previousMonth, onPreviousClick]);
  return React.createElement(
    "nav",
    { ...navProps },
    React.createElement(
      components2.PreviousMonthButton,
      { type: "button", className: classNames[UI.PreviousMonthButton], tabIndex: previousMonth ? void 0 : -1, "aria-disabled": previousMonth ? void 0 : true, "aria-label": labelPrevious2(previousMonth), onClick: handlePreviousClick },
      React.createElement(components2.Chevron, { disabled: previousMonth ? void 0 : true, className: classNames[UI.Chevron], orientation: "left" })
    ),
    React.createElement(
      components2.NextMonthButton,
      { type: "button", className: classNames[UI.NextMonthButton], tabIndex: nextMonth ? void 0 : -1, "aria-disabled": nextMonth ? void 0 : true, "aria-label": labelNext2(nextMonth), onClick: handleNextClick },
      React.createElement(components2.Chevron, { disabled: nextMonth ? void 0 : true, orientation: "right", className: classNames[UI.Chevron] })
    )
  );
}
function NextMonthButton(props) {
  const { components: components2 } = useDayPicker();
  return React.createElement(components2.Button, { ...props });
}
function Option(props) {
  return React.createElement("option", { ...props });
}
function PreviousMonthButton(props) {
  const { components: components2 } = useDayPicker();
  return React.createElement(components2.Button, { ...props });
}
function Root(props) {
  const { rootRef, ...rest } = props;
  return React.createElement("div", { ...rest, ref: rootRef });
}
function Select(props) {
  return React.createElement("select", { ...props });
}
function Week(props) {
  const { week, ...trProps } = props;
  return React.createElement("tr", { ...trProps });
}
function Weekday(props) {
  return React.createElement("th", { ...props });
}
function Weekdays(props) {
  return React.createElement(
    "thead",
    { "aria-hidden": true },
    React.createElement("tr", { ...props })
  );
}
function WeekNumber(props) {
  const { week, ...thProps } = props;
  return React.createElement("th", { ...thProps });
}
function WeekNumberHeader(props) {
  return React.createElement("th", { ...props });
}
function Weeks(props) {
  return React.createElement("tbody", { ...props });
}
function YearsDropdown(props) {
  const { components: components2 } = useDayPicker();
  return React.createElement(components2.Dropdown, { ...props });
}
const components = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Button,
  CaptionLabel,
  Chevron,
  Day,
  DayButton,
  Dropdown,
  DropdownNav,
  Footer,
  Month,
  MonthCaption,
  MonthGrid,
  Months,
  MonthsDropdown,
  Nav,
  NextMonthButton,
  Option,
  PreviousMonthButton,
  Root,
  Select,
  Week,
  WeekNumber,
  WeekNumberHeader,
  Weekday,
  Weekdays,
  Weeks,
  YearsDropdown
}, Symbol.toStringTag, { value: "Module" }));
function rangeIncludesDate(range, date, excludeEnds = false, dateLib = defaultDateLib) {
  let { from, to } = range;
  const { differenceInCalendarDays: differenceInCalendarDays2, isSameDay: isSameDay2 } = dateLib;
  if (from && to) {
    const isRangeInverted = differenceInCalendarDays2(to, from) < 0;
    if (isRangeInverted) {
      [from, to] = [to, from];
    }
    const isInRange = differenceInCalendarDays2(date, from) >= (excludeEnds ? 1 : 0) && differenceInCalendarDays2(to, date) >= (excludeEnds ? 1 : 0);
    return isInRange;
  }
  if (!excludeEnds && to) {
    return isSameDay2(to, date);
  }
  if (!excludeEnds && from) {
    return isSameDay2(from, date);
  }
  return false;
}
function isDateInterval(matcher) {
  return Boolean(matcher && typeof matcher === "object" && "before" in matcher && "after" in matcher);
}
function isDateRange(value) {
  return Boolean(value && typeof value === "object" && "from" in value);
}
function isDateAfterType(value) {
  return Boolean(value && typeof value === "object" && "after" in value);
}
function isDateBeforeType(value) {
  return Boolean(value && typeof value === "object" && "before" in value);
}
function isDayOfWeekType(value) {
  return Boolean(value && typeof value === "object" && "dayOfWeek" in value);
}
function isDatesArray(value, dateLib) {
  return Array.isArray(value) && value.every(dateLib.isDate);
}
function dateMatchModifiers(date, matchers, dateLib = defaultDateLib) {
  const matchersArr = !Array.isArray(matchers) ? [matchers] : matchers;
  const { isSameDay: isSameDay2, differenceInCalendarDays: differenceInCalendarDays2, isAfter: isAfter2 } = dateLib;
  return matchersArr.some((matcher) => {
    if (typeof matcher === "boolean") {
      return matcher;
    }
    if (dateLib.isDate(matcher)) {
      return isSameDay2(date, matcher);
    }
    if (isDatesArray(matcher, dateLib)) {
      return matcher.some((matcherDate) => isSameDay2(date, matcherDate));
    }
    if (isDateRange(matcher)) {
      return rangeIncludesDate(matcher, date, false, dateLib);
    }
    if (isDayOfWeekType(matcher)) {
      if (!Array.isArray(matcher.dayOfWeek)) {
        return matcher.dayOfWeek === date.getDay();
      }
      return matcher.dayOfWeek.includes(date.getDay());
    }
    if (isDateInterval(matcher)) {
      const diffBefore = differenceInCalendarDays2(matcher.before, date);
      const diffAfter = differenceInCalendarDays2(matcher.after, date);
      const isDayBefore = diffBefore > 0;
      const isDayAfter = diffAfter < 0;
      const isClosedInterval = isAfter2(matcher.before, matcher.after);
      if (isClosedInterval) {
        return isDayAfter && isDayBefore;
      } else {
        return isDayBefore || isDayAfter;
      }
    }
    if (isDateAfterType(matcher)) {
      return differenceInCalendarDays2(date, matcher.after) > 0;
    }
    if (isDateBeforeType(matcher)) {
      return differenceInCalendarDays2(matcher.before, date) > 0;
    }
    if (typeof matcher === "function") {
      return matcher(date);
    }
    return false;
  });
}
function createGetModifiers(days, props, navStart, navEnd, dateLib) {
  const { disabled, hidden, modifiers, showOutsideDays, broadcastCalendar, today = dateLib.today() } = props;
  const { isSameDay: isSameDay2, isSameMonth: isSameMonth2, startOfMonth: startOfMonth2, isBefore: isBefore2, endOfMonth: endOfMonth2, isAfter: isAfter2 } = dateLib;
  const computedNavStart = navStart && startOfMonth2(navStart);
  const computedNavEnd = navEnd && endOfMonth2(navEnd);
  const internalModifiersMap = {
    [DayFlag.focused]: [],
    [DayFlag.outside]: [],
    [DayFlag.disabled]: [],
    [DayFlag.hidden]: [],
    [DayFlag.today]: []
  };
  const customModifiersMap = {};
  for (const day of days) {
    const { date, displayMonth } = day;
    const isOutside = Boolean(displayMonth && !isSameMonth2(date, displayMonth));
    const isBeforeNavStart = Boolean(computedNavStart && isBefore2(date, computedNavStart));
    const isAfterNavEnd = Boolean(computedNavEnd && isAfter2(date, computedNavEnd));
    const isDisabled = Boolean(disabled && dateMatchModifiers(date, disabled, dateLib));
    const isHidden = Boolean(hidden && dateMatchModifiers(date, hidden, dateLib)) || isBeforeNavStart || isAfterNavEnd || // Broadcast calendar will show outside days as default
    !broadcastCalendar && !showOutsideDays && isOutside || broadcastCalendar && showOutsideDays === false && isOutside;
    const isToday = isSameDay2(date, today);
    if (isOutside)
      internalModifiersMap.outside.push(day);
    if (isDisabled)
      internalModifiersMap.disabled.push(day);
    if (isHidden)
      internalModifiersMap.hidden.push(day);
    if (isToday)
      internalModifiersMap.today.push(day);
    if (modifiers) {
      Object.keys(modifiers).forEach((name) => {
        const modifierValue = modifiers == null ? void 0 : modifiers[name];
        const isMatch = modifierValue ? dateMatchModifiers(date, modifierValue, dateLib) : false;
        if (!isMatch)
          return;
        if (customModifiersMap[name]) {
          customModifiersMap[name].push(day);
        } else {
          customModifiersMap[name] = [day];
        }
      });
    }
  }
  return (day) => {
    const dayFlags = {
      [DayFlag.focused]: false,
      [DayFlag.disabled]: false,
      [DayFlag.hidden]: false,
      [DayFlag.outside]: false,
      [DayFlag.today]: false
    };
    const customModifiers = {};
    for (const name in internalModifiersMap) {
      const days2 = internalModifiersMap[name];
      dayFlags[name] = days2.some((d) => d === day);
    }
    for (const name in customModifiersMap) {
      customModifiers[name] = customModifiersMap[name].some((d) => d === day);
    }
    return {
      ...dayFlags,
      // custom modifiers should override all the previous ones
      ...customModifiers
    };
  };
}
function getClassNamesForModifiers(modifiers, classNames, modifiersClassNames = {}) {
  const modifierClassNames = Object.entries(modifiers).filter(([, active]) => active === true).reduce((previousValue, [key]) => {
    if (modifiersClassNames[key]) {
      previousValue.push(modifiersClassNames[key]);
    } else if (classNames[DayFlag[key]]) {
      previousValue.push(classNames[DayFlag[key]]);
    } else if (classNames[SelectionState[key]]) {
      previousValue.push(classNames[SelectionState[key]]);
    }
    return previousValue;
  }, [classNames[UI.Day]]);
  return modifierClassNames;
}
function getComponents(customComponents) {
  return {
    ...components,
    ...customComponents
  };
}
function getDataAttributes(props) {
  const dataAttributes = {
    "data-mode": props.mode ?? void 0,
    "data-required": "required" in props ? props.required : void 0,
    "data-multiple-months": props.numberOfMonths && props.numberOfMonths > 1 || void 0,
    "data-week-numbers": props.showWeekNumber || void 0,
    "data-broadcast-calendar": props.broadcastCalendar || void 0,
    "data-nav-layout": props.navLayout || void 0
  };
  Object.entries(props).forEach(([key, val]) => {
    if (key.startsWith("data-")) {
      dataAttributes[key] = val;
    }
  });
  return dataAttributes;
}
function getDefaultClassNames() {
  const classNames = {};
  for (const key in UI) {
    classNames[UI[key]] = `rdp-${UI[key]}`;
  }
  for (const key in DayFlag) {
    classNames[DayFlag[key]] = `rdp-${DayFlag[key]}`;
  }
  for (const key in SelectionState) {
    classNames[SelectionState[key]] = `rdp-${SelectionState[key]}`;
  }
  for (const key in Animation) {
    classNames[Animation[key]] = `rdp-${Animation[key]}`;
  }
  return classNames;
}
function formatCaption(month, options, dateLib) {
  const lib = dateLib ?? new DateLib(options);
  return lib.formatMonthYear(month);
}
const formatMonthCaption = formatCaption;
function formatDay(date, options, dateLib) {
  return (dateLib ?? new DateLib(options)).format(date, "d");
}
function formatMonthDropdown(month, dateLib = defaultDateLib) {
  return dateLib.format(month, "LLLL");
}
function formatWeekdayName(weekday, options, dateLib) {
  return (dateLib ?? new DateLib(options)).format(weekday, "cccccc");
}
function formatWeekNumber(weekNumber, dateLib = defaultDateLib) {
  if (weekNumber < 10) {
    return dateLib.formatNumber(`0${weekNumber.toLocaleString()}`);
  }
  return dateLib.formatNumber(`${weekNumber.toLocaleString()}`);
}
function formatWeekNumberHeader() {
  return ``;
}
function formatYearDropdown(year, dateLib = defaultDateLib) {
  return dateLib.format(year, "yyyy");
}
const formatYearCaption = formatYearDropdown;
const defaultFormatters = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  formatCaption,
  formatDay,
  formatMonthCaption,
  formatMonthDropdown,
  formatWeekNumber,
  formatWeekNumberHeader,
  formatWeekdayName,
  formatYearCaption,
  formatYearDropdown
}, Symbol.toStringTag, { value: "Module" }));
function getFormatters(customFormatters) {
  if ((customFormatters == null ? void 0 : customFormatters.formatMonthCaption) && !customFormatters.formatCaption) {
    customFormatters.formatCaption = customFormatters.formatMonthCaption;
  }
  if ((customFormatters == null ? void 0 : customFormatters.formatYearCaption) && !customFormatters.formatYearDropdown) {
    customFormatters.formatYearDropdown = customFormatters.formatYearCaption;
  }
  return {
    ...defaultFormatters,
    ...customFormatters
  };
}
function labelDayButton(date, modifiers, options, dateLib) {
  let label = (dateLib ?? new DateLib(options)).format(date, "PPPP");
  if (modifiers.today)
    label = `Today, ${label}`;
  if (modifiers.selected)
    label = `${label}, selected`;
  return label;
}
const labelDay = labelDayButton;
function labelGrid(date, options, dateLib) {
  const lib = dateLib ?? new DateLib(options);
  return lib.formatMonthYear(date);
}
const labelCaption = labelGrid;
function labelGridcell(date, modifiers, options, dateLib) {
  let label = (dateLib ?? new DateLib(options)).format(date, "PPPP");
  if (modifiers == null ? void 0 : modifiers.today) {
    label = `Today, ${label}`;
  }
  return label;
}
function labelMonthDropdown(_options) {
  return "Choose the Month";
}
function labelNav() {
  return "";
}
const defaultLabel = "Go to the Next Month";
function labelNext(_month, _options) {
  return defaultLabel;
}
function labelPrevious(_month) {
  return "Go to the Previous Month";
}
function labelWeekday(date, options, dateLib) {
  return (dateLib ?? new DateLib(options)).format(date, "cccc");
}
function labelWeekNumber(weekNumber, _options) {
  return `Week ${weekNumber}`;
}
function labelWeekNumberHeader(_options) {
  return "Week Number";
}
function labelYearDropdown(_options) {
  return "Choose the Year";
}
const defaultLabels = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  labelCaption,
  labelDay,
  labelDayButton,
  labelGrid,
  labelGridcell,
  labelMonthDropdown,
  labelNav,
  labelNext,
  labelPrevious,
  labelWeekNumber,
  labelWeekNumberHeader,
  labelWeekday,
  labelYearDropdown
}, Symbol.toStringTag, { value: "Module" }));
const resolveLabel = (defaultLabel2, customLabel, localeLabel) => {
  if (customLabel)
    return customLabel;
  if (localeLabel) {
    return typeof localeLabel === "function" ? localeLabel : (..._args) => localeLabel;
  }
  return defaultLabel2;
};
function getLabels(customLabels, options) {
  var _a;
  const localeLabels = ((_a = options.locale) == null ? void 0 : _a.labels) ?? {};
  return {
    ...defaultLabels,
    ...customLabels ?? {},
    labelDayButton: resolveLabel(labelDayButton, customLabels == null ? void 0 : customLabels.labelDayButton, localeLabels.labelDayButton),
    labelMonthDropdown: resolveLabel(labelMonthDropdown, customLabels == null ? void 0 : customLabels.labelMonthDropdown, localeLabels.labelMonthDropdown),
    labelNext: resolveLabel(labelNext, customLabels == null ? void 0 : customLabels.labelNext, localeLabels.labelNext),
    labelPrevious: resolveLabel(labelPrevious, customLabels == null ? void 0 : customLabels.labelPrevious, localeLabels.labelPrevious),
    labelWeekNumber: resolveLabel(labelWeekNumber, customLabels == null ? void 0 : customLabels.labelWeekNumber, localeLabels.labelWeekNumber),
    labelYearDropdown: resolveLabel(labelYearDropdown, customLabels == null ? void 0 : customLabels.labelYearDropdown, localeLabels.labelYearDropdown),
    labelGrid: resolveLabel(labelGrid, customLabels == null ? void 0 : customLabels.labelGrid, localeLabels.labelGrid),
    labelGridcell: resolveLabel(labelGridcell, customLabels == null ? void 0 : customLabels.labelGridcell, localeLabels.labelGridcell),
    labelNav: resolveLabel(labelNav, customLabels == null ? void 0 : customLabels.labelNav, localeLabels.labelNav),
    labelWeekNumberHeader: resolveLabel(labelWeekNumberHeader, customLabels == null ? void 0 : customLabels.labelWeekNumberHeader, localeLabels.labelWeekNumberHeader),
    labelWeekday: resolveLabel(labelWeekday, customLabels == null ? void 0 : customLabels.labelWeekday, localeLabels.labelWeekday)
  };
}
function getMonthOptions(displayMonth, navStart, navEnd, formatters2, dateLib) {
  const { startOfMonth: startOfMonth2, startOfYear: startOfYear2, endOfYear: endOfYear2, eachMonthOfInterval: eachMonthOfInterval2, getMonth: getMonth2 } = dateLib;
  const months = eachMonthOfInterval2({
    start: startOfYear2(displayMonth),
    end: endOfYear2(displayMonth)
  });
  const options = months.map((month) => {
    const label = formatters2.formatMonthDropdown(month, dateLib);
    const value = getMonth2(month);
    const disabled = navStart && month < startOfMonth2(navStart) || navEnd && month > startOfMonth2(navEnd) || false;
    return { value, label, disabled };
  });
  return options;
}
function getStyleForModifiers(dayModifiers, styles = {}, modifiersStyles = {}) {
  let style = { ...styles == null ? void 0 : styles[UI.Day] };
  Object.entries(dayModifiers).filter(([, active]) => active === true).forEach(([modifier]) => {
    style = {
      ...style,
      ...modifiersStyles == null ? void 0 : modifiersStyles[modifier]
    };
  });
  return style;
}
function getWeekdays(dateLib, ISOWeek, broadcastCalendar, today) {
  const referenceToday = today ?? dateLib.today();
  const start = broadcastCalendar ? dateLib.startOfBroadcastWeek(referenceToday, dateLib) : ISOWeek ? dateLib.startOfISOWeek(referenceToday) : dateLib.startOfWeek(referenceToday);
  const days = [];
  for (let i = 0; i < 7; i++) {
    const day = dateLib.addDays(start, i);
    days.push(day);
  }
  return days;
}
function getYearOptions(navStart, navEnd, formatters2, dateLib, reverse = false) {
  if (!navStart)
    return void 0;
  if (!navEnd)
    return void 0;
  const { startOfYear: startOfYear2, endOfYear: endOfYear2, eachYearOfInterval: eachYearOfInterval2, getYear: getYear2 } = dateLib;
  const firstNavYear = startOfYear2(navStart);
  const lastNavYear = endOfYear2(navEnd);
  const years = eachYearOfInterval2({ start: firstNavYear, end: lastNavYear });
  if (reverse)
    years.reverse();
  return years.map((year) => {
    const label = formatters2.formatYearDropdown(year, dateLib);
    return {
      value: getYear2(year),
      label,
      disabled: false
    };
  });
}
function createNoonOverrides(timeZone, options = {}) {
  var _a;
  const { weekStartsOn, locale } = options;
  const fallbackWeekStartsOn = weekStartsOn ?? ((_a = locale == null ? void 0 : locale.options) == null ? void 0 : _a.weekStartsOn) ?? 0;
  const toNoonTZDate = (date) => {
    const normalizedDate = typeof date === "number" || typeof date === "string" ? new Date(date) : date;
    return new TZDate(normalizedDate.getFullYear(), normalizedDate.getMonth(), normalizedDate.getDate(), 12, 0, 0, timeZone);
  };
  const toCalendarDate = (date) => {
    const zoned = toNoonTZDate(date);
    return new Date(zoned.getFullYear(), zoned.getMonth(), zoned.getDate(), 0, 0, 0, 0);
  };
  return {
    today: () => {
      return toNoonTZDate(TZDate.tz(timeZone));
    },
    newDate: (year, monthIndex, date) => {
      return new TZDate(year, monthIndex, date, 12, 0, 0, timeZone);
    },
    startOfDay: (date) => {
      return toNoonTZDate(date);
    },
    startOfWeek: (date, options2) => {
      const base = toNoonTZDate(date);
      const weekStartsOnValue = (options2 == null ? void 0 : options2.weekStartsOn) ?? fallbackWeekStartsOn;
      const diff = (base.getDay() - weekStartsOnValue + 7) % 7;
      base.setDate(base.getDate() - diff);
      return base;
    },
    startOfISOWeek: (date) => {
      const base = toNoonTZDate(date);
      const diff = (base.getDay() - 1 + 7) % 7;
      base.setDate(base.getDate() - diff);
      return base;
    },
    startOfMonth: (date) => {
      const base = toNoonTZDate(date);
      base.setDate(1);
      return base;
    },
    startOfYear: (date) => {
      const base = toNoonTZDate(date);
      base.setMonth(0, 1);
      return base;
    },
    endOfWeek: (date, options2) => {
      const base = toNoonTZDate(date);
      const weekStartsOnValue = (options2 == null ? void 0 : options2.weekStartsOn) ?? fallbackWeekStartsOn;
      const endDow = (weekStartsOnValue + 6) % 7;
      const diff = (endDow - base.getDay() + 7) % 7;
      base.setDate(base.getDate() + diff);
      return base;
    },
    endOfISOWeek: (date) => {
      const base = toNoonTZDate(date);
      const diff = (7 - base.getDay()) % 7;
      base.setDate(base.getDate() + diff);
      return base;
    },
    endOfMonth: (date) => {
      const base = toNoonTZDate(date);
      base.setMonth(base.getMonth() + 1, 0);
      return base;
    },
    endOfYear: (date) => {
      const base = toNoonTZDate(date);
      base.setMonth(11, 31);
      return base;
    },
    eachMonthOfInterval: (interval) => {
      const start = toNoonTZDate(interval.start);
      const end = toNoonTZDate(interval.end);
      const result = [];
      const cursor = new TZDate(start.getFullYear(), start.getMonth(), 1, 12, 0, 0, timeZone);
      const endKey = end.getFullYear() * 12 + end.getMonth();
      while (cursor.getFullYear() * 12 + cursor.getMonth() <= endKey) {
        result.push(new TZDate(cursor, timeZone));
        cursor.setMonth(cursor.getMonth() + 1, 1);
      }
      return result;
    },
    // Normalize to noon once before arithmetic (avoid DST/midnight edge cases),
    // mutate the same TZDate, and return it.
    addDays: (date, amount) => {
      const base = toNoonTZDate(date);
      base.setDate(base.getDate() + amount);
      return base;
    },
    addWeeks: (date, amount) => {
      const base = toNoonTZDate(date);
      base.setDate(base.getDate() + amount * 7);
      return base;
    },
    addMonths: (date, amount) => {
      const base = toNoonTZDate(date);
      base.setMonth(base.getMonth() + amount);
      return base;
    },
    addYears: (date, amount) => {
      const base = toNoonTZDate(date);
      base.setFullYear(base.getFullYear() + amount);
      return base;
    },
    eachYearOfInterval: (interval) => {
      const start = toNoonTZDate(interval.start);
      const end = toNoonTZDate(interval.end);
      const years = [];
      const cursor = new TZDate(start.getFullYear(), 0, 1, 12, 0, 0, timeZone);
      while (cursor.getFullYear() <= end.getFullYear()) {
        years.push(new TZDate(cursor, timeZone));
        cursor.setFullYear(cursor.getFullYear() + 1, 0, 1);
      }
      return years;
    },
    getWeek: (date, options2) => {
      var _a2;
      const base = toCalendarDate(date);
      return getWeek(base, {
        weekStartsOn: (options2 == null ? void 0 : options2.weekStartsOn) ?? fallbackWeekStartsOn,
        firstWeekContainsDate: (options2 == null ? void 0 : options2.firstWeekContainsDate) ?? ((_a2 = locale == null ? void 0 : locale.options) == null ? void 0 : _a2.firstWeekContainsDate) ?? 1
      });
    },
    getISOWeek: (date) => {
      const base = toCalendarDate(date);
      return getISOWeek(base);
    },
    differenceInCalendarDays: (dateLeft, dateRight) => {
      const left = toCalendarDate(dateLeft);
      const right = toCalendarDate(dateRight);
      return differenceInCalendarDays(left, right);
    },
    differenceInCalendarMonths: (dateLeft, dateRight) => {
      const left = toCalendarDate(dateLeft);
      const right = toCalendarDate(dateRight);
      return differenceInCalendarMonths(left, right);
    }
  };
}
const asHtmlElement = (element) => {
  if (element instanceof HTMLElement)
    return element;
  return null;
};
const queryMonthEls = (element) => [
  ...element.querySelectorAll("[data-animated-month]") ?? []
];
const queryMonthEl = (element) => asHtmlElement(element.querySelector("[data-animated-month]"));
const queryCaptionEl = (element) => asHtmlElement(element.querySelector("[data-animated-caption]"));
const queryWeeksEl = (element) => asHtmlElement(element.querySelector("[data-animated-weeks]"));
const queryNavEl = (element) => asHtmlElement(element.querySelector("[data-animated-nav]"));
const queryWeekdaysEl = (element) => asHtmlElement(element.querySelector("[data-animated-weekdays]"));
function useAnimation(rootElRef, enabled, { classNames, months, focused, dateLib }) {
  const previousRootElSnapshotRef = reactExports.useRef(null);
  const previousMonthsRef = reactExports.useRef(months);
  const animatingRef = reactExports.useRef(false);
  reactExports.useLayoutEffect(() => {
    const previousMonths = previousMonthsRef.current;
    previousMonthsRef.current = months;
    if (!enabled || !rootElRef.current || // safety check because the ref can be set to anything by consumers
    !(rootElRef.current instanceof HTMLElement) || // validation required for the animation to work as expected
    months.length === 0 || previousMonths.length === 0 || months.length !== previousMonths.length) {
      return;
    }
    const isSameMonth2 = dateLib.isSameMonth(months[0].date, previousMonths[0].date);
    const isAfterPreviousMonth = dateLib.isAfter(months[0].date, previousMonths[0].date);
    const captionAnimationClass = isAfterPreviousMonth ? classNames[Animation.caption_after_enter] : classNames[Animation.caption_before_enter];
    const weeksAnimationClass = isAfterPreviousMonth ? classNames[Animation.weeks_after_enter] : classNames[Animation.weeks_before_enter];
    const previousRootElSnapshot = previousRootElSnapshotRef.current;
    const rootElSnapshot = rootElRef.current.cloneNode(true);
    if (rootElSnapshot instanceof HTMLElement) {
      const currentMonthElsSnapshot = queryMonthEls(rootElSnapshot);
      currentMonthElsSnapshot.forEach((currentMonthElSnapshot) => {
        if (!(currentMonthElSnapshot instanceof HTMLElement))
          return;
        const previousMonthElSnapshot = queryMonthEl(currentMonthElSnapshot);
        if (previousMonthElSnapshot && currentMonthElSnapshot.contains(previousMonthElSnapshot)) {
          currentMonthElSnapshot.removeChild(previousMonthElSnapshot);
        }
        const captionEl = queryCaptionEl(currentMonthElSnapshot);
        if (captionEl) {
          captionEl.classList.remove(captionAnimationClass);
        }
        const weeksEl = queryWeeksEl(currentMonthElSnapshot);
        if (weeksEl) {
          weeksEl.classList.remove(weeksAnimationClass);
        }
      });
      previousRootElSnapshotRef.current = rootElSnapshot;
    } else {
      previousRootElSnapshotRef.current = null;
    }
    if (animatingRef.current || isSameMonth2 || // skip animation if a day is focused because it can cause issues to the animation and is better for a11y
    focused) {
      return;
    }
    const previousMonthEls = previousRootElSnapshot instanceof HTMLElement ? queryMonthEls(previousRootElSnapshot) : [];
    const currentMonthEls = queryMonthEls(rootElRef.current);
    if ((currentMonthEls == null ? void 0 : currentMonthEls.every((el) => el instanceof HTMLElement)) && previousMonthEls && previousMonthEls.every((el) => el instanceof HTMLElement)) {
      animatingRef.current = true;
      rootElRef.current.style.isolation = "isolate";
      const navEl = queryNavEl(rootElRef.current);
      if (navEl) {
        navEl.style.zIndex = "1";
      }
      currentMonthEls.forEach((currentMonthEl, index) => {
        const previousMonthEl = previousMonthEls[index];
        if (!previousMonthEl) {
          return;
        }
        currentMonthEl.style.position = "relative";
        currentMonthEl.style.overflow = "hidden";
        const captionEl = queryCaptionEl(currentMonthEl);
        if (captionEl) {
          captionEl.classList.add(captionAnimationClass);
        }
        const weeksEl = queryWeeksEl(currentMonthEl);
        if (weeksEl) {
          weeksEl.classList.add(weeksAnimationClass);
        }
        const cleanUp = () => {
          animatingRef.current = false;
          if (rootElRef.current) {
            rootElRef.current.style.isolation = "";
          }
          if (navEl) {
            navEl.style.zIndex = "";
          }
          if (captionEl) {
            captionEl.classList.remove(captionAnimationClass);
          }
          if (weeksEl) {
            weeksEl.classList.remove(weeksAnimationClass);
          }
          currentMonthEl.style.position = "";
          currentMonthEl.style.overflow = "";
          if (currentMonthEl.contains(previousMonthEl)) {
            currentMonthEl.removeChild(previousMonthEl);
          }
        };
        previousMonthEl.style.pointerEvents = "none";
        previousMonthEl.style.position = "absolute";
        previousMonthEl.style.overflow = "hidden";
        previousMonthEl.setAttribute("aria-hidden", "true");
        const previousWeekdaysEl = queryWeekdaysEl(previousMonthEl);
        if (previousWeekdaysEl) {
          previousWeekdaysEl.style.opacity = "0";
        }
        const previousCaptionEl = queryCaptionEl(previousMonthEl);
        if (previousCaptionEl) {
          previousCaptionEl.classList.add(isAfterPreviousMonth ? classNames[Animation.caption_before_exit] : classNames[Animation.caption_after_exit]);
          previousCaptionEl.addEventListener("animationend", cleanUp);
        }
        const previousWeeksEl = queryWeeksEl(previousMonthEl);
        if (previousWeeksEl) {
          previousWeeksEl.classList.add(isAfterPreviousMonth ? classNames[Animation.weeks_before_exit] : classNames[Animation.weeks_after_exit]);
        }
        currentMonthEl.insertBefore(previousMonthEl, currentMonthEl.firstChild);
      });
    }
  });
}
function getDates(displayMonths, maxDate, props, dateLib) {
  const firstMonth = displayMonths[0];
  const lastMonth = displayMonths[displayMonths.length - 1];
  const { ISOWeek, fixedWeeks, broadcastCalendar } = props ?? {};
  const { addDays: addDays2, differenceInCalendarDays: differenceInCalendarDays2, differenceInCalendarMonths: differenceInCalendarMonths2, endOfBroadcastWeek: endOfBroadcastWeek2, endOfISOWeek: endOfISOWeek2, endOfMonth: endOfMonth2, endOfWeek: endOfWeek2, isAfter: isAfter2, startOfBroadcastWeek: startOfBroadcastWeek2, startOfISOWeek: startOfISOWeek2, startOfWeek: startOfWeek2 } = dateLib;
  const startWeekFirstDate = broadcastCalendar ? startOfBroadcastWeek2(firstMonth, dateLib) : ISOWeek ? startOfISOWeek2(firstMonth) : startOfWeek2(firstMonth);
  const displayMonthsWeekEnd = broadcastCalendar ? endOfBroadcastWeek2(lastMonth) : ISOWeek ? endOfISOWeek2(endOfMonth2(lastMonth)) : endOfWeek2(endOfMonth2(lastMonth));
  const constraintWeekEnd = maxDate && (broadcastCalendar ? endOfBroadcastWeek2(maxDate) : ISOWeek ? endOfISOWeek2(maxDate) : endOfWeek2(maxDate));
  const gridEndDate = constraintWeekEnd && isAfter2(displayMonthsWeekEnd, constraintWeekEnd) ? constraintWeekEnd : displayMonthsWeekEnd;
  const nOfDays = differenceInCalendarDays2(gridEndDate, startWeekFirstDate);
  const nOfMonths = differenceInCalendarMonths2(lastMonth, firstMonth) + 1;
  const dates = [];
  for (let i = 0; i <= nOfDays; i++) {
    const date = addDays2(startWeekFirstDate, i);
    dates.push(date);
  }
  const nrOfDaysWithFixedWeeks = broadcastCalendar ? 35 : 42;
  const extraDates = nrOfDaysWithFixedWeeks * nOfMonths;
  if (fixedWeeks && dates.length < extraDates) {
    const daysToAdd = extraDates - dates.length;
    for (let i = 0; i < daysToAdd; i++) {
      const date = addDays2(dates[dates.length - 1], 1);
      dates.push(date);
    }
  }
  return dates;
}
function getDays(calendarMonths) {
  const initialDays = [];
  return calendarMonths.reduce((days, month) => {
    const weekDays = month.weeks.reduce((weekDays2, week) => {
      return weekDays2.concat(week.days.slice());
    }, initialDays.slice());
    return days.concat(weekDays.slice());
  }, initialDays.slice());
}
function getDisplayMonths(firstDisplayedMonth, calendarEndMonth, props, dateLib) {
  const { numberOfMonths = 1 } = props;
  const months = [];
  for (let i = 0; i < numberOfMonths; i++) {
    const month = dateLib.addMonths(firstDisplayedMonth, i);
    if (calendarEndMonth && month > calendarEndMonth) {
      break;
    }
    months.push(month);
  }
  return months;
}
function getInitialMonth(props, navStart, navEnd, dateLib) {
  const { month, defaultMonth, today = dateLib.today(), numberOfMonths = 1 } = props;
  let initialMonth = month || defaultMonth || today;
  const { differenceInCalendarMonths: differenceInCalendarMonths2, addMonths: addMonths2, startOfMonth: startOfMonth2 } = dateLib;
  if (navEnd && differenceInCalendarMonths2(navEnd, initialMonth) < numberOfMonths - 1) {
    const offset = -1 * (numberOfMonths - 1);
    initialMonth = addMonths2(navEnd, offset);
  }
  if (navStart && differenceInCalendarMonths2(initialMonth, navStart) < 0) {
    initialMonth = navStart;
  }
  return startOfMonth2(initialMonth);
}
function getMonths(displayMonths, dates, props, dateLib) {
  const { addDays: addDays2, endOfBroadcastWeek: endOfBroadcastWeek2, endOfISOWeek: endOfISOWeek2, endOfMonth: endOfMonth2, endOfWeek: endOfWeek2, getISOWeek: getISOWeek2, getWeek: getWeek2, startOfBroadcastWeek: startOfBroadcastWeek2, startOfISOWeek: startOfISOWeek2, startOfWeek: startOfWeek2 } = dateLib;
  const dayPickerMonths = displayMonths.reduce((months, month) => {
    const firstDateOfFirstWeek = props.broadcastCalendar ? startOfBroadcastWeek2(month, dateLib) : props.ISOWeek ? startOfISOWeek2(month) : startOfWeek2(month);
    const lastDateOfLastWeek = props.broadcastCalendar ? endOfBroadcastWeek2(month) : props.ISOWeek ? endOfISOWeek2(endOfMonth2(month)) : endOfWeek2(endOfMonth2(month));
    const monthDates = dates.filter((date) => {
      return date >= firstDateOfFirstWeek && date <= lastDateOfLastWeek;
    });
    const nrOfDaysWithFixedWeeks = props.broadcastCalendar ? 35 : 42;
    if (props.fixedWeeks && monthDates.length < nrOfDaysWithFixedWeeks) {
      const extraDates = dates.filter((date) => {
        const daysToAdd = nrOfDaysWithFixedWeeks - monthDates.length;
        return date > lastDateOfLastWeek && date <= addDays2(lastDateOfLastWeek, daysToAdd);
      });
      monthDates.push(...extraDates);
    }
    const weeks = monthDates.reduce((weeks2, date) => {
      const weekNumber = props.ISOWeek ? getISOWeek2(date) : getWeek2(date);
      const week = weeks2.find((week2) => week2.weekNumber === weekNumber);
      const day = new CalendarDay(date, month, dateLib);
      if (!week) {
        weeks2.push(new CalendarWeek(weekNumber, [day]));
      } else {
        week.days.push(day);
      }
      return weeks2;
    }, []);
    const dayPickerMonth = new CalendarMonth(month, weeks);
    months.push(dayPickerMonth);
    return months;
  }, []);
  if (!props.reverseMonths) {
    return dayPickerMonths;
  } else {
    return dayPickerMonths.reverse();
  }
}
function getNavMonths(props, dateLib) {
  let { startMonth, endMonth } = props;
  const { startOfYear: startOfYear2, startOfDay: startOfDay2, startOfMonth: startOfMonth2, endOfMonth: endOfMonth2, addYears: addYears2, endOfYear: endOfYear2, newDate, today } = dateLib;
  const { fromYear, toYear, fromMonth, toMonth } = props;
  if (!startMonth && fromMonth) {
    startMonth = fromMonth;
  }
  if (!startMonth && fromYear) {
    startMonth = dateLib.newDate(fromYear, 0, 1);
  }
  if (!endMonth && toMonth) {
    endMonth = toMonth;
  }
  if (!endMonth && toYear) {
    endMonth = newDate(toYear, 11, 31);
  }
  const hasYearDropdown = props.captionLayout === "dropdown" || props.captionLayout === "dropdown-years";
  if (startMonth) {
    startMonth = startOfMonth2(startMonth);
  } else if (fromYear) {
    startMonth = newDate(fromYear, 0, 1);
  } else if (!startMonth && hasYearDropdown) {
    startMonth = startOfYear2(addYears2(props.today ?? today(), -100));
  }
  if (endMonth) {
    endMonth = endOfMonth2(endMonth);
  } else if (toYear) {
    endMonth = newDate(toYear, 11, 31);
  } else if (!endMonth && hasYearDropdown) {
    endMonth = endOfYear2(props.today ?? today());
  }
  return [
    startMonth ? startOfDay2(startMonth) : startMonth,
    endMonth ? startOfDay2(endMonth) : endMonth
  ];
}
function getNextMonth(firstDisplayedMonth, calendarEndMonth, options, dateLib) {
  if (options.disableNavigation) {
    return void 0;
  }
  const { pagedNavigation, numberOfMonths = 1 } = options;
  const { startOfMonth: startOfMonth2, addMonths: addMonths2, differenceInCalendarMonths: differenceInCalendarMonths2 } = dateLib;
  const offset = pagedNavigation ? numberOfMonths : 1;
  const month = startOfMonth2(firstDisplayedMonth);
  if (!calendarEndMonth) {
    return addMonths2(month, offset);
  }
  const monthsDiff = differenceInCalendarMonths2(calendarEndMonth, firstDisplayedMonth);
  if (monthsDiff < numberOfMonths) {
    return void 0;
  }
  return addMonths2(month, offset);
}
function getPreviousMonth(firstDisplayedMonth, calendarStartMonth, options, dateLib) {
  if (options.disableNavigation) {
    return void 0;
  }
  const { pagedNavigation, numberOfMonths } = options;
  const { startOfMonth: startOfMonth2, addMonths: addMonths2, differenceInCalendarMonths: differenceInCalendarMonths2 } = dateLib;
  const offset = pagedNavigation ? numberOfMonths ?? 1 : 1;
  const month = startOfMonth2(firstDisplayedMonth);
  if (!calendarStartMonth) {
    return addMonths2(month, -offset);
  }
  const monthsDiff = differenceInCalendarMonths2(month, calendarStartMonth);
  if (monthsDiff <= 0) {
    return void 0;
  }
  return addMonths2(month, -offset);
}
function getWeeks(months) {
  const initialWeeks = [];
  return months.reduce((weeks, month) => {
    return weeks.concat(month.weeks.slice());
  }, initialWeeks.slice());
}
function useControlledValue(defaultValue, controlledValue) {
  const [uncontrolledValue, setValue] = reactExports.useState(defaultValue);
  const value = controlledValue === void 0 ? uncontrolledValue : controlledValue;
  return [value, setValue];
}
function useCalendar(props, dateLib) {
  var _a;
  const [navStart, navEnd] = getNavMonths(props, dateLib);
  const { startOfMonth: startOfMonth2, endOfMonth: endOfMonth2 } = dateLib;
  const initialMonth = getInitialMonth(props, navStart, navEnd, dateLib);
  const [firstMonth, setFirstMonth] = useControlledValue(
    initialMonth,
    // initialMonth is always computed from props.month if provided
    props.month ? initialMonth : void 0
  );
  reactExports.useEffect(() => {
    const newInitialMonth = getInitialMonth(props, navStart, navEnd, dateLib);
    setFirstMonth(newInitialMonth);
  }, [props.timeZone]);
  const { months, weeks, days, previousMonth, nextMonth } = reactExports.useMemo(() => {
    const displayMonths = getDisplayMonths(firstMonth, navEnd, { numberOfMonths: props.numberOfMonths }, dateLib);
    const dates = getDates(displayMonths, props.endMonth ? endOfMonth2(props.endMonth) : void 0, {
      ISOWeek: props.ISOWeek,
      fixedWeeks: props.fixedWeeks,
      broadcastCalendar: props.broadcastCalendar
    }, dateLib);
    const months2 = getMonths(displayMonths, dates, {
      broadcastCalendar: props.broadcastCalendar,
      fixedWeeks: props.fixedWeeks,
      ISOWeek: props.ISOWeek,
      reverseMonths: props.reverseMonths
    }, dateLib);
    const weeks2 = getWeeks(months2);
    const days2 = getDays(months2);
    const previousMonth2 = getPreviousMonth(firstMonth, navStart, props, dateLib);
    const nextMonth2 = getNextMonth(firstMonth, navEnd, props, dateLib);
    return {
      months: months2,
      weeks: weeks2,
      days: days2,
      previousMonth: previousMonth2,
      nextMonth: nextMonth2
    };
  }, [
    dateLib,
    firstMonth.getTime(),
    navEnd == null ? void 0 : navEnd.getTime(),
    navStart == null ? void 0 : navStart.getTime(),
    props.disableNavigation,
    props.broadcastCalendar,
    (_a = props.endMonth) == null ? void 0 : _a.getTime(),
    props.fixedWeeks,
    props.ISOWeek,
    props.numberOfMonths,
    props.pagedNavigation,
    props.reverseMonths
  ]);
  const { disableNavigation, onMonthChange } = props;
  const isDayInCalendar = (day) => weeks.some((week) => week.days.some((d) => d.isEqualTo(day)));
  const goToMonth = (date) => {
    if (disableNavigation) {
      return;
    }
    let newMonth = startOfMonth2(date);
    if (navStart && newMonth < startOfMonth2(navStart)) {
      newMonth = startOfMonth2(navStart);
    }
    if (navEnd && newMonth > startOfMonth2(navEnd)) {
      newMonth = startOfMonth2(navEnd);
    }
    setFirstMonth(newMonth);
    onMonthChange == null ? void 0 : onMonthChange(newMonth);
  };
  const goToDay = (day) => {
    if (isDayInCalendar(day)) {
      return;
    }
    goToMonth(day.date);
  };
  const calendar = {
    months,
    weeks,
    days,
    navStart,
    navEnd,
    previousMonth,
    nextMonth,
    goToMonth,
    goToDay
  };
  return calendar;
}
var FocusTargetPriority;
(function(FocusTargetPriority2) {
  FocusTargetPriority2[FocusTargetPriority2["Today"] = 0] = "Today";
  FocusTargetPriority2[FocusTargetPriority2["Selected"] = 1] = "Selected";
  FocusTargetPriority2[FocusTargetPriority2["LastFocused"] = 2] = "LastFocused";
  FocusTargetPriority2[FocusTargetPriority2["FocusedModifier"] = 3] = "FocusedModifier";
})(FocusTargetPriority || (FocusTargetPriority = {}));
function isFocusableDay(modifiers) {
  return !modifiers[DayFlag.disabled] && !modifiers[DayFlag.hidden] && !modifiers[DayFlag.outside];
}
function calculateFocusTarget(days, getModifiers, isSelected, lastFocused) {
  let focusTarget;
  let foundFocusTargetPriority = -1;
  for (const day of days) {
    const modifiers = getModifiers(day);
    if (isFocusableDay(modifiers)) {
      if (modifiers[DayFlag.focused] && foundFocusTargetPriority < FocusTargetPriority.FocusedModifier) {
        focusTarget = day;
        foundFocusTargetPriority = FocusTargetPriority.FocusedModifier;
      } else if ((lastFocused == null ? void 0 : lastFocused.isEqualTo(day)) && foundFocusTargetPriority < FocusTargetPriority.LastFocused) {
        focusTarget = day;
        foundFocusTargetPriority = FocusTargetPriority.LastFocused;
      } else if (isSelected(day.date) && foundFocusTargetPriority < FocusTargetPriority.Selected) {
        focusTarget = day;
        foundFocusTargetPriority = FocusTargetPriority.Selected;
      } else if (modifiers[DayFlag.today] && foundFocusTargetPriority < FocusTargetPriority.Today) {
        focusTarget = day;
        foundFocusTargetPriority = FocusTargetPriority.Today;
      }
    }
  }
  if (!focusTarget) {
    focusTarget = days.find((day) => isFocusableDay(getModifiers(day)));
  }
  return focusTarget;
}
function getFocusableDate(moveBy, moveDir, refDate, navStart, navEnd, props, dateLib) {
  const { ISOWeek, broadcastCalendar } = props;
  const { addDays: addDays2, addMonths: addMonths2, addWeeks: addWeeks2, addYears: addYears2, endOfBroadcastWeek: endOfBroadcastWeek2, endOfISOWeek: endOfISOWeek2, endOfWeek: endOfWeek2, max: max2, min: min2, startOfBroadcastWeek: startOfBroadcastWeek2, startOfISOWeek: startOfISOWeek2, startOfWeek: startOfWeek2 } = dateLib;
  const moveFns = {
    day: addDays2,
    week: addWeeks2,
    month: addMonths2,
    year: addYears2,
    startOfWeek: (date) => broadcastCalendar ? startOfBroadcastWeek2(date, dateLib) : ISOWeek ? startOfISOWeek2(date) : startOfWeek2(date),
    endOfWeek: (date) => broadcastCalendar ? endOfBroadcastWeek2(date) : ISOWeek ? endOfISOWeek2(date) : endOfWeek2(date)
  };
  let focusableDate = moveFns[moveBy](refDate, moveDir === "after" ? 1 : -1);
  if (moveDir === "before" && navStart) {
    focusableDate = max2([navStart, focusableDate]);
  } else if (moveDir === "after" && navEnd) {
    focusableDate = min2([navEnd, focusableDate]);
  }
  return focusableDate;
}
function getNextFocus(moveBy, moveDir, refDay, calendarStartMonth, calendarEndMonth, props, dateLib, attempt = 0) {
  if (attempt > 365) {
    return void 0;
  }
  const focusableDate = getFocusableDate(moveBy, moveDir, refDay.date, calendarStartMonth, calendarEndMonth, props, dateLib);
  const isDisabled = Boolean(props.disabled && dateMatchModifiers(focusableDate, props.disabled, dateLib));
  const isHidden = Boolean(props.hidden && dateMatchModifiers(focusableDate, props.hidden, dateLib));
  const targetMonth = focusableDate;
  const focusDay = new CalendarDay(focusableDate, targetMonth, dateLib);
  if (!isDisabled && !isHidden) {
    return focusDay;
  }
  return getNextFocus(moveBy, moveDir, focusDay, calendarStartMonth, calendarEndMonth, props, dateLib, attempt + 1);
}
function useFocus(props, calendar, getModifiers, isSelected, dateLib) {
  const { autoFocus } = props;
  const [lastFocused, setLastFocused] = reactExports.useState();
  const focusTarget = calculateFocusTarget(calendar.days, getModifiers, isSelected || (() => false), lastFocused);
  const [focusedDay, setFocused] = reactExports.useState(autoFocus ? focusTarget : void 0);
  const blur = () => {
    setLastFocused(focusedDay);
    setFocused(void 0);
  };
  const moveFocus = (moveBy, moveDir) => {
    if (!focusedDay)
      return;
    const nextFocus = getNextFocus(moveBy, moveDir, focusedDay, calendar.navStart, calendar.navEnd, props, dateLib);
    if (!nextFocus)
      return;
    if (props.disableNavigation) {
      const isNextInCalendar = calendar.days.some((day) => day.isEqualTo(nextFocus));
      if (!isNextInCalendar) {
        return;
      }
    }
    calendar.goToDay(nextFocus);
    setFocused(nextFocus);
  };
  const isFocusTarget = (day) => {
    return Boolean(focusTarget == null ? void 0 : focusTarget.isEqualTo(day));
  };
  const useFocus2 = {
    isFocusTarget,
    setFocused,
    focused: focusedDay,
    blur,
    moveFocus
  };
  return useFocus2;
}
function useMulti(props, dateLib) {
  const { selected: initiallySelected, required, onSelect } = props;
  const [internallySelected, setSelected] = useControlledValue(initiallySelected, onSelect ? initiallySelected : void 0);
  const selected = !onSelect ? internallySelected : initiallySelected;
  const { isSameDay: isSameDay2 } = dateLib;
  const isSelected = (date) => {
    return (selected == null ? void 0 : selected.some((d) => isSameDay2(d, date))) ?? false;
  };
  const { min: min2, max: max2 } = props;
  const select = (triggerDate, modifiers, e) => {
    let newDates = [...selected ?? []];
    if (isSelected(triggerDate)) {
      if ((selected == null ? void 0 : selected.length) === min2) {
        return;
      }
      if (required && (selected == null ? void 0 : selected.length) === 1) {
        return;
      }
      newDates = selected == null ? void 0 : selected.filter((d) => !isSameDay2(d, triggerDate));
    } else {
      if ((selected == null ? void 0 : selected.length) === max2) {
        newDates = [triggerDate];
      } else {
        newDates = [...newDates, triggerDate];
      }
    }
    if (!onSelect) {
      setSelected(newDates);
    }
    onSelect == null ? void 0 : onSelect(newDates, triggerDate, modifiers, e);
    return newDates;
  };
  return {
    selected,
    select,
    isSelected
  };
}
function addToRange(date, initialRange, min2 = 0, max2 = 0, required = false, dateLib = defaultDateLib) {
  const { from, to } = initialRange || {};
  const { isSameDay: isSameDay2, isAfter: isAfter2, isBefore: isBefore2 } = dateLib;
  let range;
  if (!from && !to) {
    range = { from: date, to: min2 > 0 ? void 0 : date };
  } else if (from && !to) {
    if (isSameDay2(from, date)) {
      if (min2 === 0) {
        range = { from, to: date };
      } else if (required) {
        range = { from, to: void 0 };
      } else {
        range = void 0;
      }
    } else if (isBefore2(date, from)) {
      range = { from: date, to: from };
    } else {
      range = { from, to: date };
    }
  } else if (from && to) {
    if (isSameDay2(from, date) && isSameDay2(to, date)) {
      if (required) {
        range = { from, to };
      } else {
        range = void 0;
      }
    } else if (isSameDay2(from, date)) {
      range = { from, to: min2 > 0 ? void 0 : date };
    } else if (isSameDay2(to, date)) {
      range = { from: date, to: min2 > 0 ? void 0 : date };
    } else if (isBefore2(date, from)) {
      range = { from: date, to };
    } else if (isAfter2(date, from)) {
      range = { from, to: date };
    } else if (isAfter2(date, to)) {
      range = { from, to: date };
    } else {
      throw new Error("Invalid range");
    }
  }
  if ((range == null ? void 0 : range.from) && (range == null ? void 0 : range.to)) {
    const diff = dateLib.differenceInCalendarDays(range.to, range.from);
    if (max2 > 0 && diff > max2) {
      range = { from: date, to: void 0 };
    } else if (min2 > 1 && diff < min2) {
      range = { from: date, to: void 0 };
    }
  }
  return range;
}
function rangeContainsDayOfWeek(range, dayOfWeek, dateLib = defaultDateLib) {
  const dayOfWeekArr = !Array.isArray(dayOfWeek) ? [dayOfWeek] : dayOfWeek;
  let date = range.from;
  const totalDays = dateLib.differenceInCalendarDays(range.to, range.from);
  const totalDaysLimit = Math.min(totalDays, 6);
  for (let i = 0; i <= totalDaysLimit; i++) {
    if (dayOfWeekArr.includes(date.getDay())) {
      return true;
    }
    date = dateLib.addDays(date, 1);
  }
  return false;
}
function rangeOverlaps(rangeLeft, rangeRight, dateLib = defaultDateLib) {
  return rangeIncludesDate(rangeLeft, rangeRight.from, false, dateLib) || rangeIncludesDate(rangeLeft, rangeRight.to, false, dateLib) || rangeIncludesDate(rangeRight, rangeLeft.from, false, dateLib) || rangeIncludesDate(rangeRight, rangeLeft.to, false, dateLib);
}
function rangeContainsModifiers(range, modifiers, dateLib = defaultDateLib) {
  const matchers = Array.isArray(modifiers) ? modifiers : [modifiers];
  const nonFunctionMatchers = matchers.filter((matcher) => typeof matcher !== "function");
  const nonFunctionMatchersResult = nonFunctionMatchers.some((matcher) => {
    if (typeof matcher === "boolean")
      return matcher;
    if (dateLib.isDate(matcher)) {
      return rangeIncludesDate(range, matcher, false, dateLib);
    }
    if (isDatesArray(matcher, dateLib)) {
      return matcher.some((date) => rangeIncludesDate(range, date, false, dateLib));
    }
    if (isDateRange(matcher)) {
      if (matcher.from && matcher.to) {
        return rangeOverlaps(range, { from: matcher.from, to: matcher.to }, dateLib);
      }
      return false;
    }
    if (isDayOfWeekType(matcher)) {
      return rangeContainsDayOfWeek(range, matcher.dayOfWeek, dateLib);
    }
    if (isDateInterval(matcher)) {
      const isClosedInterval = dateLib.isAfter(matcher.before, matcher.after);
      if (isClosedInterval) {
        return rangeOverlaps(range, {
          from: dateLib.addDays(matcher.after, 1),
          to: dateLib.addDays(matcher.before, -1)
        }, dateLib);
      }
      return dateMatchModifiers(range.from, matcher, dateLib) || dateMatchModifiers(range.to, matcher, dateLib);
    }
    if (isDateAfterType(matcher) || isDateBeforeType(matcher)) {
      return dateMatchModifiers(range.from, matcher, dateLib) || dateMatchModifiers(range.to, matcher, dateLib);
    }
    return false;
  });
  if (nonFunctionMatchersResult) {
    return true;
  }
  const functionMatchers = matchers.filter((matcher) => typeof matcher === "function");
  if (functionMatchers.length) {
    let date = range.from;
    const totalDays = dateLib.differenceInCalendarDays(range.to, range.from);
    for (let i = 0; i <= totalDays; i++) {
      if (functionMatchers.some((matcher) => matcher(date))) {
        return true;
      }
      date = dateLib.addDays(date, 1);
    }
  }
  return false;
}
function useRange(props, dateLib) {
  const { disabled, excludeDisabled, resetOnSelect, selected: initiallySelected, required, onSelect } = props;
  const [internallySelected, setSelected] = useControlledValue(initiallySelected, onSelect ? initiallySelected : void 0);
  const selected = !onSelect ? internallySelected : initiallySelected;
  const isSelected = (date) => selected && rangeIncludesDate(selected, date, false, dateLib);
  const select = (triggerDate, modifiers, e) => {
    const { min: min2, max: max2 } = props;
    let newRange;
    if (triggerDate) {
      const selectedFrom = selected == null ? void 0 : selected.from;
      const selectedTo = selected == null ? void 0 : selected.to;
      const hasFullRange = !!selectedFrom && !!selectedTo;
      const isClickingSingleDayRange = !!selectedFrom && !!selectedTo && dateLib.isSameDay(selectedFrom, selectedTo) && dateLib.isSameDay(triggerDate, selectedFrom);
      if (resetOnSelect && (hasFullRange || !(selected == null ? void 0 : selected.from))) {
        if (!required && isClickingSingleDayRange) {
          newRange = void 0;
        } else {
          newRange = { from: triggerDate, to: void 0 };
        }
      } else {
        newRange = addToRange(triggerDate, selected, min2, max2, required, dateLib);
      }
    }
    if (excludeDisabled && disabled && (newRange == null ? void 0 : newRange.from) && newRange.to) {
      if (rangeContainsModifiers({ from: newRange.from, to: newRange.to }, disabled, dateLib)) {
        newRange.from = triggerDate;
        newRange.to = void 0;
      }
    }
    if (!onSelect) {
      setSelected(newRange);
    }
    onSelect == null ? void 0 : onSelect(newRange, triggerDate, modifiers, e);
    return newRange;
  };
  return {
    selected,
    select,
    isSelected
  };
}
function useSingle(props, dateLib) {
  const { selected: initiallySelected, required, onSelect } = props;
  const [internallySelected, setSelected] = useControlledValue(initiallySelected, onSelect ? initiallySelected : void 0);
  const selected = !onSelect ? internallySelected : initiallySelected;
  const { isSameDay: isSameDay2 } = dateLib;
  const isSelected = (compareDate) => {
    return selected ? isSameDay2(selected, compareDate) : false;
  };
  const select = (triggerDate, modifiers, e) => {
    let newDate = triggerDate;
    if (!required && selected && selected && isSameDay2(triggerDate, selected)) {
      newDate = void 0;
    }
    if (!onSelect) {
      setSelected(newDate);
    }
    if (required) {
      onSelect == null ? void 0 : onSelect(newDate, triggerDate, modifiers, e);
    } else {
      onSelect == null ? void 0 : onSelect(newDate, triggerDate, modifiers, e);
    }
    return newDate;
  };
  return {
    selected,
    select,
    isSelected
  };
}
function useSelection(props, dateLib) {
  const single = useSingle(props, dateLib);
  const multi = useMulti(props, dateLib);
  const range = useRange(props, dateLib);
  switch (props.mode) {
    case "single":
      return single;
    case "multiple":
      return multi;
    case "range":
      return range;
    default:
      return void 0;
  }
}
function toTimeZone(date, timeZone) {
  if (date instanceof TZDate && date.timeZone === timeZone) {
    return date;
  }
  return new TZDate(date, timeZone);
}
function toZoneNoon(date, timeZone, noonSafe) {
  return toTimeZone(date, timeZone);
}
function convertMatcher(matcher, timeZone, noonSafe) {
  if (typeof matcher === "boolean" || typeof matcher === "function") {
    return matcher;
  }
  if (matcher instanceof Date) {
    return toZoneNoon(matcher, timeZone);
  }
  if (Array.isArray(matcher)) {
    return matcher.map((value) => value instanceof Date ? toZoneNoon(value, timeZone) : value);
  }
  if (isDateRange(matcher)) {
    return {
      ...matcher,
      from: matcher.from ? toTimeZone(matcher.from, timeZone) : matcher.from,
      to: matcher.to ? toTimeZone(matcher.to, timeZone) : matcher.to
    };
  }
  if (isDateInterval(matcher)) {
    return {
      before: toZoneNoon(matcher.before, timeZone),
      after: toZoneNoon(matcher.after, timeZone)
    };
  }
  if (isDateAfterType(matcher)) {
    return {
      after: toZoneNoon(matcher.after, timeZone)
    };
  }
  if (isDateBeforeType(matcher)) {
    return {
      before: toZoneNoon(matcher.before, timeZone)
    };
  }
  return matcher;
}
function convertMatchersToTimeZone(matchers, timeZone, noonSafe) {
  if (!matchers) {
    return matchers;
  }
  if (Array.isArray(matchers)) {
    return matchers.map((matcher) => convertMatcher(matcher, timeZone));
  }
  return convertMatcher(matchers, timeZone);
}
function DayPicker(initialProps) {
  var _a;
  let props = initialProps;
  const timeZone = props.timeZone;
  if (timeZone) {
    props = {
      ...initialProps,
      timeZone
    };
    if (props.today) {
      props.today = toTimeZone(props.today, timeZone);
    }
    if (props.month) {
      props.month = toTimeZone(props.month, timeZone);
    }
    if (props.defaultMonth) {
      props.defaultMonth = toTimeZone(props.defaultMonth, timeZone);
    }
    if (props.startMonth) {
      props.startMonth = toTimeZone(props.startMonth, timeZone);
    }
    if (props.endMonth) {
      props.endMonth = toTimeZone(props.endMonth, timeZone);
    }
    if (props.mode === "single" && props.selected) {
      props.selected = toTimeZone(props.selected, timeZone);
    } else if (props.mode === "multiple" && props.selected) {
      props.selected = (_a = props.selected) == null ? void 0 : _a.map((date) => toTimeZone(date, timeZone));
    } else if (props.mode === "range" && props.selected) {
      props.selected = {
        from: props.selected.from ? toTimeZone(props.selected.from, timeZone) : props.selected.from,
        to: props.selected.to ? toTimeZone(props.selected.to, timeZone) : props.selected.to
      };
    }
    if (props.disabled !== void 0) {
      props.disabled = convertMatchersToTimeZone(props.disabled, timeZone);
    }
    if (props.hidden !== void 0) {
      props.hidden = convertMatchersToTimeZone(props.hidden, timeZone);
    }
    if (props.modifiers) {
      const nextModifiers = {};
      Object.keys(props.modifiers).forEach((key) => {
        var _a2;
        nextModifiers[key] = convertMatchersToTimeZone((_a2 = props.modifiers) == null ? void 0 : _a2[key], timeZone);
      });
      props.modifiers = nextModifiers;
    }
  }
  const { components: components2, formatters: formatters2, labels, dateLib, locale, classNames } = reactExports.useMemo(() => {
    const locale2 = { ...enUS, ...props.locale };
    const weekStartsOn = props.broadcastCalendar ? 1 : props.weekStartsOn;
    const noonOverrides = props.noonSafe && props.timeZone ? createNoonOverrides(props.timeZone, {
      weekStartsOn,
      locale: locale2
    }) : void 0;
    const overrides = props.dateLib && noonOverrides ? { ...noonOverrides, ...props.dateLib } : props.dateLib ?? noonOverrides;
    const dateLib2 = new DateLib({
      locale: locale2,
      weekStartsOn,
      firstWeekContainsDate: props.firstWeekContainsDate,
      useAdditionalWeekYearTokens: props.useAdditionalWeekYearTokens,
      useAdditionalDayOfYearTokens: props.useAdditionalDayOfYearTokens,
      timeZone: props.timeZone,
      numerals: props.numerals
    }, overrides);
    return {
      dateLib: dateLib2,
      components: getComponents(props.components),
      formatters: getFormatters(props.formatters),
      labels: getLabels(props.labels, dateLib2.options),
      locale: locale2,
      classNames: { ...getDefaultClassNames(), ...props.classNames }
    };
  }, [
    props.locale,
    props.broadcastCalendar,
    props.weekStartsOn,
    props.firstWeekContainsDate,
    props.useAdditionalWeekYearTokens,
    props.useAdditionalDayOfYearTokens,
    props.timeZone,
    props.numerals,
    props.dateLib,
    props.noonSafe,
    props.components,
    props.formatters,
    props.labels,
    props.classNames
  ]);
  if (!props.today) {
    props = { ...props, today: dateLib.today() };
  }
  const { captionLayout, mode, navLayout, numberOfMonths = 1, onDayBlur, onDayClick, onDayFocus, onDayKeyDown, onDayMouseEnter, onDayMouseLeave, onNextClick, onPrevClick, showWeekNumber, styles } = props;
  const { formatCaption: formatCaption2, formatDay: formatDay2, formatMonthDropdown: formatMonthDropdown2, formatWeekNumber: formatWeekNumber2, formatWeekNumberHeader: formatWeekNumberHeader2, formatWeekdayName: formatWeekdayName2, formatYearDropdown: formatYearDropdown2 } = formatters2;
  const calendar = useCalendar(props, dateLib);
  const { days, months, navStart, navEnd, previousMonth, nextMonth, goToMonth } = calendar;
  const getModifiers = createGetModifiers(days, props, navStart, navEnd, dateLib);
  const { isSelected, select, selected: selectedValue } = useSelection(props, dateLib) ?? {};
  const { blur, focused, isFocusTarget, moveFocus, setFocused } = useFocus(props, calendar, getModifiers, isSelected ?? (() => false), dateLib);
  const { labelDayButton: labelDayButton2, labelGridcell: labelGridcell2, labelGrid: labelGrid2, labelMonthDropdown: labelMonthDropdown2, labelNav: labelNav2, labelPrevious: labelPrevious2, labelNext: labelNext2, labelWeekday: labelWeekday2, labelWeekNumber: labelWeekNumber2, labelWeekNumberHeader: labelWeekNumberHeader2, labelYearDropdown: labelYearDropdown2 } = labels;
  const weekdays = reactExports.useMemo(() => getWeekdays(dateLib, props.ISOWeek, props.broadcastCalendar, props.today), [dateLib, props.ISOWeek, props.broadcastCalendar, props.today]);
  const isInteractive = mode !== void 0 || onDayClick !== void 0;
  const handlePreviousClick = reactExports.useCallback(() => {
    if (!previousMonth)
      return;
    goToMonth(previousMonth);
    onPrevClick == null ? void 0 : onPrevClick(previousMonth);
  }, [previousMonth, goToMonth, onPrevClick]);
  const handleNextClick = reactExports.useCallback(() => {
    if (!nextMonth)
      return;
    goToMonth(nextMonth);
    onNextClick == null ? void 0 : onNextClick(nextMonth);
  }, [goToMonth, nextMonth, onNextClick]);
  const handleDayClick = reactExports.useCallback((day, m) => (e) => {
    e.preventDefault();
    e.stopPropagation();
    setFocused(day);
    if (m.disabled) {
      return;
    }
    select == null ? void 0 : select(day.date, m, e);
    onDayClick == null ? void 0 : onDayClick(day.date, m, e);
  }, [select, onDayClick, setFocused]);
  const handleDayFocus = reactExports.useCallback((day, m) => (e) => {
    setFocused(day);
    onDayFocus == null ? void 0 : onDayFocus(day.date, m, e);
  }, [onDayFocus, setFocused]);
  const handleDayBlur = reactExports.useCallback((day, m) => (e) => {
    blur();
    onDayBlur == null ? void 0 : onDayBlur(day.date, m, e);
  }, [blur, onDayBlur]);
  const handleDayKeyDown = reactExports.useCallback((day, modifiers) => (e) => {
    const keyMap = {
      ArrowLeft: [
        e.shiftKey ? "month" : "day",
        props.dir === "rtl" ? "after" : "before"
      ],
      ArrowRight: [
        e.shiftKey ? "month" : "day",
        props.dir === "rtl" ? "before" : "after"
      ],
      ArrowDown: [e.shiftKey ? "year" : "week", "after"],
      ArrowUp: [e.shiftKey ? "year" : "week", "before"],
      PageUp: [e.shiftKey ? "year" : "month", "before"],
      PageDown: [e.shiftKey ? "year" : "month", "after"],
      Home: ["startOfWeek", "before"],
      End: ["endOfWeek", "after"]
    };
    if (keyMap[e.key]) {
      e.preventDefault();
      e.stopPropagation();
      const [moveBy, moveDir] = keyMap[e.key];
      moveFocus(moveBy, moveDir);
    }
    onDayKeyDown == null ? void 0 : onDayKeyDown(day.date, modifiers, e);
  }, [moveFocus, onDayKeyDown, props.dir]);
  const handleDayMouseEnter = reactExports.useCallback((day, modifiers) => (e) => {
    onDayMouseEnter == null ? void 0 : onDayMouseEnter(day.date, modifiers, e);
  }, [onDayMouseEnter]);
  const handleDayMouseLeave = reactExports.useCallback((day, modifiers) => (e) => {
    onDayMouseLeave == null ? void 0 : onDayMouseLeave(day.date, modifiers, e);
  }, [onDayMouseLeave]);
  const handleMonthChange = reactExports.useCallback((date) => (e) => {
    const selectedMonth = Number(e.target.value);
    const month = dateLib.setMonth(dateLib.startOfMonth(date), selectedMonth);
    goToMonth(month);
  }, [dateLib, goToMonth]);
  const handleYearChange = reactExports.useCallback((date) => (e) => {
    const selectedYear = Number(e.target.value);
    const month = dateLib.setYear(dateLib.startOfMonth(date), selectedYear);
    goToMonth(month);
  }, [dateLib, goToMonth]);
  const { className, style } = reactExports.useMemo(() => ({
    className: [classNames[UI.Root], props.className].filter(Boolean).join(" "),
    style: { ...styles == null ? void 0 : styles[UI.Root], ...props.style }
  }), [classNames, props.className, props.style, styles]);
  const dataAttributes = getDataAttributes(props);
  const rootElRef = reactExports.useRef(null);
  useAnimation(rootElRef, Boolean(props.animate), {
    classNames,
    months,
    focused,
    dateLib
  });
  const contextValue = {
    dayPickerProps: props,
    selected: selectedValue,
    select,
    isSelected,
    months,
    nextMonth,
    previousMonth,
    goToMonth,
    getModifiers,
    components: components2,
    classNames,
    styles,
    labels,
    formatters: formatters2
  };
  return React.createElement(
    dayPickerContext.Provider,
    { value: contextValue },
    React.createElement(
      components2.Root,
      { rootRef: props.animate ? rootElRef : void 0, className, style, dir: props.dir, id: props.id, lang: props.lang ?? locale.code, nonce: props.nonce, title: props.title, role: props.role, "aria-label": props["aria-label"], "aria-labelledby": props["aria-labelledby"], ...dataAttributes },
      React.createElement(
        components2.Months,
        { className: classNames[UI.Months], style: styles == null ? void 0 : styles[UI.Months] },
        !props.hideNavigation && !navLayout && React.createElement(components2.Nav, { "data-animated-nav": props.animate ? "true" : void 0, className: classNames[UI.Nav], style: styles == null ? void 0 : styles[UI.Nav], "aria-label": labelNav2(), onPreviousClick: handlePreviousClick, onNextClick: handleNextClick, previousMonth, nextMonth }),
        months.map((calendarMonth, displayIndex) => {
          return React.createElement(
            components2.Month,
            {
              "data-animated-month": props.animate ? "true" : void 0,
              className: classNames[UI.Month],
              style: styles == null ? void 0 : styles[UI.Month],
              // biome-ignore lint/suspicious/noArrayIndexKey: breaks animation
              key: displayIndex,
              displayIndex,
              calendarMonth
            },
            navLayout === "around" && !props.hideNavigation && displayIndex === 0 && React.createElement(
              components2.PreviousMonthButton,
              { type: "button", className: classNames[UI.PreviousMonthButton], tabIndex: previousMonth ? void 0 : -1, "aria-disabled": previousMonth ? void 0 : true, "aria-label": labelPrevious2(previousMonth), onClick: handlePreviousClick, "data-animated-button": props.animate ? "true" : void 0 },
              React.createElement(components2.Chevron, { disabled: previousMonth ? void 0 : true, className: classNames[UI.Chevron], orientation: props.dir === "rtl" ? "right" : "left" })
            ),
            React.createElement(components2.MonthCaption, { "data-animated-caption": props.animate ? "true" : void 0, className: classNames[UI.MonthCaption], style: styles == null ? void 0 : styles[UI.MonthCaption], calendarMonth, displayIndex }, (captionLayout == null ? void 0 : captionLayout.startsWith("dropdown")) ? React.createElement(
              components2.DropdownNav,
              { className: classNames[UI.Dropdowns], style: styles == null ? void 0 : styles[UI.Dropdowns] },
              (() => {
                const monthControl = captionLayout === "dropdown" || captionLayout === "dropdown-months" ? React.createElement(components2.MonthsDropdown, { key: "month", className: classNames[UI.MonthsDropdown], "aria-label": labelMonthDropdown2(), classNames, components: components2, disabled: Boolean(props.disableNavigation), onChange: handleMonthChange(calendarMonth.date), options: getMonthOptions(calendarMonth.date, navStart, navEnd, formatters2, dateLib), style: styles == null ? void 0 : styles[UI.Dropdown], value: dateLib.getMonth(calendarMonth.date) }) : React.createElement("span", { key: "month" }, formatMonthDropdown2(calendarMonth.date, dateLib));
                const yearControl = captionLayout === "dropdown" || captionLayout === "dropdown-years" ? React.createElement(components2.YearsDropdown, { key: "year", className: classNames[UI.YearsDropdown], "aria-label": labelYearDropdown2(dateLib.options), classNames, components: components2, disabled: Boolean(props.disableNavigation), onChange: handleYearChange(calendarMonth.date), options: getYearOptions(navStart, navEnd, formatters2, dateLib, Boolean(props.reverseYears)), style: styles == null ? void 0 : styles[UI.Dropdown], value: dateLib.getYear(calendarMonth.date) }) : React.createElement("span", { key: "year" }, formatYearDropdown2(calendarMonth.date, dateLib));
                const controls = dateLib.getMonthYearOrder() === "year-first" ? [yearControl, monthControl] : [monthControl, yearControl];
                return controls;
              })(),
              React.createElement("span", { role: "status", "aria-live": "polite", style: {
                border: 0,
                clip: "rect(0 0 0 0)",
                height: "1px",
                margin: "-1px",
                overflow: "hidden",
                padding: 0,
                position: "absolute",
                width: "1px",
                whiteSpace: "nowrap",
                wordWrap: "normal"
              } }, formatCaption2(calendarMonth.date, dateLib.options, dateLib))
            ) : React.createElement(components2.CaptionLabel, { className: classNames[UI.CaptionLabel], role: "status", "aria-live": "polite" }, formatCaption2(calendarMonth.date, dateLib.options, dateLib))),
            navLayout === "around" && !props.hideNavigation && displayIndex === numberOfMonths - 1 && React.createElement(
              components2.NextMonthButton,
              { type: "button", className: classNames[UI.NextMonthButton], tabIndex: nextMonth ? void 0 : -1, "aria-disabled": nextMonth ? void 0 : true, "aria-label": labelNext2(nextMonth), onClick: handleNextClick, "data-animated-button": props.animate ? "true" : void 0 },
              React.createElement(components2.Chevron, { disabled: nextMonth ? void 0 : true, className: classNames[UI.Chevron], orientation: props.dir === "rtl" ? "left" : "right" })
            ),
            displayIndex === numberOfMonths - 1 && navLayout === "after" && !props.hideNavigation && React.createElement(components2.Nav, { "data-animated-nav": props.animate ? "true" : void 0, className: classNames[UI.Nav], style: styles == null ? void 0 : styles[UI.Nav], "aria-label": labelNav2(), onPreviousClick: handlePreviousClick, onNextClick: handleNextClick, previousMonth, nextMonth }),
            React.createElement(
              components2.MonthGrid,
              { role: "grid", "aria-multiselectable": mode === "multiple" || mode === "range", "aria-label": labelGrid2(calendarMonth.date, dateLib.options, dateLib) || void 0, className: classNames[UI.MonthGrid], style: styles == null ? void 0 : styles[UI.MonthGrid] },
              !props.hideWeekdays && React.createElement(
                components2.Weekdays,
                { "data-animated-weekdays": props.animate ? "true" : void 0, className: classNames[UI.Weekdays], style: styles == null ? void 0 : styles[UI.Weekdays] },
                showWeekNumber && React.createElement(components2.WeekNumberHeader, { "aria-label": labelWeekNumberHeader2(dateLib.options), className: classNames[UI.WeekNumberHeader], style: styles == null ? void 0 : styles[UI.WeekNumberHeader], scope: "col" }, formatWeekNumberHeader2()),
                weekdays.map((weekday) => React.createElement(components2.Weekday, { "aria-label": labelWeekday2(weekday, dateLib.options, dateLib), className: classNames[UI.Weekday], key: String(weekday), style: styles == null ? void 0 : styles[UI.Weekday], scope: "col" }, formatWeekdayName2(weekday, dateLib.options, dateLib)))
              ),
              React.createElement(components2.Weeks, { "data-animated-weeks": props.animate ? "true" : void 0, className: classNames[UI.Weeks], style: styles == null ? void 0 : styles[UI.Weeks] }, calendarMonth.weeks.map((week) => {
                return React.createElement(
                  components2.Week,
                  { className: classNames[UI.Week], key: week.weekNumber, style: styles == null ? void 0 : styles[UI.Week], week },
                  showWeekNumber && React.createElement(components2.WeekNumber, { week, style: styles == null ? void 0 : styles[UI.WeekNumber], "aria-label": labelWeekNumber2(week.weekNumber, {
                    locale
                  }), className: classNames[UI.WeekNumber], scope: "row", role: "rowheader" }, formatWeekNumber2(week.weekNumber, dateLib)),
                  week.days.map((day) => {
                    const { date } = day;
                    const modifiers = getModifiers(day);
                    modifiers[DayFlag.focused] = !modifiers.hidden && Boolean(focused == null ? void 0 : focused.isEqualTo(day));
                    modifiers[SelectionState.selected] = (isSelected == null ? void 0 : isSelected(date)) || modifiers.selected;
                    if (isDateRange(selectedValue)) {
                      const { from, to } = selectedValue;
                      modifiers[SelectionState.range_start] = Boolean(from && to && dateLib.isSameDay(date, from));
                      modifiers[SelectionState.range_end] = Boolean(from && to && dateLib.isSameDay(date, to));
                      modifiers[SelectionState.range_middle] = rangeIncludesDate(selectedValue, date, true, dateLib);
                    }
                    const style2 = getStyleForModifiers(modifiers, styles, props.modifiersStyles);
                    const className2 = getClassNamesForModifiers(modifiers, classNames, props.modifiersClassNames);
                    const ariaLabel = !isInteractive && !modifiers.hidden ? labelGridcell2(date, modifiers, dateLib.options, dateLib) : void 0;
                    return React.createElement(components2.Day, { key: `${day.isoDate}_${day.displayMonthId}`, day, modifiers, className: className2.join(" "), style: style2, role: "gridcell", "aria-selected": modifiers.selected || void 0, "aria-label": ariaLabel, "data-day": day.isoDate, "data-month": day.outside ? day.dateMonthId : void 0, "data-selected": modifiers.selected || void 0, "data-disabled": modifiers.disabled || void 0, "data-hidden": modifiers.hidden || void 0, "data-outside": day.outside || void 0, "data-focused": modifiers.focused || void 0, "data-today": modifiers.today || void 0 }, !modifiers.hidden && isInteractive ? React.createElement(components2.DayButton, { className: classNames[UI.DayButton], style: styles == null ? void 0 : styles[UI.DayButton], type: "button", day, modifiers, disabled: !modifiers.focused && modifiers.disabled || void 0, "aria-disabled": modifiers.focused && modifiers.disabled || void 0, tabIndex: isFocusTarget(day) ? 0 : -1, "aria-label": labelDayButton2(date, modifiers, dateLib.options, dateLib), onClick: handleDayClick(day, modifiers), onBlur: handleDayBlur(day, modifiers), onFocus: handleDayFocus(day, modifiers), onKeyDown: handleDayKeyDown(day, modifiers), onMouseEnter: handleDayMouseEnter(day, modifiers), onMouseLeave: handleDayMouseLeave(day, modifiers) }, formatDay2(date, dateLib.options, dateLib)) : !modifiers.hidden && formatDay2(day.date, dateLib.options, dateLib));
                  })
                );
              }))
            )
          );
        })
      ),
      props.footer && React.createElement(components2.Footer, { className: classNames[UI.Footer], style: styles == null ? void 0 : styles[UI.Footer], role: "status", "aria-live": "polite" }, props.footer)
    )
  );
}
function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  captionLayout = "label",
  buttonVariant = "ghost",
  formatters: formatters2,
  components: components2,
  ...props
}) {
  const defaultClassNames = getDefaultClassNames();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    DayPicker,
    {
      showOutsideDays,
      className: cn(
        "bg-background group/calendar p-3 [--cell-size:--spacing(8)] [[data-slot=card-content]_&]:bg-transparent [[data-slot=popover-content]_&]:bg-transparent",
        String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`,
        String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`,
        className
      ),
      captionLayout,
      formatters: {
        formatMonthDropdown: (date) => date.toLocaleString("default", { month: "short" }),
        ...formatters2
      },
      classNames: {
        root: cn("w-fit", defaultClassNames.root),
        months: cn(
          "flex gap-4 flex-col md:flex-row relative",
          defaultClassNames.months
        ),
        month: cn("flex flex-col w-full gap-4", defaultClassNames.month),
        nav: cn(
          "flex items-center gap-1 w-full absolute top-0 inset-x-0 justify-between",
          defaultClassNames.nav
        ),
        button_previous: cn(
          buttonVariants({ variant: buttonVariant }),
          "size-(--cell-size) aria-disabled:opacity-50 p-0 select-none",
          defaultClassNames.button_previous
        ),
        button_next: cn(
          buttonVariants({ variant: buttonVariant }),
          "size-(--cell-size) aria-disabled:opacity-50 p-0 select-none",
          defaultClassNames.button_next
        ),
        month_caption: cn(
          "flex items-center justify-center h-(--cell-size) w-full px-(--cell-size)",
          defaultClassNames.month_caption
        ),
        dropdowns: cn(
          "w-full flex items-center text-sm font-medium justify-center h-(--cell-size) gap-1.5",
          defaultClassNames.dropdowns
        ),
        dropdown_root: cn(
          "relative has-focus:border-ring border border-input shadow-xs has-focus:ring-ring/50 has-focus:ring-[3px] rounded-md",
          defaultClassNames.dropdown_root
        ),
        dropdown: cn(
          "absolute bg-popover inset-0 opacity-0",
          defaultClassNames.dropdown
        ),
        caption_label: cn(
          "select-none font-medium",
          captionLayout === "label" ? "text-sm" : "rounded-md pl-2 pr-1 flex items-center gap-1 text-sm h-8 [&>svg]:text-muted-foreground [&>svg]:size-3.5",
          defaultClassNames.caption_label
        ),
        table: "w-full border-collapse",
        weekdays: cn("flex", defaultClassNames.weekdays),
        weekday: cn(
          "text-muted-foreground rounded-md flex-1 font-normal text-[0.8rem] select-none",
          defaultClassNames.weekday
        ),
        week: cn("flex w-full mt-2", defaultClassNames.week),
        week_number_header: cn(
          "select-none w-(--cell-size)",
          defaultClassNames.week_number_header
        ),
        week_number: cn(
          "text-[0.8rem] select-none text-muted-foreground",
          defaultClassNames.week_number
        ),
        day: cn(
          "relative w-full h-full p-0 text-center [&:first-child[data-selected=true]_button]:rounded-l-md [&:last-child[data-selected=true]_button]:rounded-r-md group/day aspect-square select-none",
          defaultClassNames.day
        ),
        range_start: cn(
          "rounded-l-md bg-accent",
          defaultClassNames.range_start
        ),
        range_middle: cn("rounded-none", defaultClassNames.range_middle),
        range_end: cn("rounded-r-md bg-accent", defaultClassNames.range_end),
        today: cn(
          "bg-accent text-accent-foreground rounded-md data-[selected=true]:rounded-none",
          defaultClassNames.today
        ),
        outside: cn(
          "text-muted-foreground aria-selected:text-muted-foreground",
          defaultClassNames.outside
        ),
        disabled: cn(
          "text-muted-foreground opacity-50",
          defaultClassNames.disabled
        ),
        hidden: cn("invisible", defaultClassNames.hidden),
        ...classNames
      },
      components: {
        Root: ({ className: className2, rootRef, ...props2 }) => {
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              "data-slot": "calendar",
              ref: rootRef,
              className: cn(className2),
              ...props2
            }
          );
        },
        Chevron: ({ className: className2, orientation, ...props2 }) => {
          if (orientation === "left") {
            return /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: cn("size-4", className2), ...props2 });
          }
          if (orientation === "right") {
            return /* @__PURE__ */ jsxRuntimeExports.jsx(
              ChevronRight,
              {
                className: cn("size-4", className2),
                ...props2
              }
            );
          }
          return /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: cn("size-4", className2), ...props2 });
        },
        DayButton: CalendarDayButton,
        WeekNumber: ({ children, ...props2 }) => {
          return /* @__PURE__ */ jsxRuntimeExports.jsx("td", { ...props2, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex size-(--cell-size) items-center justify-center text-center", children }) });
        },
        ...components2
      },
      ...props
    }
  );
}
function CalendarDayButton({
  className,
  day,
  modifiers,
  ...props
}) {
  const defaultClassNames = getDefaultClassNames();
  const ref = reactExports.useRef(null);
  reactExports.useEffect(() => {
    var _a;
    if (modifiers.focused) (_a = ref.current) == null ? void 0 : _a.focus();
  }, [modifiers.focused]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Button$1,
    {
      ref,
      variant: "ghost",
      size: "icon",
      "data-day": day.date.toLocaleDateString(),
      "data-selected-single": modifiers.selected && !modifiers.range_start && !modifiers.range_end && !modifiers.range_middle,
      "data-range-start": modifiers.range_start,
      "data-range-end": modifiers.range_end,
      "data-range-middle": modifiers.range_middle,
      className: cn(
        "data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground data-[range-middle=true]:bg-accent data-[range-middle=true]:text-accent-foreground data-[range-start=true]:bg-primary data-[range-start=true]:text-primary-foreground data-[range-end=true]:bg-primary data-[range-end=true]:text-primary-foreground group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:ring-ring/50 dark:hover:text-accent-foreground flex aspect-square size-auto w-full min-w-(--cell-size) flex-col gap-1 leading-none font-normal group-data-[focused=true]/day:relative group-data-[focused=true]/day:z-10 group-data-[focused=true]/day:ring-[3px] data-[range-end=true]:rounded-md data-[range-end=true]:rounded-r-md data-[range-middle=true]:rounded-none data-[range-start=true]:rounded-md data-[range-start=true]:rounded-l-md [&>span]:text-xs [&>span]:opacity-70",
        defaultClassNames.day,
        className
      ),
      ...props
    }
  );
}
const DAILY_VERSES = [
  {
    chapter: 2,
    verse: 47,
    sanskrit: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।\nमा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥",
    transliteration: "Karmaṇy-evādhikāras te mā phaleṣhu kadāchana",
    translation: "You have a right to perform your duties, but never to the fruits of action. Never be motivated by the results, nor become attached to inaction.",
    ref: "BG 2.47"
  },
  {
    chapter: 9,
    verse: 22,
    sanskrit: "अनन्याश्चिन्तयन्तो मां ये जनाः पर्युपासते।\nतेषां नित्याभियुक्तानां योगक्षेमं वहाम्यहम्॥",
    transliteration: "Ananyāś cintayanto māṁ ye janāḥ paryupāsate",
    translation: "To those who worship Me with devotion, meditating on My transcendental form — I carry what they lack and preserve what they have.",
    ref: "BG 9.22"
  },
  {
    chapter: 18,
    verse: 66,
    sanskrit: "सर्वधर्मान्परित्यज्य मामेकं शरणं व्रज।\nअहं त्वां सर्वपापेभ्यो मोक्षयिष्यामि मा शुचः॥",
    transliteration: "Sarva-dharmān parityajya māṁ ekaṁ śaraṇam vraja",
    translation: "Abandon all varieties of religion and just surrender unto Me. I shall deliver you from all sinful reactions. Do not fear.",
    ref: "BG 18.66"
  },
  {
    chapter: 4,
    verse: 7,
    sanskrit: "यदा यदा हि धर्मस्य ग्लानिर्भवति भारत।\nअभ्युत्थानमधर्मस्य तदात्मानं सृजाम्यहम्॥",
    transliteration: "Yadā yadā hi dharmasya glānir bhavati Bhārata",
    translation: "Whenever and wherever there is a decline in dharma and a rise of adharma — at that time I manifest Myself.",
    ref: "BG 4.7"
  },
  {
    chapter: 6,
    verse: 5,
    sanskrit: "उद्धरेदात्मनात्मानं नात्मानमवसादयेत्।\nआत्मैव ह्यात्मनो बन्धुरात्मैव रिपुरात्मनः॥",
    transliteration: "Uddhared ātmanātmānaṁ nātmānam avasādayet",
    translation: "Let a man lift himself by his own self; let him not degrade himself. For the self alone is the friend of the self, and the self alone is the enemy of the self.",
    ref: "BG 6.5"
  },
  {
    chapter: 2,
    verse: 20,
    sanskrit: "न जायते म्रियते वा कदाचिन्\nनायं भूत्वा भविता वा न भूयः।",
    transliteration: "Na jāyate mriyate vā kadāchin",
    translation: "The soul is never born nor dies at any time. It has not come into being, does not come into being, and will not come into being. It is unborn, eternal, ever-existing, and primeval.",
    ref: "BG 2.20"
  },
  {
    chapter: 11,
    verse: 33,
    sanskrit: "तस्मात्त्वमुत्तिष्ठ यशो लभस्व\nजित्वा शत्रून् भुङ्क्ष्व राज्यं समृद्धम्।",
    transliteration: "Tasmāt tvam uttiṣṭha yaśo labhasva",
    translation: "Therefore arise and attain glory. Conquer your enemies and enjoy a flourishing kingdom. They are already put to death by My arrangement — you be just the instrument.",
    ref: "BG 11.33"
  }
];
const VEDIC_DAYS = [
  "रविवार",
  "सोमवार",
  "मंगलवार",
  "बुधवार",
  "गुरुवार",
  "शुक्रवार",
  "शनिवार"
];
const VEDIC_MONTHS = [
  "मेष",
  "वृषभ",
  "मिथुन",
  "कर्क",
  "सिंह",
  "कन्या",
  "तुला",
  "वृश्चिक",
  "धनु",
  "मकर",
  "कुम्भ",
  "मीन"
];
const NAKSHATRA_NAMES = [
  "अश्विनी",
  "भरणी",
  "कृत्तिका",
  "रोहिणी",
  "मृगशीर्ष",
  "आर्द्रा",
  "पुनर्वसु",
  "पुष्य",
  "आश्लेषा",
  "मघा",
  "पूर्व फाल्गुनी",
  "उत्तर फाल्गुनी",
  "हस्त",
  "चित्रा",
  "स्वाति",
  "विशाखा",
  "अनुराधा",
  "ज्येष्ठा",
  "मूल",
  "पूर्वाषाढा",
  "उत्तराषाढा",
  "श्रवण",
  "धनिष्ठा",
  "शतभिषा",
  "पूर्व भाद्रपद",
  "उत्तर भाद्रपद",
  "रेवती"
];
const TITHI_NAMES = [
  "प्रतिपदा",
  "द्वितीया",
  "तृतीया",
  "चतुर्थी",
  "पंचमी",
  "षष्ठी",
  "सप्तमी",
  "अष्टमी",
  "नवमी",
  "दशमी",
  "एकादशी",
  "द्वादशी",
  "त्रयोदशी",
  "चतुर्दशी",
  "अमावस्या",
  "प्रतिपदा",
  "द्वितीया",
  "तृतीया",
  "चतुर्थी",
  "पंचमी",
  "षष्ठी",
  "सप्तमी",
  "अष्टमी",
  "नवमी",
  "दशमी",
  "एकादशी",
  "द्वादशी",
  "त्रयोदशी",
  "चतुर्दशी",
  "पूर्णिमा"
];
const DAY_BLESSINGS = {
  0: {
    deity: "सूर्य देव",
    color: "oklch(0.80 0.34 54)",
    blessing: "Offer water to Surya at sunrise. Ideal for new beginnings.",
    fast: "Optional Surya fast"
  },
  1: {
    deity: "शिव जी",
    color: "oklch(0.72 0.22 268)",
    blessing: "Chant Om Namah Shivaya 108 times. Abhishek with milk is auspicious.",
    fast: "Somvar Vrat"
  },
  2: {
    deity: "हनुमान जी",
    color: "oklch(0.70 0.30 32)",
    blessing: "Read Hanuman Chalisa. Offer sindoor and jasmine flowers.",
    fast: "Mangalvar Vrat"
  },
  3: {
    deity: "गणेश जी",
    color: "oklch(0.72 0.28 300)",
    blessing: "Begin new work today with Ganesh puja. Green colour is auspicious.",
    fast: "Budhvar fast for Ganesh"
  },
  4: {
    deity: "विष्णु जी / गुरु",
    color: "oklch(0.78 0.22 160)",
    blessing: "Honour your Guru. Yellow colour, banana offering. Most auspicious for learning.",
    fast: "Brihaspativar Vrat"
  },
  5: {
    deity: "लक्ष्मी माँ / दुर्गा माँ",
    color: "oklch(0.80 0.28 340)",
    blessing: "Perform Lakshmi puja in the evening. White flowers. Excellent for prosperity.",
    fast: "Shukravar Vrat"
  },
  6: {
    deity: "शनि देव",
    color: "oklch(0.62 0.16 268)",
    blessing: "Offer mustard oil to Shani dev. Black sesame. Feed crows for ancestral peace.",
    fast: "Shanivar Vrat"
  }
};
const FESTIVALS = [
  {
    month: 0,
    day: 14,
    name: "मकर संक्रान्ति",
    desc: "Sun enters Capricorn — holy dip in rivers, sesame offerings"
  },
  {
    month: 1,
    day: 26,
    name: "महाशिवरात्रि",
    desc: "Night-long Shiva worship, fasting, Abhishek"
  },
  {
    month: 2,
    day: 14,
    name: "होली",
    desc: "Festival of colours — Holika Dahan the night before"
  },
  {
    month: 3,
    day: 6,
    name: "रामनवमी",
    desc: "Birth of Lord Rama — reading Ramayana, fasting"
  },
  {
    month: 3,
    day: 14,
    name: "हनुमान जयन्ती",
    desc: "Birth of Lord Hanuman — Chalisa recitation, sindoor offering"
  },
  {
    month: 6,
    day: 7,
    name: "गुरु पूर्णिमा",
    desc: "Honour your Guru — full moon of devotion and gratitude"
  },
  {
    month: 7,
    day: 16,
    name: "जन्माष्टमी",
    desc: "Birth of Lord Krishna — midnight puja, Mathura celebrations"
  },
  {
    month: 7,
    day: 26,
    name: "गणेश चतुर्थी",
    desc: "10-day festival of Lord Ganesha"
  },
  {
    month: 9,
    day: 2,
    name: "नवरात्रि",
    desc: "9 nights worshipping Devi in all her forms"
  },
  {
    month: 9,
    day: 12,
    name: "दशहरा",
    desc: "Victory of good over evil — Rama's victory over Ravana"
  },
  {
    month: 10,
    day: 1,
    name: "धनतेरस",
    desc: "Purchase of gold/silver — Lakshmi and Dhanvantari puja"
  },
  {
    month: 10,
    day: 3,
    name: "दीपावली",
    desc: "Festival of lights — Lakshmi puja, fireworks, sweets"
  },
  {
    month: 10,
    day: 5,
    name: "भाई दूज",
    desc: "Brother-sister bond — apply tilak, pray for long life"
  },
  {
    month: 11,
    day: 11,
    name: "गीता जयन्ती",
    desc: "The sacred day Lord Krishna spoke the Bhagavad Gita to Arjuna"
  }
];
const RITU_NAMES = [
  { sa: "वसंत", en: "Vasanta — Spring" },
  // Feb–Mar, Mar–Apr
  { sa: "ग्रीष्म", en: "Grishma — Summer" },
  // Apr–May, May–Jun
  { sa: "वर्षा", en: "Varsha — Monsoon" },
  // Jun–Jul, Jul–Aug
  { sa: "शरद", en: "Sharad — Autumn" },
  // Aug–Sep, Sep–Oct
  { sa: "हेमंत", en: "Hemanta — Early Winter" },
  // Oct–Nov, Nov–Dec
  { sa: "शिशिर", en: "Shishira — Late Winter" }
  // Dec–Jan, Jan–Feb
];
const LUNAR_MASA_NAMES = [
  "चैत्र",
  "वैशाख",
  "ज्येष्ठ",
  "आषाढ़",
  "श्रावण",
  "भाद्रपद",
  "अश्विन",
  "कार्तिक",
  "मार्गशीर्ष",
  "पौष",
  "माघ",
  "फाल्गुन"
];
function derivePaksha(tithiNumber) {
  if (tithiNumber < 15) {
    return { sa: "शुक्ल पक्ष", en: "Shukla Paksha — Waxing phase" };
  }
  return { sa: "कृष्ण पक्ष", en: "Krishna Paksha — Waning phase" };
}
function deriveMasa(date) {
  const monthIdx = (date.getMonth() + 9) % 12;
  const masa = LUNAR_MASA_NAMES[monthIdx] ?? "चैत्र";
  return { sa: masa, en: masa };
}
function deriveRitu(date) {
  const rituIdx = Math.floor((date.getMonth() + 10) % 12 / 2);
  return RITU_NAMES[rituIdx] ?? RITU_NAMES[0];
}
function getTodayPanchang(date = /* @__PURE__ */ new Date()) {
  const day = date.getDay();
  const month = date.getMonth();
  const dateNum = date.getDate();
  const tithiNum = (dateNum - 1) % 30;
  const nakshatraIdx = Math.floor((month * 30 + dateNum - 1) * 0.9125) % 27;
  const rahuKaalHours = {
    0: "4:30 PM – 6:00 PM",
    1: "7:30 AM – 9:00 AM",
    2: "3:00 PM – 4:30 PM",
    3: "12:00 PM – 1:30 PM",
    4: "1:30 PM – 3:00 PM",
    5: "10:30 AM – 12:00 PM",
    6: "9:00 AM – 10:30 AM"
  };
  const todayFestival = FESTIVALS.find(
    (f) => f.month === month && Math.abs(f.day - dateNum) <= 1
  );
  return {
    tithi: TITHI_NAMES[tithiNum] ?? "प्रतिपदा",
    nakshatra: NAKSHATRA_NAMES[nakshatraIdx] ?? "अश्विनी",
    vaar: VEDIC_DAYS[day],
    month: VEDIC_MONTHS[month],
    rahuKaal: rahuKaalHours[day] ?? "Unknown",
    dayBlessing: DAY_BLESSINGS[day],
    festival: todayFestival ?? null
  };
}
const TICKER_VERSES = [
  "✦ कर्मण्येवाधिकारस्ते — You have a right to work, but never to the fruit thereof · BG 2.47 ✦",
  "✦ योगः कर्मसु कौशलम् — Yoga is skill in action · BG 2.50 ✦",
  "✦ सर्वधर्मान्परित्यज्य मामेकं शरणं व्रज — Surrender unto Me alone · BG 18.66 ✦",
  "✦ अहं त्वां सर्वपापेभ्यो मोक्षयिष्यामि — I shall deliver you from all sin · BG 18.66 ✦",
  "✦ ददामि बुद्धियोगं तं — I give them the yoga of understanding · BG 10.10 ✦",
  "✦ नमस्ते नमस्ते नमस्तेऽस्तु — हरे कृष्ण हरे कृष्ण कृष्ण कृष्ण हरे हरे ✦",
  "✦ मन्मना भव मद्भक्तो — Fix your mind on Me, be my devotee · BG 18.65 ✦",
  "✦ ज्ञानं ज्ञेयं ज्ञानगम्यं — Knowledge, the known, and the goal of knowledge · BG 13.18 ✦"
];
function SplashScreen({ onDone }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 1 },
      exit: { opacity: 0, scale: 1.03 },
      transition: { duration: 0.9 },
      className: "fixed inset-0 z-[9000] flex flex-col items-center justify-center overflow-hidden cursor-pointer",
      onClick: onDone,
      style: {
        background: "linear-gradient(180deg, oklch(0.32 0.14 268) 0%, oklch(0.42 0.18 32) 35%, oklch(0.52 0.22 36) 60%, oklch(0.38 0.16 268) 100%)"
      },
      "data-ocid": "home.splash",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute inset-0",
            style: {
              background: "radial-gradient(ellipse at 50% 30%, oklch(0.82 0.38 54 / 0.65) 0%, oklch(0.62 0.28 32 / 0.45) 35%, transparent 70%)"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute inset-0",
            style: {
              background: "radial-gradient(ellipse at 50% 75%, oklch(0.46 0.18 32 / 0.7) 0%, transparent 60%)"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute bottom-0 left-0 right-0",
            style: {
              height: "35%",
              background: "linear-gradient(0deg, oklch(0.36 0.16 32 / 0.95) 0%, oklch(0.50 0.20 36 / 0.6) 50%, transparent 100%)"
            }
          }
        ),
        [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            animate: { opacity: [0.08, 0.32, 0.08], scaleX: [1, 1.15, 1] },
            transition: {
              duration: 3.5,
              repeat: Number.POSITIVE_INFINITY,
              delay: angle * 5e-3
            },
            className: "absolute pointer-events-none",
            style: {
              top: "35%",
              left: "50%",
              width: "55vw",
              height: 2,
              background: "linear-gradient(90deg, oklch(0.88 0.38 54 / 0.7), transparent)",
              transformOrigin: "left center",
              transform: `rotate(${angle * 30}deg) translateY(-50%)`
            }
          },
          angle
        )),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "absolute",
            style: {
              bottom: "20%",
              left: "50%",
              transform: "translateX(-50%)",
              width: "min(380px, 80vw)"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-between px-6 mb-[-8px]", children: [0, 1].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  style: {
                    width: 52,
                    height: 52,
                    borderRadius: "50%",
                    border: "4px solid oklch(0.80 0.36 54 / 0.7)",
                    boxShadow: "0 0 20px oklch(0.78 0.34 54 / 0.5)",
                    background: "linear-gradient(135deg, oklch(0.58 0.22 46) 0%, oklch(0.44 0.18 36) 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      style: {
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        background: "oklch(0.92 0.42 54)"
                      }
                    }
                  )
                },
                i
              )) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  style: {
                    height: 54,
                    borderRadius: "8px 8px 0 0",
                    background: "linear-gradient(180deg, oklch(0.62 0.24 46) 0%, oklch(0.50 0.20 36) 100%)",
                    border: "2px solid oklch(0.78 0.34 54 / 0.5)",
                    boxShadow: "0 0 30px oklch(0.72 0.30 52 / 0.35)",
                    position: "relative",
                    overflow: "hidden"
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        style: {
                          position: "absolute",
                          top: 0,
                          left: 0,
                          right: 0,
                          height: 2,
                          background: "linear-gradient(90deg, transparent, oklch(0.88 0.40 54), transparent)"
                        }
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-center gap-4 h-full pb-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { textAlign: "center" }, children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "div",
                          {
                            style: {
                              width: 14,
                              height: 26,
                              borderRadius: "6px 6px 0 0",
                              background: "linear-gradient(180deg, oklch(0.62 0.28 268) 0%, oklch(0.50 0.22 268) 100%)",
                              margin: "0 auto"
                            }
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "div",
                          {
                            style: {
                              fontSize: "6px",
                              color: "oklch(0.80 0.34 54)",
                              marginTop: 2
                            },
                            children: "कृष्ण"
                          }
                        )
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { textAlign: "center" }, children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "div",
                          {
                            style: {
                              width: 12,
                              height: 22,
                              borderRadius: "6px 6px 0 0",
                              background: "linear-gradient(180deg, oklch(0.72 0.30 32) 0%, oklch(0.60 0.24 32) 100%)",
                              margin: "0 auto"
                            }
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "div",
                          {
                            style: {
                              fontSize: "6px",
                              color: "oklch(0.80 0.28 46)",
                              marginTop: 2
                            },
                            children: "अर्जुन"
                          }
                        )
                      ] })
                    ] })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center gap-3 mt-0", children: ["horse-a", "horse-b", "horse-c", "horse-d"].map((horseId) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  style: {
                    width: 14,
                    height: 32,
                    background: "linear-gradient(180deg, oklch(0.94 0.04 70) 0%, oklch(0.80 0.06 68) 100%)",
                    borderRadius: "6px 6px 2px 2px",
                    boxShadow: "0 0 8px oklch(0.88 0.06 70 / 0.4)"
                  }
                },
                horseId
              )) })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            animate: {
              filter: [
                "drop-shadow(0 0 24px oklch(0.88 0.40 54 / 0.8)) drop-shadow(0 0 60px oklch(0.78 0.34 54 / 0.5))",
                "drop-shadow(0 0 56px oklch(0.94 0.44 54 / 1.0)) drop-shadow(0 0 120px oklch(0.84 0.38 54 / 0.7))",
                "drop-shadow(0 0 24px oklch(0.88 0.40 54 / 0.8)) drop-shadow(0 0 60px oklch(0.78 0.34 54 / 0.5))"
              ]
            },
            transition: { duration: 2.8, repeat: Number.POSITIVE_INFINITY },
            className: "relative z-10 mb-2",
            style: { marginTop: "-10vh" },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                style: {
                  fontSize: "clamp(5rem, 22vw, 9.5rem)",
                  lineHeight: 1,
                  fontFamily: "'Noto Serif Devanagari', serif",
                  color: "oklch(0.94 0.42 54)",
                  userSelect: "none",
                  display: "block",
                  textAlign: "center"
                },
                children: "ॐ"
              }
            )
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 12 },
            animate: { opacity: 1, y: 0 },
            transition: { delay: 0.5 },
            className: "relative z-10 text-center px-4",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  style: {
                    fontFamily: "'Noto Serif Devanagari', serif",
                    fontSize: "clamp(1rem, 4vw, 1.6rem)",
                    color: "oklch(0.96 0.10 68)",
                    textShadow: "0 0 24px oklch(0.82 0.36 54 / 0.6)",
                    letterSpacing: "0.08em",
                    marginBottom: "0.35rem"
                  },
                  children: "ॐ श्री कृष्णाय नमः"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  style: {
                    fontFamily: "serif",
                    fontSize: "clamp(0.7rem, 2.8vw, 1rem)",
                    color: "oklch(0.92 0.14 54 / 0.95)",
                    letterSpacing: "0.3em",
                    textTransform: "uppercase"
                  },
                  children: "Bhagavad Gita — The Song of God"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.p,
                {
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  transition: { delay: 1.6 },
                  style: {
                    marginTop: "0.9rem",
                    fontSize: "0.72rem",
                    color: "oklch(0.90 0.22 54 / 0.85)",
                    letterSpacing: "0.15em",
                    fontStyle: "italic"
                  },
                  children: "✦ Tap to enter · हरे कृष्ण ✦"
                }
              )
            ]
          }
        ),
        [12, 28, 45, 62, 78, 90].map((left, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            animate: {
              y: ["-10vh", "110vh"],
              opacity: [0, 0.7, 0],
              rotate: [0, 540]
            },
            transition: {
              duration: 5 + i * 0.8,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.6,
              ease: "easeIn"
            },
            style: {
              position: "fixed",
              top: 0,
              left: `${left}%`,
              width: 10,
              height: 15,
              background: "oklch(0.85 0.24 340)",
              borderRadius: "50% 50% 40% 40%",
              pointerEvents: "none"
            }
          },
          left
        ))
      ]
    }
  );
}
function DailyVerseCarousel() {
  const navigate = useNavigate();
  const [idx, setIdx] = reactExports.useState(
    () => (/* @__PURE__ */ new Date()).getDate() % DAILY_VERSES.length
  );
  const [playing, setPlaying] = reactExports.useState(false);
  const synthRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const t = setInterval(
      () => setIdx((i) => (i + 1) % DAILY_VERSES.length),
      9e3
    );
    return () => clearInterval(t);
  }, []);
  function speakVerse() {
    if (!("speechSynthesis" in window)) return;
    if (playing) {
      window.speechSynthesis.cancel();
      setPlaying(false);
      return;
    }
    const verse2 = DAILY_VERSES[idx];
    const utt = new SpeechSynthesisUtterance((verse2 == null ? void 0 : verse2.translation) ?? "");
    utt.rate = 0.85;
    utt.pitch = 0.9;
    utt.onend = () => setPlaying(false);
    synthRef.current = utt;
    window.speechSynthesis.speak(utt);
    setPlaying(true);
  }
  const verse = DAILY_VERSES[idx];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "relative overflow-hidden rangoli-border",
      style: {
        background: "linear-gradient(160deg, oklch(0.96 0.08 68 / 0.97) 0%, oklch(0.93 0.10 62 / 0.96) 100%)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        border: "2px solid oklch(0.74 0.30 52 / 0.55)",
        borderRadius: "10px",
        boxShadow: "0 8px 40px rgba(180,130,45,0.28), inset 0 1px 0 rgba(255,248,220,0.80)",
        padding: "1.5rem"
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute top-0 left-0 right-0 h-[3px] rounded-t-[6px]",
            style: {
              background: "linear-gradient(90deg, oklch(0.82 0.36 54), oklch(0.70 0.28 46), oklch(0.58 0.26 268), oklch(0.70 0.28 46), oklch(0.82 0.36 54))"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "span",
            {
              className: "font-body text-[11px] italic tracking-widest",
              style: { color: "oklch(0.52 0.20 46)" },
              children: [
                verse == null ? void 0 : verse.ref,
                " — Chapter ",
                verse == null ? void 0 : verse.chapter,
                ", Verse ",
                verse == null ? void 0 : verse.verse
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: speakVerse,
              "aria-label": playing ? "Stop audio" : "Play verse audio",
              "data-ocid": "home.verse-audio-button",
              className: "flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-body italic transition-all duration-200",
              style: {
                background: playing ? "oklch(0.76 0.28 52 / 0.25)" : "oklch(0.80 0.28 52 / 0.15)",
                border: "1.5px solid oklch(0.72 0.30 50 / 0.50)",
                color: "oklch(0.30 0.18 42)"
              },
              children: playing ? "⏹ Stop" : "▶ Listen"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 8 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.45 },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "text-center font-body whitespace-pre-line mb-3 leading-loose",
                  lang: "sa",
                  style: {
                    fontSize: "clamp(1.2rem, 4vw, 1.5rem)",
                    color: "oklch(0.16 0.12 36)",
                    letterSpacing: "0.04em",
                    fontWeight: 500,
                    textShadow: "0 1px 4px rgba(180,130,45,0.22)"
                  },
                  children: verse == null ? void 0 : verse.sanskrit
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "text-center font-body text-xs italic mb-3",
                  style: { color: "oklch(0.44 0.16 48)" },
                  children: verse == null ? void 0 : verse.transliteration
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "text-center text-2xl mb-3",
                  style: { color: "oklch(0.62 0.24 52 / 0.55)" },
                  "aria-hidden": true,
                  children: "॥"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "p",
                {
                  className: "text-center font-body italic leading-relaxed",
                  style: { fontSize: "0.92rem", color: "oklch(0.28 0.12 40)" },
                  children: [
                    '"',
                    verse == null ? void 0 : verse.translation,
                    '"'
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center mt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => navigate({
                    to: "/chapter/$id",
                    params: { id: String((verse == null ? void 0 : verse.chapter) ?? 1) }
                  }),
                  "data-ocid": "home.verse-read-chapter-link",
                  className: "inline-flex items-center gap-1.5 px-4 py-2 rounded-full font-body text-[12px] font-bold italic transition-all duration-200",
                  style: {
                    background: "oklch(0.80 0.28 52 / 0.18)",
                    border: "1.5px solid oklch(0.72 0.30 50 / 0.55)",
                    color: "oklch(0.30 0.18 42)"
                  },
                  children: [
                    "📖 Read full Chapter ",
                    verse == null ? void 0 : verse.chapter,
                    " →"
                  ]
                }
              ) })
            ]
          },
          idx
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center gap-2 mt-4", children: DAILY_VERSES.map((v, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => setIdx(i),
            "aria-label": `Verse ${i + 1}`,
            className: "transition-all duration-200",
            style: {
              width: i === idx ? 20 : 8,
              height: 8,
              borderRadius: i === idx ? 4 : "50%",
              background: i === idx ? "oklch(0.78 0.32 46)" : "oklch(0.60 0.16 50 / 0.4)"
            }
          },
          v.ref
        )) })
      ]
    }
  );
}
function TodaysBlessingCard() {
  var _a, _b, _c;
  const [selectedDate, setSelectedDate] = reactExports.useState(
    () => /* @__PURE__ */ new Date()
  );
  const [showCalendar, setShowCalendar] = reactExports.useState(false);
  const [loading, setLoading] = reactExports.useState(false);
  const [error, setError] = reactExports.useState(null);
  const [backend, setBackend] = reactExports.useState(null);
  reactExports.useEffect(() => {
    if (!selectedDate) return;
    let cancelled = false;
    setLoading(true);
    setError(null);
    const dateStr2 = selectedDate.toISOString().split("T")[0];
    getBackend().getPanchangToday(dateStr2).then((p) => {
      if (cancelled) return;
      setBackend({
        tithi: p.tithi,
        vara: p.vaar,
        nakshatra: p.nakshatra,
        yoga: p.yoga,
        karana: p.karana,
        moonSign: p.moonSign,
        description: p.description,
        tithiNumber: Number(p.tithiNumber),
        masa: p.masa,
        ritu: p.ritu,
        paksha: p.paksha
      });
      setLoading(false);
    }).catch(() => {
      if (cancelled) return;
      setError("Unable to fetch Panchaang for this date.");
      setLoading(false);
    });
    return () => {
      cancelled = true;
    };
  }, [selectedDate]);
  const derived = getTodayPanchang(selectedDate ?? /* @__PURE__ */ new Date());
  const paksha = (backend == null ? void 0 : backend.paksha) ? { sa: backend.paksha, en: backend.paksha } : backend ? derivePaksha(backend.tithiNumber) : { sa: "—", en: "—" };
  const masa = (backend == null ? void 0 : backend.masa) ? { sa: backend.masa, en: backend.masa } : deriveMasa(selectedDate ?? /* @__PURE__ */ new Date());
  const ritu = (backend == null ? void 0 : backend.ritu) ? { sa: backend.ritu, en: backend.ritu } : deriveRitu(selectedDate ?? /* @__PURE__ */ new Date());
  const dateStr = (selectedDate ?? /* @__PURE__ */ new Date()).toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
  });
  const elements = [
    {
      icon: "🌙",
      sa: (backend == null ? void 0 : backend.tithi) ?? derived.tithi,
      en: "Tithi — Lunar Day",
      meaning: (backend == null ? void 0 : backend.tithi) ?? derived.tithi,
      source: "Backend"
    },
    {
      icon: "🌗",
      sa: paksha.sa,
      en: paksha.en,
      meaning: paksha.en,
      source: "Derived"
    },
    {
      icon: "📅",
      sa: (backend == null ? void 0 : backend.vara) ?? derived.vaar,
      en: "Vaar — Weekday",
      meaning: (backend == null ? void 0 : backend.vara) ?? derived.vaar,
      source: "Backend"
    },
    {
      icon: "☀️",
      sa: masa.sa,
      en: masa.en,
      meaning: `Masa — ${masa.en}`,
      source: "Derived"
    },
    {
      icon: "🍂",
      sa: ritu.sa,
      en: ritu.en,
      meaning: `Ritu — ${ritu.en}`,
      source: "Derived"
    },
    {
      icon: "⭐",
      sa: (backend == null ? void 0 : backend.nakshatra) ?? derived.nakshatra,
      en: "Nakshatra — Lunar Mansion",
      meaning: (backend == null ? void 0 : backend.nakshatra) ?? derived.nakshatra,
      source: "Backend"
    },
    {
      icon: "🧘",
      sa: (backend == null ? void 0 : backend.yoga) ?? "—",
      en: "Yoga — Auspicious Union",
      meaning: (backend == null ? void 0 : backend.yoga) ?? "—",
      source: "Backend"
    },
    {
      icon: "⏳",
      sa: (backend == null ? void 0 : backend.karana) ?? "—",
      en: "Karana — Half-Tithi",
      meaning: (backend == null ? void 0 : backend.karana) ?? "—",
      source: "Backend"
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "relative overflow-hidden transition-all duration-200",
      "data-ocid": "home.todays-blessing.card",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "relative overflow-hidden",
          style: {
            background: "linear-gradient(160deg, oklch(0.94 0.08 268 / 0.96) 0%, oklch(0.92 0.10 260 / 0.96) 100%)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            border: "1.5px solid oklch(0.64 0.26 268 / 0.50)",
            borderRadius: "10px",
            padding: "1.1rem 1.25rem",
            boxShadow: "0 6px 32px rgba(100,80,200,0.18), inset 0 1px 0 rgba(200,200,255,0.22)"
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "absolute top-0 left-0 right-0 h-[2.5px]",
                style: {
                  background: "linear-gradient(90deg, oklch(0.78 0.32 54), oklch(0.66 0.28 268), oklch(0.72 0.26 46), oklch(0.66 0.28 268), oklch(0.78 0.32 54))"
                }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3 gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: "1.5rem" }, children: "🌅" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "font-display text-[11px] tracking-[0.22em] uppercase font-bold",
                      style: { color: "oklch(0.32 0.22 268 / 0.95)" },
                      children: "✦ Today's Sacred Blessing"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "font-body text-[11px] italic truncate",
                      style: { color: "oklch(0.38 0.12 52 / 0.85)" },
                      children: dateStr
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => setShowCalendar((s) => !s),
                  "aria-label": showCalendar ? "Close date picker" : "Open date picker",
                  "aria-expanded": showCalendar,
                  "data-ocid": "home.todays-blessing.datepicker_toggle",
                  className: "flex items-center gap-1.5 px-3 py-2 rounded-full text-[12px] font-body font-bold transition-all duration-200 shrink-0",
                  style: {
                    background: showCalendar ? "oklch(0.76 0.28 268 / 0.25)" : "oklch(0.80 0.28 268 / 0.15)",
                    border: "1.5px solid oklch(0.72 0.30 268 / 0.50)",
                    color: "oklch(0.30 0.18 268)"
                  },
                  children: [
                    "📅 ",
                    showCalendar ? "Close" : "Pick Date"
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: showCalendar && /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                initial: { opacity: 0, height: 0 },
                animate: { opacity: 1, height: "auto" },
                exit: { opacity: 0, height: 0 },
                transition: { duration: 0.25 },
                className: "overflow-hidden mb-3",
                "data-ocid": "home.todays-blessing.datepicker",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "flex justify-center p-2 rounded",
                    style: {
                      background: "oklch(0.96 0.06 268 / 0.55)",
                      border: "1px solid oklch(0.60 0.22 268 / 0.35)"
                    },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Calendar,
                      {
                        mode: "single",
                        selected: selectedDate,
                        onSelect: (d) => {
                          if (d) {
                            setSelectedDate(d);
                            setShowCalendar(false);
                          }
                        },
                        disabled: (date) => date < new Date((/* @__PURE__ */ new Date()).setHours(0, 0, 0, 0)),
                        initialFocus: true,
                        "aria-label": "Select a date for Panchaang"
                      }
                    )
                  }
                )
              }
            ) }),
            loading && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "flex items-center justify-center gap-2 px-2.5 py-2 rounded mb-3",
                style: {
                  background: "oklch(0.92 0.08 268 / 0.50)",
                  border: "1px solid oklch(0.60 0.22 268 / 0.35)"
                },
                "data-ocid": "home.todays-blessing.loading_state",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: "0.85rem" }, children: "⏳" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "p",
                    {
                      className: "font-body text-[12px] italic",
                      style: { color: "oklch(0.32 0.18 268)" },
                      children: [
                        "Fetching Panchaang for ",
                        dateStr,
                        "…"
                      ]
                    }
                  )
                ]
              }
            ),
            error && !loading && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "flex items-center justify-center gap-2 px-2.5 py-2 rounded mb-3",
                style: {
                  background: "oklch(0.92 0.10 18 / 0.50)",
                  border: "1px solid oklch(0.58 0.22 18 / 0.40)"
                },
                "data-ocid": "home.todays-blessing.error_state",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: "0.85rem" }, children: "⚠️" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "p",
                    {
                      className: "font-body text-[12px] italic",
                      style: { color: "oklch(0.32 0.20 18)" },
                      children: [
                        error,
                        " Showing derived Panchaang instead."
                      ]
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-2 mb-3", children: elements.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                "data-ocid": `home.todays-blessing.element.${i}`,
                className: "flex items-start gap-2 px-2.5 py-2 rounded",
                style: {
                  background: "oklch(0.90 0.08 268 / 0.55)",
                  border: "1px solid oklch(0.60 0.22 268 / 0.35)"
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: "1rem", lineHeight: 1.2 }, children: item.icon }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        className: "font-body text-[10px] tracking-widest uppercase",
                        style: { color: "oklch(0.36 0.14 268 / 0.80)" },
                        children: item.en
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        className: "font-body text-[14px] font-bold leading-tight",
                        style: { color: "oklch(0.18 0.16 42)" },
                        children: item.sa
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        className: "font-body text-[9px] italic",
                        style: { color: "oklch(0.40 0.14 52 / 0.75)" },
                        children: item.source
                      }
                    )
                  ] })
                ]
              },
              item.en
            )) }),
            (backend == null ? void 0 : backend.moonSign) && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "flex items-center gap-2 px-2.5 py-1.5 rounded mb-2.5",
                style: {
                  background: "oklch(0.92 0.10 200 / 0.50)",
                  border: "1px solid oklch(0.58 0.22 200 / 0.40)"
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: "0.85rem" }, children: "🌕" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "p",
                    {
                      className: "font-body text-[11px] italic",
                      style: { color: "oklch(0.28 0.16 200)" },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold", children: "चंद्र राशि (Moon Sign):" }),
                        " ",
                        backend.moonSign
                      ]
                    }
                  )
                ]
              }
            ),
            (backend == null ? void 0 : backend.description) && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "flex items-start gap-2 px-2.5 py-1.5 rounded mb-2.5",
                style: {
                  background: "oklch(0.94 0.10 54 / 0.50)",
                  border: "1px solid oklch(0.70 0.26 52 / 0.38)"
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: "0.85rem" }, children: "📜" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "font-body text-[11px] italic leading-relaxed",
                      style: { color: "oklch(0.22 0.14 40)" },
                      children: backend.description
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "flex items-center gap-2 px-2.5 py-1.5 rounded mb-2.5",
                style: {
                  background: "oklch(0.92 0.10 18 / 0.50)",
                  border: "1px solid oklch(0.58 0.22 18 / 0.40)"
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: "0.85rem" }, children: "⚠️" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "p",
                    {
                      className: "font-body text-[11px] italic",
                      style: { color: "oklch(0.32 0.20 18)" },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold", children: "रहु काल:" }),
                        " ",
                        derived.rahuKaal,
                        " — Avoid new auspicious work during this time"
                      ]
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "flex items-center gap-2 px-2.5 py-1.5 rounded mb-2.5",
                style: {
                  background: "oklch(0.94 0.10 54 / 0.50)",
                  border: "1px solid oklch(0.70 0.26 52 / 0.38)"
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: "0.85rem" }, children: "🙏" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-w-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "p",
                    {
                      className: "font-body text-[11px]",
                      style: { color: "oklch(0.20 0.12 40)" },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "span",
                          {
                            className: "font-bold",
                            style: { color: (_a = derived.dayBlessing) == null ? void 0 : _a.color },
                            children: (_b = derived.dayBlessing) == null ? void 0 : _b.deity
                          }
                        ),
                        " — ",
                        (_c = derived.dayBlessing) == null ? void 0 : _c.blessing
                      ]
                    }
                  ) })
                ]
              }
            ),
            derived.festival && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "mt-2 flex items-center gap-2 px-2.5 py-1.5 rounded",
                style: {
                  background: "oklch(0.94 0.12 54 / 0.50)",
                  border: "1px solid oklch(0.76 0.30 54 / 0.45)"
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: "0.85rem" }, children: "🎉" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "p",
                    {
                      className: "font-body text-[11px] italic font-bold",
                      style: { color: "oklch(0.22 0.14 40)" },
                      children: [
                        derived.festival.name,
                        " — ",
                        derived.festival.desc
                      ]
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "font-body text-[10px] italic text-center mt-2",
                style: { color: "oklch(0.40 0.14 52 / 0.75)" },
                children: "✦ Select any date above to view its full Panchaang ✦"
              }
            )
          ]
        }
      )
    }
  );
}
function DailyChallengeCard() {
  const [challenge, setChallenge] = reactExports.useState(null);
  const [loading, setLoading] = reactExports.useState(true);
  const [error, setError] = reactExports.useState(null);
  reactExports.useEffect(() => {
    let cancelled = false;
    const todayISO = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
    setLoading(true);
    setError(null);
    getBackend().getDailyChallenge(todayISO).then((c) => {
      if (cancelled) return;
      setChallenge(c);
      setLoading(false);
    }).catch(() => {
      if (cancelled) return;
      setError("Today's sankalp could not be loaded.");
      setLoading(false);
    });
    return () => {
      cancelled = true;
    };
  }, []);
  if (loading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "content-card--item",
        "data-ocid": "home.daily-challenge.loading_state",
        "aria-busy": "true",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "content-card__title", children: "Today's Sankalp" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "content-card__description", style: { opacity: 0.6 }, children: "Loading today's resolve…" })
        ]
      }
    );
  }
  if (error || !challenge) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "content-card--item",
        "data-ocid": "home.daily-challenge.error_state",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "content-card__title", children: "Today's Sankalp" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "content-card__description", children: error ?? "No challenge today." })
        ]
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "content-card--item", "data-ocid": "home.daily-challenge.card", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "p",
      {
        className: "font-display text-xs font-bold italic tracking-[0.18em] uppercase mb-2",
        style: { color: "oklch(0.72 0.22 32)" },
        children: "✦ Aaj ka Sankalp · Today's Resolve ✦"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "content-card__title", children: challenge.task }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "content-card__description", children: challenge.action }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "flex items-center justify-between mt-3 pt-3 border-t border-dashed",
        style: { borderColor: "oklch(0.76 0.26 54 / 0.35)" },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "scripture-citation", children: challenge.date }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "span",
            {
              className: "font-display font-bold tracking-wide",
              style: {
                fontSize: "var(--fs-label)",
                color: "oklch(0.62 0.24 32)"
              },
              "data-ocid": "home.daily-challenge.points",
              children: [
                "+",
                Number(challenge.points),
                " punya"
              ]
            }
          )
        ]
      }
    )
  ] });
}
function FestivalReflectionCard() {
  const [festival, setFestival] = reactExports.useState(null);
  const [loading, setLoading] = reactExports.useState(true);
  const [error, setError] = reactExports.useState(null);
  reactExports.useEffect(() => {
    let cancelled = false;
    const todayISO = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
    setLoading(true);
    setError(null);
    getBackend().getFestivals().then((festivals) => {
      if (cancelled) return;
      const match2 = festivals.find(
        (f) => f.dateStr === todayISO
      );
      setFestival(match2 ?? null);
      setLoading(false);
    }).catch(() => {
      if (cancelled) return;
      setError("Festival reflection could not be loaded.");
      setLoading(false);
    });
    return () => {
      cancelled = true;
    };
  }, []);
  if (loading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "content-card--item",
        "data-ocid": "home.festival-reflection.loading_state",
        "aria-busy": "true",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "content-card__title", children: "Festival Reflection" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "content-card__description", style: { opacity: 0.6 }, children: "Loading today's sacred occasion…" })
        ]
      }
    );
  }
  if (error) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "content-card--item",
        "data-ocid": "home.festival-reflection.error_state",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "content-card__title", children: "Festival Reflection" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "content-card__description", children: error })
        ]
      }
    );
  }
  if (!festival) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "content-card--item",
        "data-ocid": "home.festival-reflection.fallback",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "font-display text-xs font-bold italic tracking-[0.18em] uppercase mb-2",
              style: { color: "oklch(0.72 0.22 32)" },
              children: "✦ Aaj ka Dharmic Bhāvnā ✦"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "content-card__title", children: "A Daily Reflection" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "content-card__description", children: "No festival is observed today, yet every day is sacred for the devotee who remembers the Lord. Perform your duties as an offering, without attachment to their fruit — this is the essence of Karma Yoga." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "meaning-block", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "meaning-block__label", children: "Reflection" }),
            "Whatever you do, whatever you eat, whatever you offer or give away, and whatever austerities you perform — do that, O son of Kunti, as an offering to Me."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "scripture-citation", children: "Bhagavad Gita 9.27" })
        ]
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "content-card--item",
      "data-ocid": "home.festival-reflection.card",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "p",
          {
            className: "font-display text-xs font-bold italic tracking-[0.18em] uppercase mb-2",
            style: { color: "oklch(0.72 0.22 32)" },
            children: "✦ Aaj ka Utsav · Today's Festival ✦"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "content-card__title", children: festival.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "content-card__description", children: festival.story }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "meaning-block", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "meaning-block__label", children: "Meaning" }),
          festival.meaning
        ] }),
        festival.mantraName && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "content-card__description", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: "font-display font-bold",
              style: { color: "oklch(0.62 0.24 32)" },
              children: "Mantra:"
            }
          ),
          " ",
          festival.mantraName
        ] }),
        festival.recommendedVerse && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "content-card__description", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: "font-display font-bold",
              style: { color: "oklch(0.62 0.24 32)" },
              children: "Recommended Verse:"
            }
          ),
          " ",
          festival.recommendedVerse
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "flex flex-wrap items-center gap-2 mt-3 pt-3 border-t border-dashed",
            style: { borderColor: "oklch(0.76 0.26 54 / 0.35)" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "scripture-citation", children: [
                festival.sourceGranth,
                festival.sourceChapter && festival.sourceChapter !== "0" ? ` ${festival.sourceChapter}.${festival.sourceVerse}` : ""
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "font-display italic",
                  style: {
                    fontSize: "var(--fs-label)",
                    color: "oklch(0.55 0.10 52)"
                  },
                  children: festival.dateStr
                }
              )
            ]
          }
        )
      ]
    }
  );
}
function IntroModal({
  open,
  onClose,
  type,
  battlesWon
}) {
  const navigate = useNavigate();
  const isKurukshetra = type === "kurukshetra";
  function proceed() {
    onClose();
    navigate({ to: isKurukshetra ? "/kurukshetra" : "/emergency" });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: open && /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      className: "fixed inset-0 z-[500] flex items-center justify-center p-4",
      style: {
        background: "rgba(0,0,0,0.75)",
        backdropFilter: "blur(8px)"
      },
      onClick: onClose,
      "data-ocid": `home.${type}-intro.dialog`,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, scale: 0.88, y: 24 },
          animate: { opacity: 1, scale: 1, y: 0 },
          exit: { opacity: 0, scale: 0.92, y: 12 },
          transition: { duration: 0.45, ease: "easeOut" },
          className: "relative max-w-md w-full rounded-xl p-8 text-center",
          style: {
            background: isKurukshetra ? "linear-gradient(160deg, oklch(0.44 0.16 268) 0%, oklch(0.50 0.18 32) 100%)" : "linear-gradient(160deg, oklch(0.50 0.18 18) 0%, oklch(0.44 0.16 268) 100%)",
            border: `2px solid ${isKurukshetra ? "oklch(0.78 0.30 52 / 0.65)" : "oklch(0.70 0.28 18 / 0.60)"}`,
            boxShadow: "0 24px 64px rgba(0,0,0,0.45)"
          },
          onClick: (e) => e.stopPropagation(),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "absolute top-0 left-0 right-0 h-[3px] rounded-t-xl",
                style: {
                  background: isKurukshetra ? "linear-gradient(90deg, oklch(0.78 0.32 54), oklch(0.68 0.26 46), oklch(0.78 0.32 54))" : "linear-gradient(90deg, oklch(0.72 0.28 18), oklch(0.62 0.24 22), oklch(0.72 0.28 18))"
                }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-5xl mb-4", children: isKurukshetra ? "⚔️" : "🛡️" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "font-body text-xs tracking-[0.3em] uppercase mb-3",
                style: { color: "oklch(0.62 0.24 32 / 0.8)" },
                children: isKurukshetra ? "॥ मेरा कुरुक्षेत्र ॥" : "॥ धर्म आपातकाल ॥"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "font-display italic font-bold mb-4 leading-snug",
                style: {
                  fontSize: "clamp(1.1rem, 3.5vw, 1.35rem)",
                  color: "oklch(0.96 0.10 68)",
                  textShadow: "0 0 24px oklch(0.82 0.32 54 / 0.4)"
                },
                children: isKurukshetra ? '"The charioteer does not win the battle. Arjuna wins the battle. Krishna simply makes sure Arjuna never fights alone."' : '"Krishna is with you. Whatever battle you face — you are not alone."'
              }
            ),
            isKurukshetra && battlesWon > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "p",
              {
                className: "font-body text-xs italic mb-3",
                style: { color: "oklch(0.94 0.12 56 / 0.90)" },
                children: [
                  "🏆 Battles Won: ",
                  battlesWon,
                  " — Your Kurukshetra continues"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "font-body text-sm italic mb-6",
                style: { color: "oklch(0.95 0.06 68 / 0.90)", lineHeight: 1.7 },
                children: isKurukshetra ? "Bring your life's battle to Krishna. He has been waiting. You never face anything alone." : "18 life-saving verses. Helplines. Krishna's voice. All offline. I have set aside my flute. Right now, only you matter."
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: proceed,
                "data-ocid": `home.${type}-intro.confirm_button`,
                className: "w-full rounded-full py-3.5 font-display font-bold tracking-wide mb-3 transition-all duration-200",
                style: {
                  background: isKurukshetra ? "linear-gradient(135deg, oklch(0.62 0.26 32), oklch(0.76 0.32 54))" : "linear-gradient(135deg, oklch(0.52 0.22 18), oklch(0.68 0.28 32))",
                  color: "oklch(0.97 0.04 70)",
                  fontSize: "0.95rem",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.4)"
                },
                children: isKurukshetra ? "⚔️ Enter the Battlefield" : "🙏 I need Krishna now"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: onClose,
                "data-ocid": `home.${type}-intro.cancel_button`,
                className: "font-body text-xs underline-offset-2 underline",
                style: { color: "oklch(0.55 0.06 60 / 0.7)" },
                children: "Return to home"
              }
            )
          ]
        }
      )
    }
  ) });
}
function HomePage() {
  useLastRead();
  const { streak } = useStreak();
  const { points } = usePoints();
  const { displayName } = useUserProfile();
  const [introModal, setIntroModal] = reactExports.useState(null);
  const [showSplash, setShowSplash] = reactExports.useState(() => {
    try {
      const last = localStorage.getItem("om-splash-shown");
      if (!last) return true;
      return Date.now() - Number(last) > 3 * 60 * 60 * 1e3;
    } catch {
      return true;
    }
  });
  reactExports.useEffect(() => {
    if (showSplash) {
      const t = setTimeout(() => {
        setShowSplash(false);
        try {
          localStorage.setItem("om-splash-shown", Date.now().toString());
        } catch {
        }
      }, 3200);
      return () => clearTimeout(t);
    }
  }, [showSplash]);
  const [battlesWon] = reactExports.useState(() => {
    try {
      const raw = localStorage.getItem("kurukshetra-battles");
      if (!raw) return 0;
      const battles = JSON.parse(raw);
      return battles.filter((b) => b.status === "won").length;
    } catch {
      return 0;
    }
  });
  const hour = (/* @__PURE__ */ new Date()).getHours();
  const greeting = hour < 5 ? "Om Namah Shivaya" : hour < 12 ? "Shubh Prabhat" : hour < 17 ? "Hari Om" : "Shubh Sandhya";
  function dismissSplash() {
    setShowSplash(false);
    try {
      localStorage.setItem("om-splash-shown", Date.now().toString());
    } catch {
    }
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto relative", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: showSplash && /* @__PURE__ */ jsxRuntimeExports.jsx(SplashScreen, { onDone: dismissSplash }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(LotusParticles, { zIndex: 1, opacity: 0.4 }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 1 },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-6 mt-2", "data-ocid": "home.om-symbol", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative inline-block", children: [
              [280, 220, 160].map((size, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  animate: {
                    opacity: [0.15 + i * 0.06, 0.45 + i * 0.06, 0.15 + i * 0.06]
                  },
                  transition: {
                    duration: 3 + i,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut"
                  },
                  className: "absolute top-1/2 left-1/2 pointer-events-none",
                  style: {
                    width: size,
                    height: size,
                    transform: "translate(-50%, -50%)",
                    borderRadius: "50%",
                    background: `radial-gradient(circle, oklch(0.86 0.38 54 / ${0.12 - i * 0.03}) 0%, transparent 70%)`,
                    border: `1px solid oklch(0.78 0.34 54 / ${0.2 - i * 0.04})`
                  }
                },
                size
              )),
              [0, 45, 90, 135, 180, 225, 270, 315].map((deg) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "absolute pointer-events-none select-none",
                  style: {
                    top: "50%",
                    left: "50%",
                    transform: `rotate(${deg}deg) translateX(80px) translateY(-50%)`,
                    fontSize: "8px",
                    color: "oklch(0.82 0.36 54 / 0.6)"
                  },
                  children: "✦"
                },
                deg
              )),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.span,
                {
                  animate: {
                    textShadow: [
                      "0 0 24px oklch(0.86 0.40 54 / 0.8), 0 0 56px oklch(0.78 0.34 54 / 0.5)",
                      "0 0 56px oklch(0.94 0.44 54 / 1.0), 0 0 100px oklch(0.84 0.38 54 / 0.7), 0 0 140px oklch(0.78 0.34 54 / 0.35)",
                      "0 0 24px oklch(0.86 0.40 54 / 0.8), 0 0 56px oklch(0.78 0.34 54 / 0.5)"
                    ]
                  },
                  transition: { duration: 3.2, repeat: Number.POSITIVE_INFINITY },
                  "aria-label": "Om — the primordial sacred sound",
                  style: {
                    display: "block",
                    fontSize: "clamp(5.5rem, 20vw, 9rem)",
                    lineHeight: 1.05,
                    fontFamily: "'Noto Serif Devanagari', serif",
                    color: "oklch(0.94 0.42 54)",
                    userSelect: "none",
                    position: "relative",
                    zIndex: 2
                  },
                  children: "ॐ"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 8 },
                animate: { opacity: 1, y: 0 },
                transition: { delay: 0.4 },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    motion.p,
                    {
                      animate: {
                        textShadow: [
                          "0 0 16px oklch(0.84 0.38 54 / 0.6), 0 0 32px oklch(0.76 0.32 52 / 0.30)",
                          "0 0 28px oklch(0.90 0.42 54 / 0.85), 0 0 56px oklch(0.80 0.36 52 / 0.45)",
                          "0 0 16px oklch(0.84 0.38 54 / 0.6), 0 0 32px oklch(0.76 0.32 52 / 0.30)"
                        ]
                      },
                      transition: { duration: 3.5, repeat: Number.POSITIVE_INFINITY },
                      className: "font-display italic font-bold mt-1",
                      style: {
                        fontSize: "clamp(1.5rem, 5vw, 2.2rem)",
                        color: "oklch(0.22 0.14 36)",
                        letterSpacing: "0.04em"
                      },
                      children: "🙏 हरे कृष्ण 🙏"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "p",
                    {
                      className: "font-display italic text-sm mt-0.5",
                      style: { color: "oklch(0.35 0.16 42)" },
                      children: [
                        greeting,
                        displayName !== "Devotee" ? `, ${displayName}` : ", Arjun"
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "font-body text-xs tracking-widest mt-0.5",
                      style: { color: "oklch(0.45 0.16 48 / 0.80)" },
                      children: "❦ Hare Krishna · हरे कृष्ण · Hare Rama ❦"
                    }
                  ),
                  (streak.count > 0 || points.total > 0) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-4 mt-2", children: [
                    streak.count > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "span",
                      {
                        className: "font-body text-xs italic",
                        style: { color: "oklch(0.82 0.32 54)" },
                        children: [
                          "🔥 ",
                          streak.count,
                          " Day Streak"
                        ]
                      }
                    ),
                    points.total > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "span",
                      {
                        className: "font-body text-xs italic",
                        style: { color: "oklch(0.80 0.28 46)" },
                        children: [
                          "⭐ ",
                          points.total,
                          " Sacred Points"
                        ]
                      }
                    )
                  ] })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.section,
            {
              initial: { opacity: 0, y: 14 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.7, delay: 0.2 },
              className: "mb-5",
              "data-ocid": "home.verse-of-day",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "flex-1 h-px",
                      style: {
                        background: "linear-gradient(to right, transparent, oklch(0.75 0.32 52 / 0.60))"
                      }
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "h2",
                    {
                      className: "font-display text-xs font-bold italic tracking-[0.18em] uppercase whitespace-nowrap",
                      style: {
                        color: "oklch(0.86 0.30 52)",
                        textShadow: "0 0 16px oklch(0.78 0.34 54 / 0.55)"
                      },
                      children: "✦  Verse of the Day  ✦"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "flex-1 h-px",
                      style: {
                        background: "linear-gradient(to left, transparent, oklch(0.75 0.32 52 / 0.60))"
                      }
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(DailyVerseCarousel, {})
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.section,
            {
              initial: { opacity: 0, y: 12 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.6, delay: 0.35 },
              className: "mb-6",
              "data-ocid": "home.todays-blessing",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "flex-1 h-px",
                      style: {
                        background: "linear-gradient(to right, transparent, oklch(0.66 0.26 268 / 0.55))"
                      }
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "h2",
                    {
                      className: "font-display text-xs font-bold italic tracking-[0.18em] uppercase whitespace-nowrap",
                      style: {
                        color: "oklch(0.78 0.26 268)",
                        textShadow: "0 0 14px oklch(0.68 0.28 268 / 0.5)"
                      },
                      children: "✦  Today's Sacred Blessing  ✦"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "flex-1 h-px",
                      style: {
                        background: "linear-gradient(to left, transparent, oklch(0.66 0.26 268 / 0.55))"
                      }
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TodaysBlessingCard, {})
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.section,
            {
              initial: { opacity: 0, y: 12 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.6, delay: 0.4 },
              className: "mb-6 grid gap-4 sm:grid-cols-2",
              "data-ocid": "home.daily-practice",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(DailyChallengeCard, {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx(FestivalReflectionCard, {})
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0 },
              whileInView: { opacity: 1 },
              viewport: { once: true },
              transition: { duration: 0.8 },
              className: "text-center mb-8 px-4",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "p",
                  {
                    className: "font-display italic font-bold leading-relaxed",
                    style: {
                      fontSize: "clamp(0.82rem, 2.5vw, 1.0rem)",
                      color: "oklch(0.86 0.24 54 / 0.90)",
                      textShadow: "0 0 20px oklch(0.78 0.34 54 / 0.35)"
                    },
                    children: [
                      '"We are not building an app. Krishna is restoring dharma.',
                      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                      'And he chose your hands to do it."'
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "font-body text-xs italic mt-2",
                    style: { color: "oklch(0.68 0.16 52 / 0.7)" },
                    children: "✦ Hare Krishna Hare Krishna Krishna Krishna Hare Hare ✦"
                  }
                )
              ]
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `
        @keyframes tickerScroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      ` }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "fixed bottom-[64px] left-0 right-0 z-40 overflow-hidden pointer-events-none",
        style: {
          borderTop: "1.5px solid oklch(0.72 0.30 52 / 0.45)",
          borderBottom: "1.5px solid oklch(0.72 0.28 50 / 0.35)",
          background: "linear-gradient(90deg, oklch(0.90 0.14 56 / 0.97), oklch(0.88 0.16 52 / 0.97))",
          backdropFilter: "blur(8px)",
          paddingTop: "5px",
          paddingBottom: "5px"
        },
        "data-ocid": "home.verse-ticker",
        "aria-hidden": "true",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "flex whitespace-nowrap",
            style: { animation: "tickerScroll 90s linear infinite" },
            children: [...TICKER_VERSES, ...TICKER_VERSES].map((v, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: "font-body italic text-sm px-8",
                style: {
                  color: "oklch(0.28 0.16 42)",
                  textShadow: "0 0 10px oklch(0.76 0.30 52 / 0.30)"
                },
                children: v
              },
              `${v.slice(0, 12)}-${i}`
            ))
          }
        )
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      IntroModal,
      {
        open: introModal === "kurukshetra",
        onClose: () => setIntroModal(null),
        type: "kurukshetra",
        battlesWon
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      IntroModal,
      {
        open: introModal === "emergency",
        onClose: () => setIntroModal(null),
        type: "emergency",
        battlesWon: 0
      }
    )
  ] });
}
export {
  HomePage
};
