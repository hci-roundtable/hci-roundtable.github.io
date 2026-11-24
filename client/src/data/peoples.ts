import hyunsungcho from "../pictures/hyunsungcho.jpeg"
import jaewonkim from "../pictures/jaewonkim.webp"
import ryuhaerangchoi from "../pictures/ryuhaerangchoi.jpg"
import kiroongchoe from "../pictures/kiroongchoe.jpg"
import jiwonyang from "../pictures/jiwonyang.webp"
import juhoonlee from "../pictures/juhoonlee.png"
import jeongeonpark from "../pictures/jeongeonpark.jpg"
import kihoonson from "../pictures/kihoonson.jpg"
import soobincho from "../pictures/soobincho.jpeg"
import seokhyeonhwang from "../pictures/seokhyeonhwang.jpg"

import eunjungmyoung from "../pictures/eunjungmyoung.png"
import jiwonsong from "../pictures/jiwonsong.png"

export interface Member {
  name: string
  picture: string
}

export const members: Member[] = [
  { name: "양지원", picture: jiwonyang },
  { name: "현성", picture: hyunsungcho },
  { name: "재원", picture: jaewonkim },
  { name: "정언", picture: jeongeonpark },
  { name: "주훈", picture: juhoonlee },
  { name: "기훈", picture: kihoonson },
  { name: "길웅", picture: kiroongchoe },
  { name: "해랑", picture: ryuhaerangchoi },
  { name: "석현", picture: seokhyeonhwang },
  { name: "수빈", picture: soobincho },
  { name: "은정", picture: eunjungmyoung },
  { name: "송지원", picture: jiwonsong },
]
