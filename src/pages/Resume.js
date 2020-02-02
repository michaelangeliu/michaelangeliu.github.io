import React from 'react';
import './Resume.scss';

function Resume() {
  return (
    <div className="resume">
      <header>
        <h1>Michael Liu</h1>
      </header>
      <main>
        <section className="summary">
          <summary>
            Detail-oriented Software Developer with 5+ years experience.
            Passionate about designing and implementing holistic solutions effectively and efficiently.
            Developed web applications for national brands.
            Currently prototyping new features for an online CRM tool and improving long-term code maintainability with better development process, new documentation and clearer product stewardship.
          </summary>
        </section>
        <section className="work">
          <h2>Work Experience</h2>
          <article className="experience">
            <p>
              <span className="organization">Sherpa CRM</span>
              <span className="location">Saint Louis, MO</span>
            </p>
            <p>
              <span className="title">Senior Software Developer</span>
              <span className="time-period">Sep 2019 – Present</span>
            </p>
            <p>
              <span className="title">Software Developer</span>
              <span className="time-period">Aug 2017 – Aug 2019</span>
            </p>
            <ul>
              <li>Rearchitecting front-end data flow in React and Redux to normalize state and reduce bundle size.</li>
              <li>Redesigning transactional database occupancy tracking models to improve data accuracy within the application.</li>
              <li>Collaborating with vendors to build a data warehouse ETL pipeline and Tableau embed.</li>
              <li>Maintaining, troubleshooting, and optimizing the data warehouse pipeline and OLAP data models</li>
              <li>Implementing a customizable reporting engine from front-to-back.
                <ul>
                  <li>React/Redux to display the data in tables and visualizations.</li>
                  <li>Javascript to programmatically generate more consistent SQL statements.</li>
                  <li>MySQL/Redshift to query the database.</li>
                </ul>
              </li>
              <li>Standardizing and documenting team coding styles and best practices.</li>
              <li>Defining terminology and identify workflow loopholes with the product team.</li>
              <li>Mentoring junior developers in code optimization and GIT versioning.</li>
            </ul>
          </article>
          <article className="experience">
            <p>
              <span className="organization">We Are Alexander <em>(Formerly Group360 Worldwide)</em></span>
              <span className="location">Saint Louis, MO</span>
            </p>
            <p>
              <span className="title">Full Stack Web Developer</span>
              <span className="time-period">Sep 2014 – Jul 2017</span>
            </p>
            <p>
              <span className="title">Digital Intern</span>
              <span className="time-period">May 2014 – Sep 2014</span>
            </p>
            <ul>
              <li>Developed 10 Ruby on Rails microsites for 6 national brands.</li>
              <li>Feature development for Ruby on Rails experiential event tracking application on Heroku.</li>
              <li>Set up Amazon Web Services – Elastic Beanstalk to handle 3 WordPress sites.</li>
              <li>Implemented brand identity and content changes in Adobe Experience Manager for 5 national brands.</li>
              <li>Collaborated with 3rd party vendors to create and update content in 3 iOS applications.</li>
              <li>User Journey creation, Wire-framing, and UX design for corporate social responsibility site.</li>
              <li className="hidden">Collaborated with multi-disciplinary team to pitch rebranding campaign based on new strategic direction for national account and created digital concept designs.</li>
              <li className="hidden">Contributed to discussion about content-centered design best practices.</li>
              <li className="hidden">Responded to clients’ requests regarding updates in timely and efficient manner.</li>
              <li className="hidden">Improved user experience for branded digital applications and websites.</li>
              <li className="hidden">Applied troubleshooting processes to fix existing code and content on brand web pages.</li>
            </ul>
          </article>
          <article className="experience hidden">
            <p>
              <span className="organization">Washington University Residential Life</span>
              <span className="location">Saint Louis, MO</span>
            </p>
            <p>
              <span className="title">Residential Advisor</span>
              <span className="time-period">Aug 2012 – May 2014</span>
            </p>
            <ul>
              <li>Supported and advised 80 residents by creating programs to engage students.</li>
              <li>Trained for 250+ hours on topics including social activism, conflict resolution, event planning, and community building.</li>
              <li>Served an on-call responder for crises and emergencies.</li>
              <li>Assisted in designing recruitment posters and improving the RA selection process.</li>
              <li>Facilitated group and individual interviews for potential RA candidates.</li>
            </ul>
          </article>
        </section>
        <section className="leadership">
          <h2>Leadership Experience</h2>
          <article className="experience">
            <p>
              <span className="organization">Alpha Phi Omega <em>- Alpha Phi Chapter</em></span>
              <span className="time-period">Jan 2011 – May 2014</span>
            </p>
            <p>
              <span className="title">VP of Membership</span>
              <span className="time-period">Aug 2012 – Dec 2013</span>
            </p>
            <ul>
              <li>Planned and coordinated a membership program for 200+ member chapter.</li>
              <li>Managed a committee of 8 members to develop events to strengthen group dynamics.</li>
              <li>Built Google forms and spreadsheets to facilitate the brother-matching program.</li>
              <li>Rebuilt and updated a Google spreadsheet for recording and tracking requirements.</li>
            </ul>
          </article>
          <article className="experience hidden">
            <p>
              <span className="organization">Washington University Pops Orchestra</span>
              <span className="time-period">Sep 2010 – May 2014</span>
            </p>
            <p>
              <span className="title">Treasurer</span>
              <span className="time-period">Aug 2011 – May 2013</span>
            </p>
            <ul>
              <li>Managed a budget of ~$2000 and all music and equipment purchases.</li>
              <li>Organized semester concerts and social events for the orchestra.</li>
              <li>Developed publicity to increase orchestra size and promote concert attendance.</li>
            </ul>
          </article>
        </section>
        <section className="other-experience">
          <section className="education">
            <section className="degree">
              <h2>Education</h2>
              <article className="experience">
                <div className="left">
                  <p className="institution">Washington University in St. Louis</p>
                  <p className="degree-focus">B.S. in Computer Science, 2014</p>
                  <p className="degree-focus">Minor in Psychology</p>
                </div>
                <div className="right hidden">
                  <p className="degree-focus">Cumulative GPA: 3.48/4.00</p>
                  <p className="degree-focus">Major GPA: 3.78/4.00</p>
                  <p className="">Dean’s List – Fall 2012, Fall 2013, and Spring 2014</p>
                </div>
              </article>
            </section>
            <section className="coursework hidden">
              <h2>Relevant Course Work</h2>
              <article className="experience">
                <ul className="comma-list">
                  <li>Technical Writing</li>
                  <li>Object-Oriented Software Development</li>
                  <li>Formal Languages and Automata</li>
                  <li>Algorithms and Data Structures</li>
                  <li>Rapid Prototype Development and Creative Programming</li>
                  <li>Programming Systems and Languages</li>
                  <li>Social Networks Analysis</li>
                  <li>Embedded Computing Systems</li>
                  <li>Cognitive Psychology</li>
                  <li>Social Psychology.</li>
                </ul>
              </article>
            </section>
          </section>
          <section className="skills">
            <section className="technical">
              <h2>Technical Skills</h2>
              <article className="experience">
                <ul className="comma-list">
                  <li>Javascript</li>
                  <li className="hidden">React</li>
                  <li className="hidden">Redux</li>
                  <li className="hidden">Node</li>
                  <li className="hidden">jQuery</li>
                  <li className="hidden">Angular</li>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li className="hidden">Bootstrap</li>
                  <li>GIT</li>
                  <li>SQL</li>
                  <li className="hidden">MySQL</li>
                  <li className="hidden">PostgreSQL</li>
                  <li>Tableau</li>
                  <li>Amazon Web Services</li>
                  <li>Python</li>
                  <li>Data Warehousing</li>
                  <li className="hidden">Java</li>
                  <li>Ruby</li>
                </ul>
              </article>
            </section>
            <section className="foreign-language hidden">
              <h2>Foreign Language</h2>
              <article className="experience">
                <p>Chinese – Speaking/Listening Fluent</p>
                <p>Spanish – 4 years of HS</p>
              </article>
            </section>
          </section>
        </section>
      </main>
      <footer>
        <p className="contact">
          <a className="email" href="mailto:michaelangeliu@gmail.com" target="_blank" rel="noopener noreferrer">michaelangeliu@gmail.com</a>
          &nbsp;|&nbsp;
          <a className="website" href="http://michaelangeliu.com" target="_blank" rel="noopener noreferrer">http://michaelangeliu.com</a>
        </p>
      </footer>
    </div>
  );
}

export default Resume;
