const model = [
    {type: 'title', value: 'Hello World from JS!'},
    {type: 'text', value: 'Here we go with some text'},
    {type: 'columns', value: ['111111', '222222', '333333']}
];
const $site = document.querySelector('#site');
model.forEach(block => {
    let html = '';
    if (block.type === 'title') {
        html = title(block)
    } else if (block.type === 'text') {
        html = text(block)
    } else if (block.type === 'columns') {
        html = columns(block)
    }
    $site.insertAdjacentHTML('beforeend', html)
})

function title(block) {
    return `
            <div class="row">
                <div class="col-sm">
                    <h1>${block.value}</h1>
                </div>
            </div>
        `
}
function text(block) {
    return `
            <div class="row">
                <div class="col-sm">
                  <p>${block.value}</p>
                </div>
            </div>
        `
}
function columns(block) {
    return `
            <div class="row">
                <div class="col-sm">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, rem.</p>
                </div>
                <div class="col-sm">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, rem.</p>
                </div>
                <div class="col-sm">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, rem.</p>
                </div>
            </div>
        `
}