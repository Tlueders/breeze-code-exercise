export const determineCsvType = (data) => {
    const headers = data[0];

    if(headers.includes("first_name") && headers.includes("last_name")) {
        return 'people';
    }

    if(headers.includes("group_name")) {
        return 'groups';
    }
}