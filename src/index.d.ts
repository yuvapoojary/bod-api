export = bod;
import { EventEmitter } from 'events';

declare class bod extends EventEmitter {
  constructor(token: string, options: bod.DBLOptions, client?: object);
  constructor(token: string, client?: object);


  public postStats(serverCount: number, shardId?: number, shardCount?: number): Promise<object>
  public getStats(id: string): Promise<bod.BotStats>
  public getUser(id: string): Promise<bod.User>
  public getVotes(): Promise<bod.Vote[]>


  public token?: string;

  private _request(method: string, endpoint: string, data?: object): Promise<object>

  public on(event: 'posted', listener: () => void): this;
  public on(event: 'error', listener: (error: Error) => void): this;
}


declare namespace bod {
  export type DBLOptions = {
    Interval?: number;
  }

  export type BotStats = {
    server_count: number;
    shards: number[];
    shard_count: number;
  }

  export type Bot = {
    id: number;
    username: string;
    discriminator: string;
    avatar?: string;
    defAvatar: string;
    lib: string;
    prefix: string;
    shortdesc: string;
    longdesc?: string;
    tags: string[];
    website?: string;
    support?: string;
    github?: string;
    owners: number[];
    invite?: string;
    date: Date;
    certifiedBot: boolean;
    vanity?: string;
    points: number;
  }

  export type User = {
    id: number;
    username: string;
    discriminator: string;
    avatar?: string;
    defAvatar: string;
    bio?: string;
    banner?: string;
    social: UserSocial;
    color?: string;
    supporter: boolean;
    certifiedDev: boolean;
    mod: boolean;
    webMod: boolean;
    admin: boolean;
  }


}
