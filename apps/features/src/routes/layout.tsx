import { component$, Slot } from '@builder.io/qwik';
import { Footer, Header } from '@qwik-microfrontends/ui';

export default component$(() => {
  return (
    <>
      <Header />
      <main class="min-h-screen mt-18 pt-10 bg-slate-900">
        <Slot />
      </main>
      <Footer />
    </>
  );
});
