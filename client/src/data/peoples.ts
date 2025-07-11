import hyunsungcho from "../pictures/hyunsungcho.jpeg"
import jaewonkim from "../pictures/jaewonkim.webp"
import seyunkim from "../pictures/seyunkim.webp"
import ryuhaerangchoi from "../pictures/ryuhaerangchoi.jpg"
import minahuh from "../pictures/minahuh.jpg"
import kiroongchoe from "../pictures/kiroongchoe.jpg"
import jiwonyang from "../pictures/jiwonyang.webp"
import juhoonlee from "../pictures/juhoonlee.png"
import jeongeonpark from "../pictures/jeongeonpark.jpg"
import kihoonson from "../pictures/kihoonson.jpg"
import soobincho from "../pictures/soobincho.jpeg"
import janelee from "../pictures/janelee.jpeg"
import seokhyeonhwang from "../pictures/seokhyeonhwang.jpg"

export interface Member {
  name: string
  picture: string
}

export const members: Member[] = [
  { name: "기훈", picture: kihoonson },
  { name: "길웅", picture: kiroongchoe },
  { name: "미나", picture: minahuh },
  { name: "석현", picture: seokhyeonhwang },
  { name: "세윤", picture: seyunkim },
  { name: "재원", picture: jaewonkim },
  { name: "재인", picture: janelee },
  { name: "정언", picture: jeongeonpark },
  { name: "주훈", picture: juhoonlee },
  { name: "지원", picture: jiwonyang },
  { name: "수빈", picture: soobincho },
  { name: "해랑", picture: ryuhaerangchoi },
  { name: "현성", picture: hyunsungcho },
] 