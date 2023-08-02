import { DateTime } from 'luxon';
import { NextPage } from 'next';
import Head from 'next/head';

import ExternalLink from '../components/ExternalLink';
import TimePeriod from '../components/TimePeriod';
import { linkedin } from '../content/externalAccounts';
import {
	EmailLink,
	PhoneLink,
	SiteTitle,
	WebsiteLink,
} from '../content/layout';
import data from '../content/resume_data.json';

import styles from './resume.module.scss';

import type {
	Position,
} from '../types/resume';

const Resume: NextPage = () => {
	const {
		certifications,
		experiences,
	} = data;

	const getEmploymentStartDate = (positions: Array<Position>) => (positions
		.reduce((firstDate, position) => {
			return (position.startDate < firstDate)
				? position.startDate
				: firstDate;
		}, DateTime.now().toISODate()));

	const getEmploymentEndDate = (
		positions: Array<Position>,
		employmentStartDate: string
	) => (positions
		.reduce((lastDate, position) => {
			return (!position.endDate)
				? ''
				: (position.endDate > lastDate)
					? position.endDate
					: lastDate;
		}, employmentStartDate));

	return (
		<div className={styles.resume}>
			<Head>
				<title>Resume | Michael Liu</title>
				<meta name="description" content="Michael Liu's Resume" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<header>
				<SiteTitle />
			</header>
			<main>
				<section className={styles.summary}>
					<p>
						Leader with a track record of success in accelerating business goals, enabling new insights into performance, and supporting data-driven business strategizing by leading the end-to-end creation of powerful new tools and features.
					</p>
				</section>
				<section className={styles.skills}>
					<h2>Skills</h2>
					<ul>
						<li>
							<h3 className={styles.skillTypes}>Management/Organizational:</h3>
							<ul className={styles.commaList}>
								<li>Team Leadership/Building</li>
								<li>Project Management</li>
								<li>Agile/Scrum/KanBan</li>
								<li>Software Development Life Cycle (SDLC)</li>
								<li>Refactoring</li>
								<li>Technical Writing</li>
								<li>Mentorship/Sponsorship</li>
								<li>Software Architecture</li>
							</ul>
						</li>
						<li>
							<h3 className={styles.skillTypes}>Frameworks/Tools:</h3>
							<ul className={styles.commaList}>
								<li>Git</li>
								<li>React</li>
								<li>Redux/Redux-Saga</li>
								<li>Webpack</li>
								<li>Babel</li>
								<li>ESLint</li>
								<li>Next</li>
								<li>Docker</li>
								<li>Node</li>
								<li>Fivetran</li>
								<li>DBT</li>
								<li>Snowflake</li>
								<li>Tableau</li>
								<li>Cypress</li>
								<li>Jest</li>
								<li>AWS</li>
							</ul>
						</li>
						<li>
							<h3 className={styles.skillTypes}>Languages:</h3>
							<ul className={styles.commaList}>
								<li>Javascript/Typescript</li>
								<li>MySQL</li>
								<li>PHP</li>
								<li>Python</li>
								<li>HTML</li>
								<li>CSS/Less/Sass</li>
							</ul>
						</li>
					</ul>

				</section>
				<section className={styles.experiences}>
					<h2>Professional Experiences</h2>
					{experiences
						.map((experience, index) => {
							const {
								positions,
							} = experience;

							const employmentStartDate = getEmploymentStartDate(positions);
							const employmentEndDate = getEmploymentEndDate(positions, employmentStartDate);

							return (
								<article
									className={styles.experience}
									key={index}
								>
									<h3 className={styles.organization}>
										{experience.organization}
									</h3>
									<span className={styles.location}>
										{experience.location}
									</span>
									<span className={styles.timePeriod}>
										<TimePeriod
											startDateTime={employmentStartDate}
											endDateTime={employmentEndDate}
											dateTimeFormat="MMMM yyyy"
										/>
									</span>
									<ul className={styles.positions}>
										{experience.positions
											.map((position) => (
												<li key={position.title}>
													<h4 className={styles.title}>{position.title}</h4>
													<span className={styles.timePeriod}>
														<TimePeriod
															dateTimeFormat="MMMM yyyy"
															endDateTime={position.endDate}
															startDateTime={position.startDate}
														/>
													</span>
													<p className={styles.positionSummary}>{position.summary}</p>
													<ul className={styles.activities}>
														{position.activities
															?.map((activity, index) => {
																const {
																	summary,
																	details = [],
																} = activity as PositionActivity;

																return (
																	<li key={index}>
																		<p>{summary}</p>
																		{details.length > 0
																			&& <ul>
																				{details
																					?.map((detail, index) => (
																						<li key={index}>
																							{detail}
																						</li>
																					))
																				}
																			</ul>
																		}
																	</li>
																);
															})
														}
													</ul>
												</li>
											))
											.reverse()
										}
									</ul>
								</article>
							);
						})
						.reverse()
					}
				</section>
				<section className={styles.education}>
					<h2>Education</h2>
					<dl>
						<dt>Washington University in St. Louis, 2014</dt>
						<dd>B.S. in Computer Science</dd>
						<dd>Minor in Psychology</dd>
					</dl>
					{/* <dl>
						<dt>GPA</dt>
						<dd>Cumulative: 3.48/4.00</dd>
						<dd>Major: 3.78/4.00</dd>
						<dd>Dean&apos;s List - Fall 2012, Fall 2013, and Spring 2014</dd>
					</dl> */}
					{/* <dl>
						<dt>Relevant Course Work</dt>
						<dd>Technical Writing</dd>
						<dd>Object-Oriented Software Development</dd>
						<dd>Formal Languages and Automata</dd>
						<dd>Algorithms and Data Structures</dd>
						<dd>Rapid Prototype Development and Creative Programming</dd>
						<dd>Programming Systems and Languages</dd>
						<dd>Social Networks Analysis</dd>
						<dd>Embedded Computing Systems</dd>
						<dd>Cognitive Psychology</dd>
						<dd>Social Psychology</dd>
					</dl> */}
				</section>
				<section className={styles.certifications}>
					<h2>Certifications</h2>
					<ul>
						{certifications
							.map((certification) => (
								<li key={certification.id}>
									{certification.title} ({DateTime.fromISO(certification.certificationDate).toFormat('yyyy')})
								</li>
							))
							.reverse()
						}
					</ul>
				</section>
			</main>
			<footer>
				<address>
					<PhoneLink className={styles.excludedForPrivacy}/>
					<span className={styles.excludedForPrivacy}>|</span>
					<EmailLink />
					<span>|</span>
					<ExternalLink
						href={linkedin.link}
					>
						{linkedin.shortLink}
					</ExternalLink>
					<span>|</span>
					<WebsiteLink />
				</address>
			</footer>
		</div>
	);
};

export default Resume;
