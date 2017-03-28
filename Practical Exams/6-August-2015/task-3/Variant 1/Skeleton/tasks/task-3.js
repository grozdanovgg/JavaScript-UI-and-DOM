function solve() {
    return function(selector) {
        var template = [
            '<div class="event-calendar">',
            '<h2 class="header">Appointments for',
            '    <span class="month">{{month}}</span>',
            '    <span class="year">{{year}}</span>',
            '</h2>',
            '{{#days}}',
            '<div class="col-date">',
            '    <div class="date">{{day}}</div>',
            '    <div class="events">',
            '        {{#events}}',
            '        <div class="event {{importance}}">',
            '            {{#if title}}',
            '            <div class="title">{{title}}</div>',
            '            {{else}}',
            '            <div class="title">Free slot</div>',
            '            {{/if}} {{#if time}}',
            '            <div class="time">at: {{time}}</div>',
            '            {{/if}}',
            '        </div>',
            '        {{/events}}',
            '    </div>',
            '</div>',
            '{{/days}}'
        ].join('');

        if (template.length) {
            document.getElementById(selector).innerHTML = template;
        }
    };
}