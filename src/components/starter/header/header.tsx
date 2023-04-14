import { component$ } from "@builder.io/qwik";
import { JPLogo } from "../icons/jp_logo";

export default component$(() => {
  return (
    <header>
      <div class="flex justify-between mt-5 mx-auto items-center">
        <div class="py-5 px-4">
          <span class="bg-transparent text-neutral-500 rounded uppercase tracking-widest font-medium cursor-default">
            {new Date().toLocaleString()}
          </span>
        </div>

        <div>
          <a
            class="px-4 py-4 justify-center content-center mx-auto flex flex-col"
            href="/"
            title="JPLogo"
          >
            <JPLogo />
          </a>
        </div>

        <ul class="flex flex-row flex-wrap text-right space-x-4 py-5 px-5 font-sans-serif font-medium text-sm">
          <li class="border-r border-neutral-400">
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
