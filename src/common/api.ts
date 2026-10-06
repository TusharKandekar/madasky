// export const dynamic = 'force-dynamic';

import axios from "axios";
import BaseUrl from "@/components/BaseUrl"; // Adjust the import based on your project structure

interface ImageDataResponse {
    data: { alt_text: string }[];
}



export async function decodeSpaces({ str }: { str: string }) {
    return str.replace(/%20/g, ' ');

}

export async function decodeAllCharacters({ id }: { id: string }) {
    return decodeURIComponent(id);
}




// Function to get image alt text
export async function getImageAltText(obj: string[]) {
    try {
        const response = await axios.post(`${BaseUrl().baseurl}/api/getWebImages`, {
            imgNames: obj,
        });

        return response.data;
    } catch (error) {

        throw new Error("Server connection failed");

    }
}

export async function getTestimonials({ pageName }: { pageName: string }) {
    try {
        const response = await axios.post(`${BaseUrl().baseurl}/api/getWebTestimonialsbyPageName`, {
            data: pageName
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching testimonials:", error);
        return null;
    }
}

export async function getEventData({ pageName }: { pageName: string }) {
    try {
        const response = await axios.post(`${BaseUrl().baseurl}/api/getWebEventsbyPageName`, {
            data: pageName
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching event data:", error);
        return null;
    }
}

export async function getAllBlogs({ pageName }: { pageName: string }) {
    try {
        const response = await axios.post(`${BaseUrl().baseurl}/api/getWebDataByTitle`, {
            data: pageName
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching event data:", error);
        return null;
    }
}


export async function fetchMetaDataByPageName({ pageName }: { pageName: string }) {
    try {
        const response = await axios.post(`${BaseUrl().baseurl}/api/getWebMetaDataByPageName`, {
            data: pageName
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching Meta data:", error);
        return null;
    }
}





export const formatDate = (dateString: string) => {
    if (dateString && dateString.trim() !== "") {
        // Create a Date object from the provided date string
        const date = new Date(dateString);

        // Define options for formatting the date
        const options = { day: '2-digit', month: 'long', year: '2-digit' };

        // Format the date to the desired format: "d F y"
        const formattedDate = date.toLocaleDateString('en-US', options as Intl.DateTimeFormatOptions);

        return formattedDate;
    }
    return "";
}

export const truncateText = (text: string, maxLength = 125) => {

    if (text.length > maxLength) {
        return text.slice(0, maxLength) + '...';
    }
    return text;
};

export async function getImageData(images: ImageDataResponse) {
    return images.data.map((image: { alt_text: string }) => image.alt_text);
}


// Function to get blog data
export async function getWebBlogs(obj: string[]) {
    try {
        const response = await axios.post(`${BaseUrl().baseurl}/api/getWebblogs`, {
            data: obj,
        });

        return response.data;
    } catch (error) {
        console.error("Error fetching blog data:", error);
        return null;
    }
}

//Blog by title
export async function getBlogById(arr: string[]) {
    try {
        const response = await axios.post(`${BaseUrl().baseurl}/api/getWebSingleBlogData`, {
            data: arr,
        });
        return response.data.data;
    } catch (error) {
        console.error("Error fetching blog data:", error);
        return null;
    }
}

// Function to get page data
export async function getDataByPageName(obj: string[]) {
    try {
        const response = await axios.post(`${BaseUrl().baseurl}/api/getWebdatabyPageName`, {
            data: obj,
        });

        return response.data;
    } catch (error) {
        console.error("Error fetching page data:", error);
        return null;
    }
}


export async function getTestimonialsByPageName(pageName: string) {
    try {
        const response = await axios.post(`${BaseUrl().baseurl}/api/getWebTestimonialsbyPageName `, {
            data: pageName,
        });

        return response.data;
    } catch (error) {
        console.error("Error fetching testimonial data:", error);
        return null;
    }
}

export async function getEventByPageName(pageName: string) {
    try {
        const response = await axios.post(`${BaseUrl().baseurl}/api/getWebEventsbyPageName `, {
            data: pageName,
        });

        return response.data;
    } catch (error) {
        console.error("Error fetching event data:", error);
        return null;
    }
}

export function filterByWebImage(data: { id: number; webimage: string; alt_text: string; created_date: string; created_time: string; created_at: string; created_by: string; }[], imageName: string) {
    return data.filter(item => item.webimage === imageName);
}