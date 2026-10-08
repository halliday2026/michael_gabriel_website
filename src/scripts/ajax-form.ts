// AJAX submit for Formspree forms marked `data-ajax-form`. Without JS the form
// still posts normally. Expected markup:
//   <form data-ajax-form data-success="<id of thank-you panel>" data-sending="…" data-submit="…">
//     … <button type="submit"> … <p data-form-error hidden-by-class> …
// The error message is hidden (class "hidden") until a request actually fails.

document.querySelectorAll<HTMLFormElement>('form[data-ajax-form]').forEach((form) => {
  const btn = form.querySelector<HTMLButtonElement>('button[type="submit"]');
  const error = form.querySelector<HTMLElement>('[data-form-error]');
  const success = form.dataset.success ? document.getElementById(form.dataset.success) : null;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!btn) return;
    btn.disabled = true;
    btn.textContent = form.dataset.sending ?? '';
    error?.classList.add('hidden');

    try {
      const res = await fetch(form.action, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form),
      });
      if (!res.ok) throw new Error(`Formspree responded ${res.status}`);

      form.classList.add('hidden');
      success?.classList.remove('hidden');
      success?.focus();
    } catch {
      error?.classList.remove('hidden');
      btn.disabled = false;
      btn.textContent = form.dataset.submit ?? '';
    }
  });
});
