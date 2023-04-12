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
          <div class={"relative flex w-full overflow-hidden bg-zinc-300"}>
            {imageUrl !== null ? <img src={imageUrl} alt="" /> : null}
          </div>
          <h1 class="text-2xl font-bold font-serif pt-4">{headline}</h1>
          <ul>
            {authors.map((author) => (
              <li key={author.name}>
				{author.imageUrl !== null ? <img class="rounded-full w-20 pt-6" src={author.imageUrl} alt="" /> : null}
				<p class="font-serif flex pt-2">
				{author.name}
				</p>
				</li>
            ))}
          </ul>
		<div class="prose font-serif">
				<p  dangerouslySetInnerHTML={bodyText}/>
		</div>

		<ul>
            {tags.map((tag) => (
              <li key={tag.id}>
				<a class="">
				{tag.label}
				{tag.id}
				</a>
				
				</li>
            ))}
          </ul>
      </article>
    );
  }
);
