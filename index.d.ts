declare class HuyClient {
  get: {
    meme():Promise<HuyClient.HuyResults>;
    girl():Promise<HuyClient.HuyResults>;
    boy():Promise<HuyClient.HuyResults>;
    cat():Promise<HuyClient.HuyResults>;
    dog():Promise<HuyClient.HuyResults>;
    hug():Promise<HuyClient.HuyResults>;
    smile():Promise<HuyClient.HuyResults>;
    baka():Promise<HuyClient.HuyResults>;
    bite():Promise<HuyClient.HuyResults>;
    clap():Promise<HuyClient.HuyResults>;
    dance():Promise<HuyClient.HuyResults>;
    die():Promise<HuyClient.HuyResults>;
    kill():Promise<HuyClient.HuyResults>;
    kiss():Promise<HuyClient.HuyResults>;
    wag():Promise<HuyClient.HuyResults>;
    poke():Promise<HuyClient.HuyResults>;
    punch():Promise<HuyClient.HuyResults>;
    sad():Promise<HuyClient.HuyResults>;
    run():Promise<HuyClient.HuyResults>;
    shot():Promise<HuyClient.HuyResults>;
  }
}

export = HuyClient;


declare namespace HuyClient {
  export interface HuyResults {
    url: string;
  }
}