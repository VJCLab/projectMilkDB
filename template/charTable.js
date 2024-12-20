import imageSlide from "./imageSlide.js";
import omakaseVods from "./omakaseVods.js";

export default `<div class="accordion-item">
  <h2 class="accordion-header">
    <button
      class="accordion-button"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#chrDesc"
      aria-expanded="true"
      aria-controls="chrDesc"
    >
      케릭터 설명
    </button>
  </h2>
  <div
    id="chrDesc"
    class="chrDesc accordion-collapse collapse show"
    data-bs-parent="#accordionExample"
  >
    <div class="accordion-body p-2">
      <div class="table-responsive database">
        <table class="table table-bordered text-center m-0">
          <thead>
            <tr>
              <th class="tableBg" scope="col" colspan="2">
                <span>밀크</span>
                <br />
                <span>MILK</span>
              </th>
            </tr>
          </thead>
          <tbody class="table-group-divider">
            <tr class="chrImgDisp">
              <td colspan="2">${imageSlide}</td>
            </tr>
            <tr>
              <td class="tableBg">
                <strong>언어별 표기</strong>
              </td>
              <td style="text-align: left">
                <div class="row w-100 g-0">
                  <div>
                    <span class="flags ko" title="대한민국 국기"></span>
                    <span>밀크</span>
                  </div>
                  <div>
                    <span class="flags ja" title="일본 국기"></span>
                    <span>みるく</span>
                  </div>
                  <div>
                    <span class="flags eng" title="미국 국기">
                      ENG
                    </span>
                    <span>Milk</span>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td class="tableBg">
                <strong>성우</strong>
              </td>
              <td style="text-align: left; padding: 0 0.5rem">
                <div class="row w-100 g-0">
                  <div>
                    <span class="flags ja" title="일본 국기"></span>
                    <a
                      class="cvName"
                      href="https://namu.wiki/w/%EC%9D%B4%ED%86%A0%20%EC%95%84%EC%8A%A4%EC%B9%B4"
                      title="이토 아스카"
                      target="_blank"
                    >
                      이토 아스카 (
                      <ruby>
                        <rb>伊</rb>
                        <rp>(</rp>
                        <rt>い</rt>
                        <rp>)</rp>
                        <rb>藤</rb>
                        <rp>(</rp>
                        <rt>とう</rt>
                        <rp>)</rp>
                        <rb>あすか</rb>
                      </ruby>
                      )
                    </a>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td class="tableBg">
                <strong>좋아하는것</strong>
              </td>
              <td>우유, 생선</td>
            </tr>
            <tr>
              <td class="tableBg">
                <strong>이미지 컬러</strong>
              </td>
              <td style="text-align: center">
                <div>
                  <span style="color: #e6faf3; font-size: 1.5em">■</span>
                  <span>#e6faf3</span>
                  <span>밝은 시안(ライトシアン, Light Cyan)</span>
                </div>
              </td>
            </tr>
            <tr>
              <td colspan="2" class="px-0 pt-0 pd-1">
                <div class="w-100 tableBg p-2">인용글</div>
                <figure class="text-center mb-0 mt-3">
                  <blockquote class="blockquote">
                    <p>二人が揃ったら、怖くなんかないにゃ！</p>
                    <p class="GoyangDeogyang">
                      둘이서 모이면, 무서울건 전혀없다냥!
                    </p>
                  </blockquote>
                  <figcaption class="blockquote-footer mb-0">
                    <a target="_blank" href="https://youtu.be/5dyoxEvm-04">
                      <i class="bi bi-link"></i>
                    </a>
                    とびだせ! TO THE COSMIC!! (DX UNiVERSE)
                  </figcaption>
                </figure>
              </td>
            </tr>
            <tr>
              <td class="tableBg">
                <strong>BIO</strong>
              </td>
              <td>
                <table class="table table-bordered text-center m-0">
                  <tr>
                    <th class="tableBg">
                      <strong>생일</strong>
                    </th>
                    <th class="tableBg">
                      <strong>키</strong>
                    </th>
                    <th class="tableBg">
                      <strong>MBTI</strong>
                    </th>
                  </tr>
                  <tr>
                    <td>6월 25일</td>
                    <td>157cm</td>
                    <td>
                      <a
                        href="https://www.personality-database.com/profile/455920"
                        target="_blank"
                        title="성격유형 DB (영문)"
                      >
                        <i class="bi bi-link"></i>
                      </a>
                      ISFP
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td colspan="2">${omakaseVods}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>`;
