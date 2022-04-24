import { Observable, Subject } from "rxjs";

export class BroadcastService<T> {
  private broadcastChannel: BroadcastChannel;
  private onMessage = new Subject<any>();

  constructor(broadcastChannelName: string) {
    this.broadcastChannel = new BroadcastChannel(broadcastChannelName);
    this.broadcastChannel.onmessage = (message) =>
      this.onMessage.next(message.data);
  }

  dispatch(message: T): void {
    this.broadcastChannel.postMessage(message);
  }

  listen(): Observable<T> {
    return this.onMessage;
  }
}
