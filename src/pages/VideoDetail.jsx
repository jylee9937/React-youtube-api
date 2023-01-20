import React from 'react';
import { useLocation } from 'react-router-dom';
import RelatedVideos from '../components/RelatedVideos';
import {useYoutubeApi} from "../context/YoutubeApiContext";
import {useQuery} from "@tanstack/react-query";

export default function VideoDetail() {
  const {
    state: { video },
  } = useLocation();
  const { title, channelId, channelTitle, description } = video.snippet;
	const { youtube } = useYoutubeApi();
	const { data: url } = useQuery(
		['channel', channelId],
		() => youtube.channelImageURL(channelId),
		{ staleTime: 1000 * 60 * 5 }
	);
  return (
    <section className='flex flex-col lg:flex-row'>
      <article className='basis-4/6'>
        <iframe
          id='player'
          type='text/html'
          width='100%'
          height='640'
          src={`https://www.youtube.com/embed/${video.id}`}
          frameBorder='0'
          title={title}
        />
        <div className='p-8'>
          <h2 className='text-xl font-bold'>{title}</h2>
	        <div className='flex my-4 mb-8 items-center'>
		        {url && <img className='w-10 h-10 rounded-full' src={url} alt={channelTitle} />}
		        <p className='text-lg font-medium ml-2'>{channelTitle}</p>
	        </div>
          <pre className='whitespace-pre-wrap'>{description}</pre>
        </div>
      </article>
      <section className='basis-2/6'>
        <RelatedVideos id={video.id} />
      </section>
    </section>
  );
}
