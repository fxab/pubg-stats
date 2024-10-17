import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <header class="bg-base-200 shadow-lg">
      <div class="navbar container mx-auto">
        <div class="flex-1">
          <a class="btn btn-ghost normal-case text-xl" href="/">PUBG Stats</a>
        </div>
        <div class="flex-none">
          <ul class="menu menu-horizontal px-1">
            <li><a href="/">Home</a></li>
          </ul>
        </div>
      </div>
    </header>
  );
});