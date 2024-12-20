export default `<div id="omakaseVods" class="carousel slide">
    <div class="carousel-indicators">
        <button
        type="button"
        data-bs-target="#omakaseVods"
        data-bs-slide-to="0"
        class="active"
        aria-current="true"
        aria-label="Slide 1"
        ></button>
        <button
        type="button"
        data-bs-target="#omakaseVods"
        data-bs-slide-to="1"
        aria-label="Slide 2"
        ></button>
        <button
        type="button"
        data-bs-target="#omakaseVods"
        data-bs-slide-to="2"
        aria-label="Slide 3"
        ></button>
    </div>
    <div class="carousel-inner">
        <div class="carousel-item active">
            <iframe
                src="https://www.youtube.com/embed/5dyoxEvm-04"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
            ></iframe>
            <div class="carousel-caption flex-column text-body">
                <span>밀크가 부른 노래</span>
            </div>
        </div>
        <div class="carousel-item">
            <iframe
                src="https://www.youtube.com/embed/0majDKJPay4"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
            ></iframe>
            <div class="carousel-caption flex-column text-body">
                <span>동일 성우, 동일한 목소리 1 (벽람항로 USS San Diego)</span>
            </div>
        </div>
        <div class="carousel-item">
            <iframe
                src="https://www.youtube.com/embed/xKlEg_omYOU"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
            ></iframe>
            <div class="carousel-caption flex-column text-body">
                <span>동일 성우, 동일한 목소리 2 (벽람항로 USS Hammann)</span>
            </div>
        </div>
    </div>
    <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#omakaseVods"
        data-bs-slide="prev"
    >
        <span
        class="carousel-control-prev-icon"
        aria-hidden="true"
        ></span>
        <span class="visually-hidden">Previous</span>
    </button>
    <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#omakaseVods"
        data-bs-slide="next"
    >
        <span
        class="carousel-control-next-icon"
        aria-hidden="true"
        ></span>
        <span class="visually-hidden">Next</span>
    </button>
</div>`;
