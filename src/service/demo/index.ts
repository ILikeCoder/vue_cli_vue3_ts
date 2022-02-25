// 封装业务请求接口案例
import request from '../'
import type { IDataType, IData, IContextType, IList } from './types'
export function getRecommend() {
  return request.get<IDataType<IData<IContextType, IList>>>({
    url: '/recommend'
  })
}
