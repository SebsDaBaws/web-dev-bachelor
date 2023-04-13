import { component$ } from "@builder.io/qwik";

type ArticleTeaserProps = {
  readonly class?: string;
  readonly id: string;
  readonly headline: string;
  readonly imageUrl: string | null;
  readonly bodyText: string;
  readonly authors: ReadonlyArray<{
    readonly name: string;
    imageUrl: string | null;
  }>;
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
        <h1 class="text-2xl font-bold font-serif pt-4 px-1 text-center">{headline}</h1>
        <ul>
          {authors.map((author) => (
            <li class="flex-auto items-start " key={author.name}>
              {author.imageUrl !== null ? (
                <img
                  class="rounded-full w-20 pt-6"
                  src={author.imageUrl}
                  alt=""
                />
              ) : null}
              <p class="font-serif flex pt-2 text-primary">{author.name}</p>
            </li>
          ))}
        </ul>
        <div class="prose font-serif flex px-3.5">
          <p dangerouslySetInnerHTML={bodyText} />
        </div>

        <div class="text-primary font-bold py-2">
              Artiklens emner:
        </div>
        <ul>
          {tags.map((tag) => (
            <li class="py-2" key={tag.id}>
              
              <button class="bg-transparent flex flex-row hover:bg-secondary text-secondary hover:text-white text-xs py-1 px-2 border border-secondary hover:border-transparent rounded uppercase tracking-widest">
                {tag.label}
               <a class="hidden"> 
                {tag.id}
                </a>
                </button>
            </li>
          ))}
        </ul>
      </article>
    );
  }
);
