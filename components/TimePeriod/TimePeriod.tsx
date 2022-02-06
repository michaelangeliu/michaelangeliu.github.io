import { DateTime } from 'luxon';
import React, {
	FunctionComponent,
} from 'react';

import styles from './time-period.module.scss';

type Props = {
	dateTimeFormat: string,
	defaultEndDateTime?: string,
	endDateTime?: string | null,
	startDateTime: string,
}

const TimePeriod: FunctionComponent<Props> = ({
	dateTimeFormat,
	defaultEndDateTime = 'Present',
	endDateTime,
	startDateTime,
}) => {
	return (
		<>
			<span className={styles.startDateTime}>
				{DateTime.fromISO(startDateTime).toFormat(dateTimeFormat)}
			</span> -&nbsp;
			<span className={styles.endDateTime}>
				{endDateTime
					? DateTime.fromISO(endDateTime).toFormat(dateTimeFormat)
					: defaultEndDateTime
				}
			</span>
		</>
	);
};

export default TimePeriod;
