import charTable from "./charTable.js";

const projectInfo = `<div class="accordion-item">
    <h2 class="accordion-header">
    <button
        class="accordion-button"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#readme"
        aria-expanded="true"
        aria-controls="readme"
    >
        프로젝트 목적
    </button>
    </h2>
    <div
    id="readme"
    class="readme accordion-collapse collapse show"
    data-bs-parent="#accordionExample"
    >
    <div class="accordion-body p-2">
        <p>
        프로젝트 밀크 DB (이하, 프로젝트)는
        <a href="https://sega.jp/arcade/" target="_blank">
            <i class="bi bi-link"></i
        ></a>
        ©SEGA의 아케이드 게임인
        <a href="https://maimai.sega.jp/" target="_blank"
            ><i class="bi bi-link"></i></a
        >「maimai」의 유저플레이 데이터(영상 등등)을 수집, 활용하여
        <br />
        캐릭터의 음성데이터 (이하, ASSET)을 재구성해서 유저가 해당 게임을
        플레이하며 들어보지 못하는 음성을 듣게 하는 경험을 제공하기 위해
        시작되었습니다.
        </p>
        <figure class="text-center mb-0">
        <blockquote class="blockquote">
            <p>왜 다른 캐릭터와 달리 밀크만 미리듣기가 없을까?</p>
        </blockquote>
        <figcaption class="blockquote-footer mb-0">
            어느 한 maimai 유저
        </figcaption>
        </figure>
    </div>
    </div>
</div>`;

export const INFOTEMP = `<section class="accordion" id="accordionExample">
    ${projectInfo}
    ${charTable}
</section>`;

export function mainCategoryTemplate(idSuffix) {
  return `<div class="mb-3 flex-fill">
    <label for="categorySelect${idSuffix}" class="form-label">대분류 선택</label>
    <select
      class="form-select"
      id="categorySelect${idSuffix}"
      aria-label="대분류 선택"
      translate="no"
      disabled
    >
      <option value="" selected disabled>대분류를 선택하세요</option>
    </select>
    ${subcategoryTemplate(idSuffix)}
  </div>`;
}

function subcategoryTemplate(idSuffix) {
  return `
  <div class="mb-3">
    <div class="accordion" id="subcategorySelect${idSuffix}">
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button
            class="accordion-button d-flex gap-2 collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#subcategoryBtn${idSuffix}"
            aria-expanded="false"
            aria-controls="subcategoryBtn${idSuffix}"
            disabled
          >
            <span>소분류 선택</span>
            <span class="warnMsg text-danger-emphasis">(우선 대분류를 선택해주세요)</span>
          </button>
        </h2>
        <div
          id="subcategoryBtn${idSuffix}"
          class="subcategoryBtn accordion-collapse collapse"
          data-bs-parent="#subcategorySelect${idSuffix}"
        >
          <div
            class="accordion-body p-2"
            id="subcategoryItems${idSuffix}"
            translate="no"
          ></div>
        </div>
      </div>
    </div>
  </div>`;
}
