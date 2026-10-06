const BaseUrl = () => {
    // const baseurl = "http://192.168.0.112";
    const baseurl = "https://madasky.trivexait.com";
    // const mainurl = "http://localhost:3000/";
    const mainurl = "https://madasky.com"

    const imgurl = `${baseurl}/public/uploads/webimage/`;

    return { baseurl, imgurl, mainurl };
}
export default BaseUrl;
