import { AxiosInstance, AxiosPromise, AxiosResponse } from 'axios';
interface HasId {
  id?: number;
}
export class Sync<T extends HasId> {
  constructor(public api: AxiosInstance) {}
  save = async (info: T): Promise<T> => {
    const { id } = info;
    const data: AxiosResponse = await this.api({
      method: 'post',
      ...(id && { method: 'put', url: `/${id}` }),
      data: info,
    });
    return data.data;
  };
  fetch = async (id: number): Promise<T> => {
    const data: AxiosResponse = await this.api({
      url: `/${id}`,
      method: 'get',
    });
    return data.data;
  };
}
