import { UserActionEvent, SdkActionEvent } from "@b2data/tonconnect-ui-react";

const logEvent = (scope: string): ((event: Event) => void) => {
  scope = scope.startsWith("ton-connect-ui-") ? "TonConnectUI" : "TonConnect";

  return (event: Event): void => {
    if (!(event instanceof CustomEvent)) {
      return;
    }
    const detail: UserActionEvent | SdkActionEvent = event.detail;
    console.log(`${scope} Event: ${detail.type}`, detail);
  };
};

const eventsArr = [
  "request-version",
  "response-version",
  "connection-started",
  "connection-completed",
  "connection-error",
  "connection-restoring-started",
  "connection-restoring-completed",
  "connection-restoring-error",
  "transaction-sent-for-signature",
  "transaction-signed",
  "transaction-signing-failed",
  "data-sent-for-signature",
  "data-signed",
  "data-signing-failed",
  "disconnection",
];

const events = [
  ...eventsArr.map((event) => `ton-connect-ui-${event}`),
  ...eventsArr.map((event) => `ton-connect-${event}`),
];

for (const event of events) {
  try {
    window.addEventListener(`${event}`, logEvent(event));
  } catch (e) {
    console.error(`Failed to add event listener for ${event}`, e);
  }
}
