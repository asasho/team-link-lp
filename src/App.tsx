import styles from "./App.module.css";
import Slider from "react-slick";
import styled from "styled-components";
import MediaQuery from "react-responsive";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

import Header from "./organisms/Header";

import Function from "./molecules/Function";
import ProcessItem from "./molecules/ProcessItem";
import Process from "./features/process/Process";
import CtaButton from "./molecules/CtaButton";
import Button from "./atoms/Button";
import Item from "./molecules/Item";

import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.head}>
        <div className={styles.sub_head}>
          <div className={styles.head_img}>
            <div className={styles.img_div}>
              <div className={styles.item}>
                {items.map((item) => (
                  <Item key={item.id} text={item.text} />
                ))}
              </div>
              <img
                src="https://s3-ap-northeast-1.amazonaws.com/team-link-lp-picture/IMG/top_img.png"
                alt="Top"
              />
            </div>
          </div>
          <div className={styles.head_text}>
            <h1>無料で相談できるパートナーと繋がる</h1>
            <br />
            <h1>
              <span>経営層のための</span>
            </h1>
            <br />
            <h1>
              <span>課題解決マッチングサービス</span>
            </h1>
            <p>
              ビジネスマッチングサービス「Team Link」で、
              <br />
              パートナーとつながり、無料相談。
            </p>
            <MediaQuery minWidth={768}>
              <Button
                color="#0095f6"
                background="white"
                display="block"
                text="無料登録する"
                linkTo=""
              />
            </MediaQuery>
            <MediaQuery maxWidth={768}>
              <Button
                color="#0095f6"
                background="white"
                display="inline-block"
                text="ログイン・無料登録する"
                linkTo=""
              />
            </MediaQuery>
          </div>
        </div>
      </div>

      <div className={styles.main}>
        <div className={styles.partner}>
          <h1>
            様々な業種の<span>成長企業</span>が続々登場
          </h1>
          <h3>中小企業を中心にご活用されています。</h3>

          <PartnerSlick {...settings}>
            {partners.map((partner) => (
              <div className={styles.partner_item} key={partner.id}>
                <img
                  src={partner.logo}
                  style={{ height: "100%", width: "auto" }}
                  alt="logo"
                />
              </div>
            ))}
          </PartnerSlick>
        </div>

        <div className={styles.matter}>
          <h2>こんな悩み、抱えていませんか？</h2>
          <div>
            {matters.map((matter) => (
              <h3 key={matter.id}>{matter.text}</h3>
            ))}
          </div>
        </div>

        <div className={styles.mechanism}>
          <h1>無料で相談できるパートナー企業が待っています！</h1>
          <h2>
            「Team Link」は経営層様が相談できるパートナー企業を
            <br />
            見つけることができるプラットフォームです。
          </h2>
          <img
            src="https://s3-ap-northeast-1.amazonaws.com/team-link-lp-picture/IMG/Mechanism.png"
            alt="Mechanism"
          />
        </div>

        {functions.map((f) => (
          <div className={styles.function_item} key={f.id}>
            <Function
              title={f.title}
              content={f.content}
              button={f.button}
              movie={f.movie}
              order={f.order}
            />
          </div>
        ))}

        {/* <div className={styles.client}>
          <h1>ご利用者様の声</h1>
          <div></div>
        </div> */}

        <div className={styles.process}>
          <h1>企業とのマッチングまでの流れ</h1>
          <div className={styles.process_content}>
            {processes.map((process) => (
              <ProcessItem
                key={process.id}
                id={process.id}
                title={process.title}
                FirstImg={process.FirstImg}
                FirstTitle={process.FirstTitle}
                FirstText={process.FirstText}
                SecondImg={process.SecondImg}
                SecondTitle={process.SecondTitle}
                SecondText={process.SecondText}
                ThirdImg={process.ThirdImg}
                ThirdTitle={process.ThirdTitle}
                ThirdText={process.ThirdText}
                left={process.left}
              />
            ))}
          </div>
          <Process />
        </div>

        <div className={styles.QA}>
          <h1>よくある質問</h1>
          <StyledAccordion allowZeroExpanded>
            {questions.map((q) => (
              <AccordionItem key={q.id}>
                <div className={styles.QAset}>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      <div className={styles.Q}>
                        <div className={styles.word}>
                          <h2>Q{q.id}.</h2>
                          <h3>{q.Q}</h3>
                        </div>
                        <KeyboardArrowDownIcon
                          style={{ fontSize: 30, paddingRight: "20px" }}
                        />
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <div className={styles.A}>
                      <h2>A{q.id}.</h2>
                      <h3>{q.A}</h3>
                    </div>
                  </AccordionItemPanel>
                </div>
              </AccordionItem>
            ))}
          </StyledAccordion>
        </div>
      </div>
      <div className={styles.cta}>
        <h2>まずは無料でお試しませんか？</h2>
        <div>
          <CtaButton
            color="#0095f6"
            background="white"
            text="無料で登録する"
            linkTo=""
          />
          <CtaButton
            color="white"
            background="#0095f6"
            text="ログイン"
            linkTo=""
          />
        </div>
      </div>
    </div>
  );
}

