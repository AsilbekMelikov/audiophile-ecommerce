function init() {
  const MIN_ITEM_COUNT = 1;
  const MAX_ITEM_COUNT = 10;

  const elNumberControlsDecrementButton = document.querySelectorAll(
    ".number-controls__button--decrement"
  );
  const elNumberControlsIncrementButton = document.querySelectorAll(
    ".number-controls__button--increment"
  );

  elNumberControlsDecrementButton.forEach((elButton) => {
    elButton.addEventListener("click", (e) => changeItemCount(e, "decrement"));
  });

  elNumberControlsIncrementButton.forEach((elButton) => {
    elButton.addEventListener("click", (e) => changeItemCount(e, "increment"));
  });

  function changeItemCount(numberControlsButtonClickEvt, action) {
    const parentNumberControls =
      numberControlsButtonClickEvt.target.closest(".number-controls");
    let currentItemCount = parseInt(parentNumberControls.dataset.itemCount, 10);

    if (action === "decrement") {
      if (currentItemCount === MIN_ITEM_COUNT) {
        return;
      }
      currentItemCount--;
    } else {
      if (currentItemCount === MAX_ITEM_COUNT) {
        return;
      }
      currentItemCount++;
    }

    parentNumberControls.dataset.itemCount = currentItemCount;
    parentNumberControls.querySelector(
      ".number-controls__count-value"
    ).textContent = currentItemCount;
  }
}

document.addEventListener("DOMContentLoaded", init);
