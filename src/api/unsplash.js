import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com' ,
    headers: { Authorization: 'Client-ID Jkl9SVXEzcg9EpEO1r8a4iJZYqIKXESRDGufb-O55xw' }
});