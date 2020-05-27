function tagsToHtmlList(tags) {
    let html = '';
    if (tags) {
        html = '<ul class="tag-list">';
        const tagsArr = tags.split(",");
        for (let tag of tagsArr) {
            tag = tag.trim();
            html += `<li class="tag-${tag}">${tag}</li>`;
        }
        html += '</ul>';
    }
    return html;
}
;

export { tagsToHtmlList as t };
