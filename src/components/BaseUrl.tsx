const BaseUrl = () => {
    const baseurl = "https://madasky.trivexait.com";
    const mainurl = "http://localhost:3000";

    const imgurl = `${baseurl}/public/uploads/webimage/`;

    return {
        baseurl,
        imgurl,
        mainurl
    };
};

export default BaseUrl;