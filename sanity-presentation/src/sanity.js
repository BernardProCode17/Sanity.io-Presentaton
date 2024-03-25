import {createClient} from '@sanity/client'

// Sanity Client 
const client = createClient({
    projectId: 'm21gddgh', 
    dataset: 'production',
    useCdn: false,
})

export default client;