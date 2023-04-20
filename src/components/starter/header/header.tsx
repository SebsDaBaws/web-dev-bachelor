import { component$ } from "@builder.io/qwik";
import { JPLogo } from "../icons/jp_logo";

export default component$(() => {
  return (
    <header>
      <div class="mx-auto flex max-w-screen-xl items-center py-8 px-5 pt-16">
        <div class="basis-64">
          <time class="uppercase invisible md:visible">
            <span class="pr-1 font-bold">
              {new Date().toLocaleString("da-DK", { weekday: "long" })}
            </span>
            {new Date().toLocaleString("da-DK", { dateStyle: "long" })}
          </time>
        </div>
        <div class="flex grow justify-center">
          <a href="/">
            <JPLogo />
          </a>
        </div>

        <ul class="flex flex-row flex-wrap text-right space-x-4 py-5 px-5 font-sans-serif font-medium text-sm">
          <li class="border-r border-neutral-400 invisible md:visible">
            <button class="bg-transparent hover:underline text-black py-1 px-2 rounded uppercase tracking-widest">
              <a href="https://medielogin.dk/Jyllands-posten/login">Log ind</a>
            </button>
          </li>

          <li>
            <button class="bg-transparent hover:bg-secondary text-secondary hover:text-white py-1 px-2 border border-secondary hover:border-transparent rounded uppercase tracking-widest">
              <a href="https://abonnement.jyllands-posten.dk/">Køb</a>
            </button>
          </li>
          <li>
            <button class="bg-transparent hover:bg-primary text-black hover:text-white py-1 px-2 border border-black hover:border-transparent rounded uppercase tracking-widest">
              <a href="/">Menu</a>
            </button>
          </li>
        </ul>
      </div>

      <div>
        <hr class="h-1.5 my-4 bg-primary border-0" />
      </div>
    </header>
  );
});
