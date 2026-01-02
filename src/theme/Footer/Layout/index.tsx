import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import type {Props} from '@theme/Footer/Layout';
import {
    faBluesky,
    faDiscord, faFacebook, faGithub,
    faInstagram,
    faTwitch,
    faTwitter,
    faXTwitter,
    faYoutube
} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import styles from "./index.module.scss";

const domain = "https://feed-the-beast.com";

const Link = ({ href, children }) => {
    return <a href={domain + href}>{children}</a>;
};

export default function FooterLayout({style, links, logo, copyright,}: Props): ReactNode {
  return (
      <footer className={clsx(styles.ftbFooter)}>
          <div className="container container-fluid">
              <div className={styles.columns}>
                  <div className={clsx(styles.column, styles.left, styles.branding)}>
                      <div className={styles.heading}>Proudly partnered with</div>

                      <a href="https://bisecthosting.com/ftb">
                          <img
                              src="/img/branding/bh-logo.svg"
                              alt="BisectHosting Logo"
                              width={200}
                          />
                      </a>
                      <a href="https://overwolf.com">
                          <img src="/img/branding/overwolf.svg" alt="Overwolf Logo" />
                      </a>
                      <a href="https://go.ftb.team/mc-marketplace">
                          <img
                              src="/img/branding/minecraft-partner.svg"
                              alt="Minecraft Marketplace Partner Logo"
                          />
                      </a>
                  </div>

                  <div className={styles.column}>
                      <div className={styles.heading}>Feed The Beast</div>
                      <ul>
                          <li>
                              <Link href="/blog">Blog</Link>
                          </li>
                          <li>
                              <a href="https://github.com/ftbteam">Contribute</a>
                          </li>
                          <li>
                              <Link href="/support">Support</Link>
                          </li>
                          <li>
                              <a href="https://forum.feed-the-beast.com/servers">Servers</a>
                          </li>
                          <li>
                              <a href="https://status.feed-the-beast.com">Status</a>
                          </li>
                          <li>
                              <Link href="/support#contact">Contact us</Link>
                          </li>
                      </ul>
                  </div>

                  <div className={styles.column}>
                      <div className={styles.heading}>Content</div>
                      <ul>
                          <li>
                              <Link href="/ftb-app">FTB App</Link>
                          </li>
                          <li>
                              <Link href="/modpacks">Modpacks</Link>
                          </li>
                          <li>
                              <Link href="/modpacks/server-files">Server Files</Link>
                          </li>
                          <li>
                              <a href="https://go.ftb.team/wiki">Wiki</a>
                          </li>
                          <li>
                              <Link href="/mods">Mods</Link>
                          </li>
                          <li>
                              <a href="https://forum.feed-the-beast.com">Forums</a>
                          </li>
                          <li>
                              <a href="https://github.com/ftbteam">Github</a>
                          </li>
                      </ul>
                  </div>

                  <div className={styles.column}>
                      <div className={styles.heading}>Resources</div>
                      <ul>
                          <li>
                              <Link href="/policies/privacy-notice">Privacy</Link>
                          </li>
                          <li>
                              <Link href="/policies/terms-and-conditions">
                                  Terms of Service
                              </Link>
                          </li>
                          <li>
                              <Link href="/policies/forum-rules">Forum Rules</Link>
                          </li>
                          <li>
                              <Link href="/policies/cookie-policy">Cookies</Link>
                          </li>
                          <li>
                              <Link href="/policies">Policies</Link>
                          </li>
                      </ul>
                  </div>
              </div>

              <div className={styles.socialCopyright}>
                  <div className={styles.copyright}>
                      © {new Date().getFullYear()} - Copyright Feed The Beast Ltd
                  </div>

                  <div className={styles.socials}>
                      <a title="FTB Discord" href="https://go.ftb.team/discord">
                          <FontAwesomeIcon size="lg" icon={faDiscord} />
                      </a>
                      <a rel="noreferrer noopener" target="_blank" title="Bluesky" href="https://go.ftb.team/bsky">
                          <FontAwesomeIcon size="lg" icon={faBluesky} />
                      </a>
                      <a rel="noreferrer noopener" target="_blank" title="Twitter" className={styles.twitter} href="https://go.ftb.team/twitter">
                          <FontAwesomeIcon size="lg" icon={faXTwitter} className={styles.x} />
                          <FontAwesomeIcon size="lg" icon={faTwitter} className={styles.bird} />
                      </a>
                      <a title="FTB Instagram" href="https://go.ftb.team/instagram">
                          <FontAwesomeIcon size="lg" icon={faInstagram} />
                      </a>
                      <a title="FTB Twitch" href="https://go.ftb.team/twitch">
                          <FontAwesomeIcon size="lg" icon={faTwitch} />
                      </a>
                      <a title="FTB Youtube" href="https://go.ftb.team/youtube">
                          <FontAwesomeIcon size="lg" icon={faYoutube} />
                      </a>
                      <a title="FTB Facebook" href="https://go.ftb.team/facebook">
                          <FontAwesomeIcon size="lg" icon={faFacebook} />
                      </a>
                      <a title="FTB Github" href="https://go.ftb.team/github">
                          <FontAwesomeIcon size="lg" icon={faGithub} />
                      </a>
                  </div>
              </div>
          </div>
      </footer>
  );
}
