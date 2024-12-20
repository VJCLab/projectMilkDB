export default `<div id="carouselExampleCaptions" class="carousel slide">
  <div class="carousel-indicators">
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="0"
      class="active"
      aria-current="true"
      aria-label="Slide 1"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="1"
      aria-label="Slide 2"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="2"
      aria-label="Slide 3"
    ></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img
        src="./imgs/16.png"
        class="d-block m-auto"
        loading="lazy"
        alt="MILK DX"
      />
      <div class="carousel-caption flex-column text-body">
        <span>Version : DX</span>
      </div>
      <div class="carousel-caption uuidDisp text-secondary">
        <span>UUID : 000016</span>
      </div>
    </div>
    <div class="carousel-item">
      <img
        src="./imgs/20.png"
        class="d-block m-auto"
        loading="lazy"
        alt="MILK DX UNiVERSE"
      />
      <div class="carousel-caption flex-column text-body">
        <span>Version : DX UNiVERSE</span>
      </div>
      <div class="carousel-caption uuidDisp text-secondary">
        <span>UUID : 000020</span>
      </div>
    </div>
    <div class="carousel-item">
      <img
        src="./imgs/21.png"
        class="d-block m-auto"
        loading="lazy"
        alt="MILK FiNALE"
      />
      <div class="carousel-caption flex-column text-body">
        <span>Version : FiNALE</span>
      </div>
      <div class="carousel-caption uuidDisp text-secondary">
        <span>UUID : 000021</span>
      </div>
    </div>
  </div>
  <button
    class="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleCaptions"
    data-bs-slide="prev"
  >
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button
    class="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleCaptions"
    data-bs-slide="next"
  >
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>`;
