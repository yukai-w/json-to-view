/**
 * @desc json to view
 */
if (myJson && myJson instanceof Array) {
  const appendStr = myJson.map(item => `
    <div class="add_tag_title">
      <span>${item.title}</span>
    </div>
    <!-- 网址卡片 -->
    <div class="add_card_all_box">
      <ul class="add_card_box">
        ${item.data.map(itemX => `
          <li class="add_card">
            <p><a target="_blank" href="${itemX.url}">${itemX.miniTitle}</a></p>
            <span>${itemX.desc}</span>
          </li>`).join()}
      </ul>
    </div>`
  ).join();

  $('#container').html(appendStr);
}

/**
 * @desc 主题
 */
$('.theme-btn').on('click', function() {
  const theme = $(this).data('theme');
  document.body.className = `${theme}-theme`;
});