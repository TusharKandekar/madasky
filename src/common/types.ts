

export type Blog = {
    blog_img_alt: string;
    blog_date: string;
    blog_title: string;
    blog_image: string;
    blog_desc: string;
    comments?: string;
    blog_id: number;
    id: number;
};

export type Video = {

    video_id: number;
    video_title: string;
    video_link: string;
    video_desc: string;
};

export type Gallery = {

    gallery_id: number;
    gallery_title: string;
    gallery_image: string;
    gallery_img_alt: string;
    gallery_desc: string;
};

export type Testimonial = {

    testimonial_id: number;
    testimonial_by?: string;
    testimonial_position?: string;
    testimonial_content?: string;
    testimonial_stars?: string;
    profile_image?: string;
};

export type Event = {

    event_id: number;
    event_title?: string;
    event_time?: string;
    event_date?: string;
    event_register_link?: string;
    event_desc?: string;
    event_location?: string;
    event_content?: string;
    event_image?: string;
    event_img_alt?: string;
    event_pop_up?: number;
    comments?: number;
};

export interface PageMetaData {
    id: number;
    meta_title: string;
    meta_keyword: string;
    author: string;
    meta_desc: string;
    h1tag: string;
    selected_page: string;
    created_date: string;
    created_time: string;
    created_at: string;
    created_by: string;
    webpage: string;
  }
  
  export interface PageMetaDataResponse {
    success: boolean;
    message: string;
    data: PageMetaData;
  }

