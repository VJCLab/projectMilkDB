
export default function subcategoryUpdate(VOMAP, selecterID, category, itemClickCallback) {
  const selectelm = $(`#subcategorySelect${selecterID}`);
  const btn = selectelm.find("button");
  const $items = selectelm.find(`#subcategoryItems${selecterID}`);
  selectelm.find(".warnMsg").addClass("d-none");
  btn[0].disabled = false;
  $items.html("");
  if (category && VOMAP[category]) {
    const subcategories = Object.keys(VOMAP[category]);
    subcategories.forEach((key) => {
      const getData = (obj, key, no) => {
        let n = key == "gameResult" ? no + 1 : no;
        return obj[n] ?? "";
      };
      const item = $(
        `<div class="subcategory-item btn btn-outline-secondary d-flex flex-column" id="${key}">
              <span>${getData(VOMAP[category][key], category, 0)}</span>
              <span class="GoyangDeogyang">${getData(
          VOMAP[category][key],
          category,
          1
        )}</span>
          </div>`
      );

      itemClickCallback && item.on("click", () => itemClickCallback(key));

      $items.append(item);
    });
  }
}
