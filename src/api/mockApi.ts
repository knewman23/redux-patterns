// import { parseAxiosResponse, parseResponseErrorMsg, buildUrlQueryFromObject } from './utils'
// import { baseUrl } from './baseUrl'
const axios = require('axios');
axios.defaults.withCredentials = true;

const mockUser = {
    key: 1,
    userId: 1,
    title: "CEO",
    name: "Chris Ronzio",
    createdAt: Date.now(),
    updatedAt: Date.now(),
    authorized: true
}

export function getUser() {
    // const url = baseUrl + 'user'
    // return parseAxiosResponse(axios.get(url));
    return new Promise<{ data: object }>((resolve) =>
    setTimeout(() => resolve({ data: mockUser }), 500)
  );
}

const mockCurriculums = [{
    key: 1,
    id: 1,
    title: "Some Mock Curriculum",
    owner: "Chris Ronzio",
    createdAt: Date.now(),
    updatedAt: Date.now()
}, {
    key: 2,
    id: 2,
    title: "Some Mock Curriculum2",
    owner: "Chris Ronzio",
    createdAt: Date.now(),
    updatedAt: Date.now()
}]

export function getCurriculum(key: any) {
     // const url = baseUrl + 'curriculums'
    // return parseAxiosResponse(axios.get(url));
    return new Promise<{ data: object }>((resolve) =>
      setTimeout(() => resolve({ data: mockCurriculums }), 1000)
    );
}

export function searchCurriculums(params: any) {
    // const query = buildUrlQueryFromObject(params);
    // const url = baseUrl + 'curriculums?' + query;
    // return parseAxiosResponse(axios.get(url));
    return new Promise<{ data: object }>((resolve) =>
    setTimeout(() => resolve({ data: mockCurriculums }), 1000)
  );
}