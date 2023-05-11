export type ContentService = {
  readonly fetchFrontPage: () => Promise<FrontPageResponseDto>;
};

export function createContentService(): ContentService {
  async function fetchFrontPage(): Promise<FrontPageResponseDto> {
    const response = await fetch(
      `https://jp-frontpage-api.test.aws.jyllands-posten.dk/frontpage?anonId=0-0-0-0-0`
    );

    if (!response.ok) {
      throw new Error();
    }

    return (await response.json()) as FrontPageResponseDto;
  }

  return {
    fetchFrontPage,
  };
}

export type FrontPageResponseDto = {
  readonly zones: ReadonlyArray<{
    readonly articles: ReadonlyArray<{
      readonly id: string;
      readonly title: string;
      readonly image?: {
        readonly urlPrefix?: string;
        readonly fileName: string;
      };
    }>;
  }>;
};

export type HtmlString = string;
