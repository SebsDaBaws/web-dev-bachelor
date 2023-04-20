import { component$ } from "@builder.io/qwik";

type ArticleTeaserProps = {
  // Article props
  readonly class?: string;
  readonly id: string;
  readonly headline: string;
  readonly imageUrl: string | null;
  readonly bodyText: string;
  readonly authors: ReadonlyArray<{
    readonly name: string;
    imageUrl: string | null;
  }>;
  // Image props
  readonly tags: ReadonlyArray<{
    readonly label: string;
    readonly id: string;
  }>;
};

export default component$(
  ({
    class: _class,
    id,
    headline,
    imageUrl,
    bodyText,
    authors,
    tags,
  }: ArticleTeaserProps) => {
    return (
      <article class="flex h-full flex-col items-center space-y-2">
        <div class={"relative flex w-full overflow-hidden md:px-20 lg:px-40"}>
          {imageUrl !== null ? <img src={imageUrl} alt="" /> : null}
        </div>
        <h1 class="text-2xl font-bold font-serif pt-4 px-1 text-center">
          {headline}
        </h1>

        <div class="w-full pt-4">
          <hr class="h-0.5 my-4 bg-black border-2" />
        </div>

        <ul class="self-start flex px-3.5 pb-4 lg:pl-48">
          {authors.map((author) => (
            <li
              class="flex-row flex items-center justify-center"
              key={author.name}
            >
              {author.imageUrl !== null ? (
                <img
                  class="rounded-full w-8 pr-2 pt-2 object-center"
                  src={author.imageUrl.replace("/master-free/", "/byline/")}
                  alt=""
                />
              ) : null}
              <p class="font-serif flex pt-4 text-primary">{author.name}</p>
            </li>
          ))}
        </ul>

        <div class="w-full">
          <hr class="h-0.5 my-4 bg-black border-2" />
        </div>

        <div class="prose font-serif flex px-3.5">
          <p dangerouslySetInnerHTML={bodyText} />
        </div>

        <div class="w-full">
          <hr class="h-0.5 my-4 bg-black border-2" />
        </div>

        <div class="flex h-full flex-col items-center space-y-2 lg:flex-row">
          <div class="text-primary font-bold py-6 lg:shrink-0 lg:pl-3 uppercase">
            Artiklens emner <button>ℹ</button>
          </div>
          <ul class="flex flex-wrap flex-col sm:flex-row justify-center sm:justify-center px-4">
            {tags.map((tag) => (
              <li
                class="py-2 flex flex-row items-center flex-wrap px-1"
                key={tag.id}
              >
                <a
                  class="bg-transparent hover:underline text-black py-1 px-2 rounded uppercase tracking-widest text-sm"
                  href={tag.id}
                >
                  {tag.label}
                </a>
                <button class="bg-transparent flex flex-row hover:bg-secondary text-secondary hover:text-white text-xs py-1 px-2 border border-secondary hover:border-transparent rounded uppercase tracking-widest">
                  FØLG
                </button>
              </li>
            ))}
          </ul>
          <a
            class="bg-transparent underline text-black px-2 rounded tracking-widest text-sm py-5 lg:shrink-0 lg:pr-3 uppercase"
            href="/"
          >
            Se de emner du følger
          </a>
        </div>

        <div class="w-full">
          <hr class="h-0.5 my-4 bg-black border-0" />
        </div>
      </article>
    );
  }
);