export default App;

const settings = {
  dots: false,
  accessibility: false,
  infinate: true,
  slidesToScroll: 1,
  slideToShow: 4,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 0,
  pauseOnHover: false,
  cssEase: "linear",
  variableWidth: true,
};

const items = [
  { id: 1, text: "無料で相談" },
  { id: 2, text: "企業を探せる" },
  { id: 3, text: "企業と繋がる" },
];

const partners = [
  {
    id: 1,
    logo: "https://team-link-lp-picture.s3-ap-northeast-1.amazonaws.com/Partner/partner1.png",
  },
  {
    id: 2,
    logo: "https://team-link-lp-picture.s3-ap-northeast-1.amazonaws.com/Partner/partner2.png",
  },
  {
    id: 3,
    logo: "https://team-link-lp-picture.s3-ap-northeast-1.amazonaws.com/Partner/partner3.png",
  },
  {
    id: 4,
    logo: "https://team-link-lp-picture.s3-ap-northeast-1.amazonaws.com/Partner/partner4.png",
  },
  {
    id: 5,
    logo: "https://team-link-lp-picture.s3-ap-northeast-1.amazonaws.com/Partner/partner5.png",
  },
  {
    id: 6,
    logo: "https://team-link-lp-picture.s3-ap-northeast-1.amazonaws.com/Partner/partner6.png",
  },
  {
    id: 7,
    logo: "https://team-link-lp-picture.s3-ap-northeast-1.amazonaws.com/Partner/partner7.png",
  },
  {
    id: 8,
    logo: "https://team-link-lp-picture.s3-ap-northeast-1.amazonaws.com/Partner/partner8.png",
  },
  {
    id: 9,
    logo: "https://team-link-lp-picture.s3-ap-northeast-1.amazonaws.com/Partner/partner9.png",
  },
  {
    id: 10,
    logo: "https://team-link-lp-picture.s3-ap-northeast-1.amazonaws.com/Partner/partner10.png",
  },
  {
    id: 11,
    logo: "https://team-link-lp-picture.s3-ap-northeast-1.amazonaws.com/Partner/partner11.png",
  },
  {
    id: 12,
    logo: "https://team-link-lp-picture.s3-ap-northeast-1.amazonaws.com/Partner/partner12.png",
  },
  {
    id: 13,
    logo: "https://team-link-lp-picture.s3-ap-northeast-1.amazonaws.com/Partner/partner13.png",
  },
  {
    id: 14,
    logo: "https://team-link-lp-picture.s3-ap-northeast-1.amazonaws.com/Partner/partner14.png",
  },
  {
    id: 15,
    logo: "https://team-link-lp-picture.s3-ap-northeast-1.amazonaws.com/Partner/partner15.png",
  },
  {
    id: 16,
    logo: "https://team-link-lp-picture.s3-ap-northeast-1.amazonaws.com/Partner/partner16.png",
  },
  {
    id: 17,
    logo: "https://team-link-lp-picture.s3-ap-northeast-1.amazonaws.com/Partner/partner17.png",
  },
  {
    id: 18,
    logo: "https://team-link-lp-picture.s3-ap-northeast-1.amazonaws.com/Partner/partner18.png",
  },
];

const matters = [
  { id: 1, text: "自社の課題を誰に相談すればいいかわからない..." },
  { id: 2, text: "パートナー企業が見つからない..." },
  { id: 3, text: "発注先が見つからない..." },
  { id: 4, text: "人脈が欲しい..." },
];

const functions = [
  {
    id: 1,
    title: "無料経営相談",
    content: "「採用」や「集客」、「組織」など自社の課題を無料で相談できます。",
    button: "無料で相談する",
    movie: "https://d32an07yf7y0nw.cloudfront.net/output/movie1team.m3u8",
    order: "row-reverse wrap",
  },
  {
    id: 2,
    title: "パートナー企業を探せる",
    content:
      "「集客」や「採用」など貴社の興味のある条件でパートナー企業を探すことができます。",
    button: "パートナー企業を探す",
    movie: "https://d32an07yf7y0nw.cloudfront.net/output/movie3team.m3u8",
    order: "row wrap",
  },
  {
    id: 3,
    title: "パートナー企業と繋がる",
    content:
      "企業に直接コンタクトできるので、パートナーとつながることができます。",
    button: "パートナー企業と繋がる",
    movie: "https://d32an07yf7y0nw.cloudfront.net/output/movie2team.m3u8",
    order: "row-reverse wrap",
  },
];

