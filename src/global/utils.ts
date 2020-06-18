export function tagsToHtmlList( tags: string ): string{
    let html = '';
    if( tags ){
        html = '<ul class="tag-list">'
        const tagsArr = tags.split(",");
        // for( let tag of tagsArr ){
        //     tag = tag.trim();
        //     html += `<li class="tag-${tag}">${tag}</li>`;
        // }
        // html += '</ul>';
        html = tagsArr.reduce( (reduced, tag) => {
            tag = tag.trim();
            tag = `<li class="tag-${tag}">${tag}</li>`;
            return reduced + tag;
        }, '<ul class="tag-list">');
        html += '</ul>';
    }
    return html;
};