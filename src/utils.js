const convertDateIntoYear = (year) => new Date(year).getFullYear();

const fetchData = async (url, callback) => {
    let controller, signal;
    if (controller) {
        controller.abort()
    }
    controller = new AbortController();
    signal = controller.signal;

    const response = await fetch(url, {
        signal: signal,
    })
    const data = await response.json();
    controller = null;
    callback(data);
}
export {convertDateIntoYear, fetchData};
