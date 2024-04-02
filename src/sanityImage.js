import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder({
   projectId: 'm21gddgh',
   dataset: 'production',
});

export default function getImageUrl(image) {
   return builder.image(image).url();
}