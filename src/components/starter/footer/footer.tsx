import { component$ } from "@builder.io/qwik";
import { useServerTimeLoader } from "~/routes/layout";
import { JPLogo } from "../icons/jp_logo";

export default component$(() => {
  const serverTime = useServerTimeLoader();

  return (
    <footer class="mt-16 w-full block bg-primary text-white">
      <div class="container mx-auto flex flex-col items-center py-12">
        <a
          class="px-4 py-4 inline-block justify-center place-content-center"
          href="/"
          title="JPLogo"
          style="fill:#FFFFFF"
        >
          <JPLogo class="h-6 md:h-8 lg:h-10"/>
        </a>
        <p class="font-serif text-sm md:text-base">Grundlagt i 1871</p>
      </div>
    </footer>
  );
});
