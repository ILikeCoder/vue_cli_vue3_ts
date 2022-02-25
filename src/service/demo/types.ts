export interface IDataType<T = any> {
  data: T
  returnCode: string
  success: boolean
}

export interface IContextType {
  currentTime: number
}

export interface IList {
  acm: string
  cfav: number
  discount: number
  discountPrice: string
  image: string
  isShelf: number
  itemLikes: number
  itemSale: number
  item_h5_url: string
  item_id: string
  item_url: string
  price: string
  shop_id: string
  title: string
}

export interface IData<C, L> {
  context: C
  isEnd: boolean
  list: L[]
  nextPage: number
}
