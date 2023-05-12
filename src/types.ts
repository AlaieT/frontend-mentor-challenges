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
      fonts?: string;
    };
  };
};

type PageContextServer = PageContextBuiltIn<Page> & PageContextCustom;
type PageContextClient = PageContextBuiltInClient<Page> & PageContextCustom;

export type { PageContextServer };
export type { PageContextClient };

export interface ChallengeProps {
  name: string;
  link: string;
}
