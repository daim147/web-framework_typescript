import { AxiosInstance, AxiosPromise, AxiosResponse } from 'axios';
interface HasId {
  id?: number;
}
export class Sync<T extends HasId> {
  constructor(public api: AxiosInstance) {}
  async save(info: T): Promise<AxiosPromise> {
    const { id } = info;
    const data: AxiosResponse = await this.api({
      method: 'post',
      ...(id && { method: 'put', url: `/${id}` }),
      data: info,
    });
    return data.data;
  }
  async fetch(id: number): Promise<AxiosPromise> {
    const data: AxiosResponse = await this.api({
      url: `/${id}`,
      method: 'get',
    });
    return data.data;
  }
}
