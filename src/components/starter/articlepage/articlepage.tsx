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
            <div
              class={
                "relative flex w-full overflow-hidden md:px-20 lg:px-40 2xl:pl-72"
              }
            >
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

            <div class="w-full hidden sm:block">
              <hr class="h-0.5 my-4 bg-black border-2 mx-2 sm:mx-0" />
            </div>

            <div class="w-full block sm:hidden">
            <hr class="h-0.5 my-4 bg-gray-400 border-0 mx-2 sm:mx-0" />
          </div>
          </section>

          

          <div>
            <Emner />
          </div>
        </article>
      </main>
    );
  }
);
