import React, {type ReactNode} from 'react';
import DocsVersionDropdownNavbarItem from '@theme-original/NavbarItem/DocsVersionDropdownNavbarItem';
import type DocsVersionDropdownNavbarItemType from '@theme/NavbarItem/DocsVersionDropdownNavbarItem';
import type {WrapperProps} from '@docusaurus/types';
import useRouteContext from "@docusaurus/useRouteContext";

type Props = WrapperProps<typeof DocsVersionDropdownNavbarItemType>;

export default function DocsVersionDropdownNavbarItemWrapper(props: Props): ReactNode {
    const {plugin} = useRouteContext();

    if (plugin.id !== "mods") {
        return null;
    }
    return (
        <>
          <DocsVersionDropdownNavbarItem {...props} />
        </>
    );
}
