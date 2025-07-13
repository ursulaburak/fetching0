const baseURL = "https://api.sampleapis.com/coffee"

export const getHotCoffees = async () => {
    const res= await fetch(`${baseURL}/hot`);
    const json = await res.json();
    return json;
};
export const getIcedCoffees = async () => {
    const res = await fetch(`${baseURL}/iced`);
    const json = await res.json();
    return json;
};