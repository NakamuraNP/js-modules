export default function outsideClick(element, events, callback) {
    const html = document.documentElement;
    const outside = 'data-outside';

    if(!element.hasAttribute(outside)) {
        events.forEach(userEvent => {
            html.addEventListener('click', handleOutsideClick)
        })

        element.setAttribute(outside, '');
    }

    function handleOutsideClick(event) {
        if(!element.contains(event.target)) {
            events.forEach(userEvent => {
                html.removeEventListener('click', handleOutsideClick);
            })

            element.removeAttribute(outside);
            callback();
        }
    }
}