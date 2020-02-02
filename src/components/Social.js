import React from 'react';
import _ from 'lodash';

import { ReactComponent as FacebookLogo } from '../assets/social-icons/facebook.svg';
import { ReactComponent as GithubLogo } from '../assets/social-icons/github.svg';
import { ReactComponent as InstagramLogo } from '../assets/social-icons/instagram.svg';
import { ReactComponent as LinkedinLogo } from '../assets/social-icons/linkedin.svg';
import { ReactComponent as TumblrLogo } from '../assets/social-icons/tumblr.svg';
import { ReactComponent as TwitterLogo } from '../assets/social-icons/twitter.svg';

import './Social.scss';

const socialMediaAccounts = [
  {
    component: <LinkedinLogo width='100%'/>,
    type: 'linkedin',
    link: "https://www.linkedin.com/in/michael-liu-a7389372",
  },
  {
    component: <GithubLogo/>,
    type: 'github',
    link: "https://github.com/michaelangeliu",
  },
  {
    component: <FacebookLogo/>,
    type: 'facebook',
    link: "https://www.facebook.com/michaelangeliu",
  },
  {
    component: <InstagramLogo/>,
    type: 'instagram',
    link: "https://instagram.com/michaelangeliu",
  },
  {
    component: <TwitterLogo/>,
    type: 'twitter',
    link: "https://twitter.com/michaelangeliu",
  },
  // {
  //   component: <TumblrLogo/>,
  //   type: 'tumblr',
  //   link: "https://michaelangeliu.tumblr.com",
  // },
];

function SocialItem(props) {
  const {
    component,
    link,
    title,
    type,
  } = props;

  return (
    <a
      href={link}
      rel="noopener noreferrer"
      target="_blank"
      title={title || `${_.startCase(type)} | Michael Liu`}
      >
        {component}
    </a>
  )
}

function Social() {
  return (
    <div className="social-media-links">
      <ul>
        {_.map(socialMediaAccounts, account => (
          <li>
            <SocialItem
              {...account}
            />
          </li>
        ))}
      </ul>
      <div class="contact">
        <a href="mailto:contact@michaelangeliu.com">contact@michaelangeliu.com</a>
      </div>
    </div>
  );
}

export default Social;