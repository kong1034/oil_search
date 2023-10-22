import React from "react";
import { Select } from "../atoms/Select";
import { SelectBox } from "../modules/SelectBox";
import { Content } from "../modules/Content";
import { Input } from "../atoms/Input";
import { Title } from "../modules/Title";
import { Text } from "../atoms/Text";
import { Card } from "../modules/Card";
import { CardText } from "../modules/CardText";
import { CardBox } from "../modules/CardBox";
import { Img } from "../atoms/Img";
import { NewsBox } from "../modules/NewsBox";
import { A } from "../atoms/A";

export const Layout = () => {
  const newsArr = [
    {
      id: 1,
      src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/016.png",
      href: "https://biz.heraldcorp.com/",
    },
    {
      id: 2,
      src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/014.png",
      href: "https://www.fnnews.com/",
    },
    {
      id: 3,
      src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/946.png",
      href: "https://www.yna.co.kr/",
    },
    {
      id: 4,
      src: "https://s.pstatic.net/static/newsstand/2019/logo/011.png",
      href: "https://www.sedaily.com/",
    },
    {
      id: 5,
      src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/055.png",
      href: "https://news.sbs.co.kr/news/newsMain.do",
    },
    {
      id: 6,
      src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/056.png",
      href: "https://news.kbs.co.kr/news/pc/main/main.html",
    },
    {
      id: 7,
      src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/904.png",
      href: "https://news.jtbc.co.kr/",
    },
    {
      id: 8,
      src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/214.png",
      href: "https://imnews.imbc.com/pc_main.html",
    },
    {
      id: 9,
      src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/052.png",
      href: "https://www.ytn.co.kr/",
    },
  ];
  return (
    <>
      <Content>
        <Title>
          <Text fontSize="2.5rem" color="red">
            경기도 평균유가
          </Text>
        </Title>
        <SelectBox>
          <Select>
            <option value="B027">휘발유</option>
            <option value="D047">경유</option>
            <option value="C004">등유</option>
            <option value="B034">고급휘발유</option>
            <option value="K015">자동차부탄</option>
          </Select>
          <Input placeholder="시,군을 입력해주세요." />
        </SelectBox>
        <Title>
          <Text fontSize="2.5rem" color="red">
            도시별 평균유가
          </Text>
        </Title>
        <CardBox width="100%" display="flex" border="none">
          <Card>
            <Text fontSize="1.5rem" color="red">
              도시
            </Text>
            <CardText>
              <Text fontSize="1rem" color="red">
                휘발유
              </Text>
              <Text fontSize="1rem" color="red">
                1000.10
              </Text>
            </CardText>
            <CardText>
              <Text fontSize="1rem" color="red">
                경유
              </Text>
              <Text fontSize="1rem" color="red">
                900.10
              </Text>
            </CardText>
          </Card>
          <Card>
            <Text fontSize="1.5rem" color="red">
              도시
            </Text>
            <CardText>
              <Text fontSize="1rem" color="red">
                휘발유
              </Text>
              <Text fontSize="1rem" color="red">
                1000.10
              </Text>
            </CardText>
            <CardText>
              <Text fontSize="1rem" color="red">
                경유
              </Text>
              <Text fontSize="1rem" color="red">
                900.10
              </Text>
            </CardText>
          </Card>
        </CardBox>
        <Title>
          <Text fontSize="2.5rem" color="red">
            경제 뉴스
          </Text>
        </Title>
        <NewsBox>
          {newsArr.map((res, i) => (
            <A href={res.href} key={i} target="_blank">
              <CardBox
                width="32%"
                display="inline-grid"
                border="1px solid black"
              >
                <Img src={res.src} />
              </CardBox>
            </A>
          ))}
        </NewsBox>
      </Content>
    </>
  );
};
