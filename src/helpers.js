export const determineCsvType = (data) => {
    if(data.length > 0){
        const headers = data[0];
    
        if(headers.includes("first_name") && headers.includes("last_name")) {
            return 'people';
        }
    
        if(headers.includes("group_name")) {
            return 'groups';
        }
    }
}

export const parseCsv = (data, type) => {
    data.shift();
    let newArr = [];

    if(type === 'people'){
        data.forEach((item, index) => {
            data.forEach((item) => {
                const obj = {
                    "id": item[0],
                    "first_name": item[1],
                    "last_name": item[2],
                    "email_address": item[3],
                    "status": item[4],
                    "group_id": item[5]
                }
    
                newArr.push(obj);
            });
        });
    } else if(type === 'groups') {
        data.forEach((item) => {
            const obj = {
                "id": item[0],
                "group_name": item[1]
            }

            newArr.push(obj);
        });
    }else {
        console.log('CSV data not recognized');
    }

    return JSON.stringify(newArr);
}