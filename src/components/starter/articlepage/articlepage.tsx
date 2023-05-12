import { component$ } from "@builder.io/qwik";
import { InfoButton } from "../icons/info_button";
import Emner from "../Artiklens-emner/emner";

type ArticleTeaserProps = {
  // Article props
  readonly class?: string;
  readonly id: string;
  readonly headline: string;
  readonly headline2: string;
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
    headline2,
    teaser,
    imageUrl,
    caption,
    bodyText,
    authors,
    tags,
  }: ArticleTeaserProps) => {
    return (
      <main>
          <h1 class="justify-start uppercase flex px-2 lg:px-6 2xl:px-72 pb-6 font-semibold text-lg">
        Indland
      </h1>
      <article class="container mx-auto">
        <section class="flex h-full flex-col items-center space-y-2">
          <div class="md:pb-1 text-xs self-start pt-8 pb-1 px-3.5 lg:pl-40 2xl:pl-72">
            <time>12/03/2023 KL. 07:30 |</time>
            <nobr class="text-primary font-semibold uppercase">
              {" "}
              FOR ABONNENTER{" "}
            </nobr>
          </div>
          <h1 class="text-4xl font-bold font-serif pt-1.5 md:pt-3 pb-3 px-3.5 self-start lg:pl-40 max-w-5xl 2xl:max-w-6xl 2xl:pl-72">
            {headline2}
          </h1>
          <h2 class="font-serif pt-1 pb-6 px-3.5 self-start lg:pl-40 break-normal max-w-5xl 2xl:max-w-6xl 2xl:pl-72">
            {teaser}
          </h2>
          <div class={"relative flex w-full overflow-hidden md:px-20 lg:px-40 2xl:pl-72"}>
            {imageUrl !== null ? <img src={imageUrl} alt="" /> : null}
          </div>
          <div class="text-xs font-sans-serif pt-1 px-3.5 self-start lg:pl-40 break-normal 2xl:pl-72">
            {caption}
          </div>

          <div class="w-full pt-4">
            <hr class="h-0.5 mt-4 bg-black border-2 mx-2 md:mx-0" />
          </div>

          <ul class="self-start flex px-3.5 lg:pl-40 2xl:pl-72">
            {authors.map((author) => (
              <li
                class="flex-row flex items-center justify-center tracking-wide"
                key={author.name}
              >
                {author.imageUrl !== null ? (
                  <img
                    class="rounded-full w-11 pr-2 pt-2 object-center"
                    src={author.imageUrl.replace("/master-free/", "/byline/")}
                    alt=""
                  />
                ) : null}
                <p class="font-serif flex pt-4 text-primary uppercase text-xs font-bold">
                  {author.name}
                </p>
              </li>
            ))}
          </ul>

          <div class="w-full">
            <hr class="h-0.5 my-2 bg-black border-2 mx-2 md:mx-0" />
          </div>

          <div class="prose font-serif flex px-3.5">
            <p dangerouslySetInnerHTML={bodyText} />
          </div>

          <div class="w-full">
            <hr class="h-0.5 my-4 bg-black border-2 mx-2 sm:mx-0" />
          </div>
        </section>

        <section class="md:grid md:grid-cols-12 md:divide-x md:divide-gray-400">
          <div class="md:col-span-3">
            <div class="text-lg md:text-lg font-bold break-normal max-w-2xl px-4 md:px-6 justify-start uppercase text-primary">
              <p class="flex flex-wrap gap-x-2 items-center sm:pb-2">
                Artiklens emner
                <a href="/">
                  <InfoButton />
                </a>
              </p>
            </div>

            <div class="px-4 md:px-6 justify-start text-center md:text-left pb-0.5 md:pb-6"></div>
          </div>

          <ul class="flex flex-col md:flex-col md:divide-y justify-end md:col-span-9">
            <ul class="flex flex-wrap flex-col sm:flex-row justify-center md:justify-start mx-2 md:mx-8">
              {tags.map((tag) => (
                <li
                  class="py-2 flex flex-row items-center justify-center flex-wrap"
                  key={tag.id}
                >
                  <div class="w-full block sm:hidden py-1 pb-5">
                    <hr class="h-0.5 bg-gray-400" />
                  </div>
                  <a
                    class="bg-transparent underline text-black sm:py-2 px-4 rounded uppercase tracking-widest text-sm grow hover:font-semibold"
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
            <div class="w-full block sm:hidden">
              <hr class="h-0.5 my-4 bg-gray-400 mx-2" />
            </div>
            <div class="lg:px-10 py-4 text-center md:text-right">
              <a
                class="bg-transparent hover:bg-secondary text-secondary hover:text-white md:py-1.5 md:px-10 py-2.5 px-16 border 
            border-secondary hover:border-transparent rounded uppercase text-xs font-semibold"
                href="/pages/tag_page"
              >
                Se de emner du følger
              </a>
            </div>
          </ul>
        </section>
        

        <div class="w-full hidden sm:block">
          <hr class="h-0.5 my-4 bg-black border-0" />
        </div>

        {/*  <div>
                <Emner />
              </div>
        */}
      </article>
      </main>
    );
  }
);
