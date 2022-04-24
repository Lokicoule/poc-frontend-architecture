import { Observable, Subject } from "rxjs";

export interface BroadcastMessage {
  type: string;
  payload: any;
}

export class BroadcastService {
  private broadcastChannel: BroadcastChannel;
  private onMessage = new Subject<any>();

  constructor(broadcastChannelName: string) {
    this.broadcastChannel = new BroadcastChannel(broadcastChannelName);
    this.broadcastChannel.onmessage = (message) =>
      this.onMessage.next(message.data);
  }

  dispatch(message: BroadcastMessage): void {
    this.broadcastChannel.postMessage(message);
  }

  listen(): Observable<BroadcastMessage> {
    return this.onMessage;
  }
}
