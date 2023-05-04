import { component$ } from "@builder.io/qwik";
import { InfoButton } from "../icons/info_button";
import Emner from "../Artiklens-emner/emner";

type ArticleTeaserProps = {
  // Article props
  readonly class?: string;
  readonly id: string;
  readonly headline: string;
  readonly teaser: string;
  readonly imageUrl: string | null;
  readonly caption: string;
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
    teaser,
    imageUrl,
    caption,
    bodyText,
    authors,
    tags,
  }: ArticleTeaserProps) => {
    return (
      <article class="container mx-auto">
        <section class="flex h-full flex-col items-center space-y-2">
        <h1 class="text-2xl lg:text-3xl font-bold font-serif pt-8 pb-6 px-3.5 self-start lg:pl-40">
          {headline}
        </h1>
        <h2 class="font-serif pt-4 pb-6 px-3.5 self-start lg:pl-40 break-normal max-w-5xl">
          {teaser}
        </h2>
        <div class={"relative flex w-full overflow-hidden md:px-20 lg:px-40"}>
          {imageUrl !== null ? <img src={imageUrl} alt="" /> : null}
        </div>
        <div class="text-xs font-serif pt-1 pb-1 px-3.5 self-start lg:pl-40 break-normal">
          {caption}
        </div>

        <div class="w-full pt-4">
          <hr class="h-0.5 mt-4 bg-black border-2" />
        </div>

        <ul class="self-start flex px-3.5 lg:pl-40">
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

        </section>

        <section class="md:grid md:grid-cols-12 md:divide-x md:divide-gray-400">

        <div class="md:col-span-3">
          
          <div class="text-lg md:text-lg font-bold break-normal max-w-2xl px-4 md:px-6 justify-start uppercase text-primary">
            <p class="flex flex-wrap gap-x-2 items-center">
              Artiklens emner
              <a href="/">
                <InfoButton />
              </a>
            </p>
          </div>


          <div class="px-4 md:px-6 justify-start text-center md:text-left pb-2 md:pb-6"></div>
        </div>

        <ul class="flex flex-col md:flex-col md:divide-y justify-end md:col-span-9">
          <div class="w-full block md:hidden">
            <hr class="h-0.5 my-4 bg-black border-0" />
          </div>

          <ul class="flex flex-wrap flex-col sm:flex-row justify-center md:justify-start mx-2 md:mx-8">
            {tags.map((tag) => (
              <li
                class="py-2 flex flex-row items-center justify-center flex-wrap px-1"
                key={tag.id}
              >
                <a
                  class="bg-transparent underline text-black py-3 px-2 rounded uppercase tracking-widest text-sm grow hover:font-semibold"
                  href={tag.id}
                >
                  {tag.label}
                </a>
                <button
                  class="bg-white flex md:flex-row hover:bg-primary text-primary hover:text-white 
                text-xs py-2 md:py-1 px-3 border border-secondary hover:border-transparent rounded uppercase tracking-widest no-underline"
                >
                  Følg
                </button>
              </li>
            ))}
          </ul>
          <div class="text-center lg:px-10 pt-5">
          <a
            class="bg-transparent underline self:center text-black px-2 rounded tracking-widest text-sm py-5 lg:shrink-0 lg:pr-3 uppercase"
            href="/pages/tag_page"
          >
            Se de emner du følger
          </a>
          </div>
        </ul>
        
      </section>

      

        <div class="w-full">
          <hr class="h-0.5 my-4 bg-black border-0" />
        </div>

        {/* Mobile  <div>
                <Emner />
              </div>
        */}
      </article>
    );
  }
);