const processes = [
  {
    id: 1,
    title: "自社の経営課題を投稿し、課題解決のできる企業を探す",
    FirstImg:
      "https://team-link-lp-picture.s3-ap-northeast-1.amazonaws.com/Process/process1.png",
    FirstTitle: "貴社の課題を記入して1clickで投稿",
    FirstText: "解決したい課題を記入し、1clickで投稿を送信。",
    SecondImg:
      "https://team-link-lp-picture.s3-ap-northeast-1.amazonaws.com/Process/process2.png",
    SecondTitle: "企業から返信が来る",
    SecondText: "企業がアップされている投稿を閲覧し、アドバイスをもらえる。",
    ThirdImg:
      "https://team-link-lp-picture.s3-ap-northeast-1.amazonaws.com/Process/process3.png",
    ThirdTitle: "企業にアプローチ",
    ThirdText: "返信が来た企業にアプローチをかける。",
    left: "15%",
  },
  {
    id: 2,
    title:
      "検索機能を利用して、自社のニーズや地域などさまざまな方法で企業を探す",
    FirstImg:
      "https://team-link-lp-picture.s3-ap-northeast-1.amazonaws.com/Process/process4.png",
    FirstTitle: "企業を検索",
    FirstText: "「Team Link」の検索機能で、自社のニーズや地域などで検索。",
    SecondImg:
      "https://team-link-lp-picture.s3-ap-northeast-1.amazonaws.com/Process/process2.png",
    SecondTitle: "企業の掲載ページを見る",
    SecondText:
      "該当企業が掲載しているPR広告を見て、メッセージを送る企業を選ぶ。",
    ThirdImg:
      "https://team-link-lp-picture.s3-ap-northeast-1.amazonaws.com/Process/process3.png",
    ThirdTitle: "企業から返信が来る",
    ThirdText:
      "メッセージを送信した企業の中から、貴社に興味を持った企業から返信が来る。",
    left: "50%",
  },
  {
    id: 3,
    title: "パートナー企業に直接コンタクトし、企業とつながる",
    FirstImg:
      "https://team-link-lp-picture.s3-ap-northeast-1.amazonaws.com/Process/process2.png",
    FirstTitle: "企業へメッセージを送信",
    FirstText: "特定の企業にメッセージを送信。",
    SecondImg:
      "https://team-link-lp-picture.s3-ap-northeast-1.amazonaws.com/Process/process3.png",
    SecondTitle: "企業とメッセージのやり取りを行う",
    SecondText: "メッセージを送信した企業と課題解決の相談などを行う。",
    ThirdImg:
      "https://team-link-lp-picture.s3-ap-northeast-1.amazonaws.com/Process/process5.png",
    ThirdTitle: "パートナー企業が見つかる",
    ThirdText: "メッセージのやり取りを通して、パートナー企業と繋がる。",
    left: "85%",
  },
];

const questions = [
  {
    id: 1,
    Q: "「Team Link」はなぜ「無料」で利用できるのでしょうか？",
    A: "掲載企業の方から一部の機能を有料でご利用いただいているため、登録者の方は無料でご利用いただけます。",
  },
  {
    id: 2,
    Q: "「Team Link」に登録できるのは経営者のみですか？",
    A: "いいえ。経営者の方以外にも取締役や執行役員、営業部長など決裁者の方であればどなたでも登録が可能です。",
  },
  {
    id: 3,
    Q: "「Team Link」に掲載しているのはどのような業界の企業の方ですか？",
    A: "システム開発会社やマーケティング会社、経営コンサルティング会社、社労士事務所などさまざまな業界の方が掲載しています。",
  },
  {
    id: 4,
    Q: "掲載企業の方にどのような相談をすることができますか？",
    A: "さまざまな業種の掲載企業の方がいらしゃるため専門性が求められるあらゆる領域の質問が可能になります。",
  },
];

const PartnerSlick = styled(Slider)`
  .slick-track {
    display: flex;
  }

  .slick-slide {
    width: auto;
  }

  .slick-slide img {
    margin-left: 60px;
  }

  .slick-prev {
    display: none !important;
  }

  .slick-next {
    display: none !important;
  }
`;

const StyledAccordion = styled(Accordion)`
  .accordion__button {
    background-color: white !important;
    width: auto !important;
    :before {
      margin: 15px 12px 0 0;
      height: 16px;
      width: 16px;
      transform: rotate(45deg);
    }
  }
  .accordion__button[aria-expanded="true"]::before,
  .accordion__button[aria-selected="true"]::before {
    transform: rotate(225deg);
  }
`;
