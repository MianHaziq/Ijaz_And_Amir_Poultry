/* ------------------------------------------------------------------
   One signal: "the preloader has lifted, the page is on screen".

   The scroll-reveals subscribe to this instead of starting straight
   away, otherwise every section inside the first viewport would play
   its entrance behind the curtain and be finished by the time the
   visitor could see it.
   ------------------------------------------------------------------ */

let ready = false;
const waiting = new Set<() => void>();

export function markAppReady() {
  if (ready) return;
  ready = true;
  for (const cb of waiting) cb();
  waiting.clear();
}

/** Runs `cb` now if the page is already revealed, otherwise once it is.
 *  Returns an unsubscribe for components that unmount while waiting. */
export function whenAppReady(cb: () => void): () => void {
  if (ready) {
    cb();
    return () => {};
  }
  waiting.add(cb);
  return () => {
    waiting.delete(cb);
  };
}

/* Failsafe. Content held by a reveal is at opacity 0, so if the
   preloader is ever removed or dies before it can report in, the page
   must release itself rather than stay blank. The preloader's own hard
   stop fires well before this. */
if (typeof window !== "undefined") {
  window.setTimeout(markAppReady, 7000);
}
