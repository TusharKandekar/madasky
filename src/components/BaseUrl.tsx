const BaseUrl = () => {
    const baseurl = "http://madasky-admin.test";
    const mainurl = "http://localhost:3000";

    const imgurl = `${baseurl}/public/uploads/webimage/`;

    return {
        baseurl,
        imgurl,
        mainurl
    };
};

export default BaseUrl;