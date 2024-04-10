export function getCurrentTime() {
    const today = new Date();

    const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    const dayOfWeek = days[today.getDay()];
    const month = months[today.getMonth()];
    const date = today.getDate();
    const year = today.getFullYear();

    return `${dayOfWeek}, ${month} ${date}, ${year}`;
}