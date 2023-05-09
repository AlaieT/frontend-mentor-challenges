/**
 * Server
 */

import type {
  PageContextBuiltIn,
  PageContextBuiltInClientWithServerRouting as PageContextBuiltInClient
} from "vite-plugin-ssr/types";

type Page = () => React.ReactElement;

export type PageContextCustom = {
  Page: Page;
  urlPathname: string;
  exports: {
    documentProps?: {
      title?: string;
      description?: string;
      fonts?: string[];
    };
  };
};

type PageContextServer = PageContextBuiltIn<Page> & PageContextCustom;
type PageContextClient = PageContextBuiltInClient<Page> & PageContextCustom;

export type { PageContextServer };
export type { PageContextClient };

/**
 * Client
 */
export interface ChallengeProps {
  name: string;
  number: number;
  imgSrc: string;
  link: string;
}

export interface GalleryProps {
  challenges: Omit<ChallengeProps, "delay" | "disabled">[];
}

export interface TitleProps {
  sentence: string;
  delay: number;
}
