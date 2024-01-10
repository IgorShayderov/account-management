import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(customParseFormat);

const useDateFormats = () => {
  const DATE_FORMAT = 'DD.MM.YYYY';

  return {
    customDate: dayjs,
    DATE_FORMAT,
  };
};

export default useDateFormats;
