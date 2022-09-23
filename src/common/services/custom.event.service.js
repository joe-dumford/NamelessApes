export default class CustomEventService {

    constructor() {}

    static navigate(route, page, data) {
        const customEvent = new CustomEvent('base--navigate', {
            detail: {
                route,
                page,
                ...data ? data : {}
            }
        });
        window.dispatchEvent(customEvent);
    }

    static addServerError(error) {
        const customEvent = new CustomEvent('base--add-server-error', {
            detail: { error }
        });
        window.dispatchEvent(customEvent);
    }

    static clearServerErrors() {
        const customEvent = new CustomEvent('base--clear-server-error', {
            detail: {}
        });
        window.dispatchEvent(customEvent);
    }
}
