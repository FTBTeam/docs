import React, {type ReactNode} from 'react';
import DocVersionBanner from '@theme-original/DocVersionBanner';
import type DocVersionBannerType from '@theme/DocVersionBanner';
import type {WrapperProps} from '@docusaurus/types';

import {useDocsVersion} from '@docusaurus/plugin-content-docs/client';

type Props = WrapperProps<typeof DocVersionBannerType>;

export default function DocVersionBannerWrapper(props: Props): ReactNode {
  const versionLabel = useDocsVersion().label;
  return (
    <>
      {
        versionLabel.toLowerCase().includes("beta") ? (
          <div className="alert alert--danger margin-bottom--md" role="alert">
            <strong>{versionLabel.toLowerCase().replace("(beta)", "")}</strong> versions of FTB mods may never receive a stable release.<br/>We will only be providing limited support for this version.
          </div>
        ) : null
      }
      <DocVersionBanner {...props} />
    </>
  );
}
