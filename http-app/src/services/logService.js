import * as Sentry from "@sentry/browser";

function init() {
  Sentry.init({
    dsn: "https://ab9ed84234f445e3a2a49dc3b623ccd3@sentry.io/1552143"
  });
}

function log(error) {
  Sentry.captureException(error);
}

export default {
  init,
  log
};
